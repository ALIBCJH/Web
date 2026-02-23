"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="text-center py-20"
        style={{ backgroundColor: 'var(--color-light-blue)' }}
      >
        <div className="container mx-auto px-4">
          <h1 style={{ color: 'var(--color-text-light)' }}>Contact Us</h1>
          <p className="text-lg mt-4" style={{ color: 'var(--color-text-light)' }}>
            We'd love to hear from you. Reach out with any questions or prayer requests.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border"
                    style={{ 
                      borderColor: 'var(--color-grey-300)',
                      color: 'var(--color-text-primary)' 
                    }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border"
                    style={{ 
                      borderColor: 'var(--color-grey-300)',
                      color: 'var(--color-text-primary)' 
                    }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border"
                    style={{ 
                      borderColor: 'var(--color-grey-300)',
                      color: 'var(--color-text-primary)' 
                    }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border"
                    style={{ 
                      borderColor: 'var(--color-grey-300)',
                      color: 'var(--color-text-primary)' 
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-lg font-semibold transition-all"
                  style={{ 
                    backgroundColor: 'var(--color-light-blue)',
                    color: 'var(--color-text-light)' 
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="mb-6">Get In Touch</h2>
              
              <div className="space-y-8">
                <div>
                  <h4 className="mb-3 flex items-center">
                    <span className="mr-2">📍</span> Address
                  </h4>
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    123 Church Street<br />
                    City, State 12345<br />
                    United States
                  </p>
                </div>

                <div>
                  <h4 className="mb-3 flex items-center">
                    <span className="mr-2">📞</span> Phone
                  </h4>
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    Office: (555) 123-4567<br />
                    Prayer Line: (555) 123-4568
                  </p>
                </div>

                <div>
                  <h4 className="mb-3 flex items-center">
                    <span className="mr-2">✉️</span> Email
                  </h4>
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    General: info@church.com<br />
                    Pastor: pastor@church.com
                  </p>
                </div>

                <div>
                  <h4 className="mb-3 flex items-center">
                    <span className="mr-2">🕐</span> Office Hours
                  </h4>
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    Monday - Thursday: 9:00 AM - 4:00 PM<br />
                    Friday: 9:00 AM - 12:00 PM<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>

                <div>
                  <h4 className="mb-3">Follow Us</h4>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                      style={{ backgroundColor: 'var(--color-light-blue)', color: 'var(--color-text-light)' }}
                    >
                      f
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                      style={{ backgroundColor: 'var(--color-light-blue)', color: 'var(--color-text-light)' }}
                    >
                      𝕏
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                      style={{ backgroundColor: 'var(--color-light-blue)', color: 'var(--color-text-light)' }}
                    >
                      ▶
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-grey-100)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Find Us</h2>
          <div 
            className="max-w-5xl mx-auto h-96 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: 'var(--color-grey-300)' }}
          >
            <p style={{ color: 'var(--color-text-secondary)' }}>
              [Map would be embedded here - Google Maps or similar]
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
