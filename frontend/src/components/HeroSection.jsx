import React from 'react';
import { heroData } from '../data/mockData';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const handleGetStarted = () => {
    const el = document.querySelector('#pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden" style={{
      background: 'linear-gradient(180deg, #f5e6f0 0%, #fce4d6 30%, #fdf0e6 60%, #f5f0e8 100%)'
    }}>
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-[10%] opacity-40 pointer-events-none">
        <img
          src="https://framerusercontent.com/images/aQ94F4G8HO1Ys20hvX1pqjF9Yg0.png?width=200"
          alt=""
          className="w-16 md:w-24 animate-float"
        />
      </div>
      <div className="absolute top-32 right-[10%] opacity-30 pointer-events-none">
        <img
          src="https://framerusercontent.com/images/aQ94F4G8HO1Ys20hvX1pqjF9Yg0.png?width=200"
          alt=""
          className="w-12 md:w-20 animate-float-delayed"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-28 md:pt-36 pb-10 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-5 py-2 mb-8 shadow-sm"
        >
          <span className="text-[#2D4A2D] font-bold text-lg">50+</span>
          <span className="text-[#4a4a4a] text-sm">captured their once-in-a-lifetime celebration with us</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-playfair text-4xl md:text-6xl lg:text-7xl text-[#1a1a1a] leading-tight mb-6 max-w-4xl mx-auto"
        >
          {heroData.heading}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[#5a5a5a] text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {heroData.subheading}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleGetStarted}
          className="bg-[#2D4A2D] text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-[#1e351e] transition-colors duration-300 shadow-lg"
        >
          Get Started
        </motion.button>

        {/* Phone mockups */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 md:mt-16 relative flex justify-center items-end gap-4 md:gap-8"
        >
          {/* Left decorative lotus */}
          <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 opacity-50">
            <div className="text-pink-300 text-6xl">❁</div>
          </div>

          {/* Left phone */}
          <div className="hidden md:block w-40 lg:w-52 transform -rotate-6 translate-y-8">
            <img
              src="https://framerusercontent.com/images/4gUTaXRRsQSb28cFENZRJcdetg.png?scale-down-to=512"
              alt="Moments App QR"
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>

          {/* Center phone (main) */}
          <div className="w-56 md:w-64 lg:w-72 relative">
            <img
              src="https://framerusercontent.com/images/R3U796O2tu9nCkGBUHnkHx4rI.png?scale-down-to=512"
              alt="Moments App Feed"
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>

          {/* Right phone */}
          <div className="hidden md:block w-40 lg:w-52 transform rotate-6 translate-y-8">
            <img
              src="https://framerusercontent.com/images/9uII71v5xBbuKsydXxfhr9VKAE.png?scale-down-to=512"
              alt="Moments App Onboarding"
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>

          {/* Right decorative lotus */}
          <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 opacity-50">
            <div className="text-pink-300 text-6xl">❁</div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f5f0e8] to-transparent" />
    </section>
  );
};

export default HeroSection;
