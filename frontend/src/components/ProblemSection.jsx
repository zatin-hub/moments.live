import React from 'react';
import { problemData, opportunityData } from '../data/mockData';
import { motion } from 'framer-motion';
import { FolderOpen, MessageCircle, RefreshCw, TrendingDown } from 'lucide-react';

const iconMap = {
  FolderOpen, MessageCircle, RefreshCw, TrendingDown
};

const ProblemSection = () => {
  return (
    <section className="bg-[#0B1120] py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-red-500/3 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 text-white/30 text-sm font-medium uppercase tracking-widest">
            <div className="w-8 h-px bg-white/20" />
            {problemData.sectionTag}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6 max-w-3xl"
        >
          {problemData.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-white/40 text-lg mb-14 max-w-2xl"
        >
          {problemData.description}
        </motion.p>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {problemData.painPoints.map((point, i) => {
            const Icon = iconMap[point.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="glass rounded-xl p-6 flex items-start gap-4 group hover:border-red-500/10 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/15 transition-colors">
                  <Icon size={18} className="text-red-400/70" />
                </div>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  {point.title}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Opportunity callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 p-8 md:p-10 rounded-2xl border border-[#d4a853]/15 bg-[#d4a853]/3 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#d4a853]/5 rounded-full blur-[80px]" />
          <span className="inline-flex items-center gap-2 text-[#d4a853]/60 text-sm font-medium uppercase tracking-widest mb-4">
            <div className="w-8 h-px bg-[#d4a853]/30" />
            {opportunityData.sectionTag}
          </span>
          <h3 className="font-playfair text-2xl md:text-3xl text-white leading-tight mb-4 max-w-3xl">
            {opportunityData.headline}
          </h3>
          <p className="text-white/40 text-base leading-relaxed mb-6 max-w-2xl">
            {opportunityData.description}
          </p>
          <div className="border-l-2 border-[#d4a853]/30 pl-5">
            <p className="text-[#d4a853]/80 text-sm md:text-base italic leading-relaxed">
              {opportunityData.callout}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
