import PastorCard from "../components/PastorCard";
import ValueCard from "../components/ValueCard";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="text-center py-20"
        style={{ backgroundColor: 'var(--color-light-blue)' }}
      >
        <div className="container mx-auto px-4">
          <h1 style={{ color: 'var(--color-text-light)' }}>About Our Church</h1>
          <p className="text-lg mt-4" style={{ color: 'var(--color-text-light)' }}>
            Serving our community with faith, hope, and love since 1995
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Our Story</h2>
            <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>
              Our church was founded in 1995 by a small group of believers who had a vision to create 
              a welcoming community where people could encounter God's love and grow in their faith. 
              What started as weekly gatherings in a living room has grown into a vibrant congregation 
              of over 500 members.
            </p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Throughout the years, we've remained committed to our founding principles: biblical teaching, 
              authentic worship, genuine fellowship, and compassionate service. We've expanded our facilities, 
              launched numerous ministries, and seen countless lives transformed by the power of the Gospel.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-grey-100)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-12">Mission & Vision</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="mb-4">Our Mission</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  To make disciples of Jesus Christ who love God, love others, and serve the world. 
                  We are committed to helping people at every stage of their spiritual journey grow 
                  closer to God and live out their faith in practical, meaningful ways.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="mb-4">Our Vision</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  To be a thriving community of faith that transforms lives and impacts our city for 
                  Christ. We envision a church where every person is welcomed, equipped, and empowered 
                  to fulfill God's purpose for their lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ValueCard 
              title="Worship"
              description="We prioritize authentic, Spirit-filled worship that honors God and draws us into His presence."
              icon="🙌"
            />
            <ValueCard 
              title="Community"
              description="We believe in the power of genuine fellowship and meaningful relationships built on love and trust."
              icon="👥"
            />
            <ValueCard 
              title="Service"
              description="We are committed to serving others with compassion and making a tangible difference in our community."
              icon="❤️"
            />
            <ValueCard 
              title="Discipleship"
              description="We focus on spiritual growth and maturity, helping believers become more like Christ."
              icon="📖"
            />
            <ValueCard 
              title="Outreach"
              description="We are passionate about sharing the Gospel and reaching people locally and globally."
              icon="🌍"
            />
            <ValueCard 
              title="Prayer"
              description="We recognize that prayer is essential to our spiritual vitality and seek God's guidance in all things."
              icon="🙏"
            />
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-grey-100)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Our Leadership</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PastorCard 
              name="Rev. John Smith"
              title="Senior Pastor"
              bio="Pastor John has been leading our church for 15 years with a heart for worship, discipleship, and community transformation. He holds a Master of Divinity and is passionate about teaching God's Word."
            />
            <PastorCard 
              name="Pastor Sarah Johnson"
              title="Associate Pastor"
              bio="Pastor Sarah oversees our community outreach and women's ministry programs. Her compassionate leadership has helped hundreds of families in our community."
            />
            <PastorCard 
              name="Pastor Mike Davis"
              title="Youth Pastor"
              bio="Pastor Mike is passionate about mentoring young people and building the next generation of leaders. He brings energy, creativity, and a deep love for students."
            />
          </div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">What We Believe</h2>
            
            <div className="space-y-6">
              <div>
                <h5 className="font-semibold mb-2">The Bible</h5>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  We believe the Bible is the inspired, infallible Word of God and the final authority 
                  for faith and practice in the life of every believer.
                </p>
              </div>

              <div>
                <h5 className="font-semibold mb-2">God</h5>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit, 
                  equal in power and glory.
                </p>
              </div>

              <div>
                <h5 className="font-semibold mb-2">Jesus Christ</h5>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  We believe in the deity of Jesus Christ, His virgin birth, sinless life, substitutionary 
                  death, bodily resurrection, and His second coming.
                </p>
              </div>

              <div>
                <h5 className="font-semibold mb-2">Salvation</h5>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  We believe that salvation is a gift of God's grace through faith in Jesus Christ alone, 
                  not by works, and results in eternal life.
                </p>
              </div>

              <div>
                <h5 className="font-semibold mb-2">The Church</h5>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  We believe the Church is the body of Christ, called to worship God, make disciples, 
                  and serve the world in Jesus' name.
                </p>
              </div>

              <div>
                <h5 className="font-semibold mb-2">Eternity</h5>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  We believe in the resurrection of both the saved and the lost: the saved unto eternal 
                  life in heaven, and the lost unto eternal separation from God.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section 
        className="py-20 text-center"
        style={{ backgroundColor: 'var(--color-light-blue)' }}
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-6" style={{ color: 'var(--color-text-light)' }}>
            Join Our Church Family
          </h2>
          <p 
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: 'var(--color-text-light)' }}
          >
            We'd love to meet you! Join us this Sunday for worship.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="/contact" 
              className="px-8 py-3 rounded-lg font-medium transition-colors"
              style={{ 
                backgroundColor: 'var(--color-bg-white)',
                color: 'var(--color-text-primary)' 
              }}
            >
              Contact Us
            </a>
            <a 
              href="/events" 
              className="px-8 py-3 rounded-lg font-medium transition-colors"
              style={{ 
                backgroundColor: 'var(--color-grey-800)',
                color: 'var(--color-text-light)' 
              }}
            >
              View Events
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}