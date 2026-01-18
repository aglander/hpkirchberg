import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calendarUrl = process.env.CALENDAR_URL;
if (!calendarUrl) {
  console.error("Missing CALENDAR_URL environment variable.");
  process.exit(1);
}

const normalizedUrl = calendarUrl.replace(/^webcal:\/\//i, "https://");
const outputPath = process.env.CALENDAR_OUTPUT
  ? path.resolve(process.env.CALENDAR_OUTPUT)
  : path.resolve(__dirname, "../public/calendar.json");

const today = new Date();
today.setHours(0, 0, 0, 0);
const rangeEnd = new Date(today);
rangeEnd.setFullYear(rangeEnd.getFullYear() + 1);

const response = await fetch(normalizedUrl);
if (!response.ok) {
  throw new Error(`Failed to fetch calendar: ${response.status} ${response.statusText}`);
}

const icsText = await response.text();
const events = parseICS(icsText);

const normalizedEvents = expandAndFilterEvents(events, today, rangeEnd, 100);

await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(
  outputPath,
  JSON.stringify(
    {
      updatedAt: new Date().toISOString(),
      count: normalizedEvents.length,
      events: normalizedEvents,
    },
    null,
    2,
  ),
);

console.log(`Wrote ${normalizedEvents.length} events to ${outputPath}`);

function parseICS(text) {
  const unfolded = text.replace(/\r?\n[ \t]/g, "");
  const lines = unfolded.split(/\r?\n/);
  const results = [];
  let current = null;

  for (const line of lines) {
    if (line === "BEGIN:VEVENT") {
      current = { exdates: [] };
      continue;
    }

    if (line === "END:VEVENT") {
      if (current) {
        results.push(current);
      }
      current = null;
      continue;
    }

    if (!current || !line) {
      continue;
    }

    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) {
      continue;
    }

    const namePart = line.slice(0, separatorIndex);
    const value = line.slice(separatorIndex + 1);
    const [name, ...paramParts] = namePart.split(";");
    const params = Object.fromEntries(
      paramParts
        .map((part) => part.split("="))
        .filter(([key, val]) => key && val)
        .map(([key, val]) => [key.toUpperCase(), val]),
    );

    switch (name.toUpperCase()) {
      case "DTSTART":
        current.start = parseICalDate(value, params);
        current.startIsDate = params.VALUE === "DATE";
        break;
      case "DTEND":
        current.end = parseICalDate(value, params);
        current.endIsDate = params.VALUE === "DATE";
        break;
      case "SUMMARY":
        current.summary = value;
        break;
      case "DESCRIPTION":
        current.description = value;
        break;
      case "LOCATION":
        current.location = value;
        break;
      case "UID":
        current.uid = value;
        break;
      case "RRULE":
        current.rrule = parseRRule(value);
        break;
      case "EXDATE":
        current.exdates.push(...parseExdates(value, params));
        break;
      default:
        break;
    }
  }

  return results;
}

function parseICalDate(value, params) {
  const isDateOnly = params.VALUE === "DATE";

  if (isDateOnly) {
    const year = Number(value.slice(0, 4));
    const month = Number(value.slice(4, 6)) - 1;
    const day = Number(value.slice(6, 8));
    return new Date(year, month, day);
  }

  const isUtc = value.endsWith("Z");
  const trimmed = value.replace(/Z$/, "");
  const [datePart, timePart = ""] = trimmed.split("T");
  const year = Number(datePart.slice(0, 4));
  const month = Number(datePart.slice(4, 6)) - 1;
  const day = Number(datePart.slice(6, 8));
  const hour = Number(timePart.slice(0, 2) || 0);
  const minute = Number(timePart.slice(2, 4) || 0);
  const second = Number(timePart.slice(4, 6) || 0);

  if (isUtc) {
    return new Date(Date.UTC(year, month, day, hour, minute, second));
  }

  return new Date(year, month, day, hour, minute, second);
}

function parseExdates(value, params) {
  return value
    .split(",")
    .map((dateValue) => parseICalDate(dateValue, params))
    .filter(Boolean);
}

function parseRRule(rule) {
  const parts = rule.split(";");
  const data = {};

  for (const part of parts) {
    const [key, val] = part.split("=");
    if (!key || !val) continue;
    data[key.toUpperCase()] = val;
  }

  if (data.BYDAY) {
    data.BYDAY = data.BYDAY.split(",");
  }

  if (data.BYMONTHDAY) {
    data.BYMONTHDAY = data.BYMONTHDAY.split(",").map(Number);
  }

  if (data.COUNT) {
    data.COUNT = Number(data.COUNT);
  }

  return data;
}

