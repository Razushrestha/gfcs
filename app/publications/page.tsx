'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

type Category = 'all' | 'tax' | 'audit' | 'corporate' | 'advisory'

interface Publication {
  id: number
  title: string
  category: Category
  excerpt: string
  date: string
  readTime: string
  author: string
}

const publications: Publication[] = [
  {
    id: 1,
    title: 'Understanding Nepal\'s New Tax Amendments for FY 2024/25',
    category: 'tax',
    excerpt: 'A comprehensive guide to the latest changes in Nepal\'s tax legislation, including corporate tax rates, VAT amendments, and compliance requirements for businesses.',
    date: 'January 15, 2026',
    readTime: '8 min read',
    author: 'GFCS Tax Advisory Team'
  },
  {
    id: 2,
    title: 'Internal Audit Best Practices for Growing SMEs',
    category: 'audit',
    excerpt: 'Explore effective internal audit frameworks that help small and medium enterprises strengthen governance, mitigate risks, and ensure financial accuracy.',
    date: 'December 28, 2025',
    readTime: '6 min read',
    author: 'GFCS Audit Team'
  },
  {
    id: 3,
    title: 'Corporate Compliance Checklist for 2026',
    category: 'corporate',
    excerpt: 'Stay compliant with this essential checklist covering company registration renewals, annual filings, board resolutions, and regulatory requirements in Nepal.',
    date: 'December 10, 2025',
    readTime: '5 min read',
    author: 'GFCS Corporate Services Team'
  },
  {
    id: 4,
    title: 'Strategic Financial Planning: A Guide for Business Leaders',
    category: 'advisory',
    excerpt: 'Learn how effective financial planning and forecasting can drive sustainable growth, optimize resource allocation, and enhance decision-making in your organization.',
    date: 'November 22, 2025',
    readTime: '10 min read',
    author: 'GFCS Business Advisory Team'
  },
  {
    id: 5,
    title: 'Transfer Pricing Regulations: What Every Multinational Should Know',
    category: 'tax',
    excerpt: 'Navigate Nepal\'s transfer pricing requirements with confidence. This article covers documentation, arm\'s length principles, and best practices for compliance.',
    date: 'November 05, 2025',
    readTime: '12 min read',
    author: 'GFCS Tax Advisory Team'
  },
  {
    id: 6,
    title: 'Audit Readiness: Preparing Your Organization for External Audits',
    category: 'audit',
    excerpt: 'Practical steps to ensure your organization is audit-ready, including document preparation, internal controls review, and stakeholder communication strategies.',
    date: 'October 18, 2025',
    readTime: '7 min read',
    author: 'GFCS Audit Team'
  },
  {
    id: 7,
    title: 'Mergers & Acquisitions: Key Legal and Financial Considerations',
    category: 'corporate',
    excerpt: 'An in-depth look at the M&A process in Nepal, covering due diligence, valuation methods, regulatory approvals, and post-merger integration strategies.',
    date: 'October 02, 2025',
    readTime: '15 min read',
    author: 'GFCS Corporate Services Team'
  },
  {
    id: 8,
    title: 'Cash Flow Management Strategies for Seasonal Businesses',
    category: 'advisory',
    excerpt: 'Discover proven techniques to manage cash flow volatility, maintain liquidity during off-peak periods, and plan for seasonal revenue fluctuations.',
    date: 'September 14, 2025',
    readTime: '9 min read',
    author: 'GFCS Business Advisory Team'
  },
  {
    id: 9,
    title: 'VAT Compliance: Common Mistakes and How to Avoid Them',
    category: 'tax',
    excerpt: 'Identify the most frequent VAT compliance errors made by businesses in Nepal and learn practical tips to ensure accurate VAT reporting and timely filing.',
    date: 'August 28, 2025',
    readTime: '6 min read',
    author: 'GFCS Tax Advisory Team'
  }
]

const categories = [
  { id: 'all' as Category, label: 'All Articles', count: publications.length },
  { id: 'tax' as Category, label: 'Tax', count: publications.filter(p => p.category === 'tax').length },
  { id: 'audit' as Category, label: 'Audit', count: publications.filter(p => p.category === 'audit').length },
  { id: 'corporate' as Category, label: 'Corporate Law', count: publications.filter(p => p.category === 'corporate').length },
  { id: 'advisory' as Category, label: 'Business Advisory', count: publications.filter(p => p.category === 'advisory').length }
]

export default function PublicationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPublications = publications.filter(pub => {
    const matchesCategory = selectedCategory === 'all' || pub.category === selectedCategory
    const matchesSearch = searchQuery === '' ||
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* Hero Section */}
      <Section background="blue" spacing="lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Insights & Publications
            </h1>
            <p className="text-xl text-blue-100">
              Expert perspectives on tax, audit, corporate compliance, and business advisory topics to help you stay informed and ahead.
            </p>
          </div>
        </Container>
      </Section>

      {/* Search & Filter Section */}
      <Section background="white" spacing="md">
        <Container>
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredPublications.length}</span> article{filteredPublications.length !== 1 ? 's' : ''}
            </p>
          </div>
        </Container>
      </Section>

      {/* Publications Grid */}
      <Section background="gray" spacing="lg">
        <Container>
          {filteredPublications.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPublications.map((publication) => (
                <article
                  key={publication.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Category Badge */}
                  <div className="p-6 pb-0">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      publication.category === 'tax' ? 'bg-blue-100 text-blue-700' :
                      publication.category === 'audit' ? 'bg-green-100 text-green-700' :
                      publication.category === 'corporate' ? 'bg-purple-100 text-purple-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {publication.category === 'tax' ? 'Tax' :
                       publication.category === 'audit' ? 'Audit' :
                       publication.category === 'corporate' ? 'Corporate Law' :
                       'Business Advisory'}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {publication.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {publication.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{publication.date}</span>
                      <span>{publication.readTime}</span>
                    </div>

                    {/* Author */}
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">{publication.author}</span>
                    </div>

                    {/* Read More Link */}
                    <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                      Read Full Article
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter to find what you're looking for.</p>
              <Button onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </Container>
      </Section>

      {/* Newsletter CTA Section */}
      <Section background="blue" spacing="md">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with GFCS Insights
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to receive the latest articles, regulatory updates, and expert insights directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg border-2 border-white focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-blue-100 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gray" spacing="md">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Expert Guidance?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team is ready to help you with personalized consulting and advisory services tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Contact Our Experts
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Our Services
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
