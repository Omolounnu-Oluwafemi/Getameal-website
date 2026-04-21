"use client";

import { useState } from "react";

const ACTIVITIES = [
  {
    label: "Food Tasting",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 11l19-9-9 19-2-8-8-2z" />
      </svg>
    ),
  },
  {
    label: "Wine Tasting",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M8 22h8M12 11v11M6 2h12l-2 7a4 4 0 01-8 0L6 2z" />
      </svg>
    ),
  },
  {
    label: "Paint & Sip",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line
          x1="9"
          y1="9"
          x2="9.01"
          y2="9"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="15"
          y1="9"
          x2="15.01"
          y2="9"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Cake Tasting",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M20 21v-8a2 2 0 00-2-2H6a2 2 0 00-2 2v8" />
        <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2 1 2 1" />
        <path d="M2 21h20" />
        <path d="M7 8v3M12 8v3M17 8v3" />
        <path d="M7 5a2 2 0 002-2 2 2 0 002 2 2 2 0 002-2 2 2 0 002 2" />
      </svg>
    ),
  },
  {
    label: "Interactive Food Games",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="2" y="6" width="20" height="12" rx="4" />
        <path d="M6 12h4M8 10v4" />
        <circle cx="16" cy="11" r="1" fill="currentColor" />
        <circle cx="18" cy="13" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Surprise Experience",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
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
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-4xl mx-auto">
        <p className="text-white text-xl sm:text-2xl font-semibold mb-4">
          Taste What&apos;s Coming In Lagos.
        </p>

        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-10">
          Taste. Sip. Play. Connect.
        </h2>

        {/* Email form */}
        <div className="flex w-full max-w-xl bg-white/20 backdrop-blur-md rounded-full overflow-hidden border border-white/20 shadow-xl mb-5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 text-sm text-white placeholder-white/70 bg-transparent focus:outline-none"
          />
          <button className="bg-white text-gray-900 text-sm font-bold px-6 py-3 rounded-full m-1.5 hover:bg-gray-100 transition-colors whitespace-nowrap">
            Reserve My Spot
          </button>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {["bg-amber-400", "bg-blue-400", "bg-rose-400"].map((c, i) => (
              <div
                key={i}
                className={`w-9 h-9 rounded-full ${c} border-2 border-white/60 flex items-center justify-center text-xs font-bold text-white`}
              >
                {["A", "B", "C"][i]}
              </div>
            ))}
          </div>
          <p className="text-white/90 text-sm font-medium">
            Over 80+ people already got their ticket
          </p>
        </div>
      </div>

      {/* Activity bar — pinned to bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-full max-w-313.25 px-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-6 py-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {ACTIVITIES.map(({ label, icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors cursor-pointer"
              >
                <span className="opacity-80">{icon}</span>
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
