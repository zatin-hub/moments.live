import React from 'react';
import { footerData } from '../data/mockData';
import { Mail, ArrowUpRight, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const iconMap = { LinkedIn: Linkedin, Instagram: Instagram, WhatsApp: MessageCircle };

  return (
    <footer className="bg-[#080D18] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo + Tagline */}
          <div className="md:col-span-1">
            <span className="font-playfair text-white text-xl font-bold tracking-wider block mb-3">
              M<span className="inline-block relative">
                <svg width="10" height="10" viewBox="0 0 14 14" className="inline-block -mt-1 mx-[1px]">
                  <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" fill="#3D6B4F" />
                </svg>
              </span>MENTS
            </span>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              {footerData.tagline}
            </p>
            <a
              href={`mailto:${footerData.email}`}
              className="inline-flex items-center gap-2 text-white/50 hover:text-[#3D6B4F] text-sm transition-colors"
            >
              <Mail size={14} />
              {footerData.email}
            </a>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold text-white/80 text-sm mb-4 uppercase tracking-wider">Platform</h4>
            <ul className="space-y-3">
              {footerData.platformLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      if (link.href.startsWith('/')) {
                        navigate(link.href);
                      } else {
                        const el = document.querySelector(link.href);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-white/40 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white/80 text-sm mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerData.companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/40 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white/80 text-sm mb-4 uppercase tracking-wider">Connect</h4>
            <div className="flex flex-col gap-3">
              {footerData.social.map((item) => {
                const Icon = iconMap[item.label] || Linkedin;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors"
                  >
                    <Icon size={14} />
                    {item.label}
                    <ArrowUpRight size={12} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 my-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; 2025 Moments.Live. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Manage More. Charge More. Deliver Better.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
