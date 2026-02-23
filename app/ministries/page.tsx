import MinistryCard from "../components/MinistryCard";

export default function MinistriesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="text-center py-20"
        style={{ backgroundColor: 'var(--color-light-blue)' }}
      >
        <div className="container mx-auto px-4">
          <h1 style={{ color: 'var(--color-text-light)' }}>Our Ministries</h1>
          <p className="text-lg mt-4" style={{ color: 'var(--color-text-light)' }}>
            Connecting people to God and each other through meaningful ministry
          </p>
        </div>
      </section>

      {/* Adult Ministries */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Adult Ministries</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MinistryCard 
              title="Men's Ministry"
              description="A brotherhood focused on growing together in faith, accountability, and service. Join us for weekly Bible studies, monthly breakfasts, and annual retreats."
              leader="Mike Thompson"
              meetingTime="Saturdays, 7:00 AM"
            />
            <MinistryCard 
              title="Women's Ministry"
              description="Empowering women to grow in their relationship with Christ through fellowship, study, and service opportunities throughout the year."
              leader="Jennifer Adams"
              meetingTime="Thursdays, 6:30 PM"
            />
            <MinistryCard 
              title="Young Adults"
              description="A vibrant community for adults ages 18-35. We focus on building authentic relationships while navigating faith in the modern world."
              leader="David Chen"
              meetingTime="Fridays, 7:00 PM"
            />
          </div>
        </div>
      </section>

      {/* Family & Children */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-grey-100)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Family & Children</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MinistryCard 
              title="Children's Ministry"
              description="Fun, engaging, and age-appropriate programming for kids from nursery through 5th grade. We create environments where children can learn about God's love."
              leader="Rachel Martinez"
              meetingTime="Sundays, 9:00 AM & 6:00 PM"
            />
            <MinistryCard 
              title="Youth Ministry"
              description="Middle and high school students gather for worship, games, and life-changing discussions. Building a foundation of faith for the next generation."
              leader="Pastor Mike Davis"
              meetingTime="Wednesdays, 6:30 PM"
            />
            <MinistryCard 
              title="Family Ministry"
              description="Supporting families with resources, events, and programs designed to help parents raise children who love God and serve others."
              leader="Tom & Lisa Williams"
              meetingTime="Monthly Events"
            />
          </div>
        </div>
      </section>

      {/* Outreach & Service */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Outreach & Service</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MinistryCard 
              title="Community Outreach"
              description="Serving our local community through food drives, clothing distribution, and partnership with local organizations to meet practical needs."
              leader="Pastor Sarah Johnson"
              meetingTime="Various Times"
            />
            <MinistryCard 
              title="Missions"
              description="Supporting global mission work through prayer, financial support, and short-term mission trips. Making an impact around the world."
              leader="James Wilson"
              meetingTime="Quarterly Meetings"
            />
            <MinistryCard 
              title="Prayer Ministry"
              description="A dedicated team committed to interceding for our church, community, and world. Prayer requests are always welcome."
              leader="Mary Foster"
              meetingTime="Wednesdays, 7:00 PM"
            />
          </div>
        </div>
      </section>

      {/* Worship & Arts */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-grey-100)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Worship & Arts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MinistryCard 
              title="Worship Team"
              description="Musicians and vocalists who lead our congregation in worship. If you have musical gifts, we'd love to have you join us."
              leader="Daniel Rodriguez"
              meetingTime="Sundays, 8:00 AM & Thursdays, 7:00 PM"
            />
            <MinistryCard 
              title="Choir"
              description="Traditional choir singing hymns and anthems that glorify God. All voices welcome, no audition required."
              leader="Patricia Brown"
              meetingTime="Wednesdays, 6:00 PM"
            />
            <MinistryCard 
              title="Creative Arts"
              description="Using drama, dance, visual arts, and multimedia to enhance worship and tell God's story in creative ways."
              leader="Amanda Lee"
              meetingTime="Bi-weekly on Saturdays"
            />
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section 
        className="py-20 text-center"
        style={{ backgroundColor: 'var(--color-light-blue)' }}
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-6" style={{ color: 'var(--color-text-light)' }}>
            Find Your Place to Serve
          </h2>
          <p 
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: 'var(--color-text-light)' }}
          >
            Everyone has gifts and talents that can make a difference. Let us help you discover 
            where you can use yours to serve God and others.
          </p>
          <a 
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg font-semibold transition-all"
            style={{ 
              backgroundColor: 'var(--color-bg-white)',
              color: 'var(--color-text-primary)' 
            }}
          >
            Get Connected
          </a>
        </div>
      </section>
    </div>
  );
}
