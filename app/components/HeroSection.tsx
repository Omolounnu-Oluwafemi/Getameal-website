"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Image from "next/image";
import Navbar from "./Navbar";

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

const AVATAR_COLORS = [
  "bg-amber-400",
  "bg-green-500",
  "bg-orange-400",
  "bg-teal-500",
];
const AVATAR_INITIALS = ["A", "B", "C", "D"];

export default function HeroSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="pt-20 flex flex-col" style={{ minHeight: "100vh" }}>
      <Navbar />
      {/* Map + overlaid content */}
      <div
        className="relative flex-1 flex flex-col justify-between"
        style={{ minHeight: "calc(100vh - 56px)" }}
      >
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

        {/* Top — headline + form */}
        <div
          className="relative flex flex-col items-center px-4 pt-12"
          style={{ zIndex: 2 }}
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
            Instead of cooking every day or ordering food daily, you can buy
            large portions of fresh meals from trusted home cooks near you and
            store them for the week.
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
          <div className="flex w-full max-w-2xl bg-white rounded-full shadow-lg overflow-hidden border border-gray-100">
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

        {/* Bottom — Munachi's Kitchen card */}
        <div
          className="relative flex justify-center pb-8 pt-20"
          style={{ zIndex: 2 }}
        >
          <Image
            src="/Munacard.svg"
            alt="Munachi's Kitchen"
            width={400}
            height={320}
            className="rounded-3xl"
          />
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
            <span
              key={i}
              className="text-sm font-bold text-gray-900 whitespace-nowrap"
            >
              {loc}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
