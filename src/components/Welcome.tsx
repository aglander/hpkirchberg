const Welcome = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white/80 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-serif mb-6">Herzlich Willkommen auf meiner persönlichen Webseite!</h1>
        <p className="text-lg mb-4">
          Hier können Sie mich in Bild und Wort kennenlernen.
        </p>
        <p className="text-lg mb-8">
          Ich würde mich freuen, wenn die Webseite Ihnen hilft, all jene Informationen über meine bisherige, gegenwärtige und zukünftige Arbeit zu finden, die Sie, verehrter Besucher, benötigen.
        </p>
        <div className="text-right italic">
          <img 
            src="/assets/general/signatur.gif" 
            alt="Hans-Peter Kirchberg Signature" 
            className="inline-block mb-2 h-16"
          />
          <p className="text-xl">Hans-Peter Kirchberg</p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
