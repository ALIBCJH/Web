import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 text-center"
        style={{ backgroundColor: 'var(--color-light-blue)' }}
      >
        <div className="container mx-auto px-4">
          <h1 
            className="mb-6"
            style={{ 
              color: 'var(--color-text-light)',
              fontSize: 'var(--font-size-6xl)',
              fontFamily: 'var(--font-heading)' 
            }}
          >
            Welcome Home
          </h1>
          <p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            style={{ color: 'var(--color-text-light)' }}
          >
            Join us in worship, fellowship, and growing together in faith
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/about"
              className="px-8 py-4 rounded-lg font-semibold transition-all"
              style={{ 
                backgroundColor: 'var(--color-bg-white)',
                color: 'var(--color-text-primary)' 
              }}
            >
              Learn More
            </Link>
            <Link 
              href="/events"
              className="px-8 py-4 rounded-lg font-semibold transition-all"
              style={{ 
                backgroundColor: 'var(--color-grey-800)',
                color: 'var(--color-text-light)' 
              }}
            >
              Upcoming Events
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">A Place to Belong</h2>
            <p className="text-lg mb-4" style={{ color: 'var(--color-text-secondary)' }}>
              Whether you're searching for spiritual guidance, looking for a community to call home, 
              or seeking to deepen your relationship with God, you've come to the right place.
            </p>
            <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              We're a diverse family united by our love for Christ and commitment to serving others.
            </p>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-grey-100)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Join Us This Week</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl"
                style={{ backgroundColor: 'var(--color-light-blue)', color: 'var(--color-text-light)' }}
              >
                ☀️
              </div>
              <h4 className="mb-2">Sunday Morning</h4>
              <p className="text-2xl font-bold mb-2" style={{ color: 'var(--color-light-blue)' }}>9:00 AM</p>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Traditional worship service with choir and full message
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl"
                style={{ backgroundColor: 'var(--color-light-blue)', color: 'var(--color-text-light)' }}
              >
                🌙
              </div>
              <h4 className="mb-2">Sunday Evening</h4>
              <p className="text-2xl font-bold mb-2" style={{ color: 'var(--color-light-blue)' }}>6:00 PM</p>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Contemporary service with praise band and community focus
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl"
                style={{ backgroundColor: 'var(--color-light-blue)', color: 'var(--color-text-light)' }}
              >
                🙏
              </div>
              <h4 className="mb-2">Wednesday Prayer</h4>
              <p className="text-2xl font-bold mb-2" style={{ color: 'var(--color-light-blue)' }}>7:00 PM</p>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Midweek prayer meeting and Bible study
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h4 className="mb-3">First Time Visitors</h4>
              <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                We know visiting a new church can feel overwhelming. Our greeters will welcome you 
                at the door and help you find your way. Come as you are - casual attire is perfectly fine!
              </p>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Free coffee and refreshments are available in the lobby before and after service.
              </p>
            </div>

            <div>
              <h4 className="mb-3">Kids & Youth</h4>
              <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                We offer age-appropriate programs for children from nursery through high school. 
                All volunteers are background-checked and trained.
              </p>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Kids can check in at our Children's Ministry desk in the main lobby.
              </p>
            </div>

            <div>
              <h4 className="mb-3">Worship Style</h4>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Our worship combines traditional hymns with contemporary praise songs. We believe 
                in creating an atmosphere where everyone can encounter God's presence.
              </p>
            </div>

            <div>
              <h4 className="mb-3">After Service</h4>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Stick around after the service! We'd love to meet you, answer any questions, 
                and help you get connected with our church family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-20 text-center"
        style={{ backgroundColor: 'var(--color-grey-900)' }}
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-6" style={{ color: 'var(--color-text-light)' }}>
            Ready to Take the Next Step?
          </h2>
          <p 
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: 'var(--color-grey-400)' }}
          >
            We'd love to hear from you. Whether you have questions or just want to say hello, 
            we're here for you.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg font-semibold transition-all"
            style={{ 
              backgroundColor: 'var(--color-light-blue)',
              color: 'var(--color-text-light)' 
            }}
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

