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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3C9.5 3 7 5 7 8c0 2 1 3.5 2.5 4.5V20h5v-7.5C16 11.5 17 10 17 8c0-3-2.5-5-5-5z"
                  fill="white"
                  opacity="0.9"
                />
                <circle cx="12" cy="8" r="2" fill="#4ade80" />
              </svg>
            </div>
            <span className="font-bold text-xl text-gray-900 tracking-tight">
              <span className="text-green-600">G</span>etameal
            </span>
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href, active }) => (
              <Link
                key={label}
                href={href}
                className={`text-sm font-medium transition-colors relative pb-1 ${
                  active
                    ? "text-green-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <button className="bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-green-700 transition-colors shadow-sm">
            Get a ticket
          </button>
        </div>
      </div>
    </nav>
  );
}
