import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pictures = () => {
  const pianistImages = [
    {
      src: "/assets/pictures/pianist/01.jpg",
      alt: "Young pianist at upright piano",
      year: "Early years"
    },
    {
      src: "/assets/pictures/pianist/02.jpg",
      alt: "Pianist performing in formal attire",
      year: "Performance"
    },
    {
      src: "/assets/pictures/pianist/03.jpg",
      alt: "Pianist at grand piano",
      year: "Concert performance"
    },
    {
      src: "/assets/pictures/pianist/04.jpg",
      alt: "Piano performance in profile",
      year: "Live concert"
    },
    {
      src: "/assets/pictures/pianist/05.jpg",
      alt: "Performance at piano",
      year: "Concert evening"
    },
    {
      src: "/assets/pictures/pianist/20.jpg",
      alt: "Piano performance",
      year: "Concert"
    },
    {
      src: "/assets/pictures/pianist/24.jpg",
      alt: "Piano recital",
      year: "Recital"
    },
    {
      src: "/assets/pictures/pianist/25.jpg",
      alt: "Concert performance",
      year: "Performance"
    },
    {
      src: "/assets/pictures/pianist/35.jpg",
      alt: "Piano concert",
      year: "Concert"
    }
  ];

  return (
    <div className="min-h-screen bg-[#EDE9CE]">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif mb-8">Bilder</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-6">Als Pianist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pianistImages.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
                  <p className="text-sm text-center">{image.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pictures;