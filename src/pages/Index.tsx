import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import ArchiveStrip from "@/components/ArchiveStrip";
import RecordingsStrip from "@/components/RecordingsStrip";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen flex flex-col bg-paper text-ink">
    <Navbar />
    <main id="inhalt" className="flex-grow">
      <Hero />
      <div className="space-y-24 md:space-y-40 pt-8 md:pt-16 pb-24 md:pb-40">
        <Welcome />
        <ArchiveStrip />
        <RecordingsStrip />
      </div>
    </main>
    <Footer closing />
  </div>
);

export default Index;
