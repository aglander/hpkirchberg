const SponsorsSection = () => {
  const sponsors = [
    "Sparkasse Hunsrück",
    "Volksbank Hunsrück-Nahe",
    "Sport Schmidt",
    "Getränke Müller"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Unsere Sponsoren</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center h-24"
            >
              <span className="text-gray-600 text-center font-medium">
                {sponsor}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;