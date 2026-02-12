import React, { useState, useEffect } from 'react';
import { navLinks } from '../data/mockData';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/90 backdrop-blur-sm shadow-sm'
      } rounded-full px-6 py-3 flex items-center justify-between max-w-[800px] w-[90%] md:w-auto`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center mr-8">
        <span className="font-playfair text-[#2D4A2D] text-xl md:text-2xl font-bold tracking-wide">
          M<span className="inline-block relative">
            <svg width="14" height="14" viewBox="0 0 14 14" className="inline-block -mt-1 mx-[1px]">
              <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" fill="#2D4A2D" />
            </svg>
          </span>MENTS
        </span>
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => handleNavClick(link.href)}
            className="text-[#4a4a4a] hover:text-[#2D4A2D] text-sm font-medium transition-colors duration-300 whitespace-nowrap"
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => handleNavClick('#pricing')}
          className="bg-[#2D4A2D] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1e351e] transition-colors duration-300 whitespace-nowrap"
        >
          Get Started
        </button>
      </div>

      {/* Mobile menu toggle */}
      <button
        className="md:hidden text-[#2D4A2D]"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl p-4 flex flex-col gap-3 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-[#4a4a4a] hover:text-[#2D4A2D] text-sm font-medium py-2 text-left"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#pricing')}
              className="bg-[#2D4A2D] text-white px-5 py-2.5 rounded-full text-sm font-medium w-full"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
