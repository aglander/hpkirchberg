import { useEffect, useState } from "react";
import { parseISO } from "date-fns";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin } from "lucide-react";

interface CalendarEvent {
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

const Termine = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
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

  const parseCalendarDate = (dateString: string) => {
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

  useEffect(() => {
    fetch("/calendar.json")
      .then((res) => res.json())
      .then((data: CalendarData) => {
        const now = new Date();
        const nowTimestamp = getBerlinTimestamp(now);
        const nowDay = getBerlinDayKey(now);
        const filteredEvents = data.events
          .filter((event) => {
            // Nur Events mit Titel anzeigen
            if (!event.title || event.title.trim() === "") return false;
            // Nur heute und zukünftige Events
            const eventDate = parseCalendarDate(event.start);
            const eventTimestamp = getBerlinTimestamp(eventDate);
            const eventDay = getBerlinDayKey(eventDate);
            return eventDay === nowDay || eventTimestamp >= nowTimestamp;
          })
          .sort(
            (a, b) =>
              getBerlinTimestamp(parseCalendarDate(a.start)) -
              getBerlinTimestamp(parseCalendarDate(b.start)),
          );
        
        setEvents(filteredEvents);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fehler beim Laden der Termine:", err);
        setLoading(false);
      });
  }, []);

  // Bereinigt escaped Kommas im Titel
  const cleanTitle = (title: string) => {
    return title.replace(/\\,/g, ",").trim();
  };

  const formatDate = (dateString: string) => {
    const date = parseCalendarDate(dateString);
    const formatter = new Intl.DateTimeFormat("de-DE", {
      timeZone,
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const parts = formatter.formatToParts(date);
    const lookup = Object.fromEntries(
      parts
        .filter((part) => part.type !== "literal")
        .map((part) => [part.type, part.value]),
    );
    return `${lookup.weekday}, ${lookup.day}. ${lookup.month} ${lookup.year}`;
  };

  const formatTime = (dateString: string) => {
    const date = parseCalendarDate(dateString);
    return (
      new Intl.DateTimeFormat("de-DE", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23",
      }).format(date) + " Uhr"
    );
  };

  return (
    <div className="min-h-screen bg-[#EDE9CE]">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/80 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-serif mb-8">Termine</h1>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
              <p className="mt-4 text-gray-600">Termine werden geladen...</p>
            </div>
          ) : events.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Derzeit sind keine kommenden Termine geplant.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {events.map((event) => (
                <div
                  key={event.uid}
                  className="border-l-4 border-amber-600 bg-white rounded-r-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-serif text-gray-900 mb-2">
                        {cleanTitle(event.title)}
                      </h3>
                      
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(event.start)}</span>
                        </div>
                        
                        {!event.allDay && (
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{formatTime(event.start)}</span>
                          </div>
                        )}
                        
                        {event.location && event.location.trim() !== "" && (
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                        )}
                      </div>
                      
                      {event.description && event.description.trim() !== "" && (
                        <p className="mt-3 text-gray-700">{event.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Termine;
