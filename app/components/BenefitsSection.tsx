"use client";

import Image from "next/image";
import { useState } from "react";

const BENEFITS = [
  {
    title: "Saves You More Time",
    body: [
      "With Getameal, customers place one bulk order for the week instead of cooking every day or ordering food repeatedly.",
      "Meals are prepared in larger portions by trusted home cooks on scheduled cooking dates, then picked up or delivered, so you always have ready-to-eat food whenever you need it.",
    ],
    social: "Over 500+ are waiting to try this out",
    hasEmailForm: true,
    ctaLabel: null,
    bullets: null,
    bulletsLabel: null,
    image: "/moreTime.png",
  },
  {
    title: "Saves You More Money",
    body: [
      "Instead of paying repeatedly for small orders, delivery fees, and impulse buys, you plan your meals ahead and spend less intentionally.",
    ],
    social: null,
    hasEmailForm: false,
    ctaLabel: "Give this a shot",
    bulletsLabel: "How it benefits customers:",
    bullets: [
      "No pickup charges, order once, not multiple times",
      "Lower cost per portion compared to daily food apps",
      "Reduced impulse spending on last-minute meals",
      "Less food waste because you buy planned quantities",
    ],
    image: "/moreMoney.png",
  },
  {
    title: "Earn More Predictably",
    body: [
      "Getameal allows cooks to receive scheduled bulk orders instead of relying on random daily requests. This means you cook in larger, planned batches and generate more stable income.",
    ],
    social: null,
    hasEmailForm: false,
    ctaLabel: "Join as a cook",
    bulletsLabel: "How it benefits cooks:",
    bullets: [
      "Receive bulk orders in advance",
      "Plan ingredients with less waste",
      "Cook only when you receive orders",
      "Earn steady, predictable income",
    ],
    image: "/morePredictability.png",
  },
];

const AVATAR_IMAGES = [
  "/joined1.png",
  "/joined2.png",
  "/joined3.png",
  "/joined4.png",
];

export default function BenefitsSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-gray-50 py-10 pb-24" id="for-customers">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {BENEFITS.map((b) => (
          <div
            key={b.title}
            className="bg-white rounded-[50px] shadow-md overflow-hidden flex flex-col lg:flex-row"
            style={{ minHeight: "500px" }}
          >
            {/* ── Text side ── */}
            <div className="lg:w-[55%] px-8 sm:px-12 py-12 sm:py-16 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                {b.title}
              </h3>

              {b.body.map((para, i) => (
                <p
                  key={i}
                  className="text-gray-400 text-sm sm:text-[18px] leading-relaxed mb-4"
                >
                  {para}
                </p>
              ))}

              {/* Social proof row */}
              {b.social && (
                <div className="flex items-center gap-3 mt-3 mb-6">
                  <div className="flex -space-x-2">
                    {AVATAR_IMAGES.map((src, i) => (
                      <div
                        key={i}
                        className="w-9 h-9 rounded-full border-2 border-white overflow-hidden"
                      >
                        <Image
                          src={src}
                          alt=""
                          width={36}
                          height={36}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 font-medium">
                    {b.social}
                  </span>
                </div>
              )}

              {/* Email form (first card only) */}
              {b.hasEmailForm && (
                <div className="flex flex-col gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-5 py-4 text-sm bg-[#F7F7F7] text-gray-700 rounded-full focus:outline-none focus:border-gray-300"
                  />
                  <button className="w-full bg-[#209D01] hover:bg-green-700 text-white text-sm font-semibold py-4 rounded-full transition-colors">
                    Join Today
                  </button>
                </div>
              )}

              {/* Bullet list */}
              {b.bulletsLabel && b.bullets && (
                <div className="mt-5">
                  <p className="text-sm font-bold text-gray-900 mb-3">
                    {b.bulletsLabel}
                  </p>
                  <ul className="space-y-2.5">
                    {b.bullets.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <Image
                          src="/bullet.svg"
                          alt=""
                          width={18}
                          height={18}
                          className="shrink-0 mt-0.5"
                        />
                        <span className="text-sm sm:text-[18px] text-gray-400">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              {b.ctaLabel && (
                <div className="mt-8">
                  <button className="w-full sm:w-76.25 bg-[#209D01] hover:bg-green-700 text-white text-sm font-semibold px-8 py-3.5 rounded-full transition-colors">
                    {b.ctaLabel}
                  </button>
                </div>
              )}
            </div>

            {/* ── Image side ── */}
            <div
              className="lg:w-[55%] p-4 lg:p-6 flex items-center"
              style={{ minHeight: "400px" }}
            >
              <div className="relative w-full rounded-3xl overflow-hidden h-88.5 lg:h-full lg:min-h-125">
                <Image
                  src={b.image}
                  alt={b.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
