'use client';

import React, { useEffect, useState } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

interface Challenge {
  title: string;
  description: string;
}

interface Step {
  title: string;
  description: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  overview: string;
  challenges: Challenge[];
  approach: Step[];
  benefits: Benefit[];
  testimonial?: {
    quote: string;
    author: string;
    company: string;
  };
}

export default function ServicePageTemplate({
  title,
  subtitle,
  overview,
  challenges,
  approach,
  benefits,
  testimonial,
}: ServicePageProps) {
  const [activeSection, setActiveSection] = useState('overview');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'challenges', label: 'Challenges' },
    { id: 'approach', label: 'Our Approach' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'contact', label: 'Get Started' },
  ];

  return (
    <main className="pt-20">
      <Section spacing="md" background="white" className="border-b sticky top-20 z-40 bg-white">
        <Container>
          <nav className="flex items-center justify-between overflow-x-auto">
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-700 border-b-2 border-blue-700'
                      : 'text-gray-600 hover:text-blue-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </Container>
      </Section>

      <Section id="overview" spacing="lg" background="white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-xl text-gray-600">{subtitle}</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{overview}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="challenges" spacing="lg" background="gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Client Challenges</h2>
            <p className="text-lg text-gray-600">Common obstacles businesses face</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="approach" spacing="lg" background="white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-lg text-gray-600">Step-by-step methodology for excellence</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {approach.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="benefits" spacing="lg" background="blue">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Key Benefits</h2>
            <p className="text-lg text-gray-700">Value delivered to your organization</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {testimonial && (
        <Section spacing="md" background="gray">
          <Container>
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-center">
                <p className="text-xl italic text-gray-700 mb-6">"{testimonial.quote}"</p>
                <footer className="text-gray-600">
                  <strong className="text-gray-900">{testimonial.author}</strong>, {testimonial.company}
                </footer>
              </blockquote>
            </div>
          </Container>
        </Section>
      )}

      <Section id="contact" spacing="lg" background="white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Speak with our experts to understand how we can support your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg">
                Request a Consultation
              </Button>
              <Button href="/team" variant="outline" size="lg">
                Talk to an Expert
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
