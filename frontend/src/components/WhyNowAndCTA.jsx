import React from 'react';
import { whyNowData, ctaData } from '../data/mockData';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Cpu, Users, MessageCircle } from 'lucide-react';

const whyNowIcons = [Clock, Cpu, Users];

const WhyNowAndCTA = () => {
  return (
    <>
      {/* Why Now */}
      <section className="bg-[#0a0f1c] py-24 md:py-28 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 text-white/30 text-sm font-medium uppercase tracking-widest mb-4">
              {whyNowData.sectionTag}
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              {whyNowData.headline}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyNowData.reasons.map((reason, i) => {
              const Icon = whyNowIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-6 hover:border-white/10 transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-white/40" />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-2">{reason.title}</h4>
                  <p className="text-white/35 text-sm leading-relaxed">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1120] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#2D4A2D]/8 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl md:text-5xl text-white leading-tight mb-4">
              {ctaData.headline}
            </h2>
            <p className="text-white/40 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              {ctaData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#2D4A2D] text-white px-8 py-4 rounded-lg text-base font-medium hover:bg-[#3D6B4F] transition-colors duration-300 flex items-center justify-center gap-2 btn-shine">
                {ctaData.primaryCTA}
                <ArrowRight size={16} />
              </button>
              <a
                href={ctaData.contactLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 text-white/60 px-8 py-4 rounded-lg text-base font-medium hover:border-white/20 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                Let's Talk
              </a>
            </div>

            <p className="mt-6 text-white/20 text-sm">
              No credit card required · Full platform access · Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WhyNowAndCTA;
