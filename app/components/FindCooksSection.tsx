"use client";

import { useState } from "react";

const AVATAR_COLORS = ["bg-amber-500", "bg-blue-500", "bg-rose-500", "bg-teal-500"];

export default function FindCooksSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/FindCookBG.png')" }}
      />

      {/* Dark overlay — heavier on the right so text is readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* Content — pushed to right half */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-end">
          <div className="w-full lg:w-[55%] text-white">

            {/* Eyebrow */}
            <p className="text-white/90 text-xl font-semibold mb-3">
              Find Cooks near you
            </p>

            {/* Main heading */}
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-black leading-none mb-8">
              To Cook For YOU
            </h2>

            {/* Email form */}
            <div className="flex w-full max-w-xl bg-white/15 backdrop-blur-md rounded-full overflow-hidden border border-white/20 shadow-xl mb-5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 text-sm text-white placeholder-white/60 bg-transparent focus:outline-none"
              />
              <button className="bg-white text-gray-900 text-sm font-bold px-7 py-3 rounded-full m-1.5 hover:bg-gray-100 transition-colors whitespace-nowrap shadow-sm">
                Join Waiting List
              </button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {AVATAR_COLORS.map((c, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full ${c} border-2 border-white/60 flex items-center justify-center text-xs font-bold text-white`}
                  >
                    {["👩", "👨", "👩‍🦱", "👨‍🦳"][i]}
                  </div>
                ))}
              </div>
              <p className="text-white/90 text-sm font-medium">
                Over 100+ people already joined
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
