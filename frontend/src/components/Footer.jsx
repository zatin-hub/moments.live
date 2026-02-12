import React from 'react';
import { footerData, navLinks } from '../data/mockData';
import { Mail, ArrowRight, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#4a6741] text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo + Tagline */}
          <div className="md:col-span-1">
            <span className="font-playfair text-2xl font-bold tracking-wide block mb-4">
              M<span className="inline-block relative">
                <svg width="12" height="12" viewBox="0 0 14 14" className="inline-block -mt-1 mx-[1px]">
                  <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" fill="white" />
                </svg>
              </span>MENTS
            </span>
          </div>

          {/* Tagline */}
          <div className="md:col-span-1">
            <p className="text-white/80 text-sm leading-relaxed">
              {footerData.tagline}
            </p>
            <a
              href="mailto:hello@moments.com"
              className="inline-flex items-center gap-2 bg-[#3a5535] hover:bg-[#2D4A2D] text-white px-4 py-2.5 rounded-full text-sm mt-4 transition-colors"
            >
              <Mail size={14} />
              {footerData.email}
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Home</h4>
            <ul className="space-y-3">
              {footerData.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Social</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#3a5535] hover:bg-[#2D4A2D] text-white px-4 py-2.5 rounded-full text-sm transition-colors w-fit"
              >
                <Linkedin size={14} />
                Linkedin
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#3a5535] hover:bg-[#2D4A2D] text-white px-4 py-2.5 rounded-full text-sm transition-colors w-fit"
              >
                <Instagram size={14} />
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 my-10" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            &copy; 2025 Moments. All rights reserved.
          </p>
          <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
