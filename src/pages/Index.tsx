
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ConsultingBanner from '../components/ConsultingBanner';
import Benefits from '../components/Benefits';
import AboutUs from '../components/AboutUs';
import HowItWorks from '../components/HowItWorks';
import CircularEconomy from '../components/CircularEconomy';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';
import Newsletter from '../components/Newsletter';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ConsultingBanner />
        <Benefits />
        <AboutUs />
        <HowItWorks />
        <CircularEconomy />
        <Services />
        <Testimonial />
        <Newsletter />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
