import React from 'react';
import { businessCaseData } from '../data/mockData';
import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp, Check, Minus } from 'lucide-react';

const BusinessCase = () => {
  return (
    <section className="bg-[#F3F7EF] py-28 md:py-40 relative overflow-hidden">
      <div className="absolute top-1/2 right-[-200px] w-[500px] h-[500px] bg-[#F4D0D8]/10 rounded-full blur-[140px] -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-3 text-[#68798B]/50 text-xs font-semibold uppercase tracking-[0.2em] mb-5 justify-center">
            <div className="w-10 h-px bg-[#D1D7C9]" />
            {businessCaseData.sectionTag}
            <div className="w-10 h-px bg-[#D1D7C9]" />
          </span>
          <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold text-[#000000] leading-[0.95] tracking-tight">
            This isn&apos;t a cost &mdash;<br /><span className="gradient-text-green">it&apos;s a profit lever.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 md:p-10 bg-white/50 backdrop-blur-sm border border-[#D1D7C9]/20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-xl bg-[#F3F7EF] flex items-center justify-center"><TrendingDown size={18} className="text-[#294D32]/60" /></div>
              <h3 className="text-[#000000] font-bold text-lg tracking-tight">What It Saves You</h3>
            </div>
            <ul className="space-y-4">
              {businessCaseData.saves.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Minus size={14} className="text-[#D1D7C9] mt-1 flex-shrink-0" />
                  <span className="text-[#68798B] text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 md:p-10 bg-[#294D32]/[0.03] border border-[#294D32]/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-xl bg-[#294D32]/8 flex items-center justify-center"><TrendingUp size={18} className="text-[#294D32]/80" /></div>
              <h3 className="text-[#000000] font-bold text-lg tracking-tight">What It Helps You Earn</h3>
            </div>
            <ul className="space-y-4">
              {businessCaseData.earns.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={14} className="text-[#294D32]/60 mt-1 flex-shrink-0" />
                  <span className="text-[#68798B] text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-6 p-6 md:p-8 rounded-2xl bg-[#294D32]/[0.04] border border-[#294D32]/8 text-center">
          <p className="text-[#294D32]/70 text-sm md:text-base font-semibold tracking-tight">{businessCaseData.callout}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessCase;
