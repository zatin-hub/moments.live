import React from 'react';
import { heroData } from '../data/mockData';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const LandingHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0B1120]">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#2D4A2D]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#14b8a6]/5 rounded-full blur-[100px]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-28 md:pt-32 pb-16 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Content */}
          <div className="flex-1 max-w-2xl">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#2D4A2D]/20 border border-[#2D4A2D]/30 rounded-full px-4 py-1.5 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[#3D6B4F] animate-pulse" />
              <span className="text-[#7bc47f] text-sm font-medium">Media Management for Photographers</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6"
            >
              Cut your costs.{' '}
              <br />
              <span className="gradient-text-gold">Grow your revenue.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/50 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            >
              {heroData.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-[#2D4A2D] text-white px-7 py-3.5 rounded-lg text-base font-medium hover:bg-[#3D6B4F] transition-colors duration-300 flex items-center justify-center gap-2 btn-shine">
                Start Free Trial
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => {
                  const el = document.querySelector('#how-it-works');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-white/10 text-white/70 px-7 py-3.5 rounded-lg text-base font-medium hover:border-white/20 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play size={14} />
                See How It Works
              </button>
            </motion.div>

            {/* Trust indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2D4A2D] to-[#1a2e1a] border-2 border-[#0B1120] flex items-center justify-center text-white/60 text-xs font-medium">
                    {String.fromCharCode(64 + i * 3)}
                  </div>
                ))}
              </div>
              <p className="text-white/30 text-sm">Trusted by photographers across India</p>
            </motion.div>
          </div>

          {/* Right: Dashboard Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 w-full max-w-2xl"
          >
            <div className="relative">
              {/* Glow behind screenshot */}
              <div className="absolute -inset-4 bg-[#2D4A2D]/10 rounded-2xl blur-2xl" />
              <img
                src={heroData.dashboardImage}
                alt="Moments.Live Dashboard"
                className="dashboard-screenshot w-full relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B1120] to-transparent" />
    </section>
  );
};

export default LandingHero;
