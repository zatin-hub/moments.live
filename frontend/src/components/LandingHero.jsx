import React from 'react';
import { heroData } from '../data/mockData';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const GRADIENT_BG = 'https://customer-assets.emergentagent.com/job_moment-keeper-7/artifacts/ts2432xm_Frame%2026085796.png';

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
            transition={{ duration: 0.7, delay: delay + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FFF5E9]">
      {/* Gradient background image as decorative element */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={GRADIENT_BG}
          alt=""
          className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[120%] max-w-[1600px] h-auto opacity-40 blur-sm"
        />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(#294D32 1px, transparent 1px), linear-gradient(90deg, #294D32 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-28 md:pt-32 pb-16 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Content */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 bg-[#F3F7EF] border border-[#D1D7C9] rounded-full px-4 py-2 mb-10"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#294D32] animate-pulse-glow" />
              <span className="text-[#294D32] text-xs font-semibold tracking-wide uppercase">Media Management for Photographers</span>
            </motion.div>

            <h1 className="text-[3.2rem] md:text-[4.2rem] lg:text-[5.2rem] font-bold text-[#000000] leading-[0.95] mb-8 tracking-tight">
              <WordReveal text="Cut your costs." delay={0.2} />
              <br />
              <span className="gradient-text-green">
                <WordReveal text="Grow your revenue." delay={0.5} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="text-[#68798B] text-lg md:text-xl leading-relaxed mb-12 max-w-lg font-light"
            >
              {heroData.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#294D32] text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-[#1e3a25] transition-colors duration-300 flex items-center justify-center gap-2.5 btn-shine shadow-lg shadow-[#294D32]/15"
              >
                Start Free Trial
                <ArrowRight size={15} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                onClick={() => { const el = document.querySelector('#how-it-works'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
                className="border border-[#D1D7C9] text-[#68798B] px-8 py-4 rounded-full text-sm font-medium hover:border-[#294D32]/30 hover:text-[#000000] transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <Play size={13} fill="currentColor" />
                See How It Works
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="mt-12 flex items-center gap-4"
            >
              <div className="flex -space-x-2.5">
                {['R', 'A', 'S', 'K'].map((c, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-[#F3F7EF] border-2 border-[#FFF5E9] flex items-center justify-center text-[#294D32] text-[10px] font-bold">{c}</div>
                ))}
              </div>
              <p className="text-[#68798B]/60 text-xs font-medium tracking-wide">Trusted by photographers across India</p>
            </motion.div>
          </div>

          {/* Right: Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full max-w-2xl"
          >
            <motion.div
              whileHover={{ rotateY: -2, rotateX: 2, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="relative" style={{ perspective: '1200px' }}
            >
              <div className="absolute -inset-6 bg-[#F4D0D8]/15 rounded-3xl blur-3xl" />
              <img src={heroData.dashboardImage} alt="Moments.Live Dashboard" className="dashboard-screenshot w-full relative z-10" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFF5E9] to-transparent" />
    </section>
  );
};

export default LandingHero;
