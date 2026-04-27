"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const PAIRS = [
  {
    photo: "/people1.png",
    alt: "Ikenna Agozie",
    quote:
      "When you explained it, it just clicked. Most of us already buy soup in bulk from someone, an auntie, a caterer, someone in the estate. The difference is that this feels structured and reliable. If I can order 5–8 litres of soup properly packaged and know when to restock, that's a smarter way to eat.",
    name: "Ikenna Agozie",
    location: "Lekki Phase 1",
    avatar: "/people1.png",
  },
  {
    photo: "/people2.png",
    alt: "Amara Osei",
    quote:
      "What I like is that it's not another 'order in 30 minutes' app. It's about planning your week. That makes more sense long term. Instead of spending small amounts every day that add up, I'd rather order once and be sorted. It feels more intentional.",
    name: "Amara Osei",
    location: "Magodo",
    avatar: "/people2.png",
  },
  {
    photo: "/people5.png",
    alt: "Amara Nwosu",
    quote:
      "Honestly, the idea makes so much sense for how we already live. I already know a few women in my area who cook and sell. Getameal just makes it cleaner, safer, and more predictable for both sides.",
    name: "Amara Nwosu",
    location: "Ikeja",
    avatar: "/people5.png",
  },
  {
    photo: "/people4.png",
    alt: "Ify Eze",
    quote:
      "Selling through WhatsApp works, but it's informal. Being on a proper platform makes it feel like I'm running a structured kitchen business. That builds trust with customers.",
    name: "Ify Eze",
    location: "Victoria Island",
    avatar: "/people4.png",
  },
  {
    photo: "/people3.png",
    alt: "Michael Awolabi",
    quote:
      "What matters to me is steady volume. If Getameal can bring repeat customers who order weekly or monthly, that's stability. I'd rather have predictable bulk orders than many small random ones.",
    name: "Michael Awolabi",
    location: "Ikoyi",
    avatar: "/people3.png",
  },
];

const N = PAIRS.length;
const LOOP_PAIRS = [...PAIRS, ...PAIRS, ...PAIRS];

const GAP = 16;
const LEFT_PAD = 16;

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(N);
  const [animated, setAnimated] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const resettingRef = useRef(false);

  const cardW = isMobile ? 300 : 580;
  const cardH = isMobile ? 400 : 700;
  const radius = isMobile ? 20 : 30;
  const pairW = (cardW + GAP) * 2;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);

    const timer = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 4500);

    return () => {
      window.removeEventListener("resize", check);
      clearInterval(timer);
    };
  }, []);

  // Silent reset when reaching third copy
  useEffect(() => {
    if (current >= N * 2 && !resettingRef.current) {
      resettingRef.current = true;
      setTimeout(() => {
        setAnimated(false);
        setCurrent(N);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            setAnimated(true);
            resettingRef.current = false;
          }),
        );
      }, 850);
    }
  }, [current]);

  const offset = LEFT_PAD - current * pairW;

  return (
    <section className="py-10 sm:py-20 bg-[#F7F7F7] overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-2xl sm:text-6xl font-black text-black mb-4">
          What People Are Saying
        </h2>
        <p className="text-[#222222] text-sm sm:text-[16px] max-w-125 mx-auto leading-relaxed">
          Early reactions from customers and cooks who have seen the vision of
          Getameal ahead of July 4.
        </p>
      </div>

      {/* Scrolling strip — moves one pair at a time */}
      <div className="overflow-hidden">
        <div
          className="flex"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(${offset}px)`,
            transition: animated
              ? "transform 800ms cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
            width: "max-content",
          }}
        >
          {LOOP_PAIRS.map((pair, i) => (
            <div key={i} className="contents">
              {/* Photo card */}
              <div
                className="relative shrink-0 overflow-hidden"
                style={{ width: cardW, height: cardH, borderRadius: radius }}
              >
                <Image
                  src={pair.photo}
                  alt={pair.alt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 0px" }}
                  sizes="580px"
                  priority={i < 3}
                />
              </div>

              {/* Quote card */}
              <div
                className="shrink-0 bg-white flex flex-col justify-between px-6 sm:px-8 py-6 sm:py-14 shadow-sm"
                style={{ width: cardW, height: cardH, borderRadius: radius }}
              >
                <p className="text-gray-800 text-[16px] leading-relaxed sm:leading-normal sm:text-2xl font-regular">
                  {pair.quote}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 text-[20px]">
                      {pair.name}
                    </p>
                    <p className="text-[#797979] text-sm mt-0.5">
                      {pair.location}
                    </p>
                  </div>
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100 shrink-0">
                    <Image
                      src={pair.avatar}
                      alt={pair.name}
                      fill
                      className="object-cover object-top"
                      sizes="48px"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
