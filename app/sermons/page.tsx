import SermonCard from "../components/SermonCard";

export default function SermonsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="text-center py-20"
        style={{ backgroundColor: 'var(--color-light-blue)' }}
      >
        <div className="container mx-auto px-4">
          <h1 style={{ color: 'var(--color-text-light)' }}>Sermon Archive</h1>
          <p className="text-lg mt-4" style={{ color: 'var(--color-text-light)' }}>
            Listen to past messages and grow in your understanding of God's Word
          </p>
        </div>
      </section>

      {/* Recent Sermons */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Recent Sermons</h2>
          
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
      <section className="py-20" style={{ backgroundColor: 'var(--color-grey-100)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Current Series</h2>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div 
              className="h-64 flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-light-blue)' }}
            >
              <div className="text-center">
                <h3 style={{ color: 'var(--color-text-light)' }}>Living with Purpose</h3>
                <p className="text-xl mt-2" style={{ color: 'var(--color-text-light)' }}>
                  A 6-week journey through Ephesians
                </p>
              </div>
            </div>
            <div className="p-8">
              <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                Join us as we explore Paul's letter to the Ephesians and discover God's incredible 
                purpose for your life. Each week we'll uncover practical truths about our identity 
                in Christ, our calling to unity, and our mission to impact the world.
              </p>
              <p className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                Sundays at 9:00 AM & 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section 
        className="py-20 text-center"
        style={{ backgroundColor: 'var(--color-grey-900)' }}
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-6" style={{ color: 'var(--color-text-light)' }}>
            Never Miss a Message
          </h2>
          <p 
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: 'var(--color-grey-400)' }}
          >
            Subscribe to our podcast or YouTube channel to get notified when new sermons 
            are available.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              className="px-8 py-4 rounded-lg font-semibold transition-all"
              style={{ 
                backgroundColor: 'var(--color-light-blue)',
                color: 'var(--color-text-light)' 
              }}
            >
              Subscribe to Podcast
            </button>
            <button
              className="px-8 py-4 rounded-lg font-semibold transition-all"
              style={{ 
                backgroundColor: 'var(--color-grey-700)',
                color: 'var(--color-text-light)' 
              }}
            >
              Watch on YouTube
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
