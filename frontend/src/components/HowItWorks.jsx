import React from 'react';
import { howItWorksData } from '../data/mockData';
import { motion } from 'framer-motion';
import { Plus, Upload, QrCode, Sparkles, Heart } from 'lucide-react';

const iconMap = { Plus, Upload, QrCode, Sparkles, Heart };

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-[#0a0f1c] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#2D4A2D]/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-white/30 text-sm font-medium uppercase tracking-widest mb-4">
            {howItWorksData.sectionTag}
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            {howItWorksData.headline}
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {howItWorksData.steps.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative glass rounded-xl p-6 text-center group hover:border-[#2D4A2D]/20 transition-all duration-500"
              >
                {/* Step number */}
                <div className="text-white/5 font-playfair text-5xl font-bold absolute top-3 right-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#2D4A2D]/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2D4A2D]/25 transition-colors">
                  <Icon size={20} className="text-[#7bc47f]" />
                </div>

                <h4 className="text-white font-semibold text-sm mb-2">{step.title}</h4>
                <p className="text-white/35 text-xs leading-relaxed">{step.description}</p>

                {/* Connector line (hidden on last) */}
                {i < howItWorksData.steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-white/10" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
