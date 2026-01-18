import { useEffect, useState } from "react";
import { format, parseISO, isToday, isFuture } from "date-fns";
import { de } from "date-fns/locale";
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

  useEffect(() => {
    fetch("/calendar.json")
      .then((res) => res.json())
      .then((data: CalendarData) => {
        const now = new Date();
        const filteredEvents = data.events
          .filter((event) => {
            // Nur Events mit Titel anzeigen
            if (!event.title || event.title.trim() === "") return false;
            // Nur heute und zukünftige Events
            const eventDate = parseISO(event.start);
            return isToday(eventDate) || isFuture(eventDate);
          })
          .sort((a, b) => parseISO(a.start).getTime() - parseISO(b.start).getTime());
        
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
    const date = parseISO(dateString);
    return format(date, "EEEE, d. MMMM yyyy", { locale: de });
  };

  const formatTime = (dateString: string) => {
    const date = parseISO(dateString);
    return format(date, "HH:mm", { locale: de }) + " Uhr";
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
