"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is GetAMeal?",
    a: "GetAMeal is a marketplace that connects you with verified home cooks in your neighborhood. Browse cooks, pre-order authentic Nigerian meals, and have them delivered hot to your door.",
  },
  {
    q: "How do I place an order?",
    a: "Browse cooks in your area, choose your meal, select a delivery time, and pay securely. Your cook prepares your meal fresh and delivers it at your chosen time.",
  },
  {
    q: "Are the cooks verified and safe?",
    a: "Every cook undergoes a rigorous verification process including identity checks, kitchen hygiene inspection, and food safety certification before accepting orders.",
  },
  {
    q: "What areas do you currently cover in Lagos?",
    a: "We serve Lekki Phase 1 & 2, Victoria Island, Ikoyi, Ikate, VGC, Ajah, Abraham Adesanya, Sangotedo, Chevron, Ikeja, Surulere, and more. Expanding every month!",
  },
  {
    q: "How do I become a cook on GetAMeal?",
    a: "Sign up as a cook, complete the verification process (kitchen inspection + food safety training), upload your menu, and start receiving orders. We support you every step of the way.",
  },
  {
    q: "How much can I earn as a home cook?",
    a: "Active cooks on GetAMeal earn between ₦80,000 and ₦250,000 per week. We help you maximize earnings with tools for pricing, scheduling, and marketing.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-3">
          Let&apos;s Clear Things Up
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Got questions? We&apos;ve got answers.
        </p>

        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                <span
                  className={`text-gray-400 flex-shrink-0 transition-transform duration-200 text-xs ${
                    open === i ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-gray-500 leading-relaxed text-sm border-t border-gray-50 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
