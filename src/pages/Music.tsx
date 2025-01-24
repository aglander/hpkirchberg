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
      coverImage: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      year: "2014",
      title: "Schwestern im Geiste",
      composer: "Zaufke & Lund",
      performers: "UdK-Musicalstudenten und Orchester der Neuk.Oper",
      conductor: "H.-Peter Kirchberg, Mus. Leitung + Klavier",
      orderInfo: "Best.-Nr. 088 (soundofmusic.de + NKO)",
      coverImage: "photo-1498050108023-c5249f4df085"
    },
    // Adding first few albums as example
  ];

  return (
    <div className="min-h-screen bg-[#EDE9CE]">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/80 rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-serif mb-6 text-gray-900">Diskographie</h1>
          
          <div className="space-y-8">
            {discography.map((album, index) => (
              <div key={index} className="flex gap-6 p-4 bg-white/50 rounded-lg hover:bg-white/70 transition-colors">
                <div className="flex-shrink-0">
                  <img
                    src={`https://source.unsplash.com/${album.coverImage}`}
                    alt={album.title}
                    className="w-32 h-32 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="flex-grow">
                  <div className="text-sm text-gray-600">{album.year} {album.composer}</div>
                  <h2 className="text-xl font-bold text-gray-900 mt-1">{album.title}</h2>
                  <p className="text-gray-700 mt-2">{album.performers}</p>
                  <p className="text-gray-700">{album.conductor}</p>
                  <p className="text-sm text-gray-600 mt-2">{album.orderInfo}</p>
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