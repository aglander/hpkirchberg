const Footer = () => {
  const mainNavItems = [
    { name: "Biographie", href: "/biographie" },
    { name: "Musik", href: "/musik" },
    { name: "Bilder", href: "/bilder" },
    { name: "Links", href: "/links" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  const legalNavItems = [
    { name: "Impressum", href: "#" },
    { name: "Datenschutzerklärung", href: "/datenschutz" },
  ];

  return (
    <footer className="bg-[#EDE9CE] text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {mainNavItems.map((item, index) => (
            <span key={item.name}>
              <a href={item.href} className="hover:text-gray-600">
                {item.name}
              </a>
              {index < mainNavItems.length - 1 && <span className="ml-4">|</span>}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {legalNavItems.map((item, index) => (
            <span key={item.name}>
              <a href={item.href} className="hover:text-gray-600 text-sm">
                {item.name}
              </a>
              {index < legalNavItems.length - 1 && <span className="ml-4">|</span>}
            </span>
          ))}
        </div>
        <div className="mt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Hans-Peter Kirchberg. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;