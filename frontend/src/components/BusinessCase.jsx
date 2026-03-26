import React from 'react';
import { businessCaseData } from '../data/mockData';
import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp, Check, Minus } from 'lucide-react';

const BusinessCase = () => {
  return (
    <section className="bg-[#080C14] py-28 md:py-40 relative overflow-hidden">
      <div className="absolute top-1/2 right-[-200px] w-[500px] h-[500px] bg-[#d4a853]/2 rounded-full blur-[140px] -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-3 text-white/20 text-xs font-semibold uppercase tracking-[0.2em] mb-5 justify-center">
            <div className="w-10 h-px bg-white/15" />
            {businessCaseData.sectionTag}
            <div className="w-10 h-px bg-white/15" />
          </span>
          <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold text-white leading-[0.95] tracking-tight">
            This isn&apos;t a cost —<br /><span className="gradient-text-gold">it&apos;s a profit lever.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 md:p-10 border border-white/[0.04] bg-white/[0.01]"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-xl bg-[#14b8a6]/8 flex items-center justify-center">
                <TrendingDown size={18} className="text-[#14b8a6]/80" />
              </div>
              <h3 className="text-white font-bold text-lg tracking-tight">What It Saves You</h3>
            </div>
            <ul className="space-y-4">
              {businessCaseData.saves.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Minus size={14} className="text-[#14b8a6]/50 mt-1 flex-shrink-0" />
                  <span className="text-white/40 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 md:p-10 border border-[#d4a853]/8 bg-[#d4a853]/[0.02]"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-xl bg-[#d4a853]/8 flex items-center justify-center">
                <TrendingUp size={18} className="text-[#d4a853]/80" />
              </div>
              <h3 className="text-white font-bold text-lg tracking-tight">What It Helps You Earn</h3>
            </div>
            <ul className="space-y-4">
              {businessCaseData.earns.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={14} className="text-[#d4a853]/60 mt-1 flex-shrink-0" />
                  <span className="text-white/40 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 p-6 md:p-8 rounded-2xl bg-[#d4a853]/[0.03] border border-[#d4a853]/8 text-center"
        >
          <p className="text-[#d4a853]/70 text-sm md:text-base font-semibold tracking-tight">
            {businessCaseData.callout}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessCase;
