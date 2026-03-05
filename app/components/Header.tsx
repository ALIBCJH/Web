"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Prophecies", href: "/prophecies" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 backdrop-blur-lg border-b-2 border-white/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg hover:scale-105 transition-transform">
            ✝
          </div>
          <div>
            <p className="text-gray-900 font-bold text-base">Ministry of Repentance</p>
            <p className="text-sm text-purple-600 tracking-wider font-semibold">& Holiness</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-semibold transition-all duration-300 relative ${
                  isActive
                    ? "text-purple-600"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setIsMenuOpen((s) => !s)}
            aria-label="Toggle menu"
            className="p-2 text-gray-700 hover:text-purple-600 transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-purple-100 bg-white/80 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-semibold text-base ${pathname === link.href ? "text-purple-600" : "text-gray-700 hover:text-purple-600"}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}