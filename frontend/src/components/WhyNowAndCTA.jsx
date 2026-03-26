import React from 'react';
import { whyNowData, ctaData } from '../data/mockData';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Cpu, Users, MessageCircle } from 'lucide-react';

const whyNowIcons = [Clock, Cpu, Users];

const WhyNowAndCTA = () => {
  return (
    <>
      {/* Why Now */}
      <section className="bg-[#060a11] py-28 md:py-36 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-white/20 text-xs font-semibold uppercase tracking-[0.2em] mb-5 block">
              {whyNowData.sectionTag}
            </span>
            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-white leading-[1.0] tracking-tight">
              The photographers who<br />move first <span className="text-white/30">will own the market.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {whyNowData.reasons.map((reason, i) => {
              const Icon = whyNowIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl p-7 border border-white/[0.03] bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-500"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] flex items-center justify-center mb-5">
                    <Icon size={18} className="text-white/30" />
                  </div>
                  <h4 className="text-white font-bold text-[15px] mb-3 leading-snug tracking-tight">{reason.title}</h4>
                  <p className="text-white/25 text-sm leading-relaxed font-medium">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#080C14] py-32 md:py-44 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#2D4A2D]/6 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-3xl mx-auto px-6 md:px-10 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold text-white leading-[0.95] mb-6 tracking-tight">
              Start your free trial.<br /><span className="text-white/30">Try it on your next event.</span>
            </h2>
            <p className="text-white/30 text-lg md:text-xl leading-relaxed mb-12 max-w-xl mx-auto font-light">
              {ctaData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#2D4A2D] text-white px-10 py-5 rounded-xl text-base font-bold hover:bg-[#3D6B4F] transition-colors duration-300 flex items-center justify-center gap-2.5 btn-shine shadow-xl shadow-[#2D4A2D]/20"
              >
                {ctaData.primaryCTA}
                <ArrowRight size={16} />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.03 }}
                href={ctaData.contactLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/8 text-white/40 px-10 py-5 rounded-xl text-base font-semibold hover:border-white/15 hover:text-white/70 transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <MessageCircle size={16} />
                Let&apos;s Talk
              </motion.a>
            </div>

            <p className="mt-8 text-white/15 text-xs font-medium tracking-wide">
              No credit card required &middot; Full platform access &middot; Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WhyNowAndCTA;
