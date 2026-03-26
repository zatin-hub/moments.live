import React from 'react';
import { pricingData } from '../data/mockData';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const PricingCard = ({ plan, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`relative glass rounded-2xl p-7 md:p-8 flex flex-col ${
      plan.popular ? 'border-[#2D4A2D]/30 ring-1 ring-[#2D4A2D]/15' : ''
    } hover:border-white/10 transition-all duration-500`}
  >
    {plan.popular && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span className="bg-[#2D4A2D] text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
          <Sparkles size={10} />
          Most Popular
        </span>
      </div>
    )}

    <div className="mb-5">
      <h4 className="text-white font-semibold text-base mb-0.5">{plan.name}</h4>
      <p className="text-white/30 text-xs">{plan.subtitle}</p>
    </div>

    <div className="mb-6">
      <span className="text-white font-playfair text-4xl font-bold">₹{plan.price}</span>
      <span className="text-white/30 text-sm">{plan.period}</span>
    </div>

    <button className={`w-full py-3 rounded-lg text-sm font-medium transition-colors duration-300 mb-6 ${
      plan.popular
        ? 'bg-[#2D4A2D] text-white hover:bg-[#3D6B4F]'
        : 'border border-white/10 text-white/70 hover:border-white/20 hover:text-white'
    }`}>
      Start Free Trial
    </button>

    <ul className="space-y-3 flex-1">
      {plan.features.map((feature) => (
        <li key={feature} className="flex items-start gap-2.5">
          <Check size={14} className="text-[#7bc47f] mt-0.5 flex-shrink-0" />
          <span className="text-white/45 text-sm">{feature}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const B2BPricing = () => {
  return (
    <section id="pricing" className="bg-[#0B1120] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#2D4A2D]/5 rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-white/30 text-sm font-medium uppercase tracking-widest mb-4">
            {pricingData.sectionTag}
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
            {pricingData.headline}
          </h2>
          <p className="text-white/35 text-base max-w-xl mx-auto">{pricingData.description}</p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pricingData.plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* Trial callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 p-6 rounded-xl bg-[#2D4A2D]/8 border border-[#2D4A2D]/15 text-center"
        >
          <p className="text-white/50 text-sm">
            {pricingData.trialCallout}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default B2BPricing;
