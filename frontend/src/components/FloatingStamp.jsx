import React from 'react';
import { motion } from 'framer-motion';

const FloatingStamp = () => {
  return (
    <motion.div
      className="fixed left-4 bottom-4 md:left-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-40 cursor-pointer"
      whileHover={{ scale: 1.08, rotate: -3 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="w-28 md:w-40 relative">
        {/* Stamp border effect */}
        <div className="bg-[#f0e6d0] rounded-lg p-2 shadow-lg border-2 border-dashed border-[#c4b99a] transform -rotate-6 hover:rotate-0 transition-transform duration-500">
          {/* Stamp content */}
          <div className="bg-[#faf5eb] rounded-md p-3 text-center">
            <div className="text-[#8a7a5a] text-[10px] md:text-xs font-medium mb-1">TRY IT OUT!</div>
            <div className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-2 bg-[#1a1a1a] rounded-sm flex items-center justify-center">
              {/* QR code placeholder */}
              <svg viewBox="0 0 100 100" className="w-full h-full p-1">
                <rect x="5" y="5" width="30" height="30" fill="white" rx="2" />
                <rect x="10" y="10" width="20" height="20" fill="black" rx="1" />
                <rect x="14" y="14" width="12" height="12" fill="white" rx="1" />
                <rect x="17" y="17" width="6" height="6" fill="black" />
                <rect x="65" y="5" width="30" height="30" fill="white" rx="2" />
                <rect x="70" y="10" width="20" height="20" fill="black" rx="1" />
                <rect x="74" y="14" width="12" height="12" fill="white" rx="1" />
                <rect x="77" y="17" width="6" height="6" fill="black" />
                <rect x="5" y="65" width="30" height="30" fill="white" rx="2" />
                <rect x="10" y="70" width="20" height="20" fill="black" rx="1" />
                <rect x="14" y="74" width="12" height="12" fill="white" rx="1" />
                <rect x="17" y="77" width="6" height="6" fill="black" />
                <rect x="42" y="5" width="8" height="8" fill="white" />
                <rect x="42" y="20" width="8" height="8" fill="white" />
                <rect x="50" y="12" width="8" height="8" fill="white" />
                <rect x="42" y="42" width="8" height="8" fill="white" />
                <rect x="55" y="42" width="8" height="8" fill="white" />
                <rect x="70" y="55" width="8" height="8" fill="white" />
                <rect x="85" y="70" width="8" height="8" fill="white" />
                <rect x="55" y="70" width="8" height="8" fill="white" />
                <rect x="70" y="85" width="8" height="8" fill="white" />
              </svg>
            </div>
            {/* Small flowers */}
            <div className="flex justify-center gap-1">
              <span className="text-pink-400 text-xs">❀</span>
              <span className="text-purple-400 text-xs">❀</span>
              <span className="text-pink-300 text-xs">❀</span>
            </div>
          </div>
          {/* Stamp perforated edge decoration */}
          <div className="absolute -top-1 left-2 text-[#8a7a5a] text-[8px]">20</div>
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingStamp;
