import { useEffect, useState } from "react";
import {
  CalendarEvent,
  cleanTitle,
  formatDate,
  formatTime,
  loadUpcomingEvents,
  locationLines,
} from "@/utils/calendar";

const NextEvent = () => {
  const [event, setEvent] = useState<CalendarEvent | null>(null);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    loadUpcomingEvents()
      .then((events) => setEvent(events[0] ?? null))
      .catch((err) => {
        console.error("Fehler beim Laden der Termine:", err);
        setFailed(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <aside aria-labelledby="next-event-heading" className="bg-surface p-6">
      <h2 id="next-event-heading" className="text-2xl font-serif font-semibold mb-3">
        Nächster Termin
      </h2>
      {loading ? (
        <p className="text-ink-soft min-h-[4.5rem]">Termine werden geladen …</p>
      ) : event ? (
        <div className="min-h-[4.5rem]">
          <p className="text-xl font-serif font-semibold">{cleanTitle(event.title)}</p>
          <p className="mt-1">
            {formatDate(event.start)}
            {!event.allDay && (
              <>
                , <span className="whitespace-nowrap">{formatTime(event.start)}</span>
              </>
            )}
          </p>
          {event.location.trim() !== "" && <p>{locationLines(event.location)[0]}</p>}
        </div>
      ) : failed ? (
        <p className="min-h-[4.5rem]">
          Die Termine konnten gerade nicht geladen werden. Bitte versuchen Sie es später noch einmal.
        </p>
      ) : (
        <p className="min-h-[4.5rem]">
          Zurzeit sind keine Konzerte angekündigt. Stöbern Sie so lange in den Aufnahmen und Fotografien.
        </p>
      )}
      <a
        href="/termine"
        className="mt-3 inline-flex items-center min-h-12 underline underline-offset-8 decoration-2 decoration-oxblood font-semibold hover:text-oxblood"
      >
        Alle Termine
      </a>
    </aside>
  );
};

export default NextEvent;
