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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section 
        className="relative text-center py-32 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif italic tracking-widest text-white mb-6">
            Repentance & Holiness
          </h1>
          <div className="h-1 w-24 bg-white/80 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl uppercase tracking-widest text-white/90 max-w-3xl mx-auto">
            Preparing a Glorious Church, Without Spot, Wrinkle, or Blemish.
          </p>
        </div>
      </section>

      {/* The Mandate Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif text-slate-900 mb-8">The Heavenly Mandate</h2>
            <p className="text-xl leading-relaxed text-slate-700 italic border-l-4 border-purple-600 pl-6 mb-8 text-left">
            </p>
            <p className="text-lg text-slate-600 leading-relaxed text-justify mb-6">
              Our journey is not one of mere religion, but a global call to return to the path of righteousness. 
              We stand as a voice in the wilderness, announcing the return of the Messiah and calling all nations 
              to wash their garments in the blood of the Lamb.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 shadow-2xl rounded-xl overflow-hidden">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-12 text-white">
              <h3 className="text-2xl font-serif mb-6 text-white">Our Mission</h3>
              <p className="text-white/90 leading-loose">
                To preach the Gospel of Repentance and the turning away from sin to prepare the way 
                for the coming of the Lord. We focus on the absolute authority of the Bible and the 
                manifestation of the Holy Spirit in these end times.
              </p>
            </div>
            <div className="bg-white p-12 text-slate-900 border-t md:border-t-0 md:border-l border-gray-200">
              <h3 className="text-2xl font-serif mb-6 text-purple-600">Our Vision</h3>
              <p className="text-slate-600 leading-loose">
                To see a revived generation walking in total holiness, ready for the Rapture. 
                We envision a world where the fear of God is restored to the altar and every 
                believer lives as a living sacrifice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif mb-16 text-slate-900">The Pillars of Faith</h2>
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

      {/* Leadership Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-serif mb-16 text-white">The Altar Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 text-center bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif mb-6 text-slate-900">Prepare The Way</h2>
          <p className="text-xl mb-12 text-slate-600 max-w-2xl mx-auto italic">
            "Prepare your garments, for the time is near. The King is coming."
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a href="/contact" className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-xl hover:scale-105 transition-all rounded-xl uppercase tracking-widest text-sm font-bold">
              Locate an Altar
            </a>
            <a href="/sermons" className="px-10 py-4 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all rounded-xl uppercase tracking-widest text-sm font-bold">
              Watch Teachings
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
