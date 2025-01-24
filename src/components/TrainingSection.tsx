const TrainingSection = () => {
  const trainingSessions = [
    {
      day: "Montag",
      sessions: [
        { time: "17:00 - 18:30", group: "E-Jugend" },
        { time: "18:30 - 20:00", group: "A-Jugend" }
      ]
    },
    {
      day: "Dienstag",
      sessions: [
        { time: "16:30 - 18:00", group: "F-Jugend" },
        { time: "20:00 - 21:30", group: "Aktive" }
      ]
    },
    {
      day: "Donnerstag",
      sessions: [
        { time: "17:00 - 18:30", group: "D-Jugend" },
        { time: "20:00 - 21:30", group: "Aktive" }
      ]
    }
  ];

  return (
    <section id="training" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Trainingszeiten</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingSessions.map((day, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">{day.day}</h3>
              {day.sessions.map((session, sessionIndex) => (
                <div key={sessionIndex} className="mb-3 last:mb-0">
                  <p className="font-medium">{session.time}</p>
                  <p className="text-gray-600">{session.group}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;