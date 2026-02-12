import React, { useState } from 'react';
import { testimonialsData } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const testimonials = testimonialsData.testimonials;

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

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
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.4 }}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-sm"
            >
              {/* Image */}
              <div className="w-48 md:w-64 h-48 md:h-64 flex-shrink-0 rounded-2xl overflow-hidden">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].names}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <Quote size={32} className="text-[#2D4A2D]/30 mb-4" />
                <p className="text-[#3a3a3a] text-base md:text-lg leading-relaxed mb-6 italic">
                  "{testimonials[current].quote}"
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
              className="w-12 h-12 rounded-full bg-white/80 border border-[#d4d0c8] flex items-center justify-center hover:bg-white transition-colors shadow-sm"
            >
              <ChevronLeft size={20} className="text-[#2D4A2D]" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'bg-[#2D4A2D] w-7'
                      : 'bg-[#d4d0c8]'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/80 border border-[#d4d0c8] flex items-center justify-center hover:bg-white transition-colors shadow-sm"
            >
              <ChevronRight size={20} className="text-[#2D4A2D]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
