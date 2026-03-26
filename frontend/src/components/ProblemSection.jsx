import React from 'react';
import { problemData, opportunityData } from '../data/mockData';
import { motion } from 'framer-motion';
import { FolderOpen, MessageCircle, RefreshCw, TrendingDown } from 'lucide-react';

const iconMap = { FolderOpen, MessageCircle, RefreshCw, TrendingDown };

const RevealText = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const ProblemSection = () => {
  return (
    <section className="bg-[#080C14] py-28 md:py-40 relative overflow-hidden">
      <div className="absolute top-1/2 left-[-200px] w-[400px] h-[400px] bg-red-500/2 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <RevealText>
          <span className="inline-flex items-center gap-3 text-white/20 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            <div className="w-10 h-px bg-white/15" />
            {problemData.sectionTag}
          </span>
        </RevealText>

        <RevealText delay={0.05}>
          <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-white leading-[1.0] mb-6 max-w-4xl tracking-tight">
            {problemData.headline}
          </h2>
        </RevealText>

        <RevealText delay={0.1}>
          <p className="text-white/30 text-lg md:text-xl mb-16 max-w-2xl font-light leading-relaxed">
            {problemData.description}
          </p>
        </RevealText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {problemData.painPoints.map((point, i) => {
            const Icon = iconMap[point.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, borderColor: 'rgba(239,68,68,0.12)' }}
                className="rounded-2xl p-6 flex items-start gap-4 group border border-white/[0.03] bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-500"
              >
                <div className="w-11 h-11 rounded-xl bg-red-500/8 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/12 transition-colors duration-500">
                  <Icon size={18} className="text-red-400/60 group-hover:text-red-400/90 transition-colors" />
                </div>
                <p className="text-white/45 text-sm md:text-[15px] leading-relaxed font-medium group-hover:text-white/60 transition-colors">
                  {point.title}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Opportunity callout */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-24 p-8 md:p-12 rounded-3xl border border-[#d4a853]/10 bg-[#d4a853]/[0.02] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#d4a853]/3 rounded-full blur-[100px]" />
          <span className="inline-flex items-center gap-3 text-[#d4a853]/50 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            <div className="w-10 h-px bg-[#d4a853]/20" />
            {opportunityData.sectionTag}
          </span>
          <h3 className="text-[1.8rem] md:text-[2.5rem] font-bold text-white leading-[1.05] mb-5 max-w-3xl tracking-tight">
            {opportunityData.headline}
          </h3>
          <p className="text-white/30 text-base md:text-lg leading-relaxed mb-8 max-w-2xl font-light">
            {opportunityData.description}
          </p>
          <div className="border-l-2 border-[#d4a853]/25 pl-6">
            <p className="text-[#d4a853]/70 text-sm md:text-base italic leading-relaxed font-medium">
              {opportunityData.callout}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
