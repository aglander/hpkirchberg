const Hero = () => {
  return (
    <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-r from-red-600 to-red-700 text-white">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          HP Kirchberg
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Handball mit Herz und Leidenschaft
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 w-fit"
        >
          Mitmachen
        </a>
      </div>
    </div>
  );
};

export default Hero;