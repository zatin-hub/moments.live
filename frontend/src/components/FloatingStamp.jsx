import React from 'react';
import { motion } from 'framer-motion';

const FloatingStamp = () => {
  return (
    <motion.div
      className="fixed left-2 md:left-4 bottom-8 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-40 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="w-24 md:w-36 relative transform -rotate-6 hover:rotate-0 transition-transform duration-500">
        <img
          src="https://framerusercontent.com/images/tD6T5Y7SY0sKxvk6vIAVb24uS0.png?width=300"
          alt="Try it out - QR Code"
          className="w-full drop-shadow-lg"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
};

export default FloatingStamp;
