import React from 'react';
import { botData } from '../data/mockData';
import { motion } from 'framer-motion';

const MomentsBot = () => {
  return (
    <section className="bg-[#f5f0e8] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <span className="inline-block bg-white/80 border border-[#d4d0c8] rounded-full px-4 py-1.5 text-sm text-[#4a4a4a] font-medium mb-4">
              {botData.sectionTag}
            </span>
            <h2 className="font-playfair text-3xl md:text-5xl text-[#1a1a1a] leading-tight mb-4">
              {botData.heading}
            </h2>
            <p className="text-[#6a6a6a] text-base md:text-lg leading-relaxed max-w-lg">
              {botData.description}
            </p>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex-shrink-0"
          >
            <div className="w-52 md:w-64">
              <div className="bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <img
                  src={botData.phoneImage}
                  alt="Moments Bot"
                  className="w-full rounded-[2rem]"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MomentsBot;
