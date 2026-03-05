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
    <footer className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-black/20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-20 border-b border-white/20">
          
          {/* Column 1: Brand & About - 4 cols */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-amber-500/50">
                  ✝
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Ministry of Repentance
                  </h3>
                  <p className="text-sm text-cyan-200 font-medium">& Holiness</p>
                </div>
              </div>
              
              <p className="text-base leading-relaxed text-white/90">
                A prophetic voice calling the nations to absolute holiness and preparing 
                the way for the glorious return of the Messiah. Join us in this divine mandate.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex gap-3">
              {[
                { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
                { icon: <Youtube size={20} />, href: "#", label: "YouTube" },
                { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
                { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links - 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
              Ministry
            </h4>
            <ul className="space-y-3 text-base">
              {[
                { label: "About Us", href: "/about" },
                { label: "Prophecies", href: "/prophecies" },
                { label: "Sermons", href: "/sermons" },
                { label: "Events", href: "/events" },
                { label: "Testimonials", href: "/testimonials" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-cyan-400 transition-all duration-300 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support - 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-amber-400 to-orange-400 rounded-full"></span>
              Support
            </h4>
            <ul className="space-y-3 text-base">
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
                    className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-amber-400 transition-all duration-300 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact - 4 cols */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-5">
              <h4 className="text-lg font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full"></span>
                Stay Connected
              </h4>
              <p className="text-base text-white/90 leading-relaxed">
                Subscribe to receive prophetic updates, sermon notifications, and ministry news.
              </p>
              
              {/* Newsletter Form */}
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-5 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-2xl text-white placeholder:text-white/60 focus:outline-none focus:border-cyan-300 focus:bg-white/30 transition-all text-base"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 pt-6 border-t border-white/30">
              <div className="flex items-start gap-3 text-base">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-cyan-300" />
                </div>
                <span className="text-white/90 mt-2">Nairobi, Kenya</span>
              </div>
              <div className="flex items-start gap-3 text-base">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-green-300" />
                </div>
                <span className="text-white/90 mt-2">+254 XXX XXX XXX</span>
              </div>
              <div className="flex items-start gap-3 text-base">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-amber-300" />
                </div>
                <span className="text-white/90 mt-2">info@ministry.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-base">
          <p className="text-white/90 font-medium">
            © {currentYear} Ministry of Repentance and Holiness. All rights reserved.
          </p>
          
          <div className="flex gap-8">
            <Link href="#" className="text-white/80 hover:text-white transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/80 hover:text-white transition-colors font-medium">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}