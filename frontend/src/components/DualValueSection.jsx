import React, { useState } from 'react';
import { dualValueData } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DualValueSection = () => {
  const [activeLayer, setActiveLayer] = useState(0);
  const navigate = useNavigate();

  return (
    <section id="platform" className="bg-[#FFF5E9] py-28 md:py-40 relative overflow-hidden">
      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-[#F4D0D8]/10 rounded-full blur-[150px]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-[#294D32] text-xs font-semibold uppercase tracking-[0.2em] mb-5 block">
            {dualValueData.sectionTag}
          </span>
          <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold text-[#000000] leading-[0.95] tracking-tight">
            Manage more.<br className="hidden md:block" /> Charge more.<br className="hidden md:block" /> <span className="gradient-text-green">Deliver better.</span>
          </h2>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white/60 backdrop-blur-sm rounded-full p-1.5 border border-[#D1D7C9]/30">
            {dualValueData.layers.map((layer, i) => (
              <button
                key={i}
                onClick={() => setActiveLayer(i)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-400 ${
                  activeLayer === i
                    ? 'bg-[#294D32] text-white shadow-md shadow-[#294D32]/15'
                    : 'text-[#68798B] hover:text-[#000000]'
                }`}
              >{layer.tag}</button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLayer}
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20"
          >
            <div className="flex-1 max-w-xl">
              <div className="inline-flex items-center gap-2 bg-[#F3F7EF] border border-[#D1D7C9] rounded-full px-3 py-1.5 mb-5">
                <span className="text-[#294D32] text-xs font-semibold">{dualValueData.layers[activeLayer].subtitle}</span>
              </div>
              <h3 className="text-[2rem] md:text-[2.8rem] font-bold text-[#000000] leading-[1.05] mb-5 tracking-tight">
                {dualValueData.layers[activeLayer].title}
              </h3>
              <p className="text-[#68798B] text-base md:text-lg leading-relaxed mb-8 font-light">
                {dualValueData.layers[activeLayer].description}
              </p>
              <ul className="space-y-3.5 mb-8">
                {dualValueData.layers[activeLayer].features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#294D32]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-[#294D32]" />
                    </div>
                    <span className="text-[#68798B] text-sm font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              {activeLayer === 1 && (
                <motion.button whileHover={{ x: 5 }} onClick={() => navigate('/guest-app')} className="text-[#294D32] text-sm font-bold flex items-center gap-2">
                  Explore the Guest App <ArrowRight size={14} />
                </motion.button>
              )}
            </div>
            <div className="flex-1 w-full max-w-xl">
              {dualValueData.layers[activeLayer].isPhone ? (
                <div className="flex justify-center">
                  <motion.div whileHover={{ y: -8, rotate: 1 }} transition={{ type: 'spring', stiffness: 200 }} className="w-56 md:w-64">
                    <div className="bg-[#1a1a1a] rounded-[2.5rem] p-2 shadow-2xl"><img src={dualValueData.layers[activeLayer].image} alt="" className="w-full rounded-[2rem]" /></div>
                  </motion.div>
                </div>
              ) : (
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 200 }} className="relative">
                  <div className="absolute -inset-6 bg-[#AC5BC0]/5 rounded-3xl blur-2xl" />
                  <img src={dualValueData.layers[activeLayer].image} alt="" className="dashboard-screenshot w-full relative z-10" />
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DualValueSection;
