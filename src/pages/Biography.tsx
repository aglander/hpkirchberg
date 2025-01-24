import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Music, Award, Calendar } from "lucide-react";

const Biography = () => {
  const timelineEvents = [
    { text: "in Leipzig geboren" },
    { text: "verheiratet, 2 Kinder" },
    { text: "erster Klavierunterricht mit 5 Jahren" },
    { text: "erstes öffentliches Konzert mit 6 Jahren" },
    { text: "THOMASSCHULE Leipzig" },
    { text: "Studium an der Hochschule für Musik \"Carl Maria von Weber\" Dresden" },
    { text: "Dirigieren Prof. Rudolf Neuhaus, Prof. Dr. Peter Gölke" },
    { text: "Klavier Prof. Dr. Rudolf Neumann, Korrepetition Prof. Ernst Herrmann" },
    { text: "Dirigier-Debut Staatsoper Dresden (\"Il Campiello\" von Wolf-Ferrari)" },
    { text: "Meisterklasse Igor Markevitch (Musikseminar Weimar)" },
    { text: "Externer Unterricht bei Eugen Jochum und Rudolf Kempe" },
    { text: "Weiterbildung, Unterricht und Seminar bei Kurt Masur" },
    { text: "Solo-Repetitor mit Dirigierverpflichtung (Opernhaus Chemnitz 1980-85)" },
    { text: "1. Kapellmeister (Opernhaus Zwickau 1985-89)" },
    { text: "Internationaler Dirigier-Wettbewerb Budapest 1986" },
    { text: "Dirigier-Kurs bei Leonard Bernstein (Schleswig-Holstein Musik-Festival 1988)" },
    { text: "Chefdirigent des Sinfonischen Studio-Orchesters Leipzig (1989-94)" },
    { text: "Assistent von Leonard Bernstein und Christoph Eschenbach (1989)" },
    { text: "Musikalischer Direktor der Neuköllner Oper (2002)" },
    { text: "30jähriges Bühnenjubiläum (2009)" },
    { text: "1000. Vorstellung an der Neuköllner Oper geleitet (2009)" },
    { text: "2010 - erste musikalische Arbeit bei den Bayreuther Festspielen" }
  ];

  return (
    <div className="min-h-screen bg-[#EDE9CE]">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white/80 rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-serif mb-6 text-gray-900">Biographie</h1>
          
          <div className="space-y-6">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white/50 rounded-lg hover:bg-white/70 transition-colors">
                {index % 4 === 0 && <GraduationCap className="text-gray-600 mt-1" />}
                {index % 4 === 1 && <Music className="text-gray-600 mt-1" />}
                {index % 4 === 2 && <Award className="text-gray-600 mt-1" />}
                {index % 4 === 3 && <Calendar className="text-gray-600 mt-1" />}
                <p className="text-gray-800">{event.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Biography;