import { parseISO } from "date-fns";

export interface CalendarEvent {
  uid: string;
  title: string;
  description: string;
  location: string;
  start: string;
  end: string;
  allDay: boolean;
}

interface CalendarData {
  updatedAt: string;
  count: number;
  events: CalendarEvent[];
}

const timeZone = "Europe/Berlin";

const getBerlinTimestamp = (date: Date) => {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const lookup = Object.fromEntries(
    parts
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, part.value]),
  );

  return Date.UTC(
    Number(lookup.year),
    Number(lookup.month) - 1,
    Number(lookup.day),
    Number(lookup.hour),
    Number(lookup.minute),
    Number(lookup.second),
  );
};

export const parseCalendarDate = (dateString: string) => {
  const parsed = parseISO(dateString);
  const wallClockTimestamp = Date.UTC(
    parsed.getUTCFullYear(),
    parsed.getUTCMonth(),
    parsed.getUTCDate(),
    parsed.getUTCHours(),
    parsed.getUTCMinutes(),
    parsed.getUTCSeconds(),
    parsed.getUTCMilliseconds(),
  );
  const offset =
    getBerlinTimestamp(new Date(wallClockTimestamp)) - wallClockTimestamp;
  return new Date(wallClockTimestamp - offset);
};

const getBerlinDayKey = (date: Date) => {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const lookup = Object.fromEntries(
    parts
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, part.value]),
  );

  return `${lookup.year}-${lookup.month}-${lookup.day}`;
};

export const loadUpcomingEvents = async (): Promise<CalendarEvent[]> => {
  const res = await fetch("/calendar.json");
  const data: CalendarData = await res.json();
  const now = new Date();
  const nowTimestamp = getBerlinTimestamp(now);
  const nowDay = getBerlinDayKey(now);
  return data.events
    .filter((event) => {
      // Nur Events mit Titel anzeigen
      if (!event.title || event.title.trim() === "") return false;
      // Nur heute und zukünftige Events
      const eventDate = parseCalendarDate(event.start);
      return (
        getBerlinDayKey(eventDate) === nowDay ||
        getBerlinTimestamp(eventDate) >= nowTimestamp
      );
    })
    .sort(
      (a, b) =>
        getBerlinTimestamp(parseCalendarDate(a.start)) -
        getBerlinTimestamp(parseCalendarDate(b.start)),
    );
};

// Bereinigt escaped Kommas im Titel
export const cleanTitle = (title: string) => title.replace(/\s*\\,/g, ",").trim();

export const formatDate = (dateString: string) => {
  const date = parseCalendarDate(dateString);
  const parts = new Intl.DateTimeFormat("de-DE", {
    timeZone,
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).formatToParts(date);
  const lookup = Object.fromEntries(
    parts
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, part.value]),
  );
  return `${lookup.weekday}, ${lookup.day}. ${lookup.month} ${lookup.year}`;
};

export const formatTime = (dateString: string) =>
  new Intl.DateTimeFormat("de-DE", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(parseCalendarDate(dateString)) + " Uhr";

// ICS-Orte enthalten maskierte Zeilenumbrüche (\n) und Kommas (\,)
export const locationLines = (location: string) =>
  location
    .split(/\\n|\n/)
    .map((line) => line.replace(/\\,/g, ",").trim())
    .filter(Boolean);

export const cleanLocation = (location: string) =>
  locationLines(location)
    .join(", ")
    .replace(/,\s*Deutschland$/, "");
