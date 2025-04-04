
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to revolutionize your recycling process?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get in touch with our experts today and discover how AutoCycle can transform your sustainability approach.
        </p>
        <Button className="autoCycle-btn text-lg px-8 py-6">FIND YOUR RECYCLING PARTNER</Button>
      </div>
    </section>
  );
};

export default CallToAction;
