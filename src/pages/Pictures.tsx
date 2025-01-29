import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pictures = () => {
  const pianistImages = [
    {
      src: "/lovable-uploads/928b20cd-0a9a-4055-b738-51aa91f21094.png",
      alt: "Young pianist at upright piano",
      year: "Early years"
    },
    {
      src: "/lovable-uploads/3f8d07ec-fad8-42a2-bc74-43841bb43061.png",
      alt: "Pianist performing in formal attire",
      year: "Performance"
    },
    {
      src: "/lovable-uploads/cffc458e-7d72-46ff-aef3-a8af2603456d.png",
      alt: "Pianist at grand piano",
      year: "Concert performance"
    },
    {
      src: "/lovable-uploads/05105c57-55ef-4b36-9faf-5c0f6553e5ae.png",
      alt: "Piano performance in profile",
      year: "Live concert"
    },
    {
      src: "/lovable-uploads/86d5ad8e-f5d7-4563-b588-0fdd39636afe.png",
      alt: "Performance at piano",
      year: "Concert evening"
    },
    {
      src: "/lovable-uploads/f54ca29c-32fc-412b-96cc-748a0a2b3004.png",
      alt: "Piano performance",
      year: "Concert"
    },
    {
      src: "/lovable-uploads/0c0c0c0c-0c0c-0c0c-0c0c-0c0c0c0c0c0c.png",
      alt: "Piano recital",
      year: "Recital"
    },
    {
      src: "/lovable-uploads/1d1d1d1d-1d1d-1d1d-1d1d-1d1d1d1d1d1d.png",
      alt: "Concert performance",
      year: "Performance"
    },
    {
      src: "/lovable-uploads/2e2e2e2e-2e2e-2e2e-2e2e-2e2e2e2e2e2e.png",
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