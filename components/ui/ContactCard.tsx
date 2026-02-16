import React from 'react'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

export default function ContactCard() {
  return (
    <Section background="white" spacing="md">
      <Container>
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-lg shadow-md p-6 lg:p-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-gray-600 mb-4">Call or email our headquarter or branch — we’ll respond within 24 hours.</p>

              <p className="text-sm text-gray-700 mb-2">
                <strong>Address:</strong> Banasthali Chowk, Kathmandu
              </p>

              <p className="text-sm text-gray-700 mb-2">
                <strong>Phone:</strong>{' '}
                <a href="tel:+9779847761230" className="text-blue-700 hover:underline">+977 9847761230</a>{' '}
                /{' '}
                <a href="tel:+9779802360825" className="text-blue-700 hover:underline">+977 9802360825</a>
              </p>

              <p className="text-sm text-gray-700 mb-4">
                <strong>Email:</strong>{' '}
                <a href="mailto:info@gfcsnepal.com" className="text-blue-700 hover:underline">info@gfcsnepal.com</a>
              </p>
            </div>

            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=Banasthali%20Chowk%20Kathmandu&z=15&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GFCS Location"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
