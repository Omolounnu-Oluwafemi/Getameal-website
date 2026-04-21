"use client";

import { useState } from "react";
import Image from "next/image";

const ACTIVITIES = [
  {
    num: 1,
    title: "Food Tasting",
    desc: "Explore a curated selection of different local dishes",
    emoji: "🍲",
    bg: "bg-orange-100",
  },
  {
    num: 2,
    title: "Cake Tasting",
    desc: "Sample handcrafted desserts from local bakers.",
    emoji: "🎂",
    bg: "bg-amber-100",
  },
  {
    num: 3,
    title: "Paint & Sip",
    desc: "Unwind with guided painting while you sip and socialize.",
    emoji: "🎨",
    bg: "bg-yellow-100",
  },
];

const AVATAR_COLORS = ["bg-amber-400", "bg-rose-400", "bg-teal-400", "bg-blue-400"];

export default function EventSection() {
  const [phone, setPhone] = useState("");

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Left — event photo */}
          <div
            className="relative shrink-0 rounded-3xl overflow-hidden w-full lg:w-[420px]"
            style={{ minHeight: "580px" }}
          >
            <Image
              src="/tastebg.png"
              alt="Taste. Sip. Play. Connect. event"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
          </div>

          {/* Right — content */}
          <div className="flex-1">
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 leading-tight mb-4">
              Taste. Sip. Play.<br />Connect.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Join us for an intimate evening where food meets fun, and
              experience Getameal before it goes live.
            </p>

            {/* Activities */}
            <p className="font-bold text-gray-900 text-base mb-5">Activities...</p>
            <div className="space-y-0 mb-8">
              {ACTIVITIES.map((a, i) => (
                <div key={a.num}>
                  <div className="flex items-center gap-4 py-4">
                    {/* Number */}
                    <span className="text-sm font-semibold text-gray-400 w-4 shrink-0">
                      {a.num}
                    </span>

                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl ${a.bg} flex items-center justify-center text-2xl shrink-0`}
                    >
                      {a.emoji}
                    </div>

                    {/* Text */}
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{a.title}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{a.desc}</p>
                    </div>
                  </div>

                  {/* Dashed divider between items */}
                  {i < ACTIVITIES.length - 1 && (
                    <div className="ml-8 border-t border-dashed border-gray-200" />
                  )}
                </div>
              ))}
            </div>

            {/* Phone + CTA */}
            <div className="flex w-full max-w-md bg-gray-100 rounded-full overflow-hidden mb-5">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="flex-1 px-6 py-4 text-sm text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-6 py-3 rounded-full m-1.5 transition-colors whitespace-nowrap">
                Get your ticket
              </button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {AVATAR_COLORS.map((c, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full ${c} border-2 border-white flex items-center justify-center text-xs`}
                  >
                    {["👩", "👨", "👩‍🦱", "👨‍🦳"][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 font-medium">
                Over 50+ people already joined
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
