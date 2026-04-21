"use client";

import { useState } from "react";

const COOKS = [
  { name: "Bisi's Pot",        location: "Victoria Island, Lagos", gradient: "from-amber-200 to-amber-300", emoji: "👩"   },
  { name: "Obi's Kitchen",     location: "Lekki Phase 1, Lagos",   gradient: "from-slate-300 to-slate-400", emoji: "👨"   },
  { name: "Chinonso Ugwu",     location: "Surulere, Lagos",        gradient: "from-rose-200 to-rose-300",   emoji: "👩‍🦱" },
  { name: "Tunde's Cuisines",  location: "Yaba, Lagos",            gradient: "from-blue-200 to-blue-300",   emoji: "👨‍🍳" },
  { name: "Sandra Kitchen",    location: "Ikeja, Lagos",           gradient: "from-green-200 to-green-300", emoji: "👩‍🍳" },
  { name: "Emeka's Meals",     location: "Ajah, Lagos",            gradient: "from-purple-200 to-purple-300", emoji: "👨‍🦱" },
];

const AVATAR_COLORS = [
  "bg-amber-400",
  "bg-rose-400",
  "bg-teal-400",
  "bg-blue-400",
  "bg-purple-400",
];

export default function EarningsSection() {
  const [days, setDays] = useState(3);
  const [meals, setMeals] = useState(3);

  const weeklyEarnings = (days * meals * 22838).toLocaleString("en-NG");
  const daysPercent = ((days - 1) / 6) * 100;
  const mealsPercent = 40 + ((meals - 1) / 6) * 50; // offset so they don't overlap at default

  return (
    <section className="bg-white py-24 text-center" id="for-cooks">
      <div className="max-w-2xl mx-auto px-4">
        {/* "For Cooks" badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-10 shadow-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2a5 5 0 015 5c0 2.5-1.5 4.5-3.5 5.3V20H11v-7.7C9 11.5 7 9.5 7 7a5 5 0 015-5z"
              fill="#16a34a"
              opacity="0.8"
            />
            <circle cx="12" cy="7" r="2" fill="#16a34a" />
          </svg>
          <span className="text-sm font-semibold text-gray-700">For Cooks</span>
        </div>

        {/* Main heading */}
        <h2 className="text-5xl sm:text-6xl font-black text-gray-900 leading-tight mb-5">
          You could make
          <br />
          <span className="text-green-600">₦200,540</span> every week
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md mx-auto">
          You only cook when you want to, no pressure. Get what you made
          credited straight to your account every week.
        </p>

        {/* Social proof */}
        <div className="flex flex-col items-center gap-2 mb-10">
          <div className="flex -space-x-3">
            {AVATAR_COLORS.map((c, i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-full ${c} border-[3px] border-white flex items-center justify-center text-sm`}
              >
                {["👩", "👨", "👩‍🦱", "👨‍🦳", "👩‍🍳"][i]}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400">
            Over 50+ cooks already joined the waiting list
          </p>
        </div>

        {/* Earnings calculator */}
        <div className="bg-white border border-gray-100 rounded-2xl px-6 py-6 mb-8 shadow-sm">
          {/* Summary line */}
          <p className="text-sm font-bold text-gray-900 mb-6">
            {days} times, {meals} meals a week&nbsp;&nbsp;|&nbsp;&nbsp;
            <span className="text-green-600">₦{weeklyEarnings}.00</span>
          </p>

          {/* Dual-handle visual slider */}
          <div className="relative mb-8 px-2">
            {/* Floating labels above handles */}
            <div className="relative h-8 mb-1">
              <div
                className="absolute -translate-x-1/2 bg-white border border-gray-200 text-xs font-semibold text-gray-700 px-3 py-1 rounded-full shadow-sm whitespace-nowrap"
                style={{ left: `${daysPercent}%` }}
              >
                {days} Days
              </div>
              <div
                className="absolute -translate-x-1/2 bg-white border border-gray-200 text-xs font-semibold text-gray-700 px-3 py-1 rounded-full shadow-sm whitespace-nowrap"
                style={{ left: `${mealsPercent}%` }}
              >
                {meals} Meals
              </div>
            </div>

            {/* Track */}
            <div className="relative h-2 bg-gray-200 rounded-full">
              {/* Green fill between handles */}
              <div
                className="absolute h-full bg-green-600 rounded-full"
                style={{
                  left: `${Math.min(daysPercent, mealsPercent)}%`,
                  right: `${100 - Math.max(daysPercent, mealsPercent)}%`,
                }}
              />
              {/* Days handle */}
              <div
                className="absolute w-5 h-5 bg-white border-2 border-green-600 rounded-full shadow-md -translate-y-1.5 -translate-x-1/2 pointer-events-none"
                style={{ left: `${daysPercent}%` }}
              />
              {/* Meals handle */}
              <div
                className="absolute w-5 h-5 bg-white border-2 border-green-600 rounded-full shadow-md -translate-y-1.5 -translate-x-1/2 pointer-events-none"
                style={{ left: `${mealsPercent}%` }}
              />
            </div>

            {/* Hidden range inputs for interactivity */}
            <input
              type="range"
              min={1}
              max={7}
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="absolute inset-0 w-full opacity-0 cursor-pointer h-6 top-8"
            />
            <input
              type="range"
              min={1}
              max={7}
              value={meals}
              onChange={(e) => setMeals(Number(e.target.value))}
              className="absolute inset-0 w-full opacity-0 cursor-pointer h-6 top-8"
            />
          </div>

          {/* CTA button */}
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-full text-base transition-colors">
            Join as a Cook
          </button>
        </div>
      </div>

      {/* Cook cards — infinite auto-scroll */}
      <style>{`
        @keyframes scroll-cards {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .cards-track {
          animation: scroll-cards 28s linear infinite;
          will-change: transform;
        }
        .cards-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="overflow-hidden py-2">
        <div
          className="cards-track"
          style={{ display: "flex", gap: "1rem", width: "max-content" }}
        >
          {/* Duplicate for seamless loop */}
          {[...COOKS, ...COOKS].map((cook, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-3xl flex flex-col items-center shrink-0"
              style={{ width: "260px", minHeight: "360px", padding: "32px 24px 28px" }}
            >
              {/* Avatar */}
              <div
                className={`rounded-full bg-linear-to-br ${cook.gradient} flex items-center justify-center shadow-sm mb-6`}
                style={{ width: "160px", height: "160px", fontSize: "72px" }}
              >
                {cook.emoji}
              </div>

              {/* Name */}
              <p className="font-bold text-gray-900 text-xl mb-2 text-center">
                {cook.name}
              </p>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <span>{cook.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
