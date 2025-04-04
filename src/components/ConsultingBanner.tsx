
import React from 'react';

const ConsultingBanner: React.FC = () => {
  return (
    <section className="bg-autocycle-green py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-black">
          First Consulting is for Free!*
        </h2>
        <p className="text-center text-black mt-2 text-sm italic">
          *Subject to availability. May require qualification assessment. No guarantees of implementation.
        </p>
      </div>
    </section>
  );
};

export default ConsultingBanner;
