import React from 'react';
import { whyNowData, ctaData } from '../data/mockData';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Cpu, Users, MessageCircle } from 'lucide-react';

const GRADIENT_BG = 'https://customer-assets.emergentagent.com/job_moment-keeper-7/artifacts/ts2432xm_Frame%2026085796.png';
const whyNowIcons = [Clock, Cpu, Users];

const WhyNowAndCTA = () => {
  return (
    <>
      {/* Why Now */}
      <section className="bg-[#FFF5E9] py-28 md:py-36 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#68798B]/50 text-xs font-semibold uppercase tracking-[0.2em] mb-5 block">Why Now</span>
            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-[#000000] leading-[1.0] tracking-tight">
              The photographers who<br />move first <span className="text-[#68798B]/25">will own the market.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {whyNowData.reasons.map((reason, i) => {
              const Icon = whyNowIcons[i];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }} whileHover={{ y: -6 }}
                  className="rounded-2xl p-7 bg-white/50 backdrop-blur-sm border border-[#D1D7C9]/20 hover:border-[#294D32]/10 transition-all duration-500">
                  <div className="w-11 h-11 rounded-xl bg-[#F3F7EF] flex items-center justify-center mb-5">
                    <Icon size={18} className="text-[#68798B]/50" />
                  </div>
                  <h4 className="text-[#000000] font-bold text-[15px] mb-3 leading-snug tracking-tight">{reason.title}</h4>
                  <p className="text-[#68798B]/60 text-sm leading-relaxed font-medium">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 pointer-events-none">
          <img src={GRADIENT_BG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-[#FFF5E9]/60" />
        </div>

        <div className="max-w-3xl mx-auto px-6 md:px-10 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold text-[#000000] leading-[0.95] mb-6 tracking-tight">
              Start your free trial.<br /><span className="text-[#68798B]/25">Try it on your next event.</span>
            </h2>
            <p className="text-[#68798B] text-lg md:text-xl leading-relaxed mb-12 max-w-xl mx-auto font-light">{ctaData.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}
                className="bg-[#294D32] text-white px-10 py-5 rounded-full text-base font-bold hover:bg-[#1e3a25] transition-colors duration-300 flex items-center justify-center gap-2.5 btn-shine shadow-xl shadow-[#294D32]/15">
                {ctaData.primaryCTA}<ArrowRight size={16} />
              </motion.button>
              <motion.a whileHover={{ scale: 1.03 }} href={ctaData.contactLink} target="_blank" rel="noopener noreferrer"
                className="border border-[#D1D7C9] text-[#68798B] px-10 py-5 rounded-full text-base font-semibold hover:border-[#294D32]/30 hover:text-[#000000] transition-all duration-300 flex items-center justify-center gap-2.5">
                <MessageCircle size={16} />Let&apos;s Talk
              </motion.a>
            </div>
            <p className="mt-8 text-[#68798B]/30 text-xs font-medium tracking-wide">No credit card required &middot; Full platform access &middot; Cancel anytime</p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WhyNowAndCTA;
