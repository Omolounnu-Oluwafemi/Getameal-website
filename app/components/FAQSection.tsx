"use client";

import { useState } from "react";

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

const PlusIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    className="shrink-0"
  >
    <circle cx="16" cy="16" r="15" stroke="#D1D5DB" strokeWidth="1.5" />
    <path
      d="M10 16h12M16 10v12"
      stroke="#374151"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const MinusIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    className="shrink-0"
  >
    <circle cx="16" cy="16" r="15" stroke="#D1D5DB" strokeWidth="1.5" />
    <path
      d="M10 16h12"
      stroke="#374151"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto px-4" style={{ maxWidth: "910px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            // minHeight: "530px",
          }}
        >
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-8 py-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-bold text-gray-900 text-lg pr-6">
                  {faq.q}
                </span>
                {open === i ? <MinusIcon /> : <PlusIcon />}
              </button>

              {open === i && (
                <div className="px-8 pb-7 text-gray-500 leading-relaxed text-base">
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
