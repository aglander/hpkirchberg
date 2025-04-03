import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Links = () => {
  const links = [
    {
      title: "Neuköllner Oper",
      description:
        "Das 'Vierte Opernhaus Berlins', dem innovativsten Musiktheater von Barock bis Musical, dessen musikalischer Chef ich 1992-2022 war...",
      url: "https://www.neukoellneroper.de",
    },
    {
      title: "Der Mensch ist gut",
      description:
        "Der Mensch ist wirklich gut! Mein Neffe Johannes Kirchberg...",
      url: "https://www.dermenschistgut.de",
    },
    {
      title: "Frithjof Martin Grabner",
      description:
        "'Der Kontrabass-Ein Soloinstrument?' Die Frage können nur Frithjof Martin Grabner und ich unterhaltsam beantworten...",
      url: "https://www.grabner.de",
    },
    {
      title: "Ballettschule Balance",
      description: "Bester Ballett-Unterricht für jede Altersklasse...",
      url: "https://www.ballettschule-balance.de",
    },
    {
      title: "Thomanerchor Leipzig",
      description: "Das ist von mir miterlebt – damals wie heute...",
      url: "https://www.leipzig-online.de/thomanerchor",
    },
  ];

  return (
    <div className="min-h-screen bg-[#EDE9CE]">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-serif text-gray-900 mb-8">Links</h1>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-[1.02]"
              >
                <Card className="h-full bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-2">{link.title}</h2>
                    <p className="text-gray-600 mb-4">{link.description}</p>
                    <span className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                      Besuchen <ExternalLink className="ml-2 h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="mt-12 text-sm text-gray-500 space-y-4">
            <p>
              Mit Urteil vom 12.Mai 1998 hat das Landgericht Hamburg
              entschieden, dass durch die Anbringung eines Links die Inhalte der
              gelinkten Seite ggf. mit zu verantworten sind. Die kann, so das LG
              nur dadurch verhindert werden, dass eine ausdrückliche
              Distanzierung von diesen Inhalten erfolgt. Ich habe in diesem
              Internetangebot Links zu anderen Seiten im Internet gelegt.
            </p>
            <p>
              Für alle diese Links gilt: Ich habe keinerlei Einfluss auf die
              Gestaltung und die Inhalte der gelinkten Seiten. Ich distanziere
              mich ausdrücklich von den Inhalten aller gelinkter Seiten.
            </p>
            <p>Hans-Peter Kirchberg</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Links;
