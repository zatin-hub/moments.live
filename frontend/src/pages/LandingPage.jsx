import React from 'react';
import Navbar from '../components/Navbar';
import LandingHero from '../components/LandingHero';
import ProblemSection from '../components/ProblemSection';
import DualValueSection from '../components/DualValueSection';
import PlatformFeatures from '../components/PlatformFeatures';
import HowItWorks from '../components/HowItWorks';
import BusinessCase from '../components/BusinessCase';
import B2BTestimonials from '../components/B2BTestimonials';
import B2BPricing from '../components/B2BPricing';
import WhyNowAndCTA from '../components/WhyNowAndCTA';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0B1120]">
      <Navbar />
      <LandingHero />
      <ProblemSection />
      <DualValueSection />
      <PlatformFeatures />
      <HowItWorks />
      <BusinessCase />
      <B2BTestimonials />
      <B2BPricing />
      <WhyNowAndCTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
