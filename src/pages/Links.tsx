import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

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
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main id="inhalt" className="flex-grow">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-20">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-10">Links</h1>

          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full bg-surface p-6 hover:bg-white/70 transition-colors"
                >
                  <h2 className="text-2xl font-serif font-semibold mb-2 group-hover:text-oxblood">{link.title}</h2>
                  <p className="mb-4 flex-grow">{link.description}</p>
                  <span className="inline-flex items-center self-start min-h-11 font-semibold text-oxblood underline underline-offset-4">
                    Besuchen <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-12 text-base text-ink-soft space-y-4 max-w-[68ch]">
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
