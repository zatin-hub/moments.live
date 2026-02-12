import React from 'react';
import { faqData } from '../data/mockData';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQSection = () => {
  return (
    <section id="faqs" className="bg-[#f2ede5] py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4">
        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <span className="inline-block bg-white/80 border border-[#d4d0c8] rounded-full px-4 py-1.5 text-sm text-[#4a4a4a] font-medium">
            FAQs
          </span>
        </motion.div>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-playfair text-3xl md:text-5xl text-[#1a1a1a] leading-tight mb-14 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-0">
          {faqData.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-b border-[#d4d0c8] border-t-0 border-l-0 border-r-0"
            >
              <AccordionTrigger className="text-left text-[#1a1a1a] font-medium text-base md:text-lg py-6 hover:no-underline hover:text-[#2D4A2D] transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#6a6a6a] text-sm md:text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
