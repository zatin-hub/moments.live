import React from 'react';
import { heroData } from '../data/mockData';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const WordReveal = ({ text, delay = 0, className = '' }) => {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', rotateX: 40 }}
            animate={{ y: '0%', rotateX: 0 }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

const LandingHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#080C14]">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#2D4A2D]/6 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-100px] right-[-200px] w-[500px] h-[500px] bg-[#14b8a6]/3 rounded-full blur-[120px]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-28 md:pt-32 pb-16 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Content */}
          <div className="flex-1 max-w-2xl">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 bg-[#2D4A2D]/15 border border-[#2D4A2D]/25 rounded-full px-4 py-2 mb-10"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#7bc47f] animate-pulse-glow" />
              <span className="text-[#7bc47f] text-xs font-medium tracking-wide uppercase">Media Management for Photographers</span>
            </motion.div>

            {/* Headline - dramatic reveal */}
            <h1 className="text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold text-white leading-[0.95] mb-8 tracking-tight">
              <WordReveal text="Cut your costs." delay={0.2} />
              <br />
              <span className="gradient-text-gold">
                <WordReveal text="Grow your revenue." delay={0.5} />
              </span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="text-white/40 text-lg md:text-xl leading-relaxed mb-12 max-w-lg font-light"
            >
              {heroData.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#2D4A2D] text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-[#3D6B4F] transition-colors duration-300 flex items-center justify-center gap-2.5 btn-shine shadow-lg shadow-[#2D4A2D]/20"
              >
                Start Free Trial
                <ArrowRight size={15} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                onClick={() => {
                  const el = document.querySelector('#how-it-works');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-white/8 text-white/50 px-8 py-4 rounded-xl text-sm font-medium hover:border-white/15 hover:text-white/80 transition-all duration-300 flex items-center justify-center gap-2.5 backdrop-blur-sm"
              >
                <Play size={13} fill="currentColor" />
                See How It Works
              </motion.button>
            </motion.div>

            {/* Trust */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="mt-12 flex items-center gap-4"
            >
              <div className="flex -space-x-2.5">
                {['R', 'A', 'S', 'K'].map((c, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1a2e1a] to-[#2D4A2D] border-2 border-[#080C14] flex items-center justify-center text-white/50 text-[10px] font-semibold">
                    {c}
                  </div>
                ))}
              </div>
              <p className="text-white/20 text-xs font-medium tracking-wide">Trusted by photographers across India</p>
            </motion.div>
          </div>

          {/* Right: Dashboard Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full max-w-2xl perspective-[1200px]"
          >
            <motion.div
              whileHover={{ rotateY: -2, rotateX: 2, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="relative"
            >
              {/* Glow behind */}
              <div className="absolute -inset-8 bg-[#2D4A2D]/8 rounded-3xl blur-3xl" />
              <img
                src={heroData.dashboardImage}
                alt="Moments.Live Dashboard"
                className="dashboard-screenshot w-full relative z-10"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080C14] to-transparent" />
    </section>
  );
};

export default LandingHero;
