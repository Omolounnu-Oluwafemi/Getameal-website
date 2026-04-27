"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const COOKS = [
  {
    name: "Bisi's Pot",
    location: "Victoria Island, Lagos",
    image: "/bisi.png",
  },
  {
    name: "Obi's Kitchen",
    location: "Lekki Phase 1, Lagos",
    image: "/obi.png",
  },
  {
    name: "Chinonso Ugwu",
    location: "Surulere, Lagos",
    image: "/chinonso.png",
  },
  {
    name: "Tunde's Cuisines",
    location: "Yaba, Lagos",
    image: "/tunde.png",
  },
  {
    name: "Ifeyinwa's Kitchen",
    location: "Ikeja, Lagos",
    image: "/ifeyinwa.png",
  },
  {
    name: "Ifeanyi's Meals",
    location: "Ajah, Lagos",
    image: "/ifeanyi.png",
  },
];

export default function EarningsSection() {
  const [days, setDays] = useState(3);
  const [meals, setMeals] = useState(3);

  const weeklyEarnings = (days * meals * 22838).toLocaleString("en-NG");
  // Days handle: left half (0–50%); dragging right (toward center) increases days
  const daysPercent = ((days - 1) / 6) * 50;
  // Meals handle: right half (50–100%); dragging right increases meals
  const mealsPercent = 50 + ((meals - 1) / 6) * 50;

  return (
    <section className="bg-white py-10 lg:py-24 text-center" id="for-cooks">
      <div className="max-w-3xl mx-auto px-2 sm:px-4">
        {/* "For Cooks" badge */}
        <motion.div
          className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-6 py-4 mb-10 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image src="/cookIcon.svg" alt="" width={24} height={24} />
          <span className="text-sm sm:text-[16px] font-semibold text-gray-700">
            For Cooks
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h2
          className="text-3xl sm:text-[64px] font-black text-gray-900 leading-tight"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          You could make
          <br />
          <span className="text-green-600">₦200,540</span> every week
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-gray-400 text-[16px] leading-relaxed mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        >
          You only cook when you want to, no pressure. Get what you made
          credited straight to your account every week.
        </motion.p>

        {/* Social proof */}
        <motion.div
          className="flex flex-col items-center gap-2 mb-10 mt-4 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          {/* Center avatar is largest; sizes taper symmetrically outward */}
          <div className="flex items-center -space-x-2">
            {[28, 48, 70, 48, 28].map((size, i) => (
              <div
                key={i}
                className="rounded-full border-[3px] border-white overflow-hidden shrink-0"
                style={{ width: size, height: size }}
              >
                <Image
                  src={`/people${i + 1}.png`}
                  alt=""
                  width={size}
                  height={size}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-[#5C5C5C]">
            Over 50+ cooks already joined the waiting list
          </p>
        </motion.div>

        {/* Earnings calculator */}
        <motion.div
          className="sm:px-6 sm:py-6 mb-8"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          {/* Summary line */}
          <p className="text-[16px] font-semibold text-black mb-14">
            {days} times, {meals} meals a week&nbsp;&nbsp;|&nbsp;&nbsp; ₦
            {weeklyEarnings}.00
          </p>

          {/* Dual-handle visual slider */}
          <div className="relative mb-10 sm:mb-14 px-2">
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
                  left: `${daysPercent}%`,
                  right: `${100 - mealsPercent}%`,
                }}
              />
              {/* Days handle */}
              <div
                className="absolute w-5 h-5 bg-white rounded-full shadow-md -translate-y-1.5 -translate-x-1/2 pointer-events-none"
                style={{ left: `${daysPercent}%` }}
              />
              {/* Meals handle */}
              <div
                className="absolute w-5 h-5 bg-white rounded-full shadow-md -translate-y-1.5 -translate-x-1/2 pointer-events-none"
                style={{ left: `${mealsPercent}%` }}
              />
            </div>

            {/* Days input covers left half only */}
            <input
              type="range"
              min={1}
              max={7}
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="absolute top-8 h-6 opacity-0 cursor-pointer"
              style={{ left: 0, width: "50%" }}
            />
            {/* Meals input covers right half only */}
            <input
              type="range"
              min={1}
              max={7}
              value={meals}
              onChange={(e) => setMeals(Number(e.target.value))}
              className="absolute top-8 h-6 opacity-0 cursor-pointer"
              style={{ right: 0, width: "50%" }}
            />
          </div>

          {/* CTA button */}
          <button className="cursor-pointer w-full bg-[#209D01] hover:bg-green-600 text-white font-semibold py-3 rounded-full text-base transition-colors">
            Join as a Cook
          </button>
        </motion.div>
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
        .cook-card {
          width: 220px;
          height: 237px;
          padding: 20px 16px;
        }
        .cook-avatar {
          width: 100px;
          height: 100px;
        }
        @media (min-width: 640px) {
          .cook-card {
            width: 335px;
            height: 405px;
            padding: 32px 24px 28px;
          }
          .cook-avatar {
            width: 160px;
            height: 160px;
          }
        }
      `}</style>

      <div className="overflow-hidden py-2">
        <div
          className="cards-track"
          style={{ display: "flex", gap: "2rem", width: "max-content" }}
        >
          {/* Duplicate for seamless loop */}
          {[...COOKS, ...COOKS].map((cook, i) => (
            <div
              key={i}
              className="cook-card bg-gray-100 rounded-[30px] flex flex-col items-center shrink-0"
            >
              {/* Avatar */}
              <div className="cook-avatar rounded-full overflow-hidden shrink-0 my-4">
                <Image
                  src={cook.image}
                  alt={cook.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Name */}
              <p className="font-semibold text-black text-sm sm:text-2xl mb-2 text-center">
                {cook.name}
              </p>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-black text-[12px] sm:text-sm">
                <Image src="/location.svg" alt="" width={18} height={18} />
                <span>{cook.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
