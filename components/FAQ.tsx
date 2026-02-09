'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What services does GFCS offer?',
    answer: 'GFCS provides comprehensive financial and business advisory services including Audit & Assurance, Tax Advisory, Accounting Services, Corporate Services, and Business Advisory. We serve enterprises, SMEs, and institutions across Nepal with tailored solutions for each business need.'
  },
  {
    question: 'How can GFCS help with tax compliance in Nepal?',
    answer: 'Our Tax Advisory team provides end-to-end support including corporate tax planning, VAT and income tax filing, transfer pricing guidance, tax dispute resolution, and strategic tax optimization. We ensure full compliance with Nepal\'s tax regulations while minimizing your tax burden legally.'
  },
  {
    question: 'What industries does GFCS specialize in?',
    answer: 'We serve clients across multiple sectors including manufacturing, retail, hospitality, banking and finance, healthcare, technology, NGOs, and more. Our team has extensive cross-industry experience and adapts our approach to meet sector-specific regulatory and operational requirements.'
  },
  {
    question: 'How long does a typical audit engagement take?',
    answer: 'The duration depends on the scope and complexity of your organization. A standard statutory audit for an SME typically takes 2-4 weeks, while larger enterprise audits may require 4-8 weeks. We provide a detailed timeline and work plan during our initial scoping meeting.'
  },
  {
    question: 'Does GFCS provide ongoing support or one-time consultations?',
    answer: 'We offer both options. You can engage us for one-time projects (such as a specific audit or tax filing) or establish an ongoing partnership for continuous accounting, compliance, and advisory support. Many of our clients prefer retainer-based relationships for comprehensive, year-round guidance.'
  },
  {
    question: 'What makes GFCS different from other consulting firms?',
    answer: 'GFCS combines technical expertise with a client-centric approach. Our team consists of certified professionals with deep regulatory knowledge and practical business insight. We focus on delivering measurable results, maintaining rigorous ethical standards, and building long-term partnerships with our clients.'
  },
  {
    question: 'How do I get started with GFCS?',
    answer: 'Simply reach out through our contact form, email us at info@gfcs.com.np, or call our office. We\'ll schedule an initial consultation to understand your needs, discuss our approach, and provide a tailored proposal. The first consultation is always complimentary.'
  },
  {
    question: 'Is GFCS compliant with international standards?',
    answer: 'Yes. We adhere to both Nepali regulatory standards and international best practices, including IFRS, ISA (International Standards on Auditing), and other globally recognized frameworks. This ensures our deliverables meet the highest quality and compliance standards.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600">
          Find answers to common questions about our services and how we can help your business.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="text-lg font-semibold text-gray-900 pr-8">
                {faq.question}
              </span>
              <svg
                className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-200 ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-200 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center p-6 bg-blue-50 rounded-lg border border-blue-100">
        <p className="text-gray-700 mb-4">
          <strong className="text-gray-900">Still have questions?</strong> Our team is here to help.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
        >
          Contact us for personalized support
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  )
}
