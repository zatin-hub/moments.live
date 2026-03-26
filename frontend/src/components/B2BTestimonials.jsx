import React, { useState, useCallback, useEffect } from 'react';
import { testimonialsData } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const B2BTestimonials = () => {
  const [current, setCurrent] = useState(0);
  const testimonials = testimonialsData.testimonials;
  const next = useCallback(() => setCurrent((prev) => (prev + 1) % testimonials.length), [testimonials.length]);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="bg-[#0a0f1c] py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 text-white/30 text-sm font-medium uppercase tracking-widest mb-4">
            {testimonialsData.sectionTag}
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-3">
            {testimonialsData.headline}
          </h2>
          <p className="text-white/35 text-base">{testimonialsData.subtitle}</p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 max-w-3xl mx-auto"
        >
          {testimonialsData.stats.map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-4 text-center">
              <div className="font-playfair text-2xl md:text-3xl text-white font-bold mb-1">{stat.value}</div>
              <div className="text-white/30 text-xs">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonial carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.35 }}
              className="glass rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10"
            >
              <div className="w-full md:w-56 h-48 md:h-56 flex-shrink-0 rounded-xl overflow-hidden">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].names}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <Quote size={24} className="text-[#2D4A2D]/40 mb-3" />
                <p className="text-white/60 text-base md:text-lg leading-relaxed mb-5 font-playfair italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <p className="text-white font-semibold text-sm">{testimonials[current].names}</p>
                <p className="text-white/30 text-xs">{testimonials[current].location}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-white/20 transition-colors">
              <ChevronLeft size={16} className="text-white/50" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-[#2D4A2D] w-6' : 'bg-white/10 w-2 hover:bg-white/20'
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-white/20 transition-colors">
              <ChevronRight size={16} className="text-white/50" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BTestimonials;
