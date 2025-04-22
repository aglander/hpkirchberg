
import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ConcertAnnouncement = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <Card className="bg-white/80 rounded-lg shadow-lg p-8 border-none">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <CardHeader className="p-0">
              <div className="flex items-center gap-2 text-xl font-serif mb-4">
                <Calendar className="h-6 w-6" />
                <time dateTime="2025-05-10">10. Mai 2025, 18 Uhr</time>
              </div>
              <h2 className="text-3xl font-serif mb-4">Zwei Musik-Epochen im Vergleich</h2>
              <h3 className="text-xl text-gray-600 mb-2">2x (Sonatine, 1905, M.R.)</h3>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
              <p>
                Im Rahmen des 20. Musikfestes "Schöneiche 2025 singt und musiziert" spielt Hans-Peter Kirchberg 
                am Steinway-Flügel der Ehemaligen Schlosskirche. Dabei moderiert und vergleicht er die 
                Klavier-Sonatinen von Max Reger (1873-1916) und Maurice Ravel (1875-1937), welche im 
                gleichen Jahr 1905 entstanden sind.
              </p>
              <p>
                Mit der Musik Max Regers, der in Leipzig starb, wuchs er auf. Der Thomanerchor sang 
                viel geistliche Musik des Komponisten und an der grossen romantischen Sauer-Orgel der 
                Thomaskirche erklangen regelmässig dessen gigantische Orgelwerke.
              </p>
              <p>
                Ravels 125. Geburtstag am 7. März gab ihm Anlass, sich mit dessen „Sonatine 1905", 
                welche er erstmalig in seiner Schulzeit für ein Sonder-Konzert erarbeitete, erneut zu befassen.
              </p>
              <p>
                Auch die beiden in damals beliebter Pop-Art gemalten Bilder wurden von HPK im 
                Zusammenhang mit Regers 100. Geburtstag 1973 in der 10. Klasse an der Leipziger 
                Thomas-Schule gemalt.
              </p>
            </CardContent>
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative h-[300px]">
              <img 
                src="/lovable-uploads/6c5f3c29-51f9-448f-83fc-26ee25e217d8.png" 
                alt="Maurice Ravel im Pop-Art Stil" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="relative h-[300px]">
              <img 
                src="/lovable-uploads/90343c91-5468-470e-b9c1-ac64d4384f90.png" 
                alt="Max Reger im Pop-Art Stil" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default ConcertAnnouncement;
