"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const FAQS = [
  {
    q: "What exactly is Getameal?",
    a: "Getameal is a platform that connects customers with trusted home cooks who prepare Nigerian meals in bulk. Instead of ordering food daily, you can order larger portions — like soups, stews, and rice — and store them for the week or month.",
  },
  {
    q: "How is this different from regular food delivery apps?",
    a: "Traditional delivery apps focus on single-plate, instant orders. Getameal is built around planning. You order in bulk, choose a cooking date, and restock intentionally — reducing daily spending, delivery fees, and impulse orders.",
  },
  {
    q: "How does bulk ordering work?",
    a: "Cooks list meals with clear quantities (e.g., 3L, 5L, 8L). You select your preferred portion size, choose from available cooking dates, place your order, and pick up or receive it as scheduled. It's structured and transparent.",
  },
  {
    q: "Are the cooks verified?",
    a: "Yes. Every cook goes through an onboarding and review process before being listed on the platform. We prioritize quality, consistency, and hygiene standards to ensure customers can order with confidence.",
  },
  {
    q: "Who is Getameal for?",
    a: "Getameal is perfect for busy professionals, small families, office teams, and diaspora customers who want to stock up meals for loved ones. If you don't have time to cook daily but still want real home-cooked food, this is for you.",
  },
  {
    q: "How do cooks benefit from the platform?",
    a: "Cooks receive bulk orders in advance, allowing them to plan ingredients better, reduce waste, and cook in batches. This creates more predictable income compared to random daily orders.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const PlusIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="shrink-0">
    <circle cx="16" cy="16" r="15" stroke="#000000" strokeWidth="1.5" />
    <path d="M10 16h12M16 10v12" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const MinusIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="shrink-0">
    <circle cx="16" cy="16" r="15" stroke="#000000" strokeWidth="1.5" />
    <path d="M10 16h12" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="pb-10 sm:pb-20 bg-[#F7F7F7]">
      <motion.div
        className="text-center mb-14 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-2xl sm:text-[64px] font-black text-black mb-2">
          Let&apos;s Clear Things Up
        </h2>
        <p className="text-[#222222] text-sm sm:text-[20px] max-w-125 mx-auto leading-relaxed">
          Transparency matters. Here&apos;s how Getameal is built to work for both
          customers and cooks.
        </p>
      </motion.div>

      <div className="mx-auto px-4" style={{ maxWidth: "910px" }}>
        <motion.div
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white rounded-[20px] overflow-hidden shadow-sm"
            >
              <div className="w-full flex items-center justify-between px-8 py-6 text-left">
                <span className="font-medium sm:font-bold text-black text-sm sm:text-lg pr-6">
                  {faq.q}
                </span>
                <button
                  className="cursor-pointer shrink-0"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  {open === i ? <MinusIcon /> : <PlusIcon />}
                </button>
              </div>
              {open === i && (
                <motion.div
                  className="px-8 pb-7 text-black font-regular leading-relaxed text-sm sm:text-base"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {faq.a}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
