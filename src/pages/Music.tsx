import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Music = () => {
  const discography = [
    {
      year: "2015",
      title: "Grimm!",
      composer: "Zaufke & Lund",
      performers: "UdK-Musicalstudenten und Orchester der Neuk. Oper",
      conductor: "H.-Peter Kirchberg, Mus. Leitung + Klavier",
      orderInfo: "Best.-Nr. 090 (soundofmusic.de + NKO)",
      coverImage: "cd-cover/36.jpg"
    },
    {
      year: "2014",
      title: "Schwestern im Geiste",
      composer: "Zaufke & Lund",
      performers: "UdK-Musicalstudenten und Orchester der Neuk.Oper",
      conductor: "H.-Peter Kirchberg, Mus. Leitung + Klavier",
      orderInfo: "Best.-Nr. 088 (soundofmusic.de + NKO)",
      coverImage: "cd-cover/35.jpg"
    },
    {
      year: "2013",
      title: "Stimmen im Kopf",
      composer: "Lund + Böhmer",
      performers: "UdK-Musicalstudenten und Rockband der Neuk.Oper",
      conductor: "H.-Peter Kirchberg, Mus. Leitung und Klavier",
      orderInfo: "Best.-Nr. 073 (soundofmusic.de + NKO)",
      coverImage: "cd-cover/34.jpg"
    },
    {
      year: "2012",
      title: "Das Tanz-Salon-Orchester \"Non Plus Ultra\"",
      performers: "spielt in \"Pariser Besetzung\"",
      conductor: "Mus. Leitung: W. Radeke & H.-Peter Kirchberg",
      orderInfo: "Best.-Nr. NCD 066",
      coverImage: "cd-cover/33.jpg"
    },
    {
      year: "2011",
      title: "Mein Avatar und Ich",
      composer: "Zaufke und Lund",
      performers: "UDK-Musicalstudenten und Rockband der Neuk. Oper",
      conductor: "H.-Peter Kirchberg, musikalische Leitung und Klavier",
      orderInfo: "Best.-Nr. SOM CD 056 + NKO",
      coverImage: "cd-cover/31.jpg"
    },
    {
      year: "2009",
      title: "Leben ohne Chris",
      composer: "Lund / Böhmer",
      performers: "Solisten und Orchester der Neuköllner Oper",
      conductor: "H.-Peter Kirchberg, Mus.Leitung + Klavier",
      orderInfo: "Best.-Nr.043 (soundofmusic.de und NKO)",
      coverImage: "cd-cover/30.jpg"
    },
    {
      year: "2007",
      title: "KAUF DIR EIN KIND",
      composer: "Lund / Zaufke",
      performers: "Solisten und Orchester der Neuköllner Oper",
      conductor: "H.-Peter Kirchberg, Mus.Leitung + Klavier",
      orderInfo: "Best.-Nr.031 (soundofmusic.de und NKO)",
      coverImage: "cd-cover/29.jpg"
    },
    {
      year: "2006",
      title: "HELD MÜLLER",
      composer: "Lund / Zaufke",
      performers: "Solisten und Orchester der Neuköllner Oper",
      conductor: "H.-Peter Kirchberg, Mus.Leitung + Klavier",
      orderInfo: "Best.-Nr.024 (soundofmusic.de und NKO)",
      coverImage: "cd-cover/28.jpg"
    },
    {
      year: "2005",
      title: "MÖRIKE-LIEDER",
      composer: "Hugo Wolf",
      performers: "Grosses Sinfonie-Orchester der UdK Berlin",
      conductor: "Dirigent: H.-Peter Kirchberg",
      additionalInfo: "Instrumentiert für Orchester",
      orderInfo: "Archiv-Aufnahme",
      coverImage: "cd-cover/27.jpg"
    },
    {
      year: "2005",
      title: "Letterland",
      composer: "Lund / Zaufke",
      performers: "Solisten und Orchester der Neuköllner Oper",
      conductor: "H.-Peter Kirchberg, M. Leitung + Klavier",
      additionalInfo: "Shakespeare's \"Falstaff\" heute\nGayle Tufts, Bonus-Track",
      orderInfo: "Best.-Nr.SOM CD 022 (im Handel und NKO)",
      coverImage: "cd-cover/26.jpg"
    },
    {
      year: "2004",
      title: "... kommt jetzt der Schwan ?",
      performers: "Anja-Susann Hammer, Violoncello und H.-Peter Kirchberg, Klavier",
      additionalInfo: "in einem Moderations-Konzert",
      orderInfo: "Archiv-Aufnahme",
      coverImage: "cd-cover/22.jpg"
    },
    {
      title: "Berliner Salon",
      performers: "Das BerlinerSalonOrchester und Winnie Böwe (Gesang) musizieren Werke von Benatzky, Lincke, Lortzing, Rubinstein u.a.",
      conductor: "Musik. Leitung / Klavier: H.-Peter Kirchberg",
      additionalInfo: "live-Mitschnitt aus der Berliner Philharmonie",
      coverImage: "cd-cover/21.jpg"
    },
    {
      year: "2004",
      title: "Kirchenmusikal. Gottesdienst",
      performers: "H.-Peter Kirchberg spielt Werke von J.S.Bach an der berühmten Lütkemüller Orgel von St. Marien in Röbel / Müritz und singt mit ehemaligen Thomanern",
      additionalInfo: "Archiv-Aufnahmen Vol.1-4 (2001-2004)",
      coverImage: "cd-cover/20.jpg"
    },
    {
      year: "2004",
      composer: "Lund / Ramdohr",
      title: "Die traurige Ballade von John Merrick, genannt: Der Elefantenmensch",
      performers: "Solisten und Orchester der Neuköllner Oper",
      conductor: "H.-Peter Kirchberg, Musikal. Leitung + Klavier",
      orderInfo: "Archiv-Produktion",
      coverImage: "cd-cover/23.jpg"
    },
    {
      year: "2003",
      composer: "Lund / Zaufke",
      title: "Elternabend-Das Musical",
      performers: "Solisten und Orchester der Neuköllner Oper",
      conductor: "Hans-Peter Kirchberg, Musikal. Leit. + Klavier\nNicolai Thaerichen, Klavier",
      orderInfo: "Bestell-Nr. CFM 26 (im Handel und Neuk. Oper)",
      coverImage: "cd-cover/18.jpg"
    },
    {
      year: "2003",
      title: "Christmas Meditation",
      performers: "H.-Peter Kirchberg (Orgel/Cembalo) mit dem Neuen Berliner Kammerorchester",
      orderInfo: "Im Handel erhältlich unter: EXCLUSIV 222 520",
      coverImage: "cd-cover/17.jpg"
    },
    {
      year: "2002",
      title: "Operette & Musical vol. 2",
      additionalInfo: "u.a. mit Böhmers \"Wunder von Neukölln\"",
      performers: "Solisten und Orchester der Neuköllner Oper",
      conductor: "Hans-Peter Kirchberg, Musikalische Leitung",
      orderInfo: "im Handel erhältlich unter: RCA Read Seal/Ariola Classics 74321 73546 2",
      coverImage: "cd-cover/25.jpg"
    },
    {
      year: "1990",
      composer: "Prokofjew",
      title: "Romeo und Julia",
      additionalInfo: "Gesamtaufnahme",
      performers: "Deutsch-Sowjetische Junge Philharmonie",
      conductor: "Musikal. Assistenz / Orgel: H.-Peter Kirchberg\nDirigent: Mstislaw Rostropowitsch",
      orderInfo: "Archiv-Produktion, live-Mitschnitt 20.07.90",
      coverImage: "cd-cover/24.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#EDE9CE]">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white/80 rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-serif mb-6 text-gray-900">Diskographie</h1>
          
          <div className="space-y-8">
            {discography.map((album, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 p-4 bg-white/50 rounded-lg hover:bg-white/70 transition-colors">
                <div className="flex-shrink-0">
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className="w-32 h-32 object-cover rounded-lg shadow-md mx-auto md:mx-0"
                  />
                </div>
                <div className="flex-grow space-y-2">
                  <div className="text-sm text-gray-600">
                    {album.year} {album.composer && `${album.composer}`}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{album.title}</h2>
                  {album.additionalInfo && (
                    <p className="text-gray-700">{album.additionalInfo}</p>
                  )}
                  <p className="text-gray-700">{album.performers}</p>
                  {album.conductor && <p className="text-gray-700">{album.conductor}</p>}
                  {album.orderInfo && <p className="text-sm text-gray-600">{album.orderInfo}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Music;
