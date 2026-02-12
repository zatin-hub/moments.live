import React, { useState, useEffect, useCallback } from 'react';
import { testimonialsData } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const testimonials = testimonialsData.testimonials;

  const next = useCallback(() => setCurrent((prev) => (prev + 1) % testimonials.length), [testimonials.length]);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="testimonials" className="bg-[#f5f0e8] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <span className="inline-block bg-white/80 border border-[#d4d0c8] rounded-full px-4 py-1.5 text-sm text-[#4a4a4a] font-medium">
            {testimonialsData.sectionTag}
          </span>
        </motion.div>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-playfair text-3xl md:text-5xl text-[#1a1a1a] leading-tight mb-14 text-center max-w-3xl mx-auto"
        >
          {testimonialsData.heading}
        </motion.h2>

        {/* Testimonial card */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="bg-white/50 backdrop-blur-sm rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 shadow-sm border border-[#e8e4dc]"
            >
              {/* Image */}
              <div className="w-full md:w-72 h-56 md:h-72 flex-shrink-0 rounded-2xl overflow-hidden">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].names}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <Quote size={28} className="text-[#2D4A2D]/20 mb-3" />
                <p className="text-[#3a3a3a] text-base md:text-lg leading-relaxed mb-6 font-playfair italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-[#1a1a1a] text-lg">
                    {testimonials[current].names}
                  </p>
                  <p className="text-[#8a8a8a] text-sm">
                    {testimonials[current].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-white/80 border border-[#d4d0c8] flex items-center justify-center hover:bg-white hover:shadow-md transition-all shadow-sm"
            >
              <ChevronLeft size={18} className="text-[#2D4A2D]" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'bg-[#2D4A2D] w-8'
                      : 'bg-[#d4d0c8] w-2.5 hover:bg-[#b8b2a6]'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-white/80 border border-[#d4d0c8] flex items-center justify-center hover:bg-white hover:shadow-md transition-all shadow-sm"
            >
              <ChevronRight size={18} className="text-[#2D4A2D]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
