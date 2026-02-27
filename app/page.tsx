"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Script from "next/script";

export default function HomePage() {
  // JSON-LD Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Church",
    "name": "Ministry of Repentance and Holiness",
    "alternateName": "Repentance and Holiness Ministry",
    "description": "Preparing a glorious church without spot, wrinkle, or blemish for the coming of the Messiah.",
    "url": "https://your-domain.com",
    "logo": "https://your-domain.com/logo.png",
    "image": "https://your-domain.com/image.png",
    "founder": {
      "@type": "Person",
      "name": "Ministry Leader"
    },
    "sameAs": [
      "https://facebook.com/your-ministry",
      "https://youtube.com/@your-ministry",
      "https://twitter.com/your-ministry"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KE"
    }
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gray-50 dark:bg-[#0B0F19] text-gray-900 dark:text-white transition-colors duration-300">

      {/* ============================
          HERO SECTION — PROPHETIC
      ============================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Subtle Background Light */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-purple-50 to-gray-50 dark:from-[#0B0F19] dark:via-[#0F172A] dark:to-black transition-colors duration-300" />

        {/* Gold radial glow (symbolic divine light) */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] opacity-10 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE — MESSAGE */}
          <div className="max-w-xl">

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[10px] tracking-[0.5em] uppercase font-bold text-purple-600 dark:text-[#D4AF37]"
            >
              Prepare the Way
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-6 text-[clamp(3rem,7vw,5.5rem)] font-serif leading-[1.05] tracking-tight text-gray-900 dark:text-white"
            >
              THE MESSIAH <br />
              <span className="text-purple-600 dark:text-[#D4AF37]">IS COMING</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-8 text-lg text-gray-700 dark:text-white/70 leading-relaxed"
            >
              "Behold, the Bridegroom comes. Go out to meet Him."
              <br />
              The hour of preparation is now. Return to repentance.
              Walk in holiness.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex gap-6 flex-wrap"
            >
              <Link
                href="/sermons"
                className="px-8 py-4 bg-purple-600 dark:bg-[#D4AF37] text-white dark:text-black font-bold uppercase tracking-widest text-[11px] hover:opacity-90 transition"
              >
                Hear the Message
              </Link>

              <Link
                href="/about"
                className="px-8 py-4 border border-gray-400 dark:border-white/30 text-gray-700 dark:text-white uppercase tracking-widest text-[11px] hover:border-purple-600 dark:hover:border-[#D4AF37] hover:text-purple-600 dark:hover:text-[#D4AF37] transition"
              >
                Our Commission
              </Link>
            </motion.div>
          </div>

          {/* RIGHT SIDE — PROPHET IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative h-[500px] md:h-[650px] overflow-hidden rounded-2xl"
          >
            <Image
              src="/image.png"
              alt="Prophet preaching the message of repentance"
              fill
              className="absolute inset-0 w-full h-full object-cover"
              priority
            />

            {/* Dark overlay for seriousness */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Subtle gold edge light */}
            <div
              className="absolute inset-0"
              style={{
                boxShadow: "inset 0 0 120px rgba(212,175,55,0.2)",
              }}
            />

            {/* Caption below image */}
            <div className="absolute left-6 bottom-6 z-20">
              <p className="text-sm md:text-lg font-semibold text-white drop-shadow-md">mightiest prophet of the Lord</p>
            </div>
          </motion.div>

        </div>
      </section>
      </div>
    </>
  );
}
