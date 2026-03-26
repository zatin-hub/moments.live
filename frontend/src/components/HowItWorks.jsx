import React from 'react';
import { howItWorksData } from '../data/mockData';
import { motion } from 'framer-motion';
import { Plus, Upload, QrCode, Sparkles, Heart } from 'lucide-react';

const iconMap = { Plus, Upload, QrCode, Sparkles, Heart };

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-[#060a11] py-28 md:py-40 relative overflow-hidden">
      <div className="absolute top-0 left-[-200px] w-[500px] h-[500px] bg-[#2D4A2D]/3 rounded-full blur-[120px]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-white/20 text-xs font-semibold uppercase tracking-[0.2em] mb-5 block">
            {howItWorksData.sectionTag}
          </span>
          <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold text-white leading-[0.95] tracking-tight">
            Set up once.<br /><span className="text-white/30">Run it like a pro every time.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {howItWorksData.steps.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, borderColor: 'rgba(61,107,79,0.15)' }}
                className="relative rounded-2xl p-6 text-center group border border-white/[0.03] bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-500"
              >
                <div className="text-white/[0.03] font-bold text-[4rem] leading-none absolute top-2 right-4 select-none">
                  {step.number}
                </div>

                <div className="w-14 h-14 rounded-2xl bg-[#2D4A2D]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#2D4A2D]/20 transition-colors duration-500">
                  <Icon size={22} className="text-[#7bc47f]/70 group-hover:text-[#7bc47f] transition-colors" />
                </div>

                <h4 className="text-white font-bold text-sm mb-2 tracking-tight">{step.title}</h4>
                <p className="text-white/25 text-xs leading-relaxed font-medium">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
