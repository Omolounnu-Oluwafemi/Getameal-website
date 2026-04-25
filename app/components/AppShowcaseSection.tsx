"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  "/page1.png",
  "/page2.png",
  "/page3.png",
  "/page4.png",
  "/page5.png",
  "/page6.png",
  "/page7.png",
  "/page8.png",
  "/page9.png",
  "/page10.png",
  "/page11.png",
  "/page12.png",
];

// Screen sized to match screenshot ratio exactly (440 × 956)
const SCREEN_W = 280;
const SCREEN_H = Math.round((SCREEN_W * 956) / 440); // 586 px
const BEZEL = 6; // phone border thickness
const PHONE_W = SCREEN_W + BEZEL * 2; // 294 px
const PHONE_H = SCREEN_H + BEZEL * 2; // 610 px
const GAP = 24;
// Side peeks are smaller than the phone frame
const PEEK_W = Math.round(SCREEN_W * 0.72);
const PEEK_H = Math.round(SCREEN_H * 0.72);

export default function AppShowcaseSection() {
  const [current, setCurrent] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 3000);

    const checkSize = () => setScale(window.innerWidth < 640 ? 0.9 : 1);
    checkSize();
    window.addEventListener("resize", checkSize);

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  // All dimensions scale together so layout stays consistent
  const pW = Math.round(PHONE_W * scale);
  const pH = Math.round(PHONE_H * scale);
  const pkW = Math.round(PEEK_W * scale);
  const pkH = Math.round(PEEK_H * scale);
  const step = pkW + GAP;

  return (
    <section className="pb-24 bg-gray-50 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[#F7F7F7] border border-[#E1E1E1] rounded-full px-4 py-3 mb-4">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                width="15"
                height="14"
                viewBox="0 0 24 24"
                fill="#000"
                className={i > 1 ? "hidden sm:block" : ""}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="text-sm sm:text-[16px] font-semibold text-gray-800">
            4.9/5
          </span>
          <div className="w-px h-4.5 bg-[#D9D9D9]" />
          <span className="text-sm sm:text-[16px] text-black font-semibold">
            Trusted by over 500+ people
          </span>
        </div>
        <p className="text-black text-2xl sm:text-[64px] font-extrabold mb-3">
          Always more for less
        </p>
        <p className="text-[#797979] mt-4 max-w-xl mx-auto text-[14px]">
          Instead of cooking every day or ordering food daily, you can buy large
          portions of fresh meals from trusted home cooks near you and store
          them for the week.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative" style={{ height: `${pH}px` }}>
        {/* ── Layer 1: Sliding strip (side peeks) ── */}
        <div
          className="absolute top-0 flex items-center h-full"
          style={{
            gap: `${GAP}px`,
            paddingLeft: `calc(50vw - ${pkW / 2}px)`,
            paddingRight: `calc(50vw - ${pkW / 2}px)`,
            transform: `translateX(-${current * step}px)`,
            transition: "transform 700ms ease-in-out",
          }}
        >
          {SLIDES.map((src, i) => (
            <div
              key={i}
              className="relative shrink-0 overflow-hidden rounded-[10%]"
              style={{
                width: `${pkW}px`,
                height: `${pkH}px`,
                opacity: i === current ? 0 : 0.45,
                transition: "opacity 700ms ease-in-out",
              }}
            >
              <Image
                src={src}
                alt={`App screen ${i + 1}`}
                fill
                className="object-cover object-top"
                sizes="300px"
              />
            </div>
          ))}
        </div>

        {/* ── Layer 2: Static CSS phone frame ──
            Sized to screenshot ratio so the screen area is a perfect fit. */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2"
          style={{ width: `${pW}px`, height: `${pH}px` }}
        >
          {/* Phone body — outer ring: lighter black */}
          <div
            className="w-full h-full relative"
            style={{
              background: "#2d2d2d",
              borderRadius: 44,
              padding: 3,
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.09), 0 20px 60px rgba(0,0,0,0.9)",
            }}
          >
            {/* Power button (right) */}
            <div
              className="absolute"
              style={{
                right: -5,
                top: "28%",
                width: 5,
                height: "13%",
                background: "linear-gradient(to right, #3a3a3a, #222)",
                borderRadius: "0 3px 3px 0",
                boxShadow: "1px 0 2px rgba(0,0,0,0.15)",
              }}
            />
            {/* Silent switch (left) */}
            <div
              className="absolute"
              style={{
                left: -5,
                top: "16%",
                width: 5,
                height: "4.5%",
                background: "linear-gradient(to left, #3a3a3a, #222)",
                borderRadius: "3px 0 0 3px",
                boxShadow: "-1px 0 2px rgba(0,0,0,0.15)",
              }}
            />
            {/* Volume up (left) */}
            <div
              className="absolute"
              style={{
                left: -5,
                top: "23%",
                width: 5,
                height: "8%",
                background: "linear-gradient(to left, #3a3a3a, #222)",
                borderRadius: "3px 0 0 3px",
                boxShadow: "-1px 0 2px rgba(0,0,0,0.15)",
              }}
            />
            {/* Volume down (left) */}
            <div
              className="absolute"
              style={{
                left: -5,
                top: "33%",
                width: 5,
                height: "8%",
                background: "linear-gradient(to left, #3a3a3a, #222)",
                borderRadius: "3px 0 0 3px",
                boxShadow: "-1px 0 2px rgba(0,0,0,0.15)",
              }}
            />

            {/* Inner ring — darker black, sits just inside the outer lighter ring */}
            <div
              className="w-full h-full"
              style={{
                background: "#080808",
                borderRadius: 41,
                padding: 3,
              }}
            >
              {/* Screen area — clips screenshots, matches 440×956 ratio exactly */}
              <div
                className="relative overflow-hidden bg-black w-full h-full"
                style={{ borderRadius: 38 }}
              >
                {/* Dynamic island */}
                <div
                  className="absolute z-20"
                  style={{
                    top: 10,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "35%",
                    height: 26,
                    background: "#000",
                    borderRadius: 13,
                  }}
                />

                {/* Sliding screenshots */}
                {SLIDES.map((src, i) => (
                  <div
                    key={i}
                    className="absolute inset-0"
                    style={{
                      transform: `translateX(${(i - current) * 100}%)`,
                      transition: "transform 700ms ease-in-out",
                    }}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover object-top"
                      sizes="300px"
                      priority={i < 3}
                    />
                  </div>
                ))}
              </div>
              {/* /screen area */}
            </div>
            {/* /inner ring */}
          </div>
          {/* /outer phone body */}
        </div>
      </div>
    </section>
  );
}
