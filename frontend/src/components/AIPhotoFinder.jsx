import React from 'react';
import { aiFinderData } from '../data/mockData';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const AvatarMarquee = ({ avatars }) => {
  const repeatedAvatars = [...avatars, ...avatars, ...avatars, ...avatars];
  return (
    <div className="flex items-center gap-4 mb-10">
      <button className="bg-[#2D4A2D] text-white px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-1.5 hover:bg-[#1e351e] transition-colors whitespace-nowrap shadow-md">
        Find me
        <ChevronDown size={14} />
      </button>
      <div className="overflow-hidden flex-1 mask-gradient">
        <div className="flex gap-[-4px] animate-marquee">
          {repeatedAvatars.map((avatar, i) => (
            <img
              key={i}
              src={avatar}
              alt=""
              className="w-11 h-11 rounded-full object-cover flex-shrink-0 border-2 border-white shadow-sm -ml-2 first:ml-0"
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
            <div className="w-44 md:w-52">
              <div className="bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <img
                  src={aiFinderData.phoneImage}
                  alt="AI Photo Finder"
                  className="w-full rounded-[2rem]"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-44 md:w-52">
              <div className="bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <img
                  src={aiFinderData.phoneGif}
                  alt="AI Photo Finder Demo"
                  className="w-full rounded-[2rem]"
                  loading="lazy"
                />
              </div>
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
