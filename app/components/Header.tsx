"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header 
      className="sticky top-0 z-50 shadow-md"
      style={{ backgroundColor: 'var(--color-bg-white)' }}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center mr-3"
              style={{ backgroundColor: 'var(--color-light-blue)' }}
            >
              <span className="text-white text-xl font-bold">✝</span>
            </div>
            <span 
              className="text-xl font-bold"
              style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text-primary)' 
              }}
            >
              Church Name
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="font-medium transition-colors"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="font-medium transition-colors"
              style={{ color: 'var(--color-text-primary)' }}
            >
              About
            </Link>
            <Link 
              href="/ministries" 
              className="font-medium transition-colors"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Ministries
            </Link>
            <Link 
              href="/events" 
              className="font-medium transition-colors"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Events
            </Link>
            <Link 
              href="/sermons" 
              className="font-medium transition-colors"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Sermons
            </Link>
            <Link 
              href="/contact" 
              className="font-medium transition-colors"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Contact
            </Link>
            <Link 
              href="/give"
              className="px-6 py-2 rounded-lg font-medium transition-colors"
              style={{ 
                backgroundColor: 'var(--color-light-blue)',
                color: 'var(--color-text-light)' 
              }}
            >
              Give
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className="md:hidden pb-4"
            style={{ borderTop: '1px solid var(--color-grey-200)' }}
          >
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                href="/" 
                className="font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/ministries" 
                className="font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Ministries
              </Link>
              <Link 
                href="/events" 
                className="font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link 
                href="/sermons" 
                className="font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sermons
              </Link>
              <Link 
                href="/contact" 
                className="font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/give"
                className="px-6 py-2 rounded-lg font-medium text-center"
                style={{ 
                  backgroundColor: 'var(--color-light-blue)',
                  color: 'var(--color-text-light)' 
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Give
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
