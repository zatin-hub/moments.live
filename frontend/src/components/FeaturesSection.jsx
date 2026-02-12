import React from 'react';
import { featuresData } from '../data/mockData';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, image, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className="flex flex-col items-center text-center"
  >
    <div className="relative w-48 md:w-56 h-auto mb-5 group">
      <div className="overflow-hidden rounded-3xl shadow-lg group-hover:shadow-xl transition-shadow duration-500">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
    </div>
    <h4 className="font-semibold text-[#1a1a1a] text-base md:text-lg mb-2">{title}</h4>
    <p className="text-[#6a6a6a] text-sm max-w-[220px] leading-relaxed">{description}</p>
  </motion.div>
);

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-[#f5f0e8] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="inline-block bg-white/80 border border-[#d4d0c8] rounded-full px-4 py-1.5 text-sm text-[#4a4a4a] font-medium">
            {featuresData.sectionTag}
          </span>
        </motion.div>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-playfair text-3xl md:text-5xl lg:text-6xl text-[#1a1a1a] leading-tight mb-16 max-w-3xl"
        >
          {featuresData.heading}
        </motion.h2>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-10 mb-16">
          {featuresData.cards.map((card, i) => (
            <FeatureCard key={card.title} {...card} index={i} />
          ))}
        </div>

        {/* No App Download Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-sm"
        >
          <div className="flex-1">
            <h3 className="font-playfair text-2xl md:text-3xl text-[#1a1a1a] mb-3">
              {featuresData.noAppCard.title}
            </h3>
            <p className="text-[#6a6a6a] text-base leading-relaxed max-w-md">
              {featuresData.noAppCard.description}
            </p>
          </div>
          <div className="w-48 md:w-56 flex-shrink-0">
            <img
              src={featuresData.noAppCard.gif}
              alt="No App Download"
              className="w-full rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
