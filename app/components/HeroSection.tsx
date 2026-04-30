"use client";

import { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import MunaCard from "./MunaCard";
import { motion } from "framer-motion";

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

const PINS = [
  {
    src: "/cook2.png",
    left: "11%",
    top: "20%",
    cook: {
      name: "Amaka's Kitchen",
      location: "Lekki Phase 1",
      rating: "4.8",
      reviews: 124,
      avatar: "/cook2.png",
      foods: [
        { image: "/smokyJollof.png", label: "Cooking On-demand", name: "Smoky party jollof rice", price: "₦22,000", unit: "4 Litre" },
        { image: "/FriedChicken.png", label: "Cooking Tomorrow", name: "Crispy fried chicken", price: "₦18,000", unit: "8 Pieces" },
      ],
    },
  },
  {
    src: "/cook4.png",
    left: "20%",
    top: "57%",
    cook: {
      name: "Ngozi's Kitchen",
      location: "Ikeja",
      rating: "4.6",
      reviews: 89,
      avatar: "/cook4.png",
      foods: [
        { image: "/meatyRice.png", label: "Pre-order Now", name: "Meaty coconut rice special", price: "₦24,000", unit: "5 Litre" },
        { image: "/grilledChicken.png", label: "Cooking Tomorrow", name: "Smoky grilled chicken", price: "₦28,000", unit: "12 Pieces" },
      ],
    },
  },
  {
    src: "/cook3.png",
    left: "80%",
    top: "68%",
    cook: {
      name: "Titi's Home Kitchen",
      location: "Surulere",
      rating: "4.9",
      reviews: 201,
      avatar: "/cook3.png",
      foods: [
        { image: "/grilledChicken.png", label: "Cooking On-demand", name: "Charcoal grilled chicken", price: "₦32,000", unit: "16 Pieces" },
        { image: "/smokyJollof.png", label: "Pre-order Now", name: "Special party jollof rice", price: "₦20,000", unit: "4 Litre" },
      ],
    },
  },
  {
    src: "/cook5.png",
    left: "49%",
    top: "89%", // default — closest to base
    cook: {
      name: "Munachi's Kitchen",
      location: "Lekki, Lagos",
      rating: "4.7",
      reviews: 98,
      avatar: "/cook5.png",
      foods: [
        { image: "/smokyJollof.png", label: "Cooking On-demand", name: "Well cooked smoky jollof ri..", price: "₦25,000", unit: "4 Litre" },
        { image: "/FriedChicken.png", label: "Cooking Tomorrow", name: "16 Pieces of spicy chicken", price: "₦35,000", unit: "16 Pieces" },
      ],
    },
  },
  {
    src: "/cook6.png",
    left: "75%",
    top: "50%",
    cook: {
      name: "Bisi's Kitchen",
      location: "Victoria Island",
      rating: "4.5",
      reviews: 67,
      avatar: "/cook6.png",
      foods: [
        { image: "/FriedChicken.png", label: "Cooking On-demand", name: "Southern fried chicken", price: "₦30,000", unit: "10 Pieces" },
        { image: "/meatyRice.png", label: "Pre-order Now", name: "Beef and rice combo bowl", price: "₦26,000", unit: "5 Litre" },
      ],
    },
  },
  {
    src: "/cook1.png",
    left: "91%",
    top: "44%",
    cook: {
      name: "Ada's Kitchen",
      location: "Yaba",
      rating: "4.7",
      reviews: 143,
      avatar: "/cook1.png",
      foods: [
        { image: "/meatyRice.png", label: "Cooking On-demand", name: "Meaty jollof rice special", price: "₦23,000", unit: "4 Litre" },
        { image: "/grilledChicken.png", label: "Cooking Tomorrow", name: "Smoky grilled chicken", price: "₦29,000", unit: "8 Pieces" },
      ],
    },
  },
] as const;

type Placement = "top" | "bottom" | "left" | "right";

const CARD_W = 310;
const CARD_H = 370;

function cardStyle(p: Placement, adjust: { x: number; y: number }): React.CSSProperties {
  const adj = `translate(${adjust.x}px, ${adjust.y}px)`;
  switch (p) {
    case "top":    return { position: "absolute", bottom: "100%", left: "50%", transform: `translateX(-50%) ${adj}`, marginBottom: 10, zIndex: 10 };
    case "bottom": return { position: "absolute", top: "100%",   left: "50%", transform: `translateX(-50%) ${adj}`, marginTop: 10,    zIndex: 10 };
    case "left":   return { position: "absolute", right: "100%", top: "50%",  transform: `translateY(-50%) ${adj}`, marginRight: 10,  zIndex: 10 };
    case "right":  return { position: "absolute", left: "100%",  top: "50%",  transform: `translateY(-50%) ${adj}`, marginLeft: 10,   zIndex: 10 };
  }
}

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [activePin, setActivePin] = useState(3);
  const [placement, setPlacement] = useState<Placement>("top");
  const [cardAdjust, setCardAdjust] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (activePin < 0 || !cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const GAP = 12;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    let x = 0, y = 0;
    if (r.right  > vw - GAP) x = vw - GAP - r.right;
    if (r.left   < GAP)      x = GAP - r.left;
    if (r.bottom > vh - GAP) y = vh - GAP - r.bottom;
    if (r.top    < GAP)      y = GAP - r.top;
    if (x !== 0 || y !== 0) setCardAdjust(prev => ({ x: prev.x + x, y: prev.y + y }));
  }, [activePin, placement]);

  function handlePinClick(e: React.MouseEvent<HTMLDivElement>, i: number) {
    if (i === activePin) { setActivePin(-1); return; }
    const rect = e.currentTarget.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const spaceTop    = rect.top;
    const spaceBottom = vh - rect.bottom;
    const spaceRight  = vw - rect.right;
    const spaceLeft   = rect.left;

    let p: Placement;
    if      (spaceTop    >= CARD_H + 12) p = "top";
    else if (spaceBottom >= CARD_H + 12) p = "bottom";
    else if (spaceRight  >= CARD_W + 12) p = "right";
    else if (spaceLeft   >= CARD_W + 12) p = "left";
    else {
      const best = ([["top", spaceTop], ["bottom", spaceBottom], ["right", spaceRight], ["left", spaceLeft]] as [Placement, number][])
        .reduce((a, b) => b[1] > a[1] ? b : a);
      p = best[0];
    }

    setCardAdjust({ x: 0, y: 0 });
    setPlacement(p);
    setActivePin(i);
  }

  return (
    <section className="pt-20 flex flex-col bg-[#F7F7F7] md:min-h-[140vh]">
      <Navbar />
      <div className="relative flex-1">
        {/* Plain bg spacer — map starts below this */}
        <div className="h-[30vh] md:h-[35vh]" />

        {/* Map in normal flow so it never gets clipped */}
        <div className="relative">
          <Image
            src="/Map.png"
            alt=""
            width={3166}
            height={2194}
            className="w-full h-auto"
            sizes="100vw"
            priority
          />

          {/* Cook pins */}
          {PINS.map((pin, i) => (
            <div
              key={i}
              className="absolute flex flex-col items-center cursor-pointer"
              style={{
                left: pin.left,
                top: pin.top,
                transform: "translate(-50%, -100%)",
                zIndex: activePin === i ? 9999 : 5,
              }}
              onClick={(e) => handlePinClick(e, i)}
            >
              {/* Card — absolutely positioned on the best available side */}
              {activePin === i && (
                <div className="hidden md:block">
                  <motion.div
                    key={i}
                    ref={cardRef}
                    style={cardStyle(placement, cardAdjust)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <MunaCard cook={pin.cook} />
                  </motion.div>
                </div>
              )}

              {/* Circle avatar */}
              <div
                className="rounded-full overflow-hidden border-[3px] border-white"
                style={{
                  width: "clamp(32px, 4.5vw, 72px)",
                  height: "clamp(32px, 4.5vw, 72px)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.25)",
                }}
              >
                <Image
                  src={pin.src}
                  alt=""
                  width={90}
                  height={90}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Arrow tip */}
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "clamp(6px, 0.8vw, 13px) solid transparent",
                  borderRight: "clamp(6px, 0.8vw, 13px) solid transparent",
                  borderTop: "clamp(9px, 1.3vw, 20px) solid white",
                  marginTop: "-2px",
                  filter: "drop-shadow(0 3px 2px rgba(0,0,0,0.15))",
                }}
              />
            </div>
          ))}

          {/* Fade top edge into background */}
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none"
            style={{
              height: "35%",
              background:
                "linear-gradient(to bottom, #F7F7F7 30%, rgba(247,247,247,0) 100%)",
            }}
          />
        </div>

        <div
          className="absolute top-0 left-0 right-0 flex flex-col items-center px-4 pt-7 md:pt-30"
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
              {[
                "/people1.png",
                "/people2.png",
                "/people3.png",
                "/people4.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-6 h-6 md:w-10 md:h-10 rounded-full border-2 border-white overflow-hidden shadow-sm"
                >
                  <Image
                    src={src}
                    alt=""
                    width={40}
                    height={40}
                    className="object-cover object-top w-full h-full"
                  />
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
        <div
          className="marquee-track"
          style={{ display: "flex", gap: "3rem", width: "max-content" }}
        >
          {[...LOCATION_TAGS, ...LOCATION_TAGS].map((loc, i) => (
            <span
              key={i}
              className="text-[14px] md:text-[24px] font-bold text-gray-900 whitespace-nowrap"
            >
              {loc}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
