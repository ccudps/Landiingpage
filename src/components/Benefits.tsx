
import React from 'react';

interface BenefitCardProps {
  title: string;
  content: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, content }) => {
  return (
    <div className="benefit-card">
      <h3 className="benefit-title">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center">BENEFITS OF MATCHING OEMS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div>
            <BenefitCard 
              title="Consistency & Reliability" 
              content="OEMs rely on matched resources from a variety of sources, aligning them with OEM standards helps maintain consistency across alternative supply sources. This valuable alternative ensures compliance with specifications to prevent failures or increased liability."
            />
          </div>
          
          <div>
            <BenefitCard 
              title="Quality Assurance" 
              content="OEMs have well-defined material standards with extensive testing, research and rigorous testing. By following their quality procedures, we ensure that the recycled material integrates seamlessly without compromising product design, quality or performance."
            />
          </div>
          
          <div>
            <BenefitCard 
              title="Enhanced Supply Chain Efficiency" 
              content="By focusing on quality-aligned recycled materials, manufacturers can streamline their production process. Materials that match OEMs have known material properties, which in turn leads to smoother production runs, reduced waste and efficient operations."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
