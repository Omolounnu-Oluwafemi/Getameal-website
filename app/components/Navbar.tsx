"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#", sectionId: "" },
  { label: "How it works", href: "#how-it-works", sectionId: "how-it-works" },
  {
    label: "For Customers",
    href: "#for-customers",
    sectionId: "for-customers",
  },
  { label: "For Cooks", href: "#for-cooks", sectionId: "for-cooks" },
  { label: "Contact us", href: "#contact", sectionId: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ids = navLinks.map((l) => l.sectionId).filter(Boolean);

    const onScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection("");
        return;
      }
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          return;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-3 px-4">
      {/* Main bar */}
      <div
        className="w-full max-w-4xl bg-white/60 backdrop-blur-md rounded-[80px] border border-white/40 pl-4 pr-3 h-15 flex items-center justify-between"
        style={{ boxShadow: "0px 4px 50px 0px #0000000D" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/WebsiteLogo.svg"
            alt="Getameal"
            width={106}
            height={39}
            priority
            className="w-22.5 h-8.25 md:w-26.5 md:h-9.75"
          />
        </Link>

        {/* Nav links — desktop */}
        <div className="hidden md:flex items-stretch self-stretch gap-7">
          {navLinks.map(({ label, href, sectionId }) => {
            const active = activeSection === sectionId;
            return (
              <Link
                key={label}
                href={href}
                className={`text-sm transition-colors relative flex items-center ${
                  active
                    ? "text-[#209D01] font-semibold"
                    : "text-gray-600 font-medium hover:text-gray-900"
                }`}
              >
                {label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#209D01] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden p-1"
          aria-label="Menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <Image src="/Hamburger.svg" alt="Menu" width={24} height={24} />
        </button>

        {/* CTA — desktop only */}
        <button className="hidden md:block bg-[#209D01] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-green-700 transition-colors whitespace-nowrap">
          Get a ticket
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden w-full max-w-4xl mt-2 bg-white/70 backdrop-blur-md rounded-3xl border border-white/40 shadow-lg overflow-hidden">
          {navLinks.map(({ label, href, sectionId }) => {
            const active = activeSection === sectionId;
            return (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center px-6 py-4 text-sm border-b border-gray-100 last:border-0 transition-colors ${
                  active
                    ? "text-[#209D01] font-semibold bg-green-50"
                    : "text-gray-700 font-medium hover:bg-gray-50"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <div className="px-6 py-4">
            <button className="w-full bg-[#209D01] text-white text-sm font-semibold py-3 rounded-full hover:bg-green-700 transition-colors cursor-pointer">
              Get a ticket
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
