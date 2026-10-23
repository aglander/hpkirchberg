import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Impressum = () => (
  <div className="min-h-screen bg-[#EDE9CE]">
    <Navbar />
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white/80 rounded-lg shadow-lg p-8 space-y-6 text-gray-700">
        <h1 className="text-4xl font-serif text-gray-900">Impressum</h1>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Angaben gemäß § 5 DDG</h2>
          <p>
            Hans-Peter Kirchberg
            <br />
            Fontanestr. 49
            <br />
            D-15566 Schöneiche bei Berlin
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Kontakt</h2>
          <p>
            Telefon: +49 30 643 89 560
            <br />
            Mobil: +49 177 21 767 56
            <br />
            E-Mail:{" "}
            <a href="mailto:hans-peterkirchberg@gmx.de" className="text-primary hover:underline">
              hans-peterkirchberg@gmx.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Haftung für Links</h2>
          <p>
            Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte kein
            Einfluss besteht. Für diese fremden Inhalte kann daher keine Gewähr übernommen werden.
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Urheberrecht</h2>
          <p>
            Die auf dieser Website veröffentlichten Inhalte, Texte, Bilder und Musikaufnahmen
            unterliegen dem Urheberrecht. Eine Verwendung außerhalb der gesetzlichen Grenzen
            bedarf der vorherigen Zustimmung.
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default Impressum;
