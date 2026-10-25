import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Impressum = () => (
  <div className="min-h-screen bg-paper">
    <Navbar />
    <main id="inhalt" className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-20">
      <div className="max-w-[68ch] space-y-6 text-ink">
        <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-10">Impressum</h1>

        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-2">Angaben gemäß § 5 DDG</h2>
          <p>
            Hans-Peter Kirchberg
            <br />
            Fontanestr. 49
            <br />
            D-15566 Schöneiche bei Berlin
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-2">Kontakt</h2>
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
          <h2 className="text-2xl font-serif font-semibold text-ink mb-2">Haftung für Links</h2>
          <p>
            Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte kein
            Einfluss besteht. Für diese fremden Inhalte kann daher keine Gewähr übernommen werden.
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-2">Urheberrecht</h2>
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
