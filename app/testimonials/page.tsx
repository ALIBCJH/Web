import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials - Stories of Faith",
  description: "Read inspiring testimonies and stories of faith, hope, healing, and transformation from members of Ministry of Repentance and Holiness. See how God is working in lives.",
  keywords: ["testimonies", "faith stories", "healing testimonies", "transformation stories", "church testimonials", "miracle stories"],
  openGraph: {
    title: "Testimonials - Ministry of Repentance and Holiness",
    description: "Stories of faith, hope, and transformation from our church family.",
    type: "website",
  },
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="text-center py-24 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
        <div className="container mx-auto px-4">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Testimonials
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Witness the transformative power of God through healing miracles and life-changing testimonies
            </p>
          </div>
        </div>
      </section>

      {/* Revival Healing Testimonies Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-amber-400 to-orange-400 text-white rounded-full text-sm font-semibold mb-4 shadow-lg">
              ✨ Revival Miracles
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Healing Testimonies from Revival Meetings
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful testimonies of miraculous healings during our revival services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Healing Testimony 1 */}
            <div className="group relative bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="relative p-8 text-white">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-4xl">🦵</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Healed from Paralysis</h3>
                <p className="text-white/90 mb-4 leading-relaxed">
                  "I was bound to a wheelchair for 8 years. During the revival meeting, I felt God's power surge through my legs. I stood up and walked for the first time in years! Glory to God!"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/30">
                  <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-xl">👤</span>
                  </div>
                  <div>
                    <p className="font-semibold">Mary Wanjiku</p>
                    <p className="text-sm text-white/80">Revival 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Healing Testimony 2 */}
            <div className="group relative bg-gradient-to-br from-purple-500 to-pink-400 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="relative p-8 text-white">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-4xl">👁️</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Blind Eyes Opened</h3>
                <p className="text-white/90 mb-4 leading-relaxed">
                  "I was born blind. During prayer, I felt warmth in my eyes and suddenly saw light for the first time! Now I can see everything! Jesus healed me completely!"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/30">
                  <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-xl">👤</span>
                  </div>
                  <div>
                    <p className="font-semibold">John Kamau</p>
                    <p className="text-sm text-white/80">Revival 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Healing Testimony 3 */}
            <div className="group relative bg-gradient-to-br from-green-500 to-emerald-400 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="relative p-8 text-white">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-4xl">💚</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Cancer Disappeared</h3>
                <p className="text-white/90 mb-4 leading-relaxed">
                  "Stage 4 cancer diagnosis changed to complete remission after revival prayer. Doctors confirmed no trace of cancer. God is faithful!"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/30">
                  <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-xl">👤</span>
                  </div>
                  <div>
                    <p className="font-semibold">Grace Akinyi</p>
                    <p className="text-sm text-white/80">Revival 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Healing Testimony 4 */}
            <div className="group relative bg-gradient-to-br from-amber-500 to-yellow-400 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="relative p-8 text-white">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-4xl">🦴</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Broken Bones Restored</h3>
                <p className="text-white/90 mb-4 leading-relaxed">
                  "Came with fractured spine and chronic pain. After the healing prayer, the pain left instantly. X-rays showed complete healing. Hallelujah!"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/30">
                  <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-xl">👤</span>
                  </div>
                  <div>
                    <p className="font-semibold">Peter Omondi</p>
                    <p className="text-sm text-white/80">Revival 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Healing Testimony 5 */}
            <div className="group relative bg-gradient-to-br from-indigo-500 to-blue-400 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="relative p-8 text-white">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-4xl">👂</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Deaf Ears Opened</h3>
                <p className="text-white/90 mb-4 leading-relaxed">
                  "Deaf for 15 years, couldn't hear anything. During the revival, someone prayed and suddenly I heard the worship! I can hear perfectly now!"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/30">
                  <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-xl">👤</span>
                  </div>
                  <div>
                    <p className="font-semibold">Faith Njeri</p>
                    <p className="text-sm text-white/80">Revival 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Healing Testimony 6 */}
            <div className="group relative bg-gradient-to-br from-rose-500 to-red-400 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="relative p-8 text-white">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-4xl">❤️</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Heart Disease Healed</h3>
                <p className="text-white/90 mb-4 leading-relaxed">
                  "Severe heart condition, needed surgery. At revival, felt peace and strength. Medical tests confirmed my heart is now perfectly healthy!"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/30">
                  <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-xl">👤</span>
                  </div>
                  <div>
                    <p className="font-semibold">David Mwangi</p>
                    <p className="text-sm text-white/80">Revival 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Community Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our church family about their journey of faith
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-2xl shadow-lg">
                  👤
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-800">Sarah Johnson</h4>
                  <p className="text-sm text-blue-600 font-medium">Member since 2020</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "This church has been a beacon of hope in my life. The community welcomed me with open 
                arms, and I've grown so much in my faith. The pastoral care and teaching have been 
                life-changing."
              </p>
              <div className="text-amber-400 text-xl">★★★★★</div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-2xl shadow-lg">
                  👤
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-800">Michael Chen</h4>
                  <p className="text-sm text-purple-600 font-medium">Member since 2018</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "The youth ministry here helped me discover my purpose. The mentorship and discipleship 
                programs are incredible. I'm now serving as a volunteer and giving back to the community."
              </p>
              <div className="text-amber-400 text-xl">★★★★★</div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-2xl shadow-lg">
                  👤
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-800">Emily Rodriguez</h4>
                  <p className="text-sm text-green-600 font-medium">Member since 2019</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "As a single mother, I found not just a church but a family. The support groups and 
                children's programs are amazing. My kids love coming here, and I've found true friendship."
              </p>
              <div className="text-amber-400 text-xl">★★★★★</div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-gradient-to-br from-amber-50 to-white border-2 border-amber-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center text-2xl shadow-lg">
                  👤
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-800">David Thompson</h4>
                  <p className="text-sm text-amber-600 font-medium">Member since 2015</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "The worship experience here is unlike anything I've experienced. It's authentic, 
                powerful, and Spirit-filled. This is where I truly encounter God's presence."
              </p>
              <div className="text-amber-400 text-xl">★★★★★</div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-gradient-to-br from-indigo-50 to-white border-2 border-indigo-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-full flex items-center justify-center text-2xl shadow-lg">
                  👤
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-800">Lisa Martinez</h4>
                  <p className="text-sm text-indigo-600 font-medium">Member since 2021</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "Coming from a different faith background, I was nervous at first. But the love and 
                acceptance I found here made me feel at home. The Bible teaching is clear and applicable."
              </p>
              <div className="text-amber-400 text-xl">★★★★★</div>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-gradient-to-br from-rose-50 to-white border-2 border-rose-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center text-2xl shadow-lg">
                  👤
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-800">James Wilson</h4>
                  <p className="text-sm text-rose-600 font-medium">Member since 2017</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "The mission trips and outreach programs changed my perspective on service. I've been 
                able to use my gifts to make a real difference in people's lives. This church lives 
                what it preaches."
              </p>
              <div className="text-amber-400 text-xl">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Video Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-80 bg-gradient-to-br from-blue-400 to-purple-500">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all">
                    <span className="text-5xl">▶️</span>
                  </div>
                  <p className="text-xl font-semibold">Testimony: Finding Hope</p>
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-80 bg-gradient-to-br from-green-400 to-cyan-500">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all">
                    <span className="text-5xl">▶️</span>
                  </div>
                  <p className="text-xl font-semibold">Testimony: Life Transformation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-24 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Share Your Story
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90 leading-relaxed">
            Have a testimony of how God has worked in your life? We'd love to hear it and 
            share it to encourage others.
          </p>
          <a 
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Submit Your Testimony
          </a>
        </div>
      </section>
    </div>
  );
}
