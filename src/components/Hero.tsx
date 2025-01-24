const Hero = () => {
  return (
    <div className="relative h-[400px] bg-gradient-to-r from-[#EDE9CE] to-[#D6C88E] overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-4">
          Dirigent
        </h1>
        <p className="text-xl md:text-2xl text-gray-800">
          Musik mit Leidenschaft
        </p>
      </div>
    </div>
  );
};

export default Hero;