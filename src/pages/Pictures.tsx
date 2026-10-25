import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageGrid from "@/components/ImageGrid";
import { pianistImages, conductorImages, importantMeetingsImages, pressImages } from "@/data/pictures";

const Pictures = () => {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main id="inhalt" className="flex-grow">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-20">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-10">Bilder</h1>
          
          <ImageGrid title="Als Pianist" images={pianistImages} />
          <ImageGrid title="Als Dirigent" images={conductorImages} />
          <ImageGrid title="Wichtige Begegnungen" images={importantMeetingsImages} />
          <ImageGrid title="Presse" images={pressImages} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pictures;