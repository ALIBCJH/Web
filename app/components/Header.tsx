"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar - Professional & Urgent */}
      <div className="bg-slate-900 text-white py-2 text-center text-xs uppercase tracking-[0.2em] font-bold border-b border-yellow-600/30">
        Preparing the Way for the Coming of the Messiah
      </div>

      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <nav className="container mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            
            {/* Logo: Royal & Dignified */}
            <Link href="/" className="flex items-center group">
              <div className="w-14 h-14 bg-slate-900 flex items-center justify-center mr-4 transition-transform group-hover:scale-105 shadow-lg">
                <span className="text-white text-2xl font-serif italic text-gold-500" style={{ color: '#D4AF37' }}>✝</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-tighter text-slate-900 uppercase">
                  Repentance <span className="text-[10px] align-middle mx-1">&</span> Holiness
                </span>
                <span className="text-[10px] tracking-[0.3em] font-bold text-slate-500 uppercase leading-tight">
                  Ministry of the Altar
                </span>
              </div>
            </Link>

            {/* Desktop Navigation: Spaced & Elegant */}
            <div className="hidden lg:flex items-center space-x-10">
              {['Home', 'About Us', 'Ministries', 'Testimonials'].map((item) => (
                <Link 
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} 
                  className="text-xs uppercase tracking-[0.2em] font-bold text-slate-700 hover:text-black transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-slate-900 transition-all group-hover:w-full"></span>
                </Link>
              ))}
              
              {/* Call to Action: Professional Button */}
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-black transition-all shadow-md active:scale-95"
              >
                Connect With Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-slate-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8h18M3 16h18" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu: Full Screen Overlay style */}
          {isMenuOpen && (
            <div className="lg:hidden fixed inset-0 top-[120px] bg-white z-40 px-6 pt-10">
              <div className="flex flex-col space-y-8 text-center">
                {['Home', 'About Us', 'Ministries', 'Testimonials', 'Contact Us'].map((item) => (
                  <Link 
                    key={item}
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} 
                    className="text-2xl font-serif italic text-slate-900 border-b border-gray-100 pb-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}