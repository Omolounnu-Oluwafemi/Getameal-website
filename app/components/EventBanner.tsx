/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const ACTIVITIES = [
  { label: "Food Tasting", icon: "/food.svg" },
  { label: "Wine Tasting", icon: "/wine.svg" },
  { label: "Paint & Sip", icon: "/paint.svg" },
  { label: "Cake Tasting", icon: "/cake.svg" },
  { label: "Interactive Food Games", icon: "/interactive.svg" },
  { label: "Surprise Experience", icon: "/surprise.svg" },
];

export default function EventBanner() {
  const [email, setEmail] = useState("");

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      id="events"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/tastebg.png')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-7xl mx-auto">
        <p className="text-white text-[16px] sm:text-5xl font-semibold mb-4 -mt-24">
          Taste What&apos;s Coming In Lagos.
        </p>

        <h2 className="text-[24px] sm:text-6xl md:text-7xl lg:text-[90px] font-extrabold text-white leading-none mb-10">
          Taste. Sip. Play. Connect.
        </h2>

        {/* Email form */}
        <div className="w-full max-w-202.25 mb-8 flex flex-col sm:flex-row sm:bg-white/20 sm:backdrop-blur-md sm:rounded-full sm:overflow-hidden sm:border sm:border-white/20 sm:shadow-xl gap-3 sm:gap-0">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 text-sm text-white placeholder-white/70 bg-white/20 backdrop-blur-md border border-white/20 rounded-full sm:bg-transparent sm:backdrop-blur-none sm:border-0 sm:rounded-none focus:outline-none"
          />
          <button className="w-full sm:w-auto bg-white text-black text-[16px] font-medium px-6 py-3 rounded-full sm:m-1.5 hover:bg-gray-100 transition-colors whitespace-nowrap">
            Reserve My Spot
          </button>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex -space-x-2">
            {["/people1.png", "/people2.png", "/people3.png"].map((src, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ))}
          </div>
          <p className="text-white text-sm  md:text-[16px] font-medium text-center">
            Over 80+ people already got their ticket
          </p>
        </div>
      </div>

      {/* Activity bar — pinned to bottom, hidden on mobile */}
      <div className="hidden lg:block absolute bottom-20 left-1/2 -translate-x-1/2 z-10 w-full max-w-313.25 px-4">
        <div className="bg-white/5 backdrop-blur-md border border-white/15 rounded-3xl px-6 py-5">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {ACTIVITIES.map(({ label, icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors cursor-pointer"
              >
                <div className="relative w-12 h-12 shrink-0 flex items-center justify-center">
                  <img
                    src="/Star.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                  <img
                    src={icon}
                    alt=""
                    className="relative z-10 w-5 h-5 object-contain"
                  />
                </div>
                <span className="text-sm font-medium whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
