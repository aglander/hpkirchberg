import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CalendarEvent,
  cleanLocation,
  cleanTitle,
  formatDate,
  formatTime,
  loadUpcomingEvents,
} from "@/utils/calendar";

const Termine = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUpcomingEvents()
      .then(setEvents)
      .catch((err) => console.error("Fehler beim Laden der Termine:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main id="inhalt" className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-10">Termine</h1>

          {loading ? (
            <p className="text-xl">Termine werden geladen …</p>
          ) : events.length === 0 ? (
            <div className="text-xl space-y-4">
              <p>Derzeit sind keine kommenden Termine geplant.</p>
              <p>
                Stöbern Sie so lange in den{" "}
                <a href="/musik" className="underline underline-offset-4 decoration-2 decoration-oxblood font-semibold">Aufnahmen</a>{" "}
                oder in den{" "}
                <a href="/bilder" className="underline underline-offset-4 decoration-2 decoration-oxblood font-semibold">Fotografien</a>.
              </p>
            </div>
          ) : (
            <ul className="space-y-6">
              {events.map((event) => (
                <li key={event.uid} className="bg-surface p-6 md:p-8 grid gap-x-8 gap-y-2 md:grid-cols-[11rem_1fr]">
                  <p className="font-serif font-semibold text-2xl leading-tight">{formatDate(event.start)}</p>
                  <div>
                    <h2 className="text-2xl font-serif font-semibold leading-tight">{cleanTitle(event.title)}</h2>
                    {!event.allDay && <p className="mt-1">{formatTime(event.start)}</p>}
                    {event.location && event.location.trim() !== "" && (
                      <p>{cleanLocation(event.location)}</p>
                    )}
                    {event.description && event.description.trim() !== "" && (
                      <p className="mt-3">{event.description}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Termine;
