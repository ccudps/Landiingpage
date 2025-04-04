
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <Logo />
            <p className="mt-4 text-gray-600 max-w-xs">
              Providing sustainable recycling solutions for businesses and OEMs around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-600 hover:text-autocycle-green">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-autocycle-green">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-autocycle-green">Partners</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-autocycle-green">OEM Matching</a></li>
                <li><a href="#" className="text-gray-600 hover:text-autocycle-green">Consulting</a></li>
                <li><a href="#" className="text-gray-600 hover:text-autocycle-green">Recycling</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#contact" className="text-gray-600 hover:text-autocycle-green">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-autocycle-green">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-autocycle-green">Resources</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} AutoCycle. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-autocycle-green">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-autocycle-green">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-autocycle-green">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
