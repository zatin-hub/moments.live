import React, { useState, useEffect } from 'react';
import { navLinks } from '../data/mockData';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link) => {
    setMobileOpen(false);
    if (link.isRoute) {
      navigate(link.href);
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(link.href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        const el = document.querySelector(link.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-600 ${
        scrolled
          ? 'bg-[#080C14]/90 backdrop-blur-2xl border-b border-white/[0.03]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => navigate('/')} className="flex items-center">
          <span className="font-bold text-white text-lg tracking-[0.05em]">
            M<span className="inline-block relative">
              <svg width="10" height="10" viewBox="0 0 14 14" className="inline-block -mt-0.5 mx-[1px]">
                <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" fill="#3D6B4F" />
              </svg>
            </span>MENTS
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link)}
              className="text-white/30 hover:text-white text-[13px] font-semibold transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </button>
          ))}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleNavClick({ href: '#pricing' })}
            className="bg-[#2D4A2D] text-white px-5 py-2.5 rounded-lg text-[13px] font-bold hover:bg-[#3D6B4F] transition-colors duration-300 flex items-center gap-2 shadow-lg shadow-[#2D4A2D]/15"
          >
            Start Free Trial
            <ArrowRight size={13} />
          </motion.button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white/60" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0f1c] border-t border-white/[0.03] overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="text-white/40 hover:text-white text-sm font-semibold py-2.5 text-left transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick({ href: '#pricing' })}
                className="bg-[#2D4A2D] text-white px-5 py-3 rounded-lg text-sm font-bold w-full mt-2"
              >
                Start Free Trial
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
