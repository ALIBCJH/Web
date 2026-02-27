import { Metadata } from "next";
import ValueCard from "../components/ValueCard";

export const metadata: Metadata = {
  title: "About Us - Our Divine Mandate",
  description: "Learn about the Ministry of Repentance and Holiness, our heavenly mandate, and our mission to prepare a glorious church without spot or wrinkle for the coming of the Messiah.",
  keywords: ["about ministry", "repentance and holiness", "church mission", "prophetic ministry", "end time preparation"],
  openGraph: {
    title: "About Ministry of Repentance and Holiness",
    description: "Preparing a Glorious Church, Without Spot, Wrinkle, or Blemish.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F19] transition-colors duration-300">
      {/* Hero Section: Focused on Purity */}
      <section 
        className="relative text-center py-32 bg-slate-900 dark:bg-[#0F172A] overflow-hidden border-b-4 border-purple-600 dark:border-[#D4AF37]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-purple-900/20 dark:from-[#D4AF37]/10 dark:via-transparent dark:to-[#D4AF37]/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif italic tracking-widest text-white mb-6">
            Repentance & Holiness
          </h1>
          <div className="h-1 w-24 bg-purple-600 dark:bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl uppercase tracking-widest text-gray-200 max-w-3xl mx-auto">
            Preparing a Glorious Church, Without Spot, Wrinkle, or Blemish.
          </p>
        </div>
      </section>

      {/* The Mandate Section */}
      <section className="py-24 bg-white dark:bg-[#0B0F19] transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif text-slate-900 dark:text-white mb-8 transition-colors duration-300">The Heavenly Mandate</h2>
            <p className="text-xl leading-relaxed text-slate-700 dark:text-white/80 italic border-l-4 border-purple-600 dark:border-[#D4AF37] pl-6 mb-8 text-left transition-colors duration-300">
            </p>
            <p className="text-lg text-slate-600 dark:text-white/70 leading-relaxed text-justify mb-6 transition-colors duration-300">
              Our journey is not one of mere religion, but a global call to return to the path of righteousness. 
              We stand as a voice in the wilderness, announcing the return of the Messiah and calling all nations 
              to wash their garments in the blood of the Lamb.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-[#0F172A] transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 shadow-2xl rounded-xl overflow-hidden">
            <div className="bg-slate-900 dark:bg-[#1a1a2e] p-12 text-white transition-colors duration-300">
              <h3 className="text-2xl font-serif mb-6 text-purple-400 dark:text-[#D4AF37]">Our Mission</h3>
              <p className="text-gray-300 dark:text-white/80 leading-loose">
                To preach the Gospel of Repentance and the turning away from sin to prepare the way 
                for the coming of the Lord. We focus on the absolute authority of the Bible and the 
                manifestation of the Holy Spirit in these end times.
              </p>
            </div>
            <div className="bg-white dark:bg-[#0B0F19] p-12 text-slate-900 dark:text-white border-t md:border-t-0 md:border-l border-gray-200 dark:border-white/10 transition-colors duration-300">
              <h3 className="text-2xl font-serif mb-6">Our Vision</h3>
              <p className="text-slate-600 dark:text-white/70 leading-loose">
                To see a revived generation walking in total holiness, ready for the Rapture. 
                We envision a world where the fear of God is restored to the altar and every 
                believer lives as a living sacrifice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values: Icons changed to more solemn symbols */}
      <section className="py-24 bg-white dark:bg-[#0B0F19] transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif mb-16 text-slate-900 dark:text-white transition-colors duration-300">The Pillars of Faith</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <ValueCard title="Absolute Holiness" description="Living a life separated from the world and dedicated to God." icon="🕊️" />
            <ValueCard title="Deep Repentance" description="A daily turning away from sin and toward the grace of the Cross." icon="🛐" />
            <ValueCard title="Biblical Truth" description="Uncompromising adherence to the Word of God without dilution." icon="📜" />
            <ValueCard title="The Coming Messiah" description="Staying watchful and sober for the return of the King." icon="🎺" />
            <ValueCard title="Divine Healing" description="Witnessing the power of God over sickness and infirmity." icon="✨" />
            <ValueCard title="Self-Denial" description="Crucifying the flesh to allow the Spirit of God to lead." icon="✝️" />
          </div>
        </div>
      </section>

      {/* Leadership Section: Titles adjusted for dignity */}
      <section className="py-24 bg-slate-900 dark:bg-[#0F172A] text-white transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-serif mb-16 text-purple-400 dark:text-[#D4AF37]">The Altar Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 text-center bg-white dark:bg-[#0B0F19] border-t border-gray-100 dark:border-white/10 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif mb-6 text-slate-900 dark:text-white transition-colors duration-300">Prepare The Way</h2>
          <p className="text-xl mb-12 text-slate-600 dark:text-white/70 max-w-2xl mx-auto italic transition-colors duration-300">
            "Prepare your garments, for the time is near. The King is coming."
          </p>
          <div className="flex gap-6 justify-center">
            <a href="/contact" className="px-10 py-4 bg-slate-900 dark:bg-[#C5A059] text-white dark:text-black hover:bg-black dark:hover:bg-[#D4AF37] transition-all rounded-sm uppercase tracking-widest text-sm">
              Locate an Altar
            </a>
            <a href="/sermons" className="px-10 py-4 border-2 border-slate-900 dark:border-[#C5A059] text-slate-900 dark:text-[#C5A059] hover:bg-slate-50 dark:hover:bg-white/5 transition-all rounded-sm uppercase tracking-widest text-sm">
              Watch Teachings
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
