import React from 'react';
import { waveGoodbyeItems } from '../data/mockData';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const WaveGoodbye = () => {
  const repeatedItems = [...waveGoodbyeItems, ...waveGoodbyeItems, ...waveGoodbyeItems, ...waveGoodbyeItems];

  return (
    <section className="bg-[#f5f0e8] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Decorative line */}
        <div className="w-full h-px bg-[#d4d0c8] mb-12" />

        {/* Emoji + Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-4xl mb-4 block">👋</span>
          <h2 className="font-playfair text-3xl md:text-5xl text-[#1a1a1a]">
            Wave goodbye to
          </h2>
        </motion.div>

        {/* Scrolling marquee */}
        <div className="overflow-hidden py-6">
          <div className="flex gap-6 animate-scroll-left">
            {repeatedItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 flex-shrink-0 shadow-sm border border-[#e8e4dc]"
              >
                <X size={16} className="text-red-400 flex-shrink-0" />
                <span className="text-[#4a4a4a] font-medium text-sm whitespace-nowrap line-through decoration-red-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative line */}
        <div className="w-full h-px bg-[#d4d0c8] mt-12" />
      </div>
    </section>
  );
};

export default WaveGoodbye;
