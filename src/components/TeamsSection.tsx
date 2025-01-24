const TeamsSection = () => {
  const teams = [
    {
      name: "1. Mannschaft",
      league: "Bezirksliga",
      training: "Di & Do 20:00-21:30"
    },
    {
      name: "2. Mannschaft",
      league: "Kreisliga A",
      training: "Di & Do 20:00-21:30"
    },
    {
      name: "Jugend A",
      league: "Bezirksklasse",
      training: "Mo & Mi 18:30-20:00"
    }
  ];

  return (
    <section id="teams" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Unsere Teams</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-xl font-semibold mb-2">{team.name}</h3>
              <p className="text-gray-600 mb-2">Liga: {team.league}</p>
              <p className="text-gray-600">Training: {team.training}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;