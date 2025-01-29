import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Biography = () => {
  return (
    <div className="min-h-screen bg-[#EDE9CE]">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif mb-8">Biographie</h1>
        
        <section className="prose prose-lg max-w-none">
          <p className="mb-6">
            Hans-Peter Kirchberg ist ein renommierter deutscher Pianist und Dirigent, 
            der sich durch seine vielseitige musikalische Karriiere auszeichnet.
          </p>
          
          <p className="mb-6">
            Seine musikalische Ausbildung erhielt er an bedeutenden Institutionen, 
            wo er sein Talent als Pianist und später als Dirigent entwickelte.
          </p>
          
          <p className="mb-6">
            Im Laufe seiner Karriere hat er mit verschiedenen Orchestern und 
            Ensembles zusammengearbeitet und sich besonders im Bereich der 
            Opernaufführungen einen Namen gemacht.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Biography;