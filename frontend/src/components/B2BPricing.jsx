import React from 'react';
import { pricingData } from '../data/mockData';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const PricingCard = ({ plan, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -8 }}
    className={`relative rounded-3xl p-7 md:p-8 flex flex-col border transition-all duration-500 ${
      plan.popular
        ? 'border-[#294D32]/20 bg-[#294D32]/[0.03] shadow-md shadow-[#294D32]/5'
        : 'border-[#D1D7C9]/20 bg-white/50 backdrop-blur-sm'
    }`}
  >
    {plan.popular && (
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
        <span className="bg-[#294D32] text-white text-[10px] font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-md shadow-[#294D32]/15 uppercase tracking-wider">
          <Sparkles size={10} />Most Popular
        </span>
      </div>
    )}
    <div className="mb-5">
      <h4 className="text-[#000000] font-bold text-base tracking-tight mb-0.5">{plan.name}</h4>
      <p className="text-[#68798B]/50 text-xs font-medium">{plan.subtitle}</p>
    </div>
    <div className="mb-7">
      <span className="text-[#000000] font-bold text-[2.8rem] tracking-tight">\u20b9{plan.price}</span>
      <span className="text-[#68798B]/40 text-sm font-medium">{plan.period}</span>
    </div>
    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
      className={`w-full py-3.5 rounded-full text-sm font-bold transition-colors duration-300 mb-7 ${
        plan.popular
          ? 'bg-[#294D32] text-white hover:bg-[#1e3a25] shadow-md shadow-[#294D32]/10'
          : 'border border-[#D1D7C9] text-[#68798B] hover:border-[#294D32]/30 hover:text-[#000000]'
      }`}>
      Start Free Trial
    </motion.button>
    <ul className="space-y-3 flex-1">
      {plan.features.map((f) => (
        <li key={f} className="flex items-start gap-2.5">
          <Check size={13} className="text-[#294D32]/60 mt-0.5 flex-shrink-0" />
          <span className="text-[#68798B] text-sm font-medium">{f}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const B2BPricing = () => {
  return (
    <section id="pricing" className="bg-[#F3F7EF] py-28 md:py-40 relative overflow-hidden">
      <div className="absolute bottom-[-200px] left-1/3 w-[500px] h-[500px] bg-[#D1D7C9]/15 rounded-full blur-[140px]" />
      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-[#68798B]/50 text-xs font-semibold uppercase tracking-[0.2em] mb-5 block">Pricing</span>
          <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-[#000000] leading-[1.0] mb-4 tracking-tight">{pricingData.headline}</h2>
          <p className="text-[#68798B]/60 text-base max-w-xl mx-auto font-light">{pricingData.description}</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pricingData.plans.map((plan, i) => (<PricingCard key={plan.name} plan={plan} index={i} />))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-8 p-6 rounded-2xl bg-white/40 border border-[#D1D7C9]/20 text-center">
          <p className="text-[#68798B] text-sm font-medium">{pricingData.trialCallout}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default B2BPricing;
