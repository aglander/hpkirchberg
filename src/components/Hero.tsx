import ResponsiveImage from "./ResponsiveImage";

const Hero = () => {
  return (
    <div className="relative h-[400px] overflow-hidden">
      {/* 
        Position the ResponsiveImage absolutely to cover the container
        similar to how background-image: cover works
      */}
      <div className="absolute inset-0">
        <ResponsiveImage 
          imageUrl="assets/hero.jpg" 
          alt="Hans-Peter Kirchberg als Dirigent"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
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