
import React from 'react';

const CircularEconomy: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="section-heading">Closed-loop recycling is a key factor for making engineering plastics circular</h2>
            <p className="text-gray-700 mb-4">
              Materials commonly used in engineering plastics, such as polyamide and polycarbonates like PA6, PC, and PMMA (Engineering plastics are defined as technical high value polymers such as technical polyesters).
            </p>
            <p className="text-gray-700 mb-4">
              When it comes to most of the car plastics, closed-loop recycling is the sustainable option for this class of plastics. This is mostly due to a known OEM policy to make a product for a certain period and then switch to a newer design. During this product lifecycle, the material should be kept incirculation for resource optimization in those high-end products.
            </p>
            <p className="text-gray-700">
              Current recycling challenges are influenced by poor sorting practice, water sensitivity of some plastic resins and additives in currently more than 30.000 plastic blends thus it's hard for plastic engineering to be well informed.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src="/placeholder.svg" 
              alt="Circular Economy Diagram" 
              className="max-w-full max-h-80"
            />
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-blue-50 rounded-lg flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-4.5-6.5M15 4a4 4 0 00-4 4v3" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <p className="text-blue-800">
              Are you interested in our Cirular & Recycling Expert concept and have additional ideas about all Products and Services?
            </p>
          </div>
          <button className="autoCycle-btn ml-4 whitespace-nowrap">CONTACT US NOW</button>
        </div>
      </div>
    </section>
  );
};

export default CircularEconomy;
