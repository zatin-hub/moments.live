import React, { useState } from 'react';
import { platformFeaturesData } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';

const PlatformFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="bg-[#0B1120] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#14b8a6]/3 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 text-white/30 text-sm font-medium uppercase tracking-widest mb-4">
            <div className="w-8 h-px bg-white/20" />
            {platformFeaturesData.sectionTag}
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4 max-w-3xl">
            {platformFeaturesData.headline}
          </h2>
          <p className="text-[#7bc47f] text-base font-medium">
            {platformFeaturesData.tagline}
          </p>
        </motion.div>

        {/* Feature tabs + screenshot */}
        <div className="mt-14 flex flex-col lg:flex-row gap-8">
          {/* Tab list */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              {platformFeaturesData.features.map((feature, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFeature(i)}
                  className={`text-left px-4 py-4 rounded-xl transition-all duration-300 flex-shrink-0 lg:flex-shrink ${
                    activeFeature === i
                      ? 'bg-white/5 border border-white/10'
                      : 'hover:bg-white/3 border border-transparent'
                  }`}
                >
                  <h4 className={`text-sm font-semibold mb-1 transition-colors ${
                    activeFeature === i ? 'text-white' : 'text-white/40'
                  }`}>
                    {feature.title}
                  </h4>
                  <p className={`text-xs leading-relaxed transition-colors ${
                    activeFeature === i ? 'text-white/50' : 'text-white/20'
                  }`}>
                    {feature.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Screenshot display */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="absolute -inset-3 bg-[#2D4A2D]/6 rounded-2xl blur-xl" />
                <img
                  src={platformFeaturesData.features[activeFeature].image}
                  alt={platformFeaturesData.features[activeFeature].title}
                  className="dashboard-screenshot w-full relative z-10"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;
