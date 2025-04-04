
import React from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, isLast = false }) => {
  return (
    <div className="flex flex-col items-center max-w-xs mx-auto">
      <div className="process-step-circle mb-4">
        {number}
      </div>
      {!isLast && (
        <div className="h-12 w-0.5 bg-gray-300 my-1"></div>
      )}
      <h3 className="text-lg font-semibold mb-2 mt-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center text-sm">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center">How It Works</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-10">
          <ProcessStep 
            number={1}
            title="Submit Requirements"
            description="Tell us your materials goals - but be prepared to wait. Most companies struggle to clearly define what they actually need."
          />
          <ProcessStep 
            number={2}
            title="Quality Assessment"
            description="We'll screen potential materials, though industry standards vary widely and verification can be spotty at best."
          />
          <ProcessStep 
            number={3}
            title="Partner Matching"
            description="We attempt to match you with recycling partners, assuming any are available in your region with proper certification."
          />
          <ProcessStep 
            number={4}
            title="Shipping Logistics"
            description="We coordinate logistics, which often involves navigating complex regulations and unpredictable delays in the supply chain."
            isLast
          />
        </div>
        
        <div className="mt-16 max-w-2xl mx-auto p-6 border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <div className="process-step-circle">
              5
            </div>
            <div>
              <h3 className="text-lg font-semibold">Transaction & Delivery</h3>
              <p className="text-gray-600">Final delivery occurs - if all parties maintain their commitments and no unforeseen circumstances arise in the process.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
