const NewsSection = () => {
  const news = [
    {
      date: "15.04.2024",
      title: "Wichtiger Sieg für die erste Mannschaft",
      content: "In einem spannenden Spiel konnte sich unsere erste Mannschaft durchsetzen..."
    },
    {
      date: "10.04.2024",
      title: "Jugendturnier ein voller Erfolg",
      content: "Das diesjährige Jugendturnier war mit über 200 Teilnehmern ein großer Erfolg..."
    },
    {
      date: "05.04.2024",
      title: "Neue Trainingszeiten ab Mai",
      content: "Ab Mai ändern sich einige Trainingszeiten. Bitte beachtet die aktualisierten Zeiten..."
    }
  ];

  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Aktuelle News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="p-6">
                <span className="text-sm text-gray-500">{item.date}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;