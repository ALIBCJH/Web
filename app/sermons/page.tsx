import { Metadata } from "next";
import SermonCard from "../components/SermonCard";

export const metadata: Metadata = {
  title: "Sermons & Teachings",
  description: "Listen to prophetic messages, biblical teachings, and sermons from Ministry of Repentance and Holiness. Grow in faith through powerful Word-based preaching.",
  keywords: ["sermons", "biblical teachings", "prophetic messages", "christian sermons", "worship messages", "faith teachings"],
  openGraph: {
    title: "Sermon Archive - Ministry of Repentance and Holiness",
    description: "Listen to past messages and grow in your understanding of God's Word.",
    type: "website",
  },
};

export default function SermonsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section 
        className="text-center py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-4">Sermon Archive</h1>
          <p className="text-lg mt-4 text-white/90">
            Listen to past messages and grow in your understanding of God's Word and how it applies to your life.
          </p>
        </div>
      </section>

      {/* Recent Sermons */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-4xl font-serif text-slate-900">Recent Sermons</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SermonCard 
              title="Walking in Faith"
              speaker="Rev. John Smith"
              date="February 16, 2026"
              scripture="Hebrews 11:1-6"
              description="Discover what it truly means to walk by faith and not by sight, trusting God even when we can't see the path ahead."
            />
            <SermonCard 
              title="The Power of Prayer"
              speaker="Pastor Sarah Johnson"
              date="February 9, 2026"
              scripture="Matthew 6:5-15"
              description="Learn how to develop a powerful prayer life that transforms your relationship with God and changes circumstances."
            />
            <SermonCard 
              title="Love Your Neighbor"
              speaker="Rev. John Smith"
              date="February 2, 2026"
              scripture="Luke 10:25-37"
              description="Understanding what it means to truly love others as ourselves through the parable of the Good Samaritan."
            />
            <SermonCard 
              title="Finding Hope in Hard Times"
              speaker="Pastor Mike Davis"
              date="January 26, 2026"
              scripture="Romans 8:28-39"
              description="When life gets difficult, where do we turn? Discover the unshakeable hope we have in Christ."
            />
            <SermonCard 
              title="The Fruit of the Spirit"
              speaker="Pastor Sarah Johnson"
              date="January 19, 2026"
              scripture="Galatians 5:22-23"
              description="Exploring how the Holy Spirit produces character in us that reflects the nature of Christ."
            />
            <SermonCard 
              title="New Year, New You"
              speaker="Rev. John Smith"
              date="January 5, 2026"
              scripture="2 Corinthians 5:17"
              description="Starting the year right by understanding our identity as new creations in Christ."
            />
          </div>
        </div>
      </section>

      {/* Sermon Series */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-4xl font-serif text-slate-900">Current Series</h2>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden border-2 border-purple-100">
            <div 
              className="h-64 flex items-center justify-center bg-gradient-to-br from-purple-400 to-blue-400"
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-2">Living with Purpose</h3>
                <p className="text-xl mt-2 text-white/90">
                  A 6-week journey through Ephesians
                </p>
              </div>
            </div>
            <div className="p-8">
              <p className="mb-4 text-slate-600">
                Join us as we explore Paul's letter to the Ephesians and discover God's incredible 
                purpose for your life. Each week we'll uncover practical truths about our identity 
                in Christ, our calling to unity, and our mission to impact the world.
              </p>
              <p className="font-semibold text-slate-900">
                Sundays at 9:00 AM & 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section 
        className="py-20 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-4xl font-bold text-white">
            Never Miss a Message
          </h2>
          <p 
            className="text-lg mb-8 max-w-2xl mx-auto text-white/90"
          >
            Subscribe to our podcast or YouTube channel to get notified when new sermons 
            are available.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              className="px-8 py-4 rounded-xl font-bold transition-all bg-white text-purple-600 hover:shadow-xl hover:scale-105"
            >
              Subscribe to Podcast
            </button>
            <button
              className="px-8 py-4 rounded-xl font-bold transition-all bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white/30"
            >
              Watch on YouTube
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
