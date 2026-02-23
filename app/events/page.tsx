import EventCard from "../components/EventCard";

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="text-center py-20"
        style={{ backgroundColor: 'var(--color-light-blue)' }}
      >
        <div className="container mx-auto px-4">
          <h1 style={{ color: 'var(--color-text-light)' }}>Upcoming Events</h1>
          <p className="text-lg mt-4" style={{ color: 'var(--color-text-light)' }}>
            Join us for these exciting opportunities to worship, learn, and grow together
          </p>
        </div>
      </section>

      {/* This Week */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">This Week</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <EventCard 
              title="Sunday Morning Worship"
              date="Every Sunday"
              time="9:00 AM"
              location="Main Sanctuary"
              description="Join us for our traditional worship service featuring inspiring music, biblical teaching, and time for fellowship."
            />
            <EventCard 
              title="Sunday Evening Service"
              date="Every Sunday"
              time="6:00 PM"
              location="Main Sanctuary"
              description="Contemporary worship service with a more casual atmosphere. Great for families and young adults."
            />
            <EventCard 
              title="Wednesday Prayer Meeting"
              date="Every Wednesday"
              time="7:00 PM"
              location="Prayer Room"
              description="Midweek gathering for corporate prayer, Bible study, and encouragement. All are welcome."
            />
            <EventCard 
              title="Youth Group"
              date="Every Wednesday"
              time="6:30 PM"
              location="Youth Center"
              description="Middle and high school students meet for games, worship, and relevant Bible teaching."
            />
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-grey-100)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Special Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard 
              title="Easter Sunday Celebration"
              date="April 20, 2026"
              time="9:00 AM & 11:00 AM"
              location="Main Sanctuary"
              description="Celebrate the resurrection of Jesus Christ with special music, powerful message, and family activities."
            />
            <EventCard 
              title="Men's Breakfast"
              date="March 15, 2026"
              time="8:00 AM"
              location="Fellowship Hall"
              description="Men of all ages gather for food, fellowship, and an encouraging message. Bring a friend!"
            />
            <EventCard 
              title="Women's Conference"
              date="March 28-29, 2026"
              time="Friday 7 PM, Saturday 9 AM"
              location="Main Sanctuary"
              description="Two-day conference featuring guest speaker, worship, workshops, and fellowship for women."
            />
            <EventCard 
              title="Community Service Day"
              date="March 22, 2026"
              time="9:00 AM - 3:00 PM"
              location="Various Locations"
              description="Join us as we serve our community through various projects. Lunch provided."
            />
            <EventCard 
              title="Family Movie Night"
              date="March 8, 2026"
              time="6:00 PM"
              location="Fellowship Hall"
              description="Family-friendly movie, popcorn, and fun! Great opportunity to invite friends and neighbors."
            />
            <EventCard 
              title="Baptism Sunday"
              date="March 30, 2026"
              time="During Morning Service"
              location="Main Sanctuary"
              description="Celebrating new believers through water baptism. If you'd like to be baptized, contact the church office."
            />
          </div>
        </div>
      </section>

      {/* Calendar CTA */}
      <section 
        className="py-20 text-center"
        style={{ backgroundColor: 'var(--color-grey-900)' }}
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-6" style={{ color: 'var(--color-text-light)' }}>
            Stay Connected
          </h2>
          <p 
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: 'var(--color-grey-400)' }}
          >
            Don't miss out on what's happening at our church. Subscribe to our newsletter 
            or follow us on social media for the latest updates.
          </p>
          <a 
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg font-semibold transition-all"
            style={{ 
              backgroundColor: 'var(--color-light-blue)',
              color: 'var(--color-text-light)' 
            }}
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
