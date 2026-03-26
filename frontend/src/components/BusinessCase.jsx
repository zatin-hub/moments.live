import React from 'react';
import { businessCaseData } from '../data/mockData';
import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp, Check, X } from 'lucide-react';

const BusinessCase = () => {
  return (
    <section className="bg-[#0B1120] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#d4a853]/3 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-white/30 text-sm font-medium uppercase tracking-widest mb-4">
            <div className="w-8 h-px bg-white/20" />
            {businessCaseData.sectionTag}
            <div className="w-8 h-px bg-white/20" />
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            {businessCaseData.headline}
          </h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Saves */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#14b8a6]/10 flex items-center justify-center">
                <TrendingDown size={18} className="text-[#14b8a6]" />
              </div>
              <h3 className="text-white font-semibold text-lg">What It Saves You</h3>
            </div>
            <ul className="space-y-4">
              {businessCaseData.saves.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#14b8a6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={10} className="text-[#14b8a6]" />
                  </div>
                  <span className="text-white/50 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Earns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 border-[#d4a853]/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#d4a853]/10 flex items-center justify-center">
                <TrendingUp size={18} className="text-[#d4a853]" />
              </div>
              <h3 className="text-white font-semibold text-lg">What It Helps You Earn</h3>
            </div>
            <ul className="space-y-4">
              {businessCaseData.earns.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#d4a853]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={10} className="text-[#d4a853]" />
                  </div>
                  <span className="text-white/50 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-6 rounded-xl bg-[#d4a853]/5 border border-[#d4a853]/10 text-center"
        >
          <p className="text-[#d4a853]/80 text-sm md:text-base font-medium">
            {businessCaseData.callout}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessCase;
