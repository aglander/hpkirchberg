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
    website: "www.hpkirchberg.de",
  };

  return (
    <div className="min-h-screen bg-[#EDE9CE]">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/80 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-serif mb-8">Kontakt</h1>

          <h2 className="text-xl font-semibold mb-4">{info.title}</h2>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="text-gray-600">{info.address}</p>
                <p className="text-gray-600">{info.city}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="text-gray-600">Tel: {info.phone}</p>
                {info.mobile && (
                  <p className="text-gray-600">Mobil: {info.mobile}</p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary mt-1" />
              <a
                href={`mailto:${info.email}`}
                className="text-primary hover:underline"
              >
                {info.email}
              </a>
            </div>

            <div className="flex items-start gap-3">
              <ExternalLink className="w-5 h-5 text-primary mt-1" />
              <a
                href={`http://${info.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
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
