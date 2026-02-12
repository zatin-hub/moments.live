import React from 'react';
import { pricingData } from '../data/mockData';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingCard = ({ plan, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className={`relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-sm border ${
      plan.popular ? 'border-[#2D4A2D]/30 ring-1 ring-[#2D4A2D]/10' : 'border-[#e8e4dc]'
    } flex flex-col hover:shadow-lg transition-shadow duration-500`}
  >
    {plan.popular && (
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
        <span className="bg-[#2D4A2D] text-white text-xs font-medium px-4 py-1.5 rounded-full shadow-md">
          Most chosen by couples
        </span>
      </div>
    )}

    <div className="mb-6">
      <h4 className="font-semibold text-[#1a1a1a] text-xs uppercase tracking-widest mb-1">
        {plan.name}
      </h4>
      <p className="text-[#8a8a8a] text-sm">{plan.subtitle}</p>
    </div>

    <div className="mb-8">
      <div className="flex items-baseline gap-1">
        <span className="font-playfair text-5xl md:text-6xl text-[#1a1a1a] font-medium">
          ₹{plan.price}
        </span>
        <span className="text-[#8a8a8a] text-lg">/-</span>
      </div>
    </div>

    <button className="bg-[#2D4A2D] text-white w-full py-3.5 rounded-full text-sm font-medium hover:bg-[#1e351e] transition-colors duration-300 mb-8 shadow-sm">
      Reserve Your Date
    </button>

    <ul className="space-y-4 flex-1">
      {plan.features.map((feature) => (
        <li key={feature} className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-[#2D4A2D]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Check size={12} className="text-[#2D4A2D]" />
          </div>
          <span className="text-[#4a4a4a] text-sm">{feature}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-[#f5f0e8] py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <span className="inline-block bg-white/80 border border-[#d4d0c8] rounded-full px-4 py-1.5 text-sm text-[#4a4a4a] font-medium">
            {pricingData.sectionTag}
          </span>
        </motion.div>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-playfair text-3xl md:text-5xl text-[#1a1a1a] leading-tight mb-14 text-center"
        >
          {pricingData.heading}
        </motion.h2>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {pricingData.plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 border border-[#e8e4dc]"
        >
          <p className="text-[#4a4a4a] text-sm md:text-base">
            {pricingData.footerText}{' '}
            <span className="text-[#c4543a] font-medium cursor-pointer hover:underline">
              Get Your Spot Now!
            </span>
          </p>
          <button className="border border-[#d4d0c8] rounded-full px-6 py-2.5 text-sm font-medium text-[#4a4a4a] hover:bg-white transition-colors whitespace-nowrap">
            Know More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
