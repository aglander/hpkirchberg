import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Biography = () => {
  const timelineGroups = [
    [
      { text: "in Leipzig geboren" },
      { text: "verheiratet, 2 Kinder" },
      { text: "erster Klavierunterricht mit 5 Jahren" },
      { text: "erstes öffentliches Konzert mit 6 Jahren" },
      { text: "THOMASSCHULE Leipzig" },
    ],
    [
      { text: "Studium an der Hochschule für Musik Carl Maria von Weber Dresden" },
      { text: "Dirigieren Prof. Rudolf Neuhaus, Prof. Dr. Peter Gölke" },
      { text: "Klavier Prof. Dr. Rudolf Neumann, Korrepetition Prof. Ernst Herrmann" },
    ],
    [
      { text: <span><b>Dirigier-Debut</b> Staatsoper Dresden (<i>Il Campiello</i> von Wolf-Ferrari)</span> },
      { text: "Meisterklasse Igor Markevitch (Musikseminar Weimar)" },
      { text: <span>Externer Unterricht bei <b>Eugen Jochum</b> und <b>Rudolf Kempe</b></span> },
      { text: <span>Weiterbildung, Unterricht und Seminar bei <b>Kurt Masur</b></span> },
      { text: <span>Dirigier-Lehrgänge bei <b>Wolf-Dieter Hauschild</b>, <b>Rolf Reuter</b> und <b>Heinz Rögner</b></span> },
    ],
    [
      { text: <span><b>Solo-Repetitor mit Dirigierverpflichtung</b> (Opernhaus Chemnitz 1980-85)</span> },
      { text: <span><b>1. Kapellmeister</b> (Opernhaus Zwickau 1985-89)</span> },
      { text: "Internationaler Dirigier-Wettbewerb Budapest 1986" },
      { text: <span>Dirigier-Kurs bei <b>Leonard Bernstein</b> (Schleswig-Holstein Musik-Festival 1988)</span> },
      { text: <span><b>Chefdirigent</b> des Sinfonischen Studio-Orchesters Leipzig (1989-94)</span> },
      { text: <span><b>Assistent</b> von <b>Leonard Bernstein</b> und <b>Christoph Eschenbach</b> (1989)</span> },
      { text: <span><b>Assistent</b> von <b>Mstislaw Rostropovitch</b> sowie <i>Conductor in Residence</i> der Deutsch-Sowjetischen Jungen Philharmonie (1990)</span> },
      { text: <span>Konzerte und mit dem Neuen Berliner Kammerorchester und <b>Helmuth Rilling</b> (1992)</span> },
      { text: <span>Gastverpflichtungen u.a. EUROPERA Görlitz (<i>Rigoletto</i>), Opernhaus Wuppertal (<i>La Bohème</i>), Neuköllner Oper Berlin (<i>Der Spielverderber</i>)</span> },
      { text: <span>Berliner KammerOper (<i>Ezio</i> Händel, <i>The fall of the house of Usher</i> Ph. Glass)</span> },
      { text: <span><b>Lehrbeauftragter</b> der Hochschule für Musik <i>Hanns Eisler</i> Berlin (seit 1994)</span> },
      { text: "Beginn der regelmäßigen Arbeit als Musikalischer Leiter an der Neuköllner Oper" },
      { text: <span>Mitarbeit bei der <b>Nachwuchsförderung <i>Dirigentenforum</i></b> Deutscher Musikrat</span> },
    ],
    [
      { text: <span>Konzerttätigkeit und Probenlager <b>LandesJugendSinfonieOrchester Brandenburg</b></span> },
      { text: <span><b>Musikalischer Direktor der Neuköllner Oper (2002)</b>, seitdem jährlich max. 6 Produktionen</span> },
      { text: "Cinderella passt was nicht - einmonatiges Gastspiel Renaissance-Theater Wien" },
      { text: "Erste Begegnung mit Wiener Philharmonikern" },
      { text: "Musikalische Leitung BerlinerSalonOrchester, Konzert in der Philharmonie (KMS)" },
      { text: <span>Shomyo Symphony II op.105b von Maki Ishii 2005 - Dirigent der Europäischen Erstaufführung, HdKdW</span> },
      { text: "Große Geburtstags-Gala zum 80. Geburtstag von Gerd Natschinski im Schloßtheater Rheinsberg (2008)" },
    ],
    [
      { text: "30jähriges Bühnenjubiläum (2009)" },
      { text: "1000. Vorstellung an der Neuköllner Oper geleitet (2009)" },
      { text: <span>Preisträger "Silbernes Blatt" der Dramatiker-Union "für Verdienste um die Förderung und Pflege des zeitgenössischen musikdramatischen Schaffens" (2009)</span> },
      { text: <span>2010 - erste musikalische Arbeit bei den Bayreuther Festspielen ("Wagner für Kinder" - Tannhäuser)</span> }
    ]
  ];

  return (
    <div className="min-h-screen bg-[#EDE9CE]">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/80 rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-serif mb-6 text-gray-900">Biographie</h1>
          
          <div className="space-y-12">
            {timelineGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="space-y-2">
                <ul className="list-disc space-y-2">
                  {group.map((event, index) => (
                    <li key={index} className="text-gray-800 hover:bg-white/70 transition-colors rounded-lg p-2 ml-6 pl-2">
                      {event.text}
                    </li>
                  ))}
                </ul>
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