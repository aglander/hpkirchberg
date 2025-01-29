const Hero = () => {
  return (
    <div className="relative h-[400px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/lovable-uploads/b4a00807-139c-46c9-b1d6-1d8e0ffe0514.png")',
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
          Dirigent
        </h1>
        <p className="text-xl md:text-2xl text-gray-100">
          Musik mit Leidenschaft
        </p>
      </div>
    </div>
  );
};

export default Hero;