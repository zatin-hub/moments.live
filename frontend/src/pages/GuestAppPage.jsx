import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { guestAppData } from '../data/mockData';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles, QrCode, Users, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GuestAppPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0B1120]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#2D4A2D]/8 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#2D4A2D]/20 border border-[#2D4A2D]/30 rounded-full px-4 py-1.5 mb-6"
          >
            <Sparkles size={14} className="text-[#7bc47f]" />
            <span className="text-[#7bc47f] text-sm font-medium">Your Client Upsell</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 max-w-3xl mx-auto"
          >
            {guestAppData.heroHeadline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg max-w-2xl mx-auto mb-10"
          >
            {guestAppData.heroSubtext}
          </motion.p>

          {/* Pricing note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block p-4 md:p-6 rounded-xl bg-[#d4a853]/5 border border-[#d4a853]/10 mb-14 max-w-2xl"
          >
            <p className="text-[#d4a853]/80 text-sm md:text-base">
              {guestAppData.pricingNote}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-[#0a0f1c] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {guestAppData.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-48 mx-auto mb-5">
                  <div className="bg-[#1a1a1a] rounded-[2rem] p-1.5 shadow-2xl">
                    <img src={feature.image} alt={feature.title} className="w-full rounded-[1.75rem]" loading="lazy" />
                  </div>
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{feature.title}</h3>
                <p className="text-white/35 text-sm leading-relaxed max-w-xs mx-auto">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* AI Photo Finder */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-4 flex-shrink-0"
            >
              <div className="w-40 md:w-48">
                <div className="bg-[#1a1a1a] rounded-[2rem] p-1.5 shadow-2xl">
                  <img src={guestAppData.aiFinder.phoneImage} alt="AI Finder" className="w-full rounded-[1.75rem]" loading="lazy" />
                </div>
              </div>
              <div className="w-40 md:w-48">
                <div className="bg-[#1a1a1a] rounded-[2rem] p-1.5 shadow-2xl">
                  <img src={guestAppData.aiFinder.phoneGif} alt="AI Finder Demo" className="w-full rounded-[1.75rem]" loading="lazy" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="inline-flex items-center gap-2 bg-[#2D4A2D]/15 rounded-full px-3 py-1 mb-3">
                <span className="text-[#7bc47f] text-xs font-medium">AI-Powered</span>
              </div>
              <h3 className="font-playfair text-2xl md:text-4xl text-white leading-tight mb-4">{guestAppData.aiFinder.title}</h3>
              <p className="text-white/40 text-base leading-relaxed">{guestAppData.aiFinder.description}</p>
            </motion.div>
          </div>

          {/* No App Required + WhatsApp Bot */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg mb-2">{guestAppData.noAppRequired.title}</h3>
                <p className="text-white/35 text-sm leading-relaxed">{guestAppData.noAppRequired.description}</p>
              </div>
              <div className="w-32 flex-shrink-0">
                <div className="bg-[#1a1a1a] rounded-[1.5rem] p-1 shadow-xl">
                  <img src={guestAppData.noAppRequired.gif} alt="No App" className="w-full rounded-[1.25rem]" loading="lazy" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg mb-2">{guestAppData.whatsappBot.title}</h3>
                <p className="text-white/35 text-sm leading-relaxed">{guestAppData.whatsappBot.description}</p>
              </div>
              <div className="w-32 flex-shrink-0">
                <div className="bg-[#1a1a1a] rounded-[1.5rem] p-1 shadow-xl">
                  <img src={guestAppData.whatsappBot.phoneImage} alt="WhatsApp Bot" className="w-full rounded-[1.25rem]" loading="lazy" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-[#0B1120] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-2xl md:text-3xl text-white text-center mb-10">
            Why Photographers Love Offering This
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: QrCode, title: 'Zero Friction', desc: 'Guests scan a QR, no downloads or signups needed' },
              { icon: Users, title: '300+ Photographers', desc: 'Every guest becomes a photographer at the event' },
              { icon: Camera, title: 'Premium Upsell', desc: 'Charge ₹5K–₹15K extra for the guest experience' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2D4A2D]/15 flex items-center justify-center mx-auto mb-4">
                  <Icon size={20} className="text-[#7bc47f]" />
                </div>
                <h4 className="text-white font-semibold text-sm mb-2">{title}</h4>
                <p className="text-white/35 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Back to main */}
          <div className="text-center mt-14">
            <button
              onClick={() => navigate('/')}
              className="bg-[#2D4A2D] text-white px-7 py-3.5 rounded-lg text-base font-medium hover:bg-[#3D6B4F] transition-colors flex items-center gap-2 mx-auto"
            >
              Explore the Full Platform
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GuestAppPage;
