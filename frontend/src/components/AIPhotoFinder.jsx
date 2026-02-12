import React from 'react';
import { aiFinderData } from '../data/mockData';
import { motion } from 'framer-motion';

const AvatarMarquee = ({ avatars }) => {
  const repeatedAvatars = [...avatars, ...avatars, ...avatars, ...avatars];
  return (
    <div className="flex items-center gap-3 mb-8">
      <button className="bg-[#2D4A2D] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 hover:bg-[#1e351e] transition-colors whitespace-nowrap">
        Find me
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-1">
          <path d="M6 2L6 10M6 10L10 6M6 10L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <div className="overflow-hidden flex-1">
        <div className="flex gap-2 animate-marquee">
          {repeatedAvatars.map((avatar, i) => (
            <img
              key={i}
              src={avatar}
              alt=""
              className="w-10 h-10 rounded-full object-cover flex-shrink-0 border-2 border-white shadow-sm"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const AIPhotoFinder = () => {
  return (
    <section className="bg-[#f5f0e8] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        {/* Avatar marquee */}
        <AvatarMarquee avatars={aiFinderData.avatars} />

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Phone mockups */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex gap-4 items-center flex-shrink-0"
          >
            <div className="w-40 md:w-48">
              <img
                src={aiFinderData.phoneImage}
                alt="AI Photo Finder"
                className="w-full rounded-3xl shadow-xl"
                loading="lazy"
              />
            </div>
            <div className="w-40 md:w-48">
              <img
                src={aiFinderData.phoneGif}
                alt="AI Photo Finder Demo"
                className="w-full rounded-3xl shadow-xl"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex-1"
          >
            <span className="inline-block bg-white/80 border border-[#d4d0c8] rounded-full px-4 py-1.5 text-sm text-[#4a4a4a] font-medium mb-4">
              {aiFinderData.sectionTag}
            </span>
            <h2 className="font-playfair text-3xl md:text-5xl text-[#1a1a1a] leading-tight mb-4">
              {aiFinderData.heading}
            </h2>
            <p className="text-[#6a6a6a] text-base md:text-lg leading-relaxed max-w-lg">
              {aiFinderData.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIPhotoFinder;
