
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[500px] flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('/lovable-uploads/48b66eac-a574-4b69-b1e0-b7befe8b23b9.png')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto z-10 px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            WE MATCH OEM's 
            <br />
            WHEN CLOSED LOOP RECYCLING
            <br />
            IS NOT POSSIBLE
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
