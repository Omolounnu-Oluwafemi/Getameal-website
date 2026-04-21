"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "How it works", href: "#how-it-works" },
  { label: "For Customers", href: "#for-customers" },
  { label: "For Cooks", href: "#for-cooks" },
  { label: "Contact us", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 px-4">
      {/* Floating pill container */}
      <div className="w-full max-w-4xl bg-white rounded-[80px] border border-gray-200 shadow-sm px-5 py-3 flex  items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/WebsiteLogo.svg"
            alt="Getameal"
            width={120}
            height={36}
            priority
          />
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href, active }) => (
            <Link
              key={label}
              href={href}
              className={`text-sm transition-colors relative pb-0.5 ${
                active
                  ? "text-green-600 font-semibold"
                  : "text-gray-600 font-medium hover:text-gray-900"
              }`}
            >
              {label}
              {active && (
                <span className="absolute -bottom-0.5 left-0 right-0 h-[2.5px] bg-green-600 rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <button className="bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-green-700 transition-colors whitespace-nowrap">
          Get a ticket
        </button>
      </div>
    </nav>
  );
}
