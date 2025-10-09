
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import ConcertAnnouncement from "@/components/ConcertAnnouncement";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#EDE9CE]">
      <Navbar />
      <Hero />
      <ConcertAnnouncement />
      <Welcome />
      <Footer />
    </div>
  );
};

export default Index;
