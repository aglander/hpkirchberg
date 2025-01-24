import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Kontakt</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Adresse</h3>
                <p className="text-gray-600">Sporthalle Kirchberg</p>
                <p className="text-gray-600">Schulstraße 3</p>
                <p className="text-gray-600">55481 Kirchberg</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Telefon</h3>
                <p className="text-gray-600">+49 (0) 6763 / 123456</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1">E-Mail</h3>
                <p className="text-gray-600">info@hpkirchberg.de</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-semibold mb-4">Anfahrt</h3>
            <p className="text-gray-600 mb-4">
              Die Sporthalle befindet sich direkt neben der Grundschule Kirchberg.
              Parkplätze sind ausreichend vorhanden.
            </p>
            <p className="text-gray-600">
              Mit öffentlichen Verkehrsmitteln erreichen Sie uns mit der Buslinie 620
              (Haltestelle: Kirchberg Schule).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;