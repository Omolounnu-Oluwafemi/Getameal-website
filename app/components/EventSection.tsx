"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

const AVATAR_COLORS = [
  "bg-amber-400",
  "bg-rose-400",
  "bg-teal-400",
  "bg-blue-400",
];

export default function EventSection() {
  const [phone, setPhone] = useState("");

  return (
    <section className="py-10 sm:py-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-stretch justify-between">
          {/* Left — event photo */}
          <style>{`
            .event-photo { height: 467px; }
            @media (min-width: 1024px) { .event-photo { width: 700px; height: 700px; flex-shrink: 0; } }
          `}</style>
          <motion.div
            className="event-photo relative overflow-hidden rounded-2xl lg:rounded-[40px]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/siplady.png"
              alt="Taste. Sip. Play. Connect. event"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </motion.div>

          {/* Right — content */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="text-2xl sm:text-5xl font-black text-gray-900 leading-none mb-4">
              Taste. Sip. Play.
              <br />
              Connect.
            </h2>
            <p className="text-[#5C5C5C] text-sm sm:text-[18px] leading-relaxed mb-5">
              Join us for an intimate evening where food meets fun, and
              experience Getameal before it goes live.
            </p>

            {/* Activities */}
            <p className="hidden sm:block font-bold text-gray-900 text-2xl mb-2">
              Activities...
            </p>
            <div className="space-y-0 mb-8">
              {ACTIVITIES.map((a) => (
                <div key={a.num} className="flex items-center gap-4 py-4">
                  <span className="text-sm font-bold text-black w-4 shrink-0">
                    {a.num}
                  </span>
                  <div
                    className={`w-12 sm:w-12.5 h-12 sm:h-11.5 rounded-[10px] ${a.bg} flex items-center justify-center text-2xl shrink-0`}
                  >
                    {a.emoji}
                  </div>
                  <div>
                    <p className="font-semibold text-black text-[16px]">
                      {a.title}
                    </p>
                    <p className="text-[#5C5C5C] text-sm mt-0.5">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Phone + CTA */}
            <div
              className="flex w-full max-w-md bg-white rounded-full overflow-hidden mb-5"
              style={{ boxShadow: "0px 4px 50px 0px #00000014" }}
            >
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="flex-1 px-6 py-4 text-sm text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none"
              />
              <button className="bg-[#209D01] hover:bg-green-700 text-white text-sm font-semibold px-6 py-3 rounded-full m-1.5 transition-colors whitespace-nowrap cursor-pointer">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
