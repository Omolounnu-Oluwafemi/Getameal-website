"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FindCooksSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative overflow-hidden">
      {/* Background photo — natural aspect ratio so full image height is shown */}
      <Image
        src="/FindCookBG.png"
        alt=""
        width={1536}
        height={1024}
        className="w-110 h-128.5 sm:w-full sm:h-auto object-cover"
        priority
      />

      {/* Dark overlay — heavier on the right so text is readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.30) 50%, rgba(0,0,0,0.40) 100%)",
        }}
      />

      {/* Content — absolutely centered over the image */}
      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-end w-full px-6 lg:px-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="w-full lg:w-[55%] text-white text-center">
          {/* Eyebrow */}
          <p className="text-white text-xl sm:text-5xl text-center font-bold mb-3">
            Find Cooks near you
          </p>

          {/* Main heading */}
          <h2 className="text-[32px] sm:text-7xl font-black leading-none mb-8">
            To Cook For YOU
          </h2>

          {/* Email form */}
          <div className="flex flex-col w-full max-w-xl mx-auto gap-3 mb-5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-6 py-4 text-sm text-white placeholder-white bg-white/30 backdrop-blur-3xl rounded-full focus:outline-none border border-white/20"
            />
            <button className="w-full bg-white text-gray-900 text-[16px] font-medium px-7 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-sm">
              Join Waiting List
            </button>
          </div>

          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-8">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="w-9 h-9 rounded-full border-2 border-white overflow-hidden"
                >
                  <Image
                    src={`/joined${n}.png`}
                    alt=""
                    width={32}
                    height={32}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ))}
            </div>
            <p className="text-white text-[16px] font-medium">
              Over 100+ people already joined
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
