import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      title: "Private Contact",
      name: "Hans-Peter Kirchberg",
      address: "Fontanestr. 49",
      city: "D-15566 Schöneiche bei Berlin",
      phone: "+49 30 643 89 560",
      mobile: "+49 177 21 767 56",
      email: "hans-peterkirchberg@web.de",
      website: "www.hpkirchberg.de"
    },
    {
      title: "Neuköllner Oper Berlin",
      address: "Karl-Marx-Strasse 131-133",
      city: "D-12043 Berlin",
      phone: "+49 30 688 90 718",
      fax: "+49 30 688 90 789",
      email: "kirchberg@neukoellneroper.de",
      website: "www.neukoellneroper.de"
    }
  ];

  return (
    <div className="min-h-screen bg-[#EDE9CE]">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-serif text-gray-900 mb-8">Kontakt</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          {contactInfo.map((info, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">{info.title}</h2>
                
                <div className="space-y-3">
                  {info.name && (
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">{info.name}</p>
                        <p className="text-gray-600">{info.address}</p>
                        <p className="text-gray-600">{info.city}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="text-gray-600">Tel: {info.phone}</p>
                      {info.mobile && <p className="text-gray-600">Mobil: {info.mobile}</p>}
                      {info.fax && <p className="text-gray-600">Fax: {info.fax}</p>}
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
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;