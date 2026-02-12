import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="bg-[#f5f0e8] py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 border border-[#e8e4dc]"
        >
          <div>
            <h3 className="font-semibold text-[#1a1a1a] text-lg md:text-xl mb-1">
              Have Questions? We're Here to Help!
            </h3>
            <p className="text-[#8a8a8a] text-sm">
              Reach out to our support team for any queries or assistance.
            </p>
          </div>
          <button className="bg-[#2D4A2D] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#1e351e] transition-colors flex items-center gap-2 whitespace-nowrap">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
