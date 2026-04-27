"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const HeroMap = dynamic(() => import("./HeroMap"), { ssr: false });

const LOCATION_TAGS = [
  "Lekki Phase 1", "Lekki Phase 2", "Ajah", "Maryland", "Ikeja", "Jakande",
  "Sangotedo", "Festac", "VGC", "Ikoyi", "Victoria Island", "Surulere", "Yaba",
  "Gbagada", "Magodo", "Ojodu Berger", "Ogba", "Isolo", "Oshodi", "Ogudu",
  "Oniru", "Chevron", "Abraham Adesanya", "Osapa London", "Ikate", "Ilasan",
  "Agungi", "Idado", "Shangisha", "Ketu", "Mile 12", "Ikorodu", "Apapa",
  "Orile", "Amuwo-Odofin", "Agege", "Ojota", "Egbeda", "Idimu",
  "Satellite Town", "Badagry",
];

export default function HeroSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="pt-20 flex flex-col bg-[#F7F7F7] min-h-screen md:min-h-[140vh]">
      <Navbar />
      <div className="relative flex-1 min-h-[calc(100vh-56px)] md:min-h-[calc(140vh-56px)]">
        <HeroMap />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(175.41deg, #F7F7F7 20.67%, rgba(247, 247, 247, 0) 122.04%)",
            zIndex: 1,
          }}
        />

        <div
          className="absolute top-0 left-0 right-0 flex flex-col items-center px-4 md:pt-20 pt-7"
          style={{ zIndex: 2 }}
        >
          <motion.h1
            className="text-center mb-2 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="block text-[20px] sm:text-4xl md:text-[55px] font-semibold text-black">
              Pre-order Home Cooked Meals
            </span>
            <span className="text-[32px] md:text-[75px] font-black text-black mt-2">
              From Cooks Around Lekki
            </span>
          </motion.h1>

          <motion.p
            className="text-center text-[#797979] max-w-md md:max-w-215.5 text-sm sm:text-lg leading-relaxed mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <span className="md:hidden">
              Buy large portions of fresh meals from trusted home cooks near you
              and store them for the week.
            </span>
            <span className="hidden md:inline">
              Instead of cooking every day or ordering food daily, you can buy
              large portions of fresh meals from trusted home cooks near you and
              store them for the week.
            </span>
          </motion.p>

          <motion.div
            className="flex items-center gap-3 mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
          >
            <div className="flex -space-x-2">
              {["/people1.png", "/people2.png", "/people3.png", "/people4.png"].map((src, i) => (
                <div key={i} className="w-6 h-6 md:w-10 md:h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image src={src} alt="" width={40} height={40} className="object-cover object-top w-full h-full" />
                </div>
              ))}
            </div>
            <span className="text-sm sm:text-base text-gray-700 font-medium">
              Over 500+ users already joined
            </span>
          </motion.div>

          <motion.div
            className="w-full max-w-lg flex flex-col sm:flex-row sm:bg-white sm:rounded-full sm:shadow-lg sm:border sm:border-gray-100 sm:overflow-hidden gap-3 sm:gap-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email here"
              className="flex-1 px-5 py-4 text-sm text-gray-700 focus:outline-none bg-white rounded-full shadow-lg border border-gray-100 sm:bg-transparent sm:rounded-none sm:shadow-none sm:border-0"
            />
            <button
              type="button"
              className="bg-[#209D01] hover:bg-green-700 text-white text-sm font-semibold px-6 py-4 rounded-full transition-colors whitespace-nowrap sm:m-1"
            >
              Join waiting list
            </button>
          </motion.div>
        </div>

        <motion.div
          className="hidden md:block absolute bottom-30 left-1/2 -translate-x-1/2"
          style={{ zIndex: 3 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
        >
          <Image
            src="/Munacard.svg"
            alt="Munachi's Kitchen"
            width={400}
            height={320}
            className="rounded-3xl"
          />
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: scroll-left 80s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="bg-white border-t border-gray-200 overflow-hidden py-5 md:py-8">
        <div className="marquee-track" style={{ display: "flex", gap: "3rem", width: "max-content" }}>
          {[...LOCATION_TAGS, ...LOCATION_TAGS].map((loc, i) => (
            <span key={i} className="text-[14px] md:text-[24px] font-bold text-gray-900 whitespace-nowrap">
              {loc}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
