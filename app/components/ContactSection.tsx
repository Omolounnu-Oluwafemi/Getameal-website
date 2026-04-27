"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CONTACT_OPTIONS = [
  { label: "Send email", icon: "/send.svg" },
  { label: "Whatsapp", icon: "/whatsapp.svg" },
  { label: "Call Us", icon: "/phone.svg" },
];

const inputClass =
  "w-full px-5 py-3 rounded-[10px] border border-gray-200 text-sm text-[#000000] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white";

export default function ContactSection() {
  return (
    <section className="py-10 sm:py-16 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-stretch justify-between">

          {/* Left — form */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-6xl font-bold text-black leading-none mb-5">
              We&apos;d love to hear <br className="hidden sm:block" />
              from YOU
            </h2>
            <p className="text-gray-500 text-sm sm:text-[20px] leading-relaxed mb-6">
              Whether you&apos;re a customer, a cook, a partner, or just curious
              about Getameal — our team is here to help.
            </p>

            <form className="space-y-2">
              <input type="text" placeholder="Your name" className={inputClass} />
              <input type="tel" placeholder="Enter phone number" className={inputClass} />
              <input type="email" placeholder="Email address" className={inputClass} />
              <textarea placeholder="Enter your message" rows={4} className={`${inputClass} resize-none`} />
              <button
                type="submit"
                className="w-full bg-[#209D01] hover:bg-green-700 text-white font-semibold py-3 rounded-full text-sm transition-colors my-3 cursor-pointer"
              >
                Send a message
              </button>
            </form>

            <div className="grid grid-cols-3 gap-3 mt-4">
              {CONTACT_OPTIONS.map((opt) => (
                <button
                  key={opt.label}
                  className="flex flex-col cursor-pointer items-center gap-2 py-7 rounded-2xl border border-[#EDEDED] hover:border-green-200 hover:bg-green-50 transition-colors shadow-lg"
                >
                  <Image src={opt.icon} alt={opt.label} width={24} height={24} />
                  <span className="text-xs font-semibold text-gray-800">{opt.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right — photo */}
          <style>{`
            .contact-photo { height: 467px; }
            @media (min-width: 1024px) { .contact-photo { width: 600px; height: 700px; flex-shrink: 0; } }
          `}</style>
          <motion.div
            className="contact-photo relative overflow-hidden rounded-2xl lg:rounded-[40px]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <Image
              src="/contactBg.png"
              alt="Cook preparing meals"
              fill
              className="object-cover max-md:object-[center_45%] md:object-[center_20%]"
              sizes="(max-width: 1024px) 100vw, 760px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
