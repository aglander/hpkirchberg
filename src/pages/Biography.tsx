import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Biography = () => {
  return (
    <div className="min-h-screen bg-[#EDE9CE]">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/80 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-serif mb-8">Biographie</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">Frühe Jahre & Familie</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>in Leipzig geboren</li>
                <li>verheiratet, 2 Kinder</li>
                <li>erster Klavierunterricht mit 5 Jahren</li>
                <li>erstes öffentliches Konzert mit 6 Jahren</li>
                <li>Vater war Rechtsanwalt, der oft als Pflichtverteidiger "systemkritische" Künstler verteidigte</li>
                <li>THOMASSCHULE Leipzig (1970-1974)</li>
                <li>Mehrfacher Preisträger des Improvisations-Wettbewerbs (Thüringer Bach-Tage in Weimar)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">Ausbildung</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Studium an der Hochschule für Musik "Carl Maria von Weber" Dresden</li>
                <li>Dirigieren Prof. Rudolf Neuhaus, Prof. Dr. Peter Gülke (Ernst-von-Siemens-Musikpreis 2014)</li>
                <li>Klavier Prof. Dr. Rudolf Neumann, Korrepetition Prof. Ernst Herrmann</li>
                <li>Über 10 Jahre Reiseverbot in der DDR (bis 1988) aufgrund familiärer Herkunft und politischer Einstellung</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">Weiterbildung & Meisterkurse</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Meisterklasse Igor Markevitch (Musikseminar Weimar)</li>
                <li>Externer Unterricht bei Eugen Jochum und Rudolf Kempe</li>
                <li>Weiterbildung, Unterricht und Seminar bei Kurt Masur</li>
                <li>Dirigier-Lehrgänge bei Wolf-Dieter Hauschild, Rolf Reuter und Heinz Rögner</li>
                <li>Assistent bei Leonard Bernstein, Christoph Eschenbach und Mstislaw Rostropowitsch</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">Berufliche Laufbahn</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Solo-Repetitor mit Dirigierverpflichtung (Opernhaus Chemnitz 1980-85)</li>
                <li>1. Kapellmeister (Opernhaus Zwickau 1985-89)</li>
                <li>Internationaler Dirigier-Wettbewerb Budapest 1986</li>
                <li>Dirigier-Kurs bei Leonard Bernstein (Schleswig-Holstein Musik-Festival 1988)</li>
                <li>Chefdirigent des Sinfonischen Studio-Orchesters Leipzig (1989-94)</li>
                <li>Nach der Wende: Engagements an Opernhäusern in Chemnitz, Zwickau, Bautzen, Halle, Schwerin und Wuppertal</li>
                <li>Konzerte und Tourneen mit Helmuth Rilling und Mstislaw Rostropowitsch</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">Lehrtätigkeit & Aktuelle Position</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Lehrbeauftragter der Hochschule für Musik "Hanns Eisler" Berlin (seit 1994)</li>
                <li>Dozent des Studienganges Musical/Show der Universität der Künste Berlin</li>
                <li>Gast-Dozent bei der Sächsischen Sängerakademie in Torgau (2018)</li>
                <li>Musikalischer Direktor der Neuköllner Oper Berlin (2002-2022)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">Bedeutende Projekte & Auszeichnungen</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Uraufführungen preisgekrönter Opern: "Der Wurm", "Alice", "Hundeherz", "Münchhausen", "Wischen – No Vision", "Der Sonderermittler"</li>
                <li>Dirigent der ersten Oper über Angela Merkel (2002)</li>
                <li>Europäische Erstaufführung der SHOMYO SYMPHONIE II von Maki Ishii (2005)</li>
                <li>Dirigent der Gala zum 80. Geburtstag von Gerd Natschinski (2008)</li>
                <li>Preisträger "Silbernes Blatt" der Dramatiker Union (2009)</li>
                <li>Ensemble-Preisträger der Deutschen Musical-Akademie (2016) - "Bestes Musical" für "Stella – Das blonde Gespenst vom Kurfürstendamm"</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Biography;