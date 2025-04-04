
import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <blockquote className="text-center">
          <p className="text-xl md:text-2xl italic text-gray-700 mb-6 max-w-3xl mx-auto">
            "AutoCycle's quality analysis module finally gave us some visibility into our recycled materials sourcing, though implementation took longer than expected. The cost benefits were modest, but still an improvement over our previous system."
          </p>
          <footer className="text-gray-500">— Manufacturing Industry Client, after 8 months of integration</footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonial;