function expandAndFilterEvents(events, startRange, endRange, limit) {
  const results = [];

  for (const event of events) {
    if (!event.start) {
      continue;
    }

    const allDay = Boolean(event.startIsDate || event.endIsDate);
    const baseEnd = event.end ?? event.start;
    const durationMs = baseEnd - event.start;
    const exdateKeys = new Set(
      (event.exdates ?? []).map((date) => dateKey(date, allDay)),
    );

    if (!event.rrule) {
      if (event.start >= startRange) {
        results.push(
          toOutputEvent(event, event.start, new Date(event.start.getTime() + durationMs), allDay),
        );
      }
      continue;
    }

    const occurrences = generateOccurrences(event.start, event.rrule, startRange, endRange, allDay);
    let count = 0;

    for (const occurrence of occurrences) {
      if (exdateKeys.has(dateKey(occurrence, allDay))) {
        continue;
      }

      results.push(
        toOutputEvent(event, occurrence, new Date(occurrence.getTime() + durationMs), allDay),
      );
      count += 1;

      if (event.rrule.COUNT && count >= event.rrule.COUNT) {
        break;
      }

      if (results.length >= limit) {
        break;
      }
    }

    if (results.length >= limit) {
      break;
    }
  }

  results.sort((a, b) => new Date(a.start) - new Date(b.start));

  return results
    .filter((event) => new Date(event.start) >= startRange)
    .slice(0, limit);
}

function generateOccurrences(startDate, rrule, startRange, endRange, allDay) {
  const occurrences = [];
  const interval = Number(rrule.INTERVAL || 1);
  const freq = (rrule.FREQ || "").toUpperCase();
  const until = rrule.UNTIL ? parseICalDate(rrule.UNTIL, {}) : null;

  const startCursor = new Date(Math.max(startDate.getTime(), startRange.getTime()));
  startCursor.setHours(startDate.getHours(), startDate.getMinutes(), startDate.getSeconds(), startDate.getMilliseconds());

  let cursor = new Date(startCursor);
  while (cursor <= endRange) {
    if (until && cursor > until) {
      break;
    }

    if (matchesRule(startDate, cursor, rrule, freq, interval)) {
      occurrences.push(new Date(cursor));
    }

    cursor = addDays(cursor, 1);
  }

  if (allDay) {
    return occurrences.map((date) => {
      const day = new Date(date);
      day.setHours(0, 0, 0, 0);
      return day;
    });
  }

  return occurrences;
}

function matchesRule(startDate, currentDate, rrule, freq, interval) {
  if (freq === "DAILY") {
    const diff = differenceInDays(startDate, currentDate);
    return diff % interval === 0;
  }

  if (freq === "WEEKLY") {
    const weeks = Math.floor(differenceInDays(startDate, currentDate) / 7);
    if (weeks % interval !== 0) {
      return false;
    }

    if (!rrule.BYDAY) {
      return currentDate.getDay() === startDate.getDay();
    }

    const weekday = toRRuleWeekday(currentDate.getDay());
    return rrule.BYDAY.includes(weekday);
  }

  if (freq === "MONTHLY") {
    const months = differenceInMonths(startDate, currentDate);
    if (months % interval !== 0) {
      return false;
    }

    if (rrule.BYMONTHDAY) {
      return rrule.BYMONTHDAY.includes(currentDate.getDate());
    }

    return currentDate.getDate() === startDate.getDate();
  }

  if (freq === "YEARLY") {
    const years = currentDate.getFullYear() - startDate.getFullYear();
    if (years % interval !== 0) {
      return false;
    }

    return (
      currentDate.getMonth() === startDate.getMonth() &&
      currentDate.getDate() === startDate.getDate()
    );
  }

  return false;
}

function differenceInDays(startDate, endDate) {
  const start = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const end = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
  return Math.floor((end - start) / (24 * 60 * 60 * 1000));
}

function differenceInMonths(startDate, endDate) {
  return (
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth())
  );
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function toRRuleWeekday(dayIndex) {
  const map = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return map[dayIndex] ?? "";
}

function dateKey(date, allDay) {
  if (allDay) {
    return date.toISOString().slice(0, 10);
  }
  return date.toISOString();
}

function toOutputEvent(event, start, end, allDay) {
  return {
    uid: event.uid ?? "",
    title: event.summary ?? "",
    description: event.description ?? "",
    location: event.location ?? "",
    start: start.toISOString(),
    end: end.toISOString(),
    allDay,
  };
}
