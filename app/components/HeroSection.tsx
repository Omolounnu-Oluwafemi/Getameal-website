"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// Load map client-side only to avoid SSR issues with Leaflet
const HeroMap = dynamic(() => import("./HeroMap"), { ssr: false });

const LOCATION_TAGS = [
  "Lekki Phase 1",
  "Ajah",
  "Maryland",
  "Ikeja",
  "Jakande",
  "Sangotedo",
  "Festac",
  "VGC",
  "Ikoyi",
];

const AVATAR_COLORS = ["bg-amber-400", "bg-green-500", "bg-orange-400", "bg-teal-500"];
const AVATAR_INITIALS = ["A", "B", "C", "D"];

export default function HeroSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="pt-16 flex flex-col" style={{ minHeight: "100vh" }}>
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[340px] bg-white rounded-2xl shadow-2xl overflow-hidden"
          style={{ zIndex: 3 }}
        >
          {/* Card header */}
          <div className="flex items-center gap-3 px-4 pt-3 pb-2">
            <div className="w-9 h-9 rounded-full bg-orange-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              MK
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm leading-tight">
                Munachi&apos;s Kitchen
              </p>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <span className="text-yellow-400 font-bold">★</span>
                <span className="font-semibold text-gray-700">4.7</span>
                <span>(98)</span>
                <span className="mx-1">·</span>
                <span>📍 Lekki, Lagos</span>
              </div>
            </div>
          </div>

          {/* Food images */}
          <div className="grid grid-cols-2 gap-1 px-1">
            <div className="relative h-24 bg-amber-100 rounded-xl overflow-hidden flex items-center justify-center">
              <span className="text-5xl">🍛</span>
              <span className="absolute top-1.5 left-1.5 text-[10px] bg-white/90 text-gray-700 font-semibold px-1.5 py-0.5 rounded-full">
                1 +
              </span>
            </div>
            <div className="relative h-24 bg-orange-100 rounded-xl overflow-hidden flex items-center justify-center">
              <span className="text-5xl">🍗</span>
              <span className="absolute top-1.5 right-1.5 text-[10px] bg-green-600 text-white font-bold px-1.5 py-0.5 rounded-full">
                Popular
              </span>
            </div>
          </div>

          {/* Meal details */}
          <div className="grid grid-cols-2 gap-1 px-1 mt-1">
            <div className="px-2 py-1.5">
              <span className="text-[10px] text-green-600 font-bold block">
                Cooking On-demand
              </span>
              <p className="text-xs font-semibold text-gray-900 leading-tight truncate">
                Well cooked smoky jollof ri...
              </p>
              <p className="text-xs font-bold text-gray-900 mt-0.5">
                ₦25,000{" "}
                <span className="text-gray-400 font-normal">/ 4 Litre</span>
              </p>
            </div>
            <div className="px-2 py-1.5">
              <span className="text-[10px] text-orange-500 font-bold block">
                Cooking Tomorrow
              </span>
              <p className="text-xs font-semibold text-gray-900 leading-tight truncate">
                16 Pieces of spicy...
              </p>
              <p className="text-xs font-bold text-gray-900 mt-0.5">
                ₦35,000{" "}
                <span className="text-gray-400 font-normal">/ 16 Litre</span>
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 px-3 py-2.5 border-t border-gray-50 mt-1">
            {[
              { label: "Pick-up", dot: "bg-green-500" },
              { label: "Available", dot: "bg-green-500" },
              { label: "Delivery", dot: "bg-green-500" },
              { label: "Not Available", dot: "bg-red-400" },
            ].map(({ label, dot }) => (
              <div key={label} className="flex items-center gap-1">
                <div className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                <span className="text-[10px] text-gray-500 font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location tabs bar */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8 py-4 overflow-x-auto scrollbar-hide">
            {LOCATION_TAGS.map((loc) => (
              <button
                key={loc}
                className="text-sm font-semibold text-gray-700 hover:text-green-600 whitespace-nowrap transition-colors"
              >
                {loc}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
