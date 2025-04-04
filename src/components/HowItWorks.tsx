
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          <ProcessStep 
            number={1}
            title="Request & Submit Requirements"
            description="Tell us your specific materials goals, sourcing needs, and sustainability targets."
          />
          <ProcessStep 
            number={2}
            title="Quality Assessment & Approval"
            description="We screen potential materials through quality testing and verification before finalizing the selection."
          />
          <ProcessStep 
            number={3}
            title="Shipping Logistics"
            description="We secure all your OEM provided materials and match them with the most efficient access to your sustainable recycling partner."
          />
          <ProcessStep 
            number={4}
            title="Seamless Transaction & Delivery"
            description="Once everything is approved, we coordinate and coordinate logistics to deliver your high-quality recycled materials on time."
            isLast
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
