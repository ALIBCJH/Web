import Link from "next/link";

export default function Footer() {
  return (
    <footer 
      className="pt-16 pb-8"
      style={{ backgroundColor: 'var(--color-grey-900)' }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                style={{ backgroundColor: 'var(--color-light-blue)' }}
              >
                <span className="text-white text-lg">✝</span>
              </div>
              <span 
                className="text-lg font-bold"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-text-light)' 
                }}
              >
                Church Name
              </span>
            </div>
            <p 
              className="text-sm"
              style={{ color: 'var(--color-grey-400)' }}
            >
              A community of faith, hope, and love serving our city and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 
              className="font-bold mb-4"
              style={{ color: 'var(--color-text-light)' }}
            >
              Quick Links
            </h5>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about" 
                  className="text-sm transition-colors"
                  style={{ color: 'var(--color-grey-400)' }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/ministries" 
                  className="text-sm transition-colors"
                  style={{ color: 'var(--color-grey-400)' }}
                >
                  Ministries
                </Link>
              </li>
              <li>
                <Link 
                  href="/events" 
                  className="text-sm transition-colors"
                  style={{ color: 'var(--color-grey-400)' }}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link 
                  href="/sermons" 
                  className="text-sm transition-colors"
                  style={{ color: 'var(--color-grey-400)' }}
                >
                  Sermons
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h5 
              className="font-bold mb-4"
              style={{ color: 'var(--color-text-light)' }}
            >
              Service Times
            </h5>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--color-grey-400)' }}>
              <li>Sunday Morning: 9:00 AM</li>
              <li>Sunday Evening: 6:00 PM</li>
              <li>Wednesday Prayer: 7:00 PM</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 
              className="font-bold mb-4"
              style={{ color: 'var(--color-text-light)' }}
            >
              Contact Us
            </h5>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--color-grey-400)' }}>
              <li>123 Church Street</li>
              <li>City, State 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@church.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 mt-8 text-center"
          style={{ borderTop: '1px solid var(--color-grey-800)' }}
        >
          <p 
            className="text-sm"
            style={{ color: 'var(--color-grey-500)' }}
          >
            &copy; {new Date().getFullYear()} Church Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
