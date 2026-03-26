import React, { useState } from 'react';
import { dualValueData } from '../data/mockData';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DualValueSection = () => {
  const [activeLayer, setActiveLayer] = useState(0);
  const navigate = useNavigate();

  return (
    <section id="platform" className="bg-[#0a0f1c] py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2D4A2D]/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#7bc47f] text-sm font-medium uppercase tracking-widest mb-4">
            {dualValueData.sectionTag}
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl text-white leading-tight mb-4">
            {dualValueData.headline}
          </h2>
        </motion.div>

        {/* Layer toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/5 rounded-lg p-1 border border-white/5">
            {dualValueData.layers.map((layer, i) => (
              <button
                key={i}
                onClick={() => setActiveLayer(i)}
                className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeLayer === i
                    ? 'bg-[#2D4A2D] text-white shadow-lg'
                    : 'text-white/40 hover:text-white/60'
                }`}
              >
                {layer.tag}
              </button>
            ))}
          </div>
        </div>

        {/* Active layer content */}
        <motion.div
          key={activeLayer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        >
          {/* Content */}
          <div className="flex-1 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-[#2D4A2D]/15 rounded-full px-3 py-1 mb-4">
              <span className="text-[#7bc47f] text-xs font-medium">{dualValueData.layers[activeLayer].subtitle}</span>
            </div>
            <h3 className="font-playfair text-2xl md:text-4xl text-white leading-tight mb-4">
              {dualValueData.layers[activeLayer].title}
            </h3>
            <p className="text-white/40 text-base md:text-lg leading-relaxed mb-8">
              {dualValueData.layers[activeLayer].description}
            </p>
            <ul className="space-y-3 mb-8">
              {dualValueData.layers[activeLayer].features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#2D4A2D]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-[#7bc47f]" />
                  </div>
                  <span className="text-white/60 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            {activeLayer === 1 && (
              <button
                onClick={() => navigate('/guest-app')}
                className="text-[#7bc47f] text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all"
              >
                Explore the Guest App
                <ArrowRight size={14} />
              </button>
            )}
          </div>

          {/* Image */}
          <div className="flex-1 w-full max-w-xl">
            {dualValueData.layers[activeLayer].isPhone ? (
              <div className="flex justify-center">
                <div className="w-56 md:w-64">
                  <div className="bg-[#1a1a1a] rounded-[2.5rem] p-2 shadow-2xl glow-green">
                    <img
                      src={dualValueData.layers[activeLayer].image}
                      alt={dualValueData.layers[activeLayer].title}
                      className="w-full rounded-[2rem]"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative">
                <div className="absolute -inset-4 bg-[#2D4A2D]/8 rounded-2xl blur-2xl" />
                <img
                  src={dualValueData.layers[activeLayer].image}
                  alt={dualValueData.layers[activeLayer].title}
                  className="dashboard-screenshot w-full relative z-10"
                />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DualValueSection;
