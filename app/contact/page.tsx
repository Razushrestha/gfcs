import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Contact Us - GFCS Consulting & Advisory',
  description: 'Get in touch with GFCS experts for professional accounting, tax advisory, audit, and business consulting services in Nepal. Schedule a consultation today.',
  keywords: 'Contact GFCS Nepal, Consulting Nepal, Tax Advisory Contact, Audit Services Nepal',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="blue" spacing="lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch with Our Experts
            </h1>
            <p className="text-lg text-blue-700 mb-6">
              Ready to transform your business with expert financial advisory? Our team is here to assist you with tailored solutions.
            </p>
            <div>
              <Button href="#contact-form" variant="primary" size="md" className="inline-flex">
                Request Consultation
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Form & Info Section */}
      <Section background="white" spacing="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Request a Consultation
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and one of our specialists will contact you within 24 hours.
              </p>

              <form id="contact-form" className="space-y-6 bg-white p-8 rounded-lg shadow-md">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+977 XXX-XXXXXXX"
                  />
                </div>

                {/* Service Interest */}
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service of Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="audit">Audit & Assurance</option>
                    <option value="tax">Tax Advisory</option>
                    <option value="accounting">Accounting Services</option>
                    <option value="corporate">Corporate Services</option>
                    <option value="advisory">Business Advisory</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your company name"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                {/* Appointment Preference */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-blue-900 mb-1">
                        Prefer a scheduled call?
                      </p>
                      <p className="text-sm text-blue-700">
                        Mention your preferred date and time in the message above, and we'll arrange a consultation at your convenience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button variant="primary" size="lg" className="w-full">
                  Send Message
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:pl-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Office
              </h2>

              {/* Contact details (Headquarter, Branch, Subsidiaries, Careers) */}
              <div className="mb-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Headquarter</h3>
                    <p className="text-gray-600">
                      Banasthali Chowk, Kathmandu<br />
                      Nepal
                    </p>
                  </div>
                </div>

                {/* Phone (HQ + Branch) */}
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">
                      Headquarter: +977 9847761230<br />
                      Branch Office: +977 9802360825
                    </p>
                  </div>
                </div>

                {/* Email (HQ + Branch + Careers) */}
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 space-y-1">
                      <a href="mailto:info@gfcsnepal.com" className="block hover:text-blue-700">Headquarter: info@gfcsnepal.com</a>
                      <a href="mailto:corporate@gfcsnepal.com" className="block hover:text-blue-700">Branch: corporate@gfcsnepal.com</a>
                      <a href="mailto:ramhari@gfcsnepal.com" className="block hover:text-blue-700">Careers: ramhari@gfcsnepal.com</a>
                    </p>
                  </div>
                </div>

                {/* Branch & Subsidiaries */}
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3v4M8 3v4M3 11h18" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Branch & Subsidiaries</h3>
                    <p className="text-gray-600">
                      Branch location: Anamnagar, Kathmandu<br />
                      Subsidiary offices: Ilam, Gorkha, Dang, Chitwan, Surkhet
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      Sunday - Friday: 10:00 AM - 6:00 PM<br />
                      Saturday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  src="https://maps.google.com/maps?q=Banasthali%20Chowk%20Kathmandu&z=15&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GFCS Headquarter Location"
                />
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-900">Note:</strong> Due to high demand, we recommend scheduling consultations in advance.
                  For urgent matters, please call our office directly during business hours.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gray" spacing="md">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Not Ready to Reach Out Yet?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Explore our service offerings and case studies to understand how GFCS can help your business thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/services/audit" variant="outline">
                View Our Services
              </Button>
              <Button href="/case-studies">
                Read Case Studies
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
