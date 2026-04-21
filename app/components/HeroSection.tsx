"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// Load map client-side only to avoid SSR issues with Leaflet
const HeroMap = dynamic(() => import("./HeroMap"), { ssr: false });

const LOCATION_TAGS = [
  "Lekki Phase 1",
  "Lekki Phase 2",
  "Ajah",
  "Maryland",
  "Ikeja",
  "Jakande",
  "Sangotedo",
  "Festac",
  "VGC",
  "Ikoyi",
  "Victoria Island",
  "Surulere",
  "Yaba",
  "Gbagada",
  "Magodo",
  "Ojodu Berger",
  "Ogba",
  "Isolo",
  "Oshodi",
  "Ogudu",
  "Oniru",
  "Chevron",
  "Abraham Adesanya",
  "Osapa London",
  "Ikate",
  "Ilasan",
  "Agungi",
  "Idado",
  "Shangisha",
  "Ketu",
  "Mile 12",
  "Ikorodu",
  "Apapa",
  "Orile",
  "Amuwo-Odofin",
  "Agege",
  "Ojota",
  "Egbeda",
  "Idimu",
  "Satellite Town",
  "Badagry",
];

const AVATAR_COLORS = ["bg-amber-400", "bg-green-500", "bg-orange-400", "bg-teal-500"];
const AVATAR_INITIALS = ["A", "B", "C", "D"];

export default function HeroSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="pt-20 flex flex-col" style={{ minHeight: "100vh" }}>
      {/* Map + overlaid content */}
      <div className="relative flex-1" style={{ minHeight: "calc(100vh - 56px)" }}>
        {/* Leaflet map fills entire background */}
        <HeroMap />

        {/* Subtle white top fade so text is readable */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 100%)",
            zIndex: 1,
          }}
        />

        {/* Centered content */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-start px-4"
          style={{ zIndex: 2, paddingTop: "48px" }}
        >
          {/* Headline */}
          <h1 className="text-center mb-3 leading-tight">
            <span className="block text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800">
              Pre-order Home Cooked Meals
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl font-black text-gray-900">
              From Cooks Around Lekki
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-center text-gray-600 max-w-lg text-sm sm:text-base leading-relaxed mb-5">
            Instead of cooking every day or ordering food daily, you can buy large
            portions of fresh meals from trusted home cooks near you and store them
            for the week.
          </p>

          {/* Social proof avatars */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex -space-x-2">
              {AVATAR_COLORS.map((color, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full ${color} border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm`}
                >
                  {AVATAR_INITIALS[i]}
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-700 font-medium">
              Over 500+ users already joined the waiting list
            </span>
          </div>

          {/* Email form */}
          <div className="flex w-full max-w-md bg-white rounded-full shadow-lg overflow-hidden border border-gray-100">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email to join"
              className="flex-1 px-5 py-3.5 text-sm text-gray-700 focus:outline-none bg-transparent"
            />
            <button
              type="button"
              className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors whitespace-nowrap m-1"
            >
              Join waiting list
            </button>
          </div>
        </div>

        {/* Munachi's Kitchen popup card — bottom center */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-75 bg-white rounded-3xl shadow-2xl overflow-hidden"
          style={{ zIndex: 3 }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 pt-4 pb-3">
            {/* Illustrated avatar */}
            <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-orange-100">
              <div className="w-full h-full bg-linear-to-b from-amber-300 to-orange-400 flex items-center justify-center text-2xl leading-none">
                👩‍🦱
              </div>
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm leading-tight">
                Munachi&apos;s Kitchen
              </p>
              <div className="flex items-center gap-1 text-xs mt-0.5">
                <span className="text-yellow-400 text-sm">★</span>
                <span className="font-bold text-gray-800">4.7</span>
                <span className="text-gray-400">(98)</span>
                <span className="text-gray-300 mx-0.5">·</span>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
                <span className="text-gray-500">Lekki, Lagos</span>
              </div>
            </div>
          </div>

          {/* Food images */}
          <div className="grid grid-cols-2 gap-2 px-3">
            {/* Left — Jollof rice */}
            <div className="relative h-32 rounded-2xl overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 40% 30%, #c2410c 0%, #b45309 40%, #92400e 100%)",
                }}
              />
              {/* Simulated food texture */}
              <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-80">
                🍛
              </div>
              {/* Quantity control */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-md">
                <button className="text-gray-500 text-xs leading-none">🗑</button>
                <span className="text-xs font-bold text-gray-900 min-w-2 text-center">1</span>
                <button className="text-gray-900 text-sm font-bold leading-none">+</button>
              </div>
            </div>

            {/* Right — Grilled chicken */}
            <div className="relative h-32 rounded-2xl overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 40%, #78350f 0%, #92400e 50%, #451a03 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-80">
                🍗
              </div>
              {/* Popular badge */}
              <div className="absolute top-2 right-2 bg-white text-gray-900 text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
                Popular
              </div>
            </div>
          </div>

          {/* Meal info */}
          <div className="grid grid-cols-2 gap-2 px-3 mt-3">
            <div>
              <p className="text-[11px] font-bold text-green-600">Cooking On-demand</p>
              <p className="text-xs font-semibold text-gray-900 mt-0.5 truncate">
                Well cooked smoky jollof ri..
              </p>
              <p className="text-xs font-bold text-gray-900 mt-0.5">
                ₦25,000{" "}
                <span className="text-gray-400 font-normal text-[10px]">/ 4 Litre</span>
              </p>
            </div>
            <div>
              <p className="text-[11px] font-bold text-orange-500">Cooking Tomorrow</p>
              <p className="text-xs font-semibold text-gray-900 mt-0.5 truncate">
                16 Pieces of spicy
              </p>
              <p className="text-xs font-bold text-gray-900 mt-0.5">
                ₦35,000{" "}
                <span className="text-gray-400 font-normal text-[10px]">/ 16 Litre</span>
              </p>
            </div>
          </div>

          {/* Footer tags */}
          <div className="flex items-center gap-1.5 px-4 py-3 mt-2 border-t border-gray-100 flex-wrap">
            <span className="flex items-center gap-1 text-[11px] text-gray-500">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3"/>
                <rect x="9" y="11" width="14" height="10" rx="2"/>
                <circle cx="12" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              </svg>
              Pick-up
            </span>
            <span className="text-gray-300 text-xs">•</span>
            <span className="text-[11px] text-gray-500">Available</span>
            <span className="text-gray-300 text-xs">•</span>
            <span className="flex items-center gap-1 text-[11px] text-gray-500">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 12l4-4m-4 4l4 4"/>
                <circle cx="18" cy="12" r="3"/>
              </svg>
              Delivery
            </span>
            <span className="text-gray-300 text-xs">•</span>
            <span className="text-[11px] text-gray-500">Not Available</span>
          </div>
        </div>
      </div>

      {/* Location marquee bar — full-width, scrolls right to left */}
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: scroll-left 40s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="bg-white border-t border-gray-200 overflow-hidden py-4">
        <div
          className="marquee-track"
          style={{ display: "flex", gap: "3rem", width: "max-content" }}
        >
          {[...LOCATION_TAGS, ...LOCATION_TAGS].map((loc, i) => (
            <span key={i} className="text-sm font-bold text-gray-900 whitespace-nowrap">
              {loc}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
