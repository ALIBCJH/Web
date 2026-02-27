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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="text-center py-20"
        style={{ backgroundColor: 'var(--color-light-blue)' }}
      >
        <div className="container mx-auto px-4">
          <h1 style={{ color: 'var(--color-text-light)' }}>Testimonials</h1>
          <p className="text-lg mt-4" style={{ color: 'var(--color-text-light)' }}>
            Stories of faith, hope, and transformation from our church family
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mr-4"
                  style={{ backgroundColor: 'var(--color-grey-200)' }}
                >
                  👤
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Sarah Johnson</h4>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    Member since 2020
                  </p>
                </div>
              </div>
              <p className="text-sm italic mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                "This church has been a beacon of hope in my life. The community welcomed me with open 
                arms, and I've grown so much in my faith. The pastoral care and teaching have been 
                life-changing."
              </p>
              <div style={{ color: 'var(--color-light-blue)' }}>★★★★★</div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mr-4"
                  style={{ backgroundColor: 'var(--color-grey-200)' }}
                >
                  👤
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Michael Chen</h4>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    Member since 2018
                  </p>
                </div>
              </div>
              <p className="text-sm italic mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                "The youth ministry here helped me discover my purpose. The mentorship and discipleship 
                programs are incredible. I'm now serving as a volunteer and giving back to the community."
              </p>
              <div style={{ color: 'var(--color-light-blue)' }}>★★★★★</div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mr-4"
                  style={{ backgroundColor: 'var(--color-grey-200)' }}
                >
                  👤
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Emily Rodriguez</h4>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    Member since 2019
                  </p>
                </div>
              </div>
              <p className="text-sm italic mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                "As a single mother, I found not just a church but a family. The support groups and 
                children's programs are amazing. My kids love coming here, and I've found true friendship."
              </p>
              <div style={{ color: 'var(--color-light-blue)' }}>★★★★★</div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mr-4"
                  style={{ backgroundColor: 'var(--color-grey-200)' }}
                >
                  👤
                </div>
                <div>
                  <h4 className="text-lg font-semibold">David Thompson</h4>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    Member since 2015
                  </p>
                </div>
              </div>
              <p className="text-sm italic mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                "The worship experience here is unlike anything I've experienced. It's authentic, 
                powerful, and Spirit-filled. This is where I truly encounter God's presence."
              </p>
              <div style={{ color: 'var(--color-light-blue)' }}>★★★★★</div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mr-4"
                  style={{ backgroundColor: 'var(--color-grey-200)' }}
                >
                  👤
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Lisa Martinez</h4>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    Member since 2021
                  </p>
                </div>
              </div>
              <p className="text-sm italic mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                "Coming from a different faith background, I was nervous at first. But the love and 
                acceptance I found here made me feel at home. The Bible teaching is clear and applicable."
              </p>
              <div style={{ color: 'var(--color-light-blue)' }}>★★★★★</div>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mr-4"
                  style={{ backgroundColor: 'var(--color-grey-200)' }}
                >
                  👤
                </div>
                <div>
                  <h4 className="text-lg font-semibold">James Wilson</h4>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    Member since 2017
                  </p>
                </div>
              </div>
              <p className="text-sm italic mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                "The mission trips and outreach programs changed my perspective on service. I've been 
                able to use my gifts to make a real difference in people's lives. This church lives 
                what it preaches."
              </p>
              <div style={{ color: 'var(--color-light-blue)' }}>★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-grey-100)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Video Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div 
              className="rounded-lg overflow-hidden shadow-md h-64 flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-grey-300)' }}
            >
              <div className="text-center">
                <div className="text-5xl mb-4">▶️</div>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Testimony: Finding Hope
                </p>
              </div>
            </div>

            <div 
              className="rounded-lg overflow-hidden shadow-md h-64 flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-grey-300)' }}
            >
              <div className="text-center">
                <div className="text-5xl mb-4">▶️</div>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Testimony: Life Transformation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section 
        className="py-20 text-center"
        style={{ backgroundColor: 'var(--color-light-blue)' }}
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-6" style={{ color: 'var(--color-text-light)' }}>
            Share Your Story
          </h2>
          <p 
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: 'var(--color-text-light)' }}
          >
            Have a testimony of how God has worked in your life? We'd love to hear it and 
            share it to encourage others.
          </p>
          <a 
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg font-semibold transition-all"
            style={{ 
              backgroundColor: 'var(--color-bg-white)',
              color: 'var(--color-text-primary)' 
            }}
          >
            Submit Your Testimony
          </a>
        </div>
      </section>
    </div>
  );
}
