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
              <h2 className="text-2xl font-serif mb-4">Frühe Jahre</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>in Leipzig geboren</li>
                <li>verheiratet, 2 Kinder</li>
                <li>erster Klavierunterricht mit 5 Jahren</li>
                <li>erstes öffentliches Konzert mit 6 Jahren</li>
                <li>THOMASSCHULE Leipzig</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">Ausbildung</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Studium an der Hochschule für Musik "Carl Maria von Weber" Dresden</li>
                <li>Dirigieren Prof. Rudolf Neuhaus, Prof. Dr. Peter Gülke</li>
                <li>Klavier Prof. Dr. Rudolf Neumann, Korrepetition Prof. Ernst Herrmann</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">Frühe Karriere & Weiterbildung</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Dirigier-Debut</strong> Staatsoper Dresden ("Il Campiello" von Wolf-Ferrari)</li>
                <li>Meisterklasse <strong>Igor Markevitch</strong> (Musikseminar Weimar)</li>
                <li>Externer Unterricht bei <strong>Eugen Jochum</strong> und <strong>Rudolf Kempe</strong></li>
                <li>Weiterbildung, Unterricht und Seminar bei <strong>Kurt Masur</strong></li>
                <li>Dirigier-Lehrgänge bei <strong>Wolf-Dieter Hauschild</strong>, <strong>Rolf Reuter</strong> und <strong>Heinz Rögner</strong></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">Berufliche Laufbahn</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Solo-Repetitor mit Dirigierverpflichtung</strong> (Opernhaus Chemnitz 1980-85)</li>
                <li><strong>1. Kapellmeister</strong> (Opernhaus Zwickau 1985-89)</li>
                <li>Internationaler Dirigier-Wettbewerb Budapest 1986</li>
                <li>Dirigier-Kurs bei <strong>Leonard Bernstein</strong> (Schleswig-Holstein Musik-Festival 1988)</li>
                <li><strong>Chefdirigent</strong> des Sinfonischen Studio-Orchesters Leipzig (1989-94)</li>
                <li><strong>Assistent</strong> von <strong>Leonard Bernstein</strong> und <strong>Christoph Eschenbach</strong> (1989)</li>
                <li><strong>Assistent</strong> von <strong>Mstislaw Rostropovitch</strong> sowie "Conductor in Residence" der Deutsch-Sowjetischen Jungen Philharmonie (1990)</li>
                <li>Konzerte mit dem Neuen Berliner Kammerorchester und <strong>Helmuth Rilling</strong> (1992)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">Weitere Karriere</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gastverpflichtungen u.a. EUROPERA Görlitz ("Rigoletto"), Opernhaus Wuppertal ("La Bohème"), Neuköllner Oper Berlin ("Der Spielverderber")</li>
                <li>Berliner KammerOper ("Ezio"/Händel, "The fall of the house of Usher"/ Ph. Glass)</li>
                <li><strong>Lehrbeauftragter</strong> der Hochschule für Musik "Hanns Eisler" Berlin (seit 1994)</li>
                <li>Beginn der regelmäßigen Arbeit als Musikalischer Leiter an der Neuköllner Oper</li>
                <li>Mitarbeit bei der <strong>Nachwuchsförderung "Dirigentenforum"</strong> Deutscher Musikrat</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">Aktuelle Tätigkeiten & Erfolge</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Konzerttätigkeit und Probenlager <strong>LandesJugendSinfonieOrchester Brandenburg</strong></li>
                <li><strong>Musikalischer Direktor der Neuköllner Oper (2002)</strong>, seitdem jährlich max. 6 Produktionen</li>
                <li>Cinderella passt was nicht - einmonatiges Gastspiel Renaissance-Theater Wien</li>
                <li>Erste Begegnung mit Wiener Philharmonikern</li>
                <li>Musikalische Leitung BerlinerSalonOrchester, Konzert in der Philharmonie (KMS)</li>
                <li>"Shomyo Symphony II" op.105b von Maki Ishii 2005 - Dirigent der Europäischen Erstaufführung, HdKdW</li>
                <li>Große Geburtstags-Gala zum 80. Geburtstag von Gerd Natschinski im Schlosstheater Rheinsberg (2008)</li>
                <li>30jähriges Bühnenjubiläum (2009)</li>
                <li>1000. Vorstellung an der Neuköllner Oper geleitet (2009)</li>
                <li>Preisträger "Silbernes Blatt" der Dramatiker-Union "für Verdienste um die Förderung und Pflege des zeitgenössischen musikdramatischen Schaffens" (2009)</li>
                <li>2010 - erste musikalische Arbeit bei den Bayreuther Festspielen ("Wagner für Kinder" - Tannhäuser)</li>
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