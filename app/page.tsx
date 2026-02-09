import React from 'react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import FadeIn from '@/components/FadeIn';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function Home() {
  const services = [
    {
      title: 'Audit & Assurance',
      description: 'Comprehensive audit services ensuring regulatory compliance and stakeholder confidence.',
      href: '/services/audit',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Tax Advisory',
      description: 'Strategic tax planning and compliance solutions for optimal financial outcomes.',
      href: '/services/tax',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Accounting Services',
      description: 'Reliable accounting and bookkeeping services for accurate financial reporting.',
      href: '/services/accounting',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Corporate Services',
      description: 'Complete corporate setup, governance, and compliance support.',
      href: '/services/corporate',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Business Advisory',
      description: 'Strategic guidance for growth, restructuring, and operational excellence.',
      href: '/services/advisory',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  const trustIndicators = [
    { value: '15+', label: 'Years of Experience' },
    { value: '500+', label: 'Clients Served' },
    { value: '100%', label: 'Compliance Rate' },
    { value: '25+', label: 'Expert Professionals' },
  ];

  const whyChoose = [
    {
      title: 'Regulatory Expertise',
      description: 'Deep understanding of Nepal\'s regulatory framework and compliance requirements.',
    },
    {
      title: 'Client-Centric Approach',
      description: 'Tailored solutions designed around your unique business needs and objectives.',
    },
    {
      title: 'Experienced Team',
      description: 'Certified professionals with extensive industry knowledge and expertise.',
    },
    {
      title: 'Proven Track Record',
      description: 'Trusted by leading enterprises and institutions across multiple sectors.',
    },
  ];

  return (
    <main className="pt-20">
      <Section className="relative overflow-hidden" spacing="lg" background="white">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50">
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(to right, #0ea5e9 1px, transparent 1px), linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          {/* Animated Wave */}
          <div className="absolute inset-0 opacity-30">
            <svg className="absolute right-0 top-0 h-full w-full animate-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="none">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'rgb(59, 130, 246)', stopOpacity: 0.15 }} />
                  <stop offset="100%" style={{ stopColor: 'rgb(147, 197, 253)', stopOpacity: 0.05 }} />
                </linearGradient>
              </defs>
              <path d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,00 L0,0 Z" fill="url(#grad1)" />
            </svg>
          </div>

          {/* Floating Animated Shapes */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

          {/* Floating Icons */}
          <div className="absolute top-32 left-1/4 animate-float">
            <svg className="w-12 h-12 text-blue-300 opacity-20" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
              <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path>
            </svg>
          </div>
          <div className="absolute bottom-32 right-1/4 animate-float animation-delay-2000">
            <svg className="w-10 h-10 text-blue-400 opacity-20" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
            </svg>
          </div>
          <div className="absolute top-1/2 right-20 animate-float animation-delay-4000">
            <svg className="w-8 h-8 text-indigo-300 opacity-20" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>

        <Container className="relative">
          <div className="max-w-5xl mx-auto">
            {/* Animated Badge - Centered */}
            <div className="flex justify-center mb-6 animate-slideDown">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200 hover:bg-blue-200 transition-colors cursor-default">
                <svg className="w-4 h-4 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Trusted Financial Advisory Partner
              </span>
            </div>

            {/* Animated Heading - Better Typography */}
            <div className="text-center px-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-8 leading-tight animate-fadeInUp">
                Empowering Businesses Through{' '}
                <span className="text-blue-600 relative inline-block">
                  Expert Financial
                  <svg className="absolute -bottom-2 left-0 w-full h-3 animate-draw" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-blue-300"/>
                  </svg>
                </span>
                <br className="hidden sm:block" />
                {' '}& Advisory Solutions
              </h1>

              {/* Animated Description */}
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fadeInUp animation-delay-300 px-4">
                Trusted by enterprises, SMEs, and institutions across Nepal for compliant, reliable, and strategic financial advisory services.
              </p>

              {/* Animated Buttons - Improved Layout */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-20 animate-fadeInUp animation-delay-600 px-4">
                <Button href="/contact" size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  <span className="flex items-center justify-center">
                    Request a Consultation
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Button>
                <Button href="/team" variant="outline" size="lg" className="w-full sm:w-auto border-2 hover:scale-105 transition-transform">
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Talk to an Expert
                  </span>
                </Button>
              </div>
            </div>

            {/* Animated Stats - Better Alignment */}
            <div className="animate-fadeInUp animation-delay-900">
              <div className="border-t border-gray-200 pt-12 mx-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                  {trustIndicators.map((indicator) => (
                    <div key={indicator.label} className="text-center">
                      <AnimatedCounter
                        value={indicator.value}
                        label={indicator.label}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="lg" background="white">
        <Container>
          <FadeIn>
            <div className="text-center mb-16 px-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
                Comprehensive Financial Advisory Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From audit and compliance to strategic advisory, we provide end-to-end financial solutions.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 100}>
                <Link
                  href={service.href}
                  className="group p-8 bg-white border border-gray-200 rounded-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                >
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="text-blue-700 font-medium inline-flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg" background="gray">
        <Container>
          <FadeIn>
            <div className="text-center mb-16 px-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
                Why Choose GFCS
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Partnering with Nepal's businesses for compliant, strategic, and reliable financial advisory.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 px-4">
            {whyChoose.map((item, index) => (
              <FadeIn key={item.title} delay={index * 100}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Industries We Serve Section */}
      <Section spacing="lg" background="gray">
        <Container>
          <FadeIn>
            <div className="text-center mb-12 px-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
                Industries We Serve
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Delivering specialized financial advisory across diverse sectors with deep industry knowledge
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {[
              {
                name: 'Manufacturing',
                desc: 'Production & Supply Chain',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                )
              },
              {
                name: 'Banking & Finance',
                desc: 'Financial Institutions',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                )
              },
              {
                name: 'Technology',
                desc: 'IT & Software Companies',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                name: 'Healthcare',
                desc: 'Medical & Pharma',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              },
              {
                name: 'Hospitality',
                desc: 'Hotels & Tourism',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                )
              },
              {
                name: 'Retail',
                desc: 'Commerce & Trading',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                )
              },
              {
                name: 'NGO & NPO',
                desc: 'Non-Profit Organizations',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                name: 'Real Estate',
                desc: 'Property & Construction',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              }
            ].map((industry, idx) => (
              <FadeIn key={industry.name} delay={idx * 50}>
                <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="text-blue-600 mb-3">{industry.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{industry.name}</h3>
                  <p className="text-sm text-gray-600">{industry.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Our Approach Section */}
      <Section spacing="lg" background="white">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our Proven Approach
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A structured methodology that ensures quality, compliance, and measurable outcomes at every stage
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 px-4">
            {[
              {
                step: '01',
                title: 'Discovery',
                desc: 'Understanding your business objectives, challenges, and compliance requirements through comprehensive consultation'
              },
              {
                step: '02',
                title: 'Analysis',
                desc: 'Detailed assessment of your financial systems, processes, and regulatory adherence to identify optimization opportunities'
              },
              {
                step: '03',
                title: 'Strategy',
                desc: 'Developing tailored solutions and action plans aligned with industry best practices and your business goals'
              },
              {
                step: '04',
                title: 'Execution',
                desc: 'Implementing recommendations with ongoing support, monitoring, and continuous improvement'
              }
            ].map((phase, idx) => (
              <div key={phase.step} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="text-5xl font-bold text-blue-100 mb-4">{phase.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{phase.desc}</p>
                </div>
                {idx < 3 && (
                  <svg className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Client Testimonials Section */}
      <Section spacing="lg" background="gray">
        <Container>
          <FadeIn>
            <div className="text-center mb-12 px-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
                What Our Clients Say
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Trusted by leading businesses across Nepal for exceptional service and results
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 px-4">
            {[
              {
                quote: "GFCS transformed our financial compliance processes. Their expertise in tax advisory saved us significant costs while ensuring full regulatory adherence.",
                author: "Rajesh Kumar",
                position: "CEO, Tech Innovations Pvt. Ltd.",
                rating: 5
              },
              {
                quote: "Professional, reliable, and deeply knowledgeable. GFCS has been instrumental in our company's financial restructuring and growth strategy.",
                author: "Anita Sharma",
                position: "CFO, Himalayan Exports Group",
                rating: 5
              },
              {
                quote: "The audit team at GFCS is thorough and efficient. Their insights have helped us strengthen our internal controls and improve governance.",
                author: "Bikram Thapa",
                position: "Finance Director, Nepal Financial Services",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <FadeIn key={idx} delay={idx * 150}>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-t border-gray-300 pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Latest Insights Section */}
      <Section spacing="lg" background="white">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 px-4 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                Latest Insights & Updates
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Stay informed with expert perspectives and regulatory updates
              </p>
            </div>
            <Button href="/publications" variant="outline" className="flex-shrink-0">
              View All Articles
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 px-4">
            {[
              {
                category: 'Tax',
                title: 'Understanding Nepal\'s New Tax Amendments for FY 2024/25',
                excerpt: 'A comprehensive guide to the latest changes in corporate tax rates and VAT amendments.',
                date: 'January 15, 2026',
                readTime: '8 min read'
              },
              {
                category: 'Audit',
                title: 'Internal Audit Best Practices for Growing SMEs',
                excerpt: 'Explore effective frameworks that help businesses strengthen governance and mitigate risks.',
                date: 'December 28, 2025',
                readTime: '6 min read'
              },
              {
                category: 'Corporate',
                title: 'Corporate Compliance Checklist for 2026',
                excerpt: 'Essential checklist covering registration renewals, annual filings, and regulatory requirements.',
                date: 'December 10, 2025',
                readTime: '5 min read'
              }
            ].map((article, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all group">
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-4">
                      {article.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg" background="blue">
        <Container>
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to Transform Your Financial Operations?
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              Connect with our experts to discuss how we can support your business objectives.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button href="/contact" size="lg">
                Schedule a Consultation
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Our Services
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
