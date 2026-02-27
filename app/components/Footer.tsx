"use client";

import Link from "next/link";
import { Facebook, Youtube, Twitter, Instagram, Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 dark:from-[#0B0F19] dark:via-[#0F172A] dark:to-[#0B0F19] text-white transition-colors duration-300">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-20 border-b border-white/10">
          
          {/* Column 1: Brand & About - 4 cols */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-sky-500 flex items-center justify-center text-white text-xl">
                  ✝
                </div>
                <div>
                  <h3 className="text-xl font-serif text-white">
                    Ministry of Repentance
                  </h3>
                  <p className="text-sm text-purple-300">& Holiness</p>
                </div>
              </div>
              
              <p className="text-sm leading-relaxed text-gray-400">
                A prophetic voice calling the nations to absolute holiness and preparing 
                the way for the glorious return of the Messiah. Join us in this divine mandate.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex gap-3">
              {[
                { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
                { icon: <Youtube size={18} />, href: "#", label: "YouTube" },
                { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
                { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links - 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Ministry
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Programs", href: "/ministries" },
                { label: "Sermons", href: "/sermons" },
                { label: "Events", href: "/events" },
                { label: "Testimonials", href: "/testimonials" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-purple-500 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support - 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Support
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Contact Us", href: "/contact" },
                { label: "Give", href: "/give" },
                { label: "Prayer Requests", href: "/contact" },
                { label: "Partner With Us", href: "/give" },
                { label: "FAQ", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-purple-500 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact - 4 cols */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                Stay Connected
              </h4>
              <p className="text-sm text-gray-400">
                Subscribe to receive prophetic updates, sermon notifications, and ministry news.
              </p>
              
              {/* Newsletter Form */}
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-purple-500 to-sky-500 rounded-lg hover:from-purple-600 hover:to-sky-600 transition-all"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Nairobi, Kenya</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Phone size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">+254 XXX XXX XXX</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Mail size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">info@ministry.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-400">
            © {currentYear} Ministry of Repentance and Holiness. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}