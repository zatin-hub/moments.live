import React, { useState, useCallback, useEffect } from 'react';
import { testimonialsData } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const B2BTestimonials = () => {
  const [current, setCurrent] = useState(0);
  const t = testimonialsData.testimonials;
  const next = useCallback(() => setCurrent((p) => (p + 1) % t.length), [t.length]);
  const prev = () => setCurrent((p) => (p - 1 + t.length) % t.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="bg-[#060a11] py-28 md:py-40 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-white/20 text-xs font-semibold uppercase tracking-[0.2em] mb-5 block">
            {testimonialsData.sectionTag}
          </span>
          <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-white leading-[1.0] mb-3 tracking-tight">
            Already tested.<br /><span className="text-white/30">Already loved.</span>
          </h2>
          <p className="text-white/25 text-sm font-medium">{testimonialsData.subtitle}</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16 max-w-3xl mx-auto"
        >
          {testimonialsData.stats.map((s) => (
            <div key={s.label} className="rounded-2xl p-5 text-center border border-white/[0.04] bg-white/[0.01]">
              <div className="font-bold text-3xl md:text-4xl text-white mb-1 tracking-tight">{s.value}</div>
              <div className="text-white/20 text-[10px] font-semibold uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60, filter: 'blur(6px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -60, filter: 'blur(4px)' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 border border-white/[0.04] bg-white/[0.01]"
            >
              <div className="w-full md:w-60 h-52 md:h-64 flex-shrink-0 rounded-2xl overflow-hidden">
                <img src={t[current].image} alt={t[current].names} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <Quote size={22} className="text-[#2D4A2D]/30 mb-4" />
                <p className="text-white/50 text-base md:text-lg leading-relaxed mb-6 font-light italic">
                  &ldquo;{t[current].quote}&rdquo;
                </p>
                <p className="text-white font-bold text-sm tracking-tight">{t[current].names}</p>
                <p className="text-white/20 text-xs font-medium">{t[current].location}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button whileHover={{ scale: 1.1 }} onClick={prev} className="w-10 h-10 rounded-full border border-white/[0.06] flex items-center justify-center hover:border-white/15 transition-colors">
              <ChevronLeft size={15} className="text-white/40" />
            </motion.button>
            <div className="flex gap-2">
              {t.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-400 ${
                    i === current ? 'bg-[#2D4A2D] w-8' : 'bg-white/8 w-1.5 hover:bg-white/15'
                  }`}
                />
              ))}
            </div>
            <motion.button whileHover={{ scale: 1.1 }} onClick={next} className="w-10 h-10 rounded-full border border-white/[0.06] flex items-center justify-center hover:border-white/15 transition-colors">
              <ChevronRight size={15} className="text-white/40" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BTestimonials;
