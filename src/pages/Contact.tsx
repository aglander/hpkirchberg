import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const info = {
    title: "Hans-Peter Kirchberg",
    address: "Fontanestr. 49",
    city: "D-15566 Schöneiche bei Berlin",
    phone: "+49 30 643 89 560",
    mobile: "+49 177 21 767 56",
    email: "hans-peterkirchberg@gmx.de",
    website: "hpkirchberg.de",
  };

  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main id="inhalt" className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-10">Kontakt</h1>

          <h2 className="text-2xl font-serif font-semibold mb-6">{info.title}</h2>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <p>{info.address}</p>
                <p>{info.city}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary mt-1" />
              <div>
                <p>Tel: <a className="underline underline-offset-4 hover:text-oxblood" href={`tel:${info.phone.replace(/\s/g, "")}`}>{info.phone}</a></p>
                {info.mobile && (
                  <p>Mobil: <a className="underline underline-offset-4 hover:text-oxblood" href={`tel:${info.mobile.replace(/\s/g, "")}`}>{info.mobile}</a></p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary mt-1" />
              <a
                href={`mailto:${info.email}`}
                className="text-primary underline underline-offset-4 hover:text-oxblood"
              >
                {info.email}
              </a>
            </div>

            <div className="flex items-start gap-3">
              <ExternalLink className="w-5 h-5 text-primary mt-1" />
              <a
                href={`https://${info.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:text-oxblood"
              >
                {info.website}
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
