import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services - GFCS Consulting & Advisory',
  description: 'Comprehensive accounting, audit, tax advisory, corporate services, and business consulting solutions for enterprises and SMEs in Nepal.',
  keywords: 'Accounting Services Nepal, Tax Advisory Nepal, Audit Services, Corporate Services Nepal, Business Advisory',
}

const services = [
  {
    title: 'Audit & Assurance',
    slug: 'audit',
    description: 'Independent verification and assurance services ensuring financial accuracy, regulatory compliance, and stakeholder confidence.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    benefits: [
      'Statutory & Internal Audits',
      'Risk Assessment',
      'Compliance Verification',
      'Financial Statement Review'
    ]
  },
  {
    title: 'Tax Advisory',
    slug: 'tax',
    description: 'Strategic tax planning and compliance services designed to optimize your tax position while ensuring full regulatory adherence.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    benefits: [
      'Corporate Tax Planning',
      'VAT & Income Tax Filing',
      'Tax Dispute Resolution',
      'Cross-border Tax Advisory'
    ]
  },
  {
    title: 'Accounting Services',
    slug: 'accounting',
    description: 'End-to-end bookkeeping and financial reporting solutions helping you maintain accurate, compliant financial records.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    benefits: [
      'Bookkeeping & Reconciliation',
      'Financial Statement Preparation',
      'Payroll Management',
      'Management Reporting'
    ]
  },
  {
    title: 'Corporate Services',
    slug: 'corporate',
    description: 'Company registration, compliance, secretarial services, and corporate restructuring support for businesses of all sizes.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    benefits: [
      'Company Registration',
      'Corporate Compliance',
      'Secretarial Services',
      'Restructuring & M&A'
    ]
  },
  {
    title: 'Business Advisory',
    slug: 'advisory',
    description: 'Strategic guidance on financial planning, risk management, and business optimization to help you achieve sustainable growth.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    benefits: [
      'Financial Planning',
      'Risk Management',
      'Business Valuation',
      'Performance Optimization'
    ]
  }
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="blue" spacing="lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Financial & Business Solutions
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              From audit and assurance to tax advisory and corporate services, GFCS delivers expert solutions tailored to your business needs.
            </p>
            <Button href="/contact" variant="secondary" size="lg">
              Request a Consultation
            </Button>
          </div>
        </Container>
      </Section>

      {/* Services Overview Section */}
      <Section background="white" spacing="lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              We provide end-to-end financial and business advisory services designed to help you navigate complexity, ensure compliance, and drive growth.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon & Title */}
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-3 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Learn More About {service.title}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Choose GFCS Section */}
      <Section background="gray" spacing="lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose GFCS?
            </h2>
            <p className="text-lg text-gray-600">
              We combine technical expertise with practical business insight to deliver solutions that create real value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Certified professionals with deep industry knowledge and regulatory expertise across all service lines.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance Focused</h3>
              <p className="text-gray-600">
                Rigorous adherence to Nepali regulatory standards and international best practices in all engagements.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Results Driven</h3>
              <p className="text-gray-600">
                Actionable insights and measurable outcomes that help clients achieve their strategic and financial goals.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="blue" spacing="md">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Connect with our team to discuss how GFCS can support your business objectives with tailored advisory solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Request a Consultation
              </Button>
              <Button href="/case-studies" variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-blue-600">
                View Case Studies
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
