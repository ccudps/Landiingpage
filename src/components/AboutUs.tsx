
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-heading">About Us</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Our Mission:</h3>
            <p className="text-gray-700">
              To provide businesses with turnkey valuable end-of-life OEM products into valuable, high-quality recycled plastics that drive sustainable innovation.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Who We Are:</h3>
            <p className="text-gray-700">
              Founded by industry experts passionate about sustainability, Duel Company Name is dedicated to bridging the gap between OEMs with surplus products and buyers seeking reliable recycled materials. Our deep industry knowledge and robust network ensure that every connection delivers quality and performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
