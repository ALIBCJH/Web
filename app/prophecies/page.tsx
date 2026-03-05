import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prophecies & Fulfillment - Ministry of Repentance and Holiness",
  description: "Witness the prophetic voice of God through prophecies given and their miraculous fulfillment in our ministry.",
  keywords: ["prophecies", "prophetic ministry", "fulfilled prophecies", "prophetic word", "prophecy fulfillment"],
  openGraph: {
    title: "Prophecies & Fulfillment - Ministry of Repentance and Holiness",
    description: "Divine prophecies and their remarkable fulfillment.",
    type: "website",
  },
};

export default function PropheciesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm shadow-lg">
                📖 Divine Revelations
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Prophecies & Their Fulfillment
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Witness the prophetic voice of God speaking through His servants and the miraculous fulfillment of His word
            </p>
          </div>
        </div>
      </section>

      {/* Prophecies Grid Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-400 to-blue-400 text-white rounded-full text-sm font-semibold mb-4 shadow-lg">
              ✨ Words from Heaven
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Prophetic Words & Their Fulfillment
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              God continues to speak to His people through prophetic revelations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Prophecy Card 1 */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border-2 border-purple-100">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl">🌧️</span>
                </div>
                
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold mb-3">
                    January 2024
                  </span>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Rain in Dry Season</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-purple-50 rounded-xl border-l-4 border-purple-500">
                      <p className="text-sm font-semibold text-purple-700 mb-1">THE PROPHECY</p>
                      <p className="text-gray-700 italic leading-relaxed">
                        "The Lord says there shall be rain in the dry season when no one expects it, a sign of My provision and blessing."
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                      <p className="text-sm font-semibold text-green-700 mb-1">FULFILLMENT</p>
                      <p className="text-gray-700 leading-relaxed">
                        Unexpected rainfall occurred in March 2024 during the driest period, blessing the land and confirming God's word.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">Fulfilled: March 2024</span>
                  <span className="text-green-600 font-bold">✓ Fulfilled</span>
                </div>
              </div>
            </div>

            {/* Prophecy Card 2 */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border-2 border-blue-100">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl">🏛️</span>
                </div>
                
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-3">
                    February 2024
                  </span>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">New House of Worship</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                      <p className="text-sm font-semibold text-blue-700 mb-1">THE PROPHECY</p>
                      <p className="text-gray-700 italic leading-relaxed">
                        "I am opening doors for you to a new place of worship where many shall gather and hear My word."
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                      <p className="text-sm font-semibold text-green-700 mb-1">FULFILLMENT</p>
                      <p className="text-gray-700 leading-relaxed">
                        Within 4 months, a larger facility opened its doors to the ministry, accommodating triple the congregation size.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">Fulfilled: June 2024</span>
                  <span className="text-green-600 font-bold">✓ Fulfilled</span>
                </div>
              </div>
            </div>

            {/* Prophecy Card 3 */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border-2 border-green-100">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-emerald-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl">👨‍👩‍👧‍👦</span>
                </div>
                
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold mb-3">
                    March 2024
                  </span>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Multiplication of Souls</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                      <p className="text-sm font-semibold text-green-700 mb-1">THE PROPHECY</p>
                      <p className="text-gray-700 italic leading-relaxed">
                        "This year I shall multiply your numbers. Those who come shall be like the sand of the sea."
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                      <p className="text-sm font-semibold text-green-700 mb-1">FULFILLMENT</p>
                      <p className="text-gray-700 leading-relaxed">
                        Church membership grew by 300% in 2024-2025, with hundreds of souls saved and baptized in the revival meetings.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">Fulfilled: Ongoing</span>
                  <span className="text-green-600 font-bold">✓ Fulfilled</span>
                </div>
              </div>
            </div>

            {/* Prophecy Card 4 */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border-2 border-amber-100">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 to-orange-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl">💰</span>
                </div>
                
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold mb-3">
                    April 2024
                  </span>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Financial Breakthrough</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-amber-50 rounded-xl border-l-4 border-amber-500">
                      <p className="text-sm font-semibold text-amber-700 mb-1">THE PROPHECY</p>
                      <p className="text-gray-700 italic leading-relaxed">
                        "I am releasing provision for My work. Partners shall rise from unexpected places to support this ministry."
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                      <p className="text-sm font-semibold text-green-700 mb-1">FULFILLMENT</p>
                      <p className="text-gray-700 leading-relaxed">
                        Multiple international partners emerged, providing resources for missions, media equipment, and community outreach programs.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">Fulfilled: May 2024</span>
                  <span className="text-green-600 font-bold">✓ Fulfilled</span>
                </div>
              </div>
            </div>

            {/* Prophecy Card 5 */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border-2 border-indigo-100">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl">🌍</span>
                </div>
                
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold mb-3">
                    May 2024
                  </span>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Nations Shall Hear</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-indigo-50 rounded-xl border-l-4 border-indigo-500">
                      <p className="text-sm font-semibold text-indigo-700 mb-1">THE PROPHECY</p>
                      <p className="text-gray-700 italic leading-relaxed">
                        "Your voice shall reach beyond borders. The nations shall hear this message of holiness through modern means."
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                      <p className="text-sm font-semibold text-green-700 mb-1">FULFILLMENT</p>
                      <p className="text-gray-700 leading-relaxed">
                        Ministry messages now reach 45+ countries through online platforms, with thousands tuning in from around the world.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">Fulfilled: August 2024</span>
                  <span className="text-green-600 font-bold">✓ Fulfilled</span>
                </div>
              </div>
            </div>

            {/* Prophecy Card 6 */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border-2 border-rose-100">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-500 to-pink-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl">⚡</span>
                </div>
                
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-xs font-semibold mb-3">
                    June 2024
                  </span>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Revival Fire</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-rose-50 rounded-xl border-l-4 border-rose-500">
                      <p className="text-sm font-semibold text-rose-700 mb-1">THE PROPHECY</p>
                      <p className="text-gray-700 italic leading-relaxed">
                        "I am sending a revival fire. Healing, deliverance, and miracles shall be commonplace in your gatherings."
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                      <p className="text-sm font-semibold text-green-700 mb-1">FULFILLMENT</p>
                      <p className="text-gray-700 leading-relaxed">
                        Revival meetings witnessed countless healings, miracles, and deliverances, with testimonies documented from every service.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">Fulfilled: Ongoing</span>
                  <span className="text-green-600 font-bold">✓ Fulfilled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Reference Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="text-6xl">📖</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              We Serve a God Who Speaks
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              "Surely the Lord GOD does nothing without revealing his secret to his servants the prophets."
            </p>
            <p className="text-lg text-cyan-200 font-semibold">
              Amos 3:7 (ESV)
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Experience the Prophetic
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Join us for our revival meetings and witness the prophetic ministry in action. 
              God is still speaking to His people today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/events"
                className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                View Upcoming Events
              </a>
              <a 
                href="/testimonials"
                className="inline-block px-10 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Read More Testimonies
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
