import React from 'react';
import { footerData } from '../data/mockData';
import { Mail, ArrowUpRight, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const iconMap = { LinkedIn: Linkedin, Instagram: Instagram, WhatsApp: MessageCircle };

  return (
    <footer className="bg-[#050810] border-t border-white/[0.03]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-1">
            <span className="font-bold text-white text-lg tracking-[0.05em] block mb-4">
              M<span className="inline-block relative">
                <svg width="10" height="10" viewBox="0 0 14 14" className="inline-block -mt-0.5 mx-[1px]">
                  <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" fill="#3D6B4F" />
                </svg>
              </span>MENTS
            </span>
            <p className="text-white/20 text-xs leading-relaxed mb-4 font-medium">{footerData.tagline}</p>
            <a href={`mailto:${footerData.email}`} className="inline-flex items-center gap-2 text-white/25 hover:text-[#7bc47f] text-xs transition-colors font-medium">
              <Mail size={12} />{footerData.email}
            </a>
          </div>

          <div>
            <h4 className="font-bold text-white/50 text-[10px] mb-5 uppercase tracking-[0.2em]">Platform</h4>
            <ul className="space-y-3">
              {footerData.platformLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => link.href.startsWith('/') ? navigate(link.href) : document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/20 hover:text-white text-xs transition-colors font-medium"
                  >{link.label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white/50 text-[10px] mb-5 uppercase tracking-[0.2em]">Company</h4>
            <ul className="space-y-3">
              {footerData.companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/20 hover:text-white text-xs transition-colors font-medium">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white/50 text-[10px] mb-5 uppercase tracking-[0.2em]">Connect</h4>
            <div className="flex flex-col gap-3">
              {footerData.social.map((item) => {
                const Icon = iconMap[item.label] || Linkedin;
                return (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/20 hover:text-white text-xs transition-colors font-medium">
                    <Icon size={12} />{item.label}<ArrowUpRight size={10} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white/[0.03] my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/15 text-xs font-medium">&copy; 2025 Moments.Live. All rights reserved.</p>
          <p className="text-white/10 text-[10px] font-semibold tracking-[0.1em] uppercase">Manage More. Charge More. Deliver Better.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
