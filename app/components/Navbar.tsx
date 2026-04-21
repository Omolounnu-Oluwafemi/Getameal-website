"use client";

import Link from "next/link";

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
      <div className="w-full max-w-4xl bg-white rounded-2xl border border-gray-200 shadow-sm px-5 flex h-14 items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 flex-shrink-0">
          {/* Stylised circular-G mark */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="15" stroke="#111" strokeWidth="2.5" />
            <path
              d="M22 16h-4v3h2.5c-.5 1.5-2 2.5-4.5 2.5C13 21.5 11 19.5 11 16s2-5.5 5-5.5c1.5 0 2.8.6 3.7 1.5l1.8-1.8C20.1 8.8 18.2 8 16 8c-4.4 0-8 3.6-8 8s3.6 8 8 8c4.4 0 7.5-3 7.5-7.5V16H22z"
              fill="#111"
            />
          </svg>
          <span className="font-bold text-[18px] text-gray-900 tracking-tight leading-none">
            etameal
          </span>
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
