"use client";

import Image from "next/image";
import { useRef, useState } from "react";
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
  const trackRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef<"days" | "meals" | null>(null);

  const daysRounded = Math.round(days);
  const mealsRounded = Math.round(meals);
  const weeklyEarnings = (daysRounded * mealsRounded * 22838).toLocaleString("en-NG");
  const daysPercent = ((days - 1) / 6) * 50;
  const mealsPercent = 50 + ((meals - 1) / 6) * 50;

  const pctFromClient = (clientX: number) => {
    const rect = trackRef.current!.getBoundingClientRect();
    return Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
  };

  const applyPct = (pct: number, side: "days" | "meals") => {
    if (side === "days") {
      const t = Math.min(pct, 0.5) / 0.5;
      setDays(Math.max(1, Math.min(7, 1 + t * 6)));
    } else {
      const t = Math.max(0, pct - 0.5) / 0.5;
      setMeals(Math.max(1, Math.min(7, 1 + t * 6)));
    }
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const pct = pctFromClient(e.clientX);
    const side =
      Math.abs(pct - daysPercent / 100) <= Math.abs(pct - mealsPercent / 100)
        ? "days"
        : "meals";
    draggingRef.current = side;
    e.currentTarget.setPointerCapture(e.pointerId);
    applyPct(pct, side);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    applyPct(pctFromClient(e.clientX), draggingRef.current);
  };

  const onPointerUp = () => {
    draggingRef.current = null;
  };

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
            {daysRounded} times, {mealsRounded} meals a week&nbsp;&nbsp;|&nbsp;&nbsp; ₦
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
                {daysRounded} Days
              </div>
              <div
                className="absolute -translate-x-1/2 bg-white border border-gray-200 text-xs font-semibold text-gray-700 px-3 py-1 rounded-full shadow-sm whitespace-nowrap"
                style={{ left: `${mealsPercent}%` }}
              >
                {mealsRounded} Meals
              </div>
            </div>

            {/* Track */}
            <div
              ref={trackRef}
              className="relative h-2 bg-gray-200 rounded-full cursor-pointer touch-none select-none"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
            >
              {/* Green fill between handles */}
              <div
                className="absolute h-full bg-green-600 rounded-full pointer-events-none"
                style={{
                  left: `${daysPercent}%`,
                  right: `${100 - mealsPercent}%`,
                }}
              />
              {/* Days handle */}
              <div
                className="absolute top-1/2 w-7.5 h-7.5 bg-white rounded-full shadow-md -translate-y-1/2 -translate-x-1/2 pointer-events-none"
                style={{ left: `${daysPercent}%` }}
              />
              {/* Meals handle */}
              <div
                className="absolute top-1/2 w-7.5 h-7.5 bg-white rounded-full shadow-md -translate-y-1/2 -translate-x-1/2 pointer-events-none"
                style={{ left: `${mealsPercent}%` }}
              />
            </div>
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
