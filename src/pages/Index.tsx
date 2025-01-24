import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import TeamsSection from "@/components/TeamsSection";
import TrainingSection from "@/components/TrainingSection";
import ContactSection from "@/components/ContactSection";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <NewsSection />
        <TeamsSection />
        <TrainingSection />
        <ContactSection />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;