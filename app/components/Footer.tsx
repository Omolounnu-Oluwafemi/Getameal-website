"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SOCIALS = [
  { href: "#", label: "Facebook", icon: "/facebook.svg" },
  { href: "#", label: "TikTok", icon: "/ticktock.svg" },
  { href: "#", label: "X", icon: "/Xlogo.svg" },
  { href: "#", label: "Instagram", icon: "/IG.svg" },
];

export default function Footer() {
  return (
    <footer className="bg-[#F7F7F7]">
      <motion.div
        className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="text-[16px] text-black">
          © {new Date().getFullYear()} Getameal, LTD.
        </p>

        <div className="flex items-center gap-3">
          {SOCIALS.map(({ href, label, icon }) => (
            <a key={label} href={href} aria-label={label}>
              <Image src={icon} alt={label} width={32} height={32} />
            </a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}
