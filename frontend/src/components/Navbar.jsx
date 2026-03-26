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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B1120]/95 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => navigate('/')} className="flex items-center group">
          <span className="font-playfair text-white text-xl md:text-2xl font-bold tracking-wider">
            M<span className="inline-block relative">
              <svg width="12" height="12" viewBox="0 0 14 14" className="inline-block -mt-1 mx-[1px]">
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
              className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-300 whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick({ href: '#pricing' })}
            className="bg-[#2D4A2D] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#3D6B4F] transition-colors duration-300 flex items-center gap-2 whitespace-nowrap"
          >
            Start Free Trial
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white/80" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#131C2E] border-t border-white/5 p-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className="text-white/70 hover:text-white text-sm font-medium py-2 text-left transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick({ href: '#pricing' })}
              className="bg-[#2D4A2D] text-white px-5 py-3 rounded-lg text-sm font-medium w-full mt-2"
            >
              Start Free Trial
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
