
import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white py-4 px-6 md:px-10 flex justify-between items-center shadow-sm">
      <Logo />
      
      <div className="hidden md:flex space-x-8">
        <a href="#about" className="text-gray-700 hover:text-autocycle-green transition-colors">About Us</a>
        <a href="#benefits" className="text-gray-700 hover:text-autocycle-green transition-colors">Benefits</a>
        <a href="#how-it-works" className="text-gray-700 hover:text-autocycle-green transition-colors">How It Works</a>
        <a href="#contact" className="text-gray-700 hover:text-autocycle-green transition-colors">Contact</a>
      </div>
      
      <Button className="bg-autocycle-green hover:bg-autocycle-green hover:bg-opacity-90">
        FIND YOUR RECYCLING PARTNER
      </Button>
    </nav>
  );
};

export default Navbar;
