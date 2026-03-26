import React, { useState } from 'react';
import { platformFeaturesData } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';

const PlatformFeatures = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#F3F7EF] py-28 md:py-40 relative overflow-hidden">
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#D1D7C9]/20 rounded-full blur-[150px]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-3 text-[#68798B]/50 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            <div className="w-10 h-px bg-[#D1D7C9]" />
            {platformFeaturesData.sectionTag}
          </span>
          <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-[#000000] leading-[1.0] mb-4 max-w-4xl tracking-tight">
            {platformFeaturesData.headline}
          </h2>
          <p className="text-[#294D32] text-base md:text-lg font-semibold">{platformFeaturesData.tagline}</p>
        </motion.div>

        <div className="mt-16 flex flex-col lg:flex-row gap-6">
          <div className="lg:w-[340px] flex-shrink-0">
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              {platformFeaturesData.features.map((f, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActive(i)}
                  whileHover={{ x: active === i ? 0 : 4 }}
                  className={`text-left px-5 py-5 rounded-2xl transition-all duration-400 flex-shrink-0 lg:flex-shrink border ${
                    active === i
                      ? 'bg-white/70 backdrop-blur-sm border-[#D1D7C9]/40 shadow-sm'
                      : 'border-transparent hover:bg-white/30'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${active === i ? 'bg-[#294D32]' : 'bg-[#D1D7C9]'}`} />
                    <h4 className={`text-sm font-bold transition-colors duration-300 ${active === i ? 'text-[#000000]' : 'text-[#68798B]/50'}`}>{f.title}</h4>
                  </div>
                  <p className={`text-xs leading-relaxed pl-4 transition-colors duration-300 ${active === i ? 'text-[#68798B]' : 'text-[#68798B]/30'}`}>{f.description}</p>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.97, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.02, filter: 'blur(4px)' }}
                transition={{ duration: 0.35 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-[#294D32]/3 rounded-3xl blur-2xl" />
                <img src={platformFeaturesData.features[active].image} alt={platformFeaturesData.features[active].title} className="dashboard-screenshot w-full relative z-10" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;
