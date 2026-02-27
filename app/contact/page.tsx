"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-[#0B0F19] dark:via-[#0F172A] dark:to-[#0B0F19] transition-colors duration-300">

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-sky-500/10 dark:from-purple-900/20 dark:via-transparent dark:to-sky-900/20" />
        
        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-sm font-medium mb-6">
            <Mail size={16} />
            <span>We're Here to Help</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif text-gray-900 dark:text-white mb-6 tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-sky-500 dark:from-purple-400 dark:to-sky-400">Touch</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
            Have a prayer request, testimony, or question? We'd love to hear from you. 
            Our ministry team is ready to connect.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Form - 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-white/10">
                <h2 className="text-3xl md:text-4xl font-serif text-gray-900 dark:text-white mb-3">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 dark:text-white/60 mb-8">
                  Fill out the form below and we'll get back to you within 24-48 hours.
                </p>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 dark:text-white/60">
                      Thank you for reaching out. We'll be in touch soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white/80">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white/80">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-white/80">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all"
                          placeholder="+254 XXX XXX XXX"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-white/80">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all"
                        >
                          <option value="">Select a topic...</option>
                          <option value="prayer">Prayer Request</option>
                          <option value="testimony">Share Testimony</option>
                          <option value="general">General Inquiry</option>
                          <option value="partnership">Partnership</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white/80">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all resize-none"
                        placeholder="Share your prayer request, testimony, or question..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-sky-500 hover:from-purple-700 hover:to-sky-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info Sidebar - 1 column */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-600 to-sky-500 rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-serif mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <MapPin size={20} />,
                      title: "Visit Us",
                      detail: "Nairobi, Kenya\nInternational Headquarters",
                    },
                    {
                      icon: <Phone size={20} />,
                      title: "Call Us",
                      detail: "+254 XXX XXX XXX\nMon-Fri, 9AM-5PM EAT",
                    },
                    {
                      icon: <Mail size={20} />,
                      title: "Email Us",
                      detail: "info@ministry.org\nprayer@ministry.org",
                    },
                    {
                      icon: <Clock size={20} />,
                      title: "Service Times",
                      detail: "Sunday: 9:00 AM\nWednesday: 6:00 PM",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">{item.title}</h5>
                        <p className="text-sm text-white/80 whitespace-pre-line leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prayer Line Card */}
              <div className="bg-white dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-gray-100 dark:border-white/10">
                <h4 className="text-xl font-serif text-gray-900 dark:text-white mb-3">
                  24/7 Prayer Line
                </h4>
                <p className="text-gray-600 dark:text-white/60 text-sm mb-4">
                  Need immediate prayer? Our intercessors are available around the clock.
                </p>
                <a
                  href="tel:+254XXXXXXX"
                  className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold hover:gap-3 transition-all"
                >
                  Call Now
                  <Send size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-20 bg-white dark:bg-[#0B0F19] border-t border-gray-100 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 dark:text-white mb-4">
              Visit Our Ministry
            </h2>
            <p className="text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
              Join us for worship services and special events at our headquarters in Nairobi.
            </p>
          </div>
          
          <div className="bg-gray-100 dark:bg-white/5 rounded-3xl overflow-hidden h-[400px] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 dark:text-white/20 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-white/40">Map integration coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}