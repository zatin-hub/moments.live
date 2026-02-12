import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/500.css';
import '@fontsource/playfair-display/600.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AIPhotoFinder from './components/AIPhotoFinder';
import MomentsBot from './components/MomentsBot';
import WaveGoodbye from './components/WaveGoodbye';
import Testimonials from './components/Testimonials';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import FloatingStamp from './components/FloatingStamp';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <Navbar />
      <FloatingStamp />
      <HeroSection />
      <FeaturesSection />
      <AIPhotoFinder />
      <MomentsBot />
      <WaveGoodbye />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <ContactCTA />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
