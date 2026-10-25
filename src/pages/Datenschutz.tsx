import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Datenschutz = () => (
  <div className="min-h-screen bg-paper">
    <Navbar />
    <main id="inhalt" className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-20">
      <div className="max-w-[68ch] space-y-6 text-ink">
        <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-10">Datenschutzerklärung</h1>

        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-2">1. Verantwortlicher</h2>
          <p>
            Hans-Peter Kirchberg, Fontanestr. 49, D-15566 Schöneiche bei Berlin
            <br />
            E-Mail:{" "}
            <a href="mailto:hans-peterkirchberg@gmx.de" className="text-primary hover:underline">
              hans-peterkirchberg@gmx.de
            </a>
            , Telefon: +49 30 643 89 560
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-2">2. Hosting und Server-Logfiles</h2>
          <p>
            Diese Website wird bei Netlify, Inc., 101 2nd Street, San Francisco, CA 94105,
            USA, gehostet. Beim Aufruf werden durch Netlify technisch notwendige Daten
            verarbeitet, insbesondere IP-Adresse, Datum und Uhrzeit des Abrufs, die abgerufene
            Seite, übertragene Datenmenge sowie Browser- und Betriebssysteminformationen. Die
            Verarbeitung ist zur Auslieferung und zur Sicherheit der Website erforderlich
            (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
          <p className="mt-2">
            Dabei kann eine Übermittlung von Daten in die USA erfolgen. Netlify stützt
            Übermittlungen in die USA nach eigener Angabe auf das EU-US Data Privacy Framework
            (Art. 45 DSGVO) sowie ergänzend auf die EU-Standardvertragsklauseln (Art. 46 DSGVO).
            Mit Netlify besteht ein Vertrag zur Auftragsverarbeitung (Art. 28 DSGVO), der Teil der
            Nutzungsbedingungen von Netlify ist.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-2">3. Cookies und Tracking</h2>
          <p>
            Diese Website setzt keine Cookies und verwendet keine Tracking- oder
            Analyse-Dienste, die einer Einwilligung bedürfen. Schriftarten, Bilder und Kalenderdaten
            werden von der Website selbst ausgeliefert.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-2">4. Kontaktaufnahme</h2>
          <p>
            Wenn Sie per E-Mail oder Telefon Kontakt aufnehmen, werden Ihre Angaben zur
            Bearbeitung der Anfrage verarbeitet und nach Erledigung gelöscht, soweit keine
            gesetzlichen Aufbewahrungspflichten bestehen (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-2">5. Externe Links</h2>
          <p>
            Diese Website enthält Links zu Websites Dritter. Beim Anklicken gelten die
            Datenschutzbestimmungen des jeweiligen Anbieters.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-semibold text-ink mb-2">6. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
            Verarbeitung, Datenübertragbarkeit und Widerspruch gegen die Verarbeitung Ihrer Daten.
            Zudem können Sie sich bei einer Datenschutz-Aufsichtsbehörde beschweren, zum Beispiel
            bei der Landesbeauftragten für Datenschutz und für das Recht auf Akteneinsicht
            Brandenburg.
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default Datenschutz;
