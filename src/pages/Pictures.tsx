import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageGrid from "@/components/ImageGrid";
import { pianistImages, conductorImages, importantMeetingsImages, pressImages } from "@/data/pictures";

const Pictures = () => {
  return (
    <div className="min-h-screen bg-[#EDE9CE]">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif mb-8">Bilder</h1>
        
        <ImageGrid title="Als Pianist" images={pianistImages} />
        <ImageGrid title="Als Dirigent" images={conductorImages} />
        <ImageGrid title="Wichtige Begegnungen" images={importantMeetingsImages} />
        <ImageGrid title="Presse" images={pressImages} />
      </main>
      <Footer />
    </div>
  );
};

export default Pictures;