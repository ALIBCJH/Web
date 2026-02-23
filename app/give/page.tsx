"use client";

import { useState } from "react";

export default function GivePage() {
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('one-time');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="text-center py-20"
        style={{ backgroundColor: 'var(--color-light-blue)' }}
      >
        <div className="container mx-auto px-4">
          <h1 style={{ color: 'var(--color-text-light)' }}>Give</h1>
          <p className="text-lg mt-4" style={{ color: 'var(--color-text-light)' }}>
            Your generosity makes a difference in our community and around the world
          </p>
        </div>
      </section>

      {/* Why We Give */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8">Why We Give</h2>
            <p className="text-lg mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              Giving is an act of worship and a tangible expression of our gratitude to God. 
              When we give, we participate in God's work of transforming lives and communities.
            </p>
            <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              "Each of you should give what you have decided in your heart to give, not reluctantly 
              or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7
            </p>
          </div>
        </div>
      </section>

      {/* Giving Options */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-grey-100)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Ways to Give</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl"
                style={{ backgroundColor: 'var(--color-light-blue)', color: 'var(--color-text-light)' }}
              >
                💳
              </div>
              <h4 className="mb-3">Online Giving</h4>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Secure, convenient online giving available 24/7. Set up one-time or recurring gifts.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl"
                style={{ backgroundColor: 'var(--color-light-blue)', color: 'var(--color-text-light)' }}
              >
                📱
              </div>
              <h4 className="mb-3">Text to Give</h4>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Text "GIVE" to (555) 123-4567 and follow the prompts for quick mobile giving.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl"
                style={{ backgroundColor: 'var(--color-light-blue)', color: 'var(--color-text-light)' }}
              >
                ✉️
              </div>
              <h4 className="mb-3">Mail</h4>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Mail checks to: Church Name, 123 Church Street, City, State 12345
              </p>
            </div>
          </div>

          {/* Online Giving Form */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h3 className="mb-6 text-center">Give Online</h3>
            
            <div className="space-y-6">
              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium mb-3" style={{ color: 'var(--color-text-primary)' }}>
                  Select Amount
                </label>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  {['25', '50', '100', '250', '500', '1000'].map((value) => (
                    <button
                      key={value}
                      onClick={() => setAmount(value)}
                      className="py-3 rounded-lg font-medium transition-all"
                      style={{ 
                        backgroundColor: amount === value ? 'var(--color-light-blue)' : 'var(--color-grey-100)',
                        color: amount === value ? 'var(--color-text-light)' : 'var(--color-text-primary)',
                        border: '1px solid var(--color-grey-300)'
                      }}
                    >
                      ${value}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  placeholder="Other amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border"
                  style={{ 
                    borderColor: 'var(--color-grey-300)',
                    color: 'var(--color-text-primary)' 
                  }}
                />
              </div>

              {/* Frequency */}
              <div>
                <label className="block text-sm font-medium mb-3" style={{ color: 'var(--color-text-primary)' }}>
                  Frequency
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'one-time', label: 'One Time' },
                    { value: 'weekly', label: 'Weekly' },
                    { value: 'monthly', label: 'Monthly' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setFrequency(option.value)}
                      className="py-3 rounded-lg font-medium transition-all"
                      style={{ 
                        backgroundColor: frequency === option.value ? 'var(--color-light-blue)' : 'var(--color-grey-100)',
                        color: frequency === option.value ? 'var(--color-text-light)' : 'var(--color-text-primary)',
                        border: '1px solid var(--color-grey-300)'
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                className="w-full py-4 rounded-lg font-semibold transition-all"
                style={{ 
                  backgroundColor: 'var(--color-light-blue)',
                  color: 'var(--color-text-light)' 
                }}
              >
                Continue to Payment
              </button>

              <p className="text-xs text-center" style={{ color: 'var(--color-text-secondary)' }}>
                🔒 Secure payment processing. Your information is safe and encrypted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Your Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div 
                className="text-4xl font-bold mb-2"
                style={{ color: 'var(--color-light-blue)' }}
              >
                500+
              </div>
              <p style={{ color: 'var(--color-text-secondary)' }}>Families Served Monthly</p>
            </div>

            <div className="text-center">
              <div 
                className="text-4xl font-bold mb-2"
                style={{ color: 'var(--color-light-blue)' }}
              >
                15
              </div>
              <p style={{ color: 'var(--color-text-secondary)' }}>Active Ministries</p>
            </div>

            <div className="text-center">
              <div 
                className="text-4xl font-bold mb-2"
                style={{ color: 'var(--color-light-blue)' }}
              >
                8
              </div>
              <p style={{ color: 'var(--color-text-secondary)' }}>Mission Partners Worldwide</p>
            </div>

            <div className="text-center">
              <div 
                className="text-4xl font-bold mb-2"
                style={{ color: 'var(--color-light-blue)' }}
              >
                100%
              </div>
              <p style={{ color: 'var(--color-text-secondary)' }}>Committed to Transparency</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-grey-100)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Giving FAQs</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h5 className="font-semibold mb-2">Is my online gift secure?</h5>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  Yes! We use bank-level encryption and secure payment processing to protect your information.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h5 className="font-semibold mb-2">Are my donations tax-deductible?</h5>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  Yes, we are a 501(c)(3) organization. You will receive a giving statement at year-end for tax purposes.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h5 className="font-semibold mb-2">Can I designate my gift?</h5>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  Yes, you can designate gifts for specific ministries, missions, or building projects. Contact our office for details.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h5 className="font-semibold mb-2">How is my gift used?</h5>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  Gifts support our ministry operations, community outreach, missions, facility maintenance, and staff. We publish annual financial reports showing stewardship of all resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
