
import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <blockquote className="text-center">
          <p className="text-xl md:text-2xl italic text-gray-700 mb-6 max-w-3xl mx-auto">
            "AutoCycle integrated quality analysis module gave us unprecedented confidence in our sourcing from 'end-of-life' products. Oh, and there's clear time and cost benefits, too. I wish we'd had this tool years ago!"
          </p>
          <footer className="text-gray-500">— Satisfied Customer, Manufacturing Industry</footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonial;
