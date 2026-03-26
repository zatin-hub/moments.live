import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { guestAppData } from '../data/mockData';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, QrCode, Users, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GRADIENT_BG = 'https://customer-assets.emergentagent.com/job_moment-keeper-7/artifacts/ts2432xm_Frame%2026085796.png';

const GuestAppPage = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#FFF5E9]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={GRADIENT_BG} alt="" className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[130%] max-w-[1400px] h-auto opacity-25 blur-sm" />
        </div>
        <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#F3F7EF] border border-[#D1D7C9] rounded-full px-4 py-2 mb-8">
            <Sparkles size={12} className="text-[#294D32]" />
            <span className="text-[#294D32] text-xs font-semibold uppercase tracking-wide">Your Client Upsell</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
            className="text-[2.8rem] md:text-[4rem] lg:text-[5rem] font-bold text-[#000000] leading-[0.95] mb-6 tracking-tight">
            {guestAppData.heroHeadline}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-[#68798B] text-lg max-w-2xl mx-auto mb-10 font-light">{guestAppData.heroSubtext}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="inline-block p-5 md:p-7 rounded-2xl bg-[#294D32]/[0.04] border border-[#294D32]/10 max-w-2xl">
            <p className="text-[#294D32]/60 text-sm font-semibold">{guestAppData.pricingNote}</p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#F3F7EF] py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
            {guestAppData.features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <motion.div whileHover={{ y: -8, rotate: 1 }} transition={{ type: 'spring', stiffness: 200 }} className="w-48 mx-auto mb-6">
                  <div className="bg-[#1a1a1a] rounded-[2rem] p-1.5 shadow-2xl"><img src={f.image} alt={f.title} className="w-full rounded-[1.75rem]" loading="lazy" /></div>
                </motion.div>
                <h3 className="text-[#000000] font-bold text-base mb-2 tracking-tight">{f.title}</h3>
                <p className="text-[#68798B]/60 text-sm leading-relaxed max-w-xs mx-auto font-medium">{f.description}</p>
              </motion.div>
            ))}
          </div>

          {/* AI Finder */}
          <div className="flex flex-col md:flex-row items-center gap-14 mb-24">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-4 flex-shrink-0">
              {[guestAppData.aiFinder.phoneImage, guestAppData.aiFinder.phoneGif].map((src, i) => (
                <motion.div key={i} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 200 }} className="w-40 md:w-48">
                  <div className="bg-[#1a1a1a] rounded-[2rem] p-1.5 shadow-2xl"><img src={src} alt="AI Finder" className="w-full rounded-[1.75rem]" loading="lazy" /></div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1">
              <div className="inline-flex items-center gap-2 bg-[#294D32]/8 rounded-full px-3 py-1.5 mb-4">
                <span className="text-[#294D32] text-xs font-semibold">AI-Powered</span>
              </div>
              <h3 className="text-[2rem] md:text-[2.5rem] font-bold text-[#000000] leading-[1.05] mb-4 tracking-tight">{guestAppData.aiFinder.title}</h3>
              <p className="text-[#68798B] text-base leading-relaxed font-light">{guestAppData.aiFinder.description}</p>
            </motion.div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[guestAppData.noAppRequired, guestAppData.whatsappBot].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }} whileHover={{ y: -4 }}
                className="rounded-3xl p-7 flex flex-col md:flex-row items-center gap-6 bg-white/50 backdrop-blur-sm border border-[#D1D7C9]/20">
                <div className="flex-1">
                  <h3 className="text-[#000000] font-bold text-base mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-[#68798B]/60 text-sm leading-relaxed font-medium">{item.description}</p>
                </div>
                <div className="w-28 flex-shrink-0">
                  <div className="bg-[#1a1a1a] rounded-[1.5rem] p-1 shadow-xl"><img src={item.gif || item.phoneImage} alt="" className="w-full rounded-[1.25rem]" loading="lazy" /></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + CTA */}
      <section className="bg-[#FFF5E9] py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#000000] text-center mb-12 tracking-tight">
            Why Photographers Love<br /><span className="text-[#68798B]/25">Offering This</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: QrCode, title: 'Zero Friction', desc: 'Guests scan a QR, no downloads or signups needed' },
              { icon: Users, title: '300+ Photographers', desc: 'Every guest becomes a photographer at the event' },
              { icon: Camera, title: 'Premium Upsell', desc: 'Charge \u20b95K\u201315K extra for the guest experience' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }} whileHover={{ y: -6 }}
                className="rounded-2xl p-7 text-center bg-white/50 backdrop-blur-sm border border-[#D1D7C9]/20 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-[#F3F7EF] flex items-center justify-center mx-auto mb-5">
                  <Icon size={22} className="text-[#294D32]/60" />
                </div>
                <h4 className="text-[#000000] font-bold text-sm mb-2 tracking-tight">{title}</h4>
                <p className="text-[#68798B]/50 text-xs leading-relaxed font-medium">{desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} onClick={() => navigate('/')}
              className="bg-[#294D32] text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-[#1e3a25] transition-colors flex items-center gap-2.5 mx-auto shadow-lg shadow-[#294D32]/15">
              Explore the Full Platform<ArrowRight size={15} />
            </motion.button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GuestAppPage;
