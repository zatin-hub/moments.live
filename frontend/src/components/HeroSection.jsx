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
      background: 'linear-gradient(180deg, #e8d0e0 0%, #f0d8cc 25%, #fce4d6 50%, #fdf0e6 75%, #f5f0e8 100%)'
    }}>
      {/* Subtle decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[5%] w-32 h-32 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-[10%] w-40 h-40 bg-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-[20%] w-48 h-48 bg-orange-200/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-28 md:pt-36 pb-10 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8 shadow-sm border border-white/40"
        >
          <span className="text-[#2D4A2D] font-bold text-lg">50+</span>
          <span className="text-[#4a4a4a] text-sm font-medium">captured their once-in-a-lifetime celebration with us</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-playfair text-4xl md:text-6xl lg:text-7xl text-[#1a1a1a] leading-[1.1] mb-6 max-w-4xl mx-auto"
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
          className="mt-14 md:mt-20 relative flex justify-center items-end"
        >
          {/* Decorative elements - lotus flowers */}
          <div className="hidden lg:block absolute -left-8 bottom-1/3 z-0">
            <img
              src="https://framerusercontent.com/images/aQ94F4G8HO1Ys20hvX1pqjF9Yg0.png?width=120"
              alt=""
              className="w-16 opacity-40 animate-float"
            />
          </div>
          <div className="hidden lg:block absolute -right-8 bottom-1/3 z-0">
            <img
              src="https://framerusercontent.com/images/aQ94F4G8HO1Ys20hvX1pqjF9Yg0.png?width=120"
              alt=""
              className="w-16 opacity-40 animate-float-delayed"
            />
          </div>

          {/* Left phone */}
          <div className="hidden md:block w-36 lg:w-44 transform -rotate-6 translate-y-12 z-10">
            <div className="bg-black rounded-[2rem] p-1.5 shadow-2xl">
              <img
                src="https://framerusercontent.com/images/4gUTaXRRsQSb28cFENZRJcdetg.png?scale-down-to=512"
                alt="Moments App QR"
                className="w-full rounded-[1.75rem]"
              />
            </div>
          </div>

          {/* Center phone (main) */}
          <div className="w-52 md:w-60 lg:w-68 relative z-20 mx-4 md:mx-6">
            <div className="bg-black rounded-[2.5rem] p-2 shadow-2xl">
              <img
                src="https://framerusercontent.com/images/R3U796O2tu9nCkGBUHnkHx4rI.png?scale-down-to=512"
                alt="Moments App Feed"
                className="w-full rounded-[2rem]"
              />
            </div>
          </div>

          {/* Right phone */}
          <div className="hidden md:block w-36 lg:w-44 transform rotate-6 translate-y-12 z-10">
            <div className="bg-black rounded-[2rem] p-1.5 shadow-2xl">
              <img
                src="https://framerusercontent.com/images/9uII71v5xBbuKsydXxfhr9VKAE.png?scale-down-to=512"
                alt="Moments App Onboarding"
                className="w-full rounded-[1.75rem]"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f5f0e8] to-transparent" />
    </section>
  );
};

export default HeroSection;
