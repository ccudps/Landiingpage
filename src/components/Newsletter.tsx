
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-autocycle-green py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">Sign up to our newsletter</h2>
          <p className="text-center mb-6">Stay up to date with the latest industry insights and news in your inbox.</p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Input 
              type="email" 
              placeholder="Your email" 
              className="bg-white"
            />
            <Button className="bg-gray-800 text-white hover:bg-gray-900">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
