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
  fullContent: string
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
    fullContent: 'Nepal\'s tax landscape continues to evolve with significant amendments introduced for FY 2024/25. These changes are designed to streamline compliance processes while ensuring fair taxation across all business sectors.\n\nKey Changes:\n\n1. Corporate Tax Rates: The new fiscal year brings adjustments to corporate tax brackets, affecting businesses of different sizes differently. Small and medium enterprises will see marginal changes, while larger corporations face revised rate structures.\n\n2. VAT Amendments: The Value Added Tax framework has been refined to include digital services and e-commerce transactions. Businesses engaged in online sales must now register for VAT, creating new compliance obligations.\n\n3. Deduction Limits: Changes to allowed deductions for employee benefits, charitable donations, and research & development expenses have been introduced. These new limits may affect corporate financial planning strategies.\n\n4. Documentation Requirements: Enhanced documentation standards for intercompany transactions and transfer pricing have been implemented. Businesses must maintain detailed records to support their tax positions.\n\nCompliance Timeline:\n- January 2026: New rules become effective\n- March 2026: First compliance deadline\n- June 2026: Audit period begins\n\nOur team at GFCS recommends reviewing your tax position immediately to ensure full compliance with these new requirements. Early planning can help minimize tax liability while maintaining regulatory adherence.',
    date: 'January 15, 2026',
    readTime: '8 min read',
    author: 'GFCS Tax Advisory Team'
  },
  {
    id: 2,
    title: 'Internal Audit Best Practices for Growing SMEs',
    category: 'audit',
    excerpt: 'Explore effective internal audit frameworks that help small and medium enterprises strengthen governance, mitigate risks, and ensure financial accuracy.',
    fullContent: 'As SMEs grow, the importance of robust internal audit frameworks becomes increasingly critical. An effective internal audit function provides management with assurance that controls are working as intended and that financial information is reliable.\n\nWhy Internal Audit Matters:\n\nInternal audits serve as a critical control mechanism, helping organizations identify vulnerabilities before they become significant issues. For growing SMEs, this becomes even more important as business complexity increases.\n\nKey Components of an Effective Internal Audit:\n\n1. Independence: The internal audit function should report directly to the audit committee or board, ensuring independence from operational management.\n\n2. Competence: Audit staff should possess appropriate technical knowledge and maintain professional certifications (CIA, CCSA, etc.).\n\n3. Systematic Approach: A risk-based approach to audit planning ensures resources focus on areas of highest concern.\n\n4. Documentation: Comprehensive audit working papers provide evidence of thorough examination and support audit conclusions.\n\n5. Follow-up: Tracking management\'s implementation of audit recommendations ensures continuous improvement.\n\nImplementation Strategy:\n\nStart with a control self-assessment to identify existing control gaps. Build your audit plan around areas of highest risk. Emphasize preventive controls that stop issues before they occur rather than detective controls that identify them after the fact.\n\nBenefits for Growing SMEs:\n- Enhanced credibility with lenders and investors\n- Improved operational efficiency\n- Early detection of fraud and errors\n- Better decision-making through reliable financial data\n- Regulatory compliance assurance',
    date: 'December 28, 2025',
    readTime: '6 min read',
    author: 'GFCS Audit Team'
  },
  {
    id: 3,
    title: 'Corporate Compliance Checklist for 2026',
    category: 'corporate',
    excerpt: 'Stay compliant with this essential checklist covering company registration renewals, annual filings, board resolutions, and regulatory requirements in Nepal.',
    fullContent: 'Maintaining corporate compliance is an ongoing responsibility that requires attention to detail and timely action. Missing compliance deadlines can result in penalties, loss of corporate status, or legal complications. Here\'s a comprehensive checklist for 2026.\n\nQ1 Compliance Priorities:\n- Annual General Meeting (AGM) must be held within 4 months of fiscal year end\n- Financial statements must be prepared and audited if required\n- Director and officer declarations must be filed\n- Board resolutions documenting major decisions\n\nQ2 Compliance Priorities:\n- Tax return filing (if different fiscal year)\n- VAT compliance and filing\n- Employee benefit fund contributions\n- Updated company information with registrar\n\nQ3 Compliance Priorities:\n- Half-year compliance review\n- Verification of director certifications\n- Board committee documentation\n- Policy reviews and updates\n\nQ4 Compliance Priorities:\n- Year-end financial statement preparation\n- Audit engagement and planning\n- Stakeholder communication\n- Planning for next year\'s compliance\n\nSpecific Documentation to Maintain:\n- Board meeting minutes\n- Audit committee reports\n- Shareholder communications\n- Internal control assessments\n- Related party transactions log\n\nCommon Compliance Pitfalls:\n1. Missing AGM deadlines\n2. Incomplete director disclosures\n3. Inadequate audit documentation\n4. Delayed tax filings\n5. Poor record retention\n\nWorking with compliance professionals can help ensure nothing is overlooked and that your organization maintains good standing throughout the year.',
    date: 'December 10, 2025',
    readTime: '5 min read',
    author: 'GFCS Corporate Services Team'
  },
  {
    id: 4,
    title: 'Strategic Financial Planning: A Guide for Business Leaders',
    category: 'advisory',
    excerpt: 'Learn how effective financial planning and forecasting can drive sustainable growth, optimize resource allocation, and enhance decision-making in your organization.',
    fullContent: 'Strategic financial planning is the foundation upon which successful businesses are built. It bridges the gap between organizational strategy and financial execution, ensuring that resources are allocated efficiently to achieve business objectives.\n\nThe Financial Planning Framework:\n\n1. Assessment Phase: The journey begins with a thorough assessment of current financial performance, market position, competitive landscape, and internal capabilities. This is where you establish your baseline.\n\n2. Objective Setting: Clear, measurable financial objectives form the foundation of any plan. These should align with broader business strategy and be achievable within defined timeframes.\n\n3. Forecasting: Develop detailed projections covering revenue, expenses, cash flow, and capital requirements. Use multiple scenarios (optimistic, realistic, pessimistic) to prepare for various outcomes.\n\n4. Resource Allocation: Determine how available resources should be deployed across different business units and initiatives to maximize return on investment.\n\n5. Monitoring & Adjustment: Establish key performance indicators (KPIs) and regular review cycles. Financial plans should be living documents, adjusted as conditions change.\n\nKey Financial Planning Metrics:\n- Operating Cash Flow\n- Return on Invested Capital (ROIC)\n- Debt-to-Equity Ratio\n- Days Sales Outstanding (DSO)\n- Gross Margin Trend\n\nImplementation Best Practices:\n- Involve cross-functional teams in planning process\n- Build flexibility into forecasts\n- Link compensation to financial metrics\n- Regular review and adjustment cycles\n- Clear communication of financial goals\n\nBy implementing a robust financial planning process, businesses can accelerate growth, improve profitability, and build resilience against market uncertainties.',
    date: 'November 22, 2025',
    readTime: '10 min read',
    author: 'GFCS Business Advisory Team'
  },
  {
    id: 5,
    title: 'Transfer Pricing Regulations: What Every Multinational Should Know',
    category: 'tax',
    excerpt: 'Navigate Nepal\'s transfer pricing requirements with confidence. This article covers documentation, arm\'s length principles, and best practices for compliance.',
    fullContent: 'Transfer pricing has become increasingly scrutinized by tax authorities worldwide, and Nepal is no exception. For multinational enterprises (MNEs) operating in or transacting with Nepali entities, understanding transfer pricing regulations is essential for compliance and risk mitigation.\n\nThe Arm\'s Length Principle:\n\nTransfer pricing regulations require that transactions between related parties be priced as if the parties were unrelated entities dealing at arm\'s length. This principle ensures that profits are allocated based on economic reality rather than artificial arrangements.\n\nKey Transfer Pricing Methodologies:\n\n1. Comparable Uncontrolled Price (CUP): Compare prices charged between related parties to prices charged between unrelated parties for similar transactions.\n\n2. Cost Plus Method: Add an appropriate markup to costs incurred by the service provider or manufacturer.\n\n3. Resale Price Method: Start with price at which product is resold to third party and work backward.\n\n4. Profit Split Method: Allocate combined profit based on each party\'s contribution.\n\nDocumentation Requirements:\n- Master file with group-wide transfer pricing policies\n- Local file with detailed documentation for significant transactions\n- Functional analysis of each entity\'s activities\n- Economic analysis supporting selected methodology\n- Contemporaneous documentation\n\nRisks of Non-Compliance:\n- Significant penalties and interest charges\n- Double taxation if competent authority adjustments occur\n- Reputational damage\n- Increased audit scrutiny\n\nBest Practices for MNEs:\n- Establish transfer pricing policies aligned with economic substance\n- Maintain comprehensive documentation\n- Advance pricing agreement discussions with authorities\n- Regular review of pricing policies as business evolves\n- Communication with all tax jurisdictions involved\n\nEffective transfer pricing planning requires a balance between aggressive tax planning and maintaining defensible positions should your policies be audited.',
    date: 'November 05, 2025',
    readTime: '12 min read',
    author: 'GFCS Tax Advisory Team'
  },
  {
    id: 6,
    title: 'Audit Readiness: Preparing Your Organization for External Audits',
    category: 'audit',
    excerpt: 'Practical steps to ensure your organization is audit-ready, including document preparation, internal controls review, and stakeholder communication strategies.',
    fullContent: 'External audits are a critical accountability mechanism, but they don\'t have to be a source of stress. With proper preparation and organization, you can ensure a smooth audit process that efficiently validates your financial statements and internal control environment.\n\nPre-Audit Preparation (3-6 months before):\n\n1. Schedule Planning Meetings: Meet with your audit firm to discuss scope, timeline, and resource requirements.\n\n2. Assess Internal Controls: Conduct a fresh review of your control environment. Identify any gaps or weaknesses and address them before the audit.\n\n3. Update Policies and Procedures: Ensure all policies are current, documented, and being followed consistently.\n\n4. Prepare Documentation: Organize all relevant documentation in a centralized location that auditors can easily access.\n\nImmediate Pre-Audit Phase (1-2 weeks before):\n\n1. Financial Statement Preparation: Complete journal entries, reconciliations, and account analysis. Review for unusual transactions or balances.\n\n2. Bank Reconciliations: Complete all bank reconciliations and age reconciling items appropriately.\n\n3. Inventory Preparation: If physical inventory count is required, ensure proper planning and execution.\n\n4. Receivables & Payables: Age your receivables and payables. Confirm or resolve any significant balances.\n\n5. Designate Audit Liaison: Appoint someone to coordinate with auditors and handle logistical matters.\n\nDuring the Audit:\n\n- Provide timely responses to information requests\n- Make key personnel available for interviews\n- Maintain a schedule of when auditors can access different areas\n- Document any disagreements or concerns\n\nPost-Audit:\n\n- Review audit findings and management letter comments\n- Develop action plans for identified issues\n- Communicate audit results to stakeholders\n- Begin planning for next year\'s audit\n\nAudit Efficiency Tips:\n- Provide preliminary account balances before fieldwork\n- Have bank confirmations ready\n- Organize subsidiary schedules by area\n- Use audit-ready accounting team members\n- Maintain proper document retention policies\n\nBy investing time in audit preparation, you demonstrate control consciousness and often benefit from more efficient and cost-effective audits.',
    date: 'October 18, 2025',
    readTime: '7 min read',
    author: 'GFCS Audit Team'
  },
  {
    id: 7,
    title: 'Mergers & Acquisitions: Key Legal and Financial Considerations',
    category: 'corporate',
    excerpt: 'An in-depth look at the M&A process in Nepal, covering due diligence, valuation methods, regulatory approvals, and post-merger integration strategies.',
    fullContent: 'Mergers and acquisitions represent significant strategic and financial decisions. Whether acquiring another business or being acquired, understanding the M&A process is essential for protecting your interests and maximizing value creation.\n\nThe M&A Process Phases:\n\n1. Strategy & Planning:\n- Define acquisition criteria and strategic fit\n- Identify potential targets\n- Conduct preliminary due diligence\n- Develop valuation assumptions\n\n2. Target Identification & Screening:\n- Screen potential targets against criteria\n- Contact management\n- Sign confidentiality agreement\n- Provide confidential information memorandum\n\n3. Due Diligence Investigation:\n- Financial due diligence: audit history, quality of earnings, cash flow analysis\n- Legal due diligence: contracts, litigation, regulatory compliance\n- Tax due diligence: tax positions, contingencies, audit history\n- Commercial due diligence: market position, customer concentration, competitive landscape\n\n4. Valuation:\n- Comparable company analysis\n- Precedent transactions analysis\n- Discounted cash flow analysis\n- Asset-based valuation\n\n5. Negotiation & Deal Terms:\n- Price and payment structure\n- Representations and warranties\n- Indemnification provisions\n- Working capital adjustments\n- Earn-out arrangements\n\n6. Regulatory & Shareholder Approval:\n- Securities regulatory clearances\n- Competition commission approval\n- Foreign investment clearances (if applicable)\n- Shareholder approvals\n\n7. Integration:\n- Systems and process integration\n- Organizational restructuring\n- Cultural integration\n- Stakeholder communication\n\nValuation Methods:\n\n- Income Approach: Based on earnings, cash flows, or dividends\n- Market Approach: Based on prices paid for similar companies\n- Asset Approach: Based on adjusted asset and liability values\n\nRisks to Consider:\n- Integration challenges\n- Key employee retention\n- Customer and supplier relationships\n- Hidden liabilities\n- Regulatory changes\n\nSuccess Factors:\n- Clear strategic rationale\n- Thorough due diligence\n- Fair valuation methodology\n- Skilled negotiation team\n- Detailed integration planning\n- Strong post-deal management\n\nM&A transactions present both opportunities and risks. Success requires careful planning, thorough analysis, and skilled execution at every stage.',
    date: 'October 02, 2025',
    readTime: '15 min read',
    author: 'GFCS Corporate Services Team'
  },
  {
    id: 8,
    title: 'Cash Flow Management Strategies for Seasonal Businesses',
    category: 'advisory',
    excerpt: 'Discover proven techniques to manage cash flow volatility, maintain liquidity during off-peak periods, and plan for seasonal revenue fluctuations.',
    fullContent: 'Seasonal businesses face unique challenges in managing cash flow. Revenue fluctuations throughout the year require strategic planning to ensure sufficient cash during slow periods while optimizing returns during peak seasons.\n\nUnderstanding Seasonality:\n\nFirst, analyze your business\'s seasonal patterns. Plot revenue and expenses across the year to identify:\n- Peak revenue periods\n- Off-peak periods\n- When major expenses occur\n- Working capital peaks\n\nCash Flow Forecasting:\n\n1. Develop detailed monthly (or weekly) cash flow forecasts covering 12-24 months\n2. Project both revenue and expenses based on seasonal patterns\n3. Include capital expenditures and debt service\n4. Update forecasts monthly based on actual results\n\nStrategies to Manage Cash Flow Volatility:\n\n1. Revenue Smoothing:\n- Offer off-season discounts or promotions\n- Develop counter-seasonal product/service lines\n- Build customer advance payment programs\n- Negotiate multi-year contracts\n\n2. Expense Management:\n- Negotiate extended payment terms with suppliers\n- Implement flexible staffing during slow periods\n- Defer non-essential expenditures\n- Refinance debt to match revenue patterns\n\n3. Working Capital Optimization:\n- Collect receivables more aggressively\n- Optimize inventory levels seasonally\n- Negotiate favorable payment terms\n- Consider supply chain financing\n\n4. Liquidity Management:\n- Establish line of credit during peak season\n- Maintain adequate cash reserves\n- Use cash management tools effectively\n- Consider seasonal factoring\n\n5. Investment of Excess Cash:\n- Short-term investments during peak periods\n- Conservative investment approach\n- Maintain liquidity\n\nFinancing Options for Seasonal Businesses:\n\n- Revolving credit lines: Provide flexibility and lower costs\n- Seasonal loans: Structured to match cash flow patterns\n- Invoice factoring: Accelerates receivables collection\n- Equipment financing: Spreads capital costs\n\nImplementation Framework:\n\n1. Establish clear cash flow targets\n2. Implement weekly cash monitoring\n3. Build strong banking relationships\n4. Develop supplier relationships\n5. Train staff on cash importance\n6. Review and adjust regularly\n\nBy proactively managing cash flow, seasonal businesses can maintain operational stability, take advantage of growth opportunities, and achieve sustainable profitability throughout the year.',
    date: 'September 14, 2025',
    readTime: '9 min read',
    author: 'GFCS Business Advisory Team'
  },
  {
    id: 9,
    title: 'VAT Compliance: Common Mistakes and How to Avoid Them',
    category: 'tax',
    excerpt: 'Identify the most frequent VAT compliance errors made by businesses in Nepal and learn practical tips to ensure accurate VAT reporting and timely filing.',
    fullContent: 'Value Added Tax (VAT) compliance is a critical responsibility for registered businesses. However, many organizations struggle with VAT compliance, leading to penalties, interest charges, and audit scrutiny. Understanding common mistakes helps you avoid costly errors.\n\nCommon VAT Compliance Mistakes:\n\n1. Incorrect Input Tax Reclaim:\n- Claiming input tax on non-business expenses\n- Failed to maintain proper documentation\n- Claiming input tax on exempt supplies\n- Timing errors in reclaim periods\n\nPrevention:\n- Maintain detailed VAT invoices\n- Document business purpose of purchases\n- Understand exempt supply categories\n- Review input tax reclaim criteria regularly\n\n2. Output Tax Calculation Errors:\n- Applying wrong VAT rate\n- Missing transactions\n- Calculation arithmetic errors\n- Inappropriate exemptions claimed\n\nPrevention:\n- Maintain comprehensive sales records\n- Use accounting software with built-in VAT calculations\n- Review rate classifications quarterly\n- Implement approval controls\n\n3. Documentation Deficiencies:\n- Missing or inadequate VAT invoices\n- Poor record organization\n- Failure to retain supporting documentation\n- Missing transaction details\n\nPrevention:\n- Implement invoice numbering system\n- Use standardized invoice format\n- Establish document retention policy\n- Train staff on documentation requirements\n\n4. Timing Issues:\n- Filing returns late\n- Payment delays\n- Period matching errors\n- Incorrect effective date applications\n\nPrevention:\n- Set calendar reminders\n- Use VAT compliance calendar\n- Reconcile records monthly\n- Establish payment procedures\n\n5. Exempt Supply Confusion:\n- Incorrectly classifying supplies\n- Mixed exempt and taxable supplies\n- Apportionment errors\n- Documentation gaps\n\nPrevention:\n- Maintain exempt supply list\n- Document apportionment methodology\n- Review classifications regularly\n- Provide staff training\n\n6. Registration Neglect:\n- Operating above threshold without registration\n- Failing to deregister when appropriate\n- Registration amendments not made\n- Group registration oversights\n\nPrevention:\n- Monitor revenue regularly\n- Understand registration thresholds\n- Update registration information timely\n- Assess group registration eligibility\n\nBest Practices for VAT Compliance:\n\n1. Maintain comprehensive records of all transactions\n2. Implement accounting system with VAT tracking\n3. Conduct monthly VAT reconciliation\n4. Establish approval workflows\n5. Provide regular staff training\n6. Review positions quarterly\n7. Maintain communication with tax advisors\n8. Respond promptly to tax authority inquiries\n\nIf you\'re unsure about any aspect of VAT compliance, consulting with tax professionals can help you avoid costly mistakes and ensure your business maintains good standing with tax authorities.',
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
  const [selectedArticle, setSelectedArticle] = useState<Publication | null>(null)

  const filteredPublications = publications.filter(pub => {
    const matchesCategory = selectedCategory === 'all' || pub.category === selectedCategory
    const matchesSearch = searchQuery === '' ||
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const activeCategoryLabel = categories.find(c => c.id === selectedCategory)?.label ?? 'All Articles'

  return (
    <>
      {/* Hero Section */}
      <Section background="blue" spacing="lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Insights & Publications
            </h1>
            <p className="text-lg text-blue-700 mb-6">
              Expert perspectives on tax, audit, corporate compliance, and business advisory topics to help you stay informed and ahead.
            </p>
            <div>
              <Button href="/contact" variant="primary" size="md">Request Consultation</Button>
            </div>
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
                    ? 'bg-blue-600 text-white shadow-lg ring-2 ring-blue-300'
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
              Showing <span className="font-semibold text-gray-900">{filteredPublications.length}</span> {filteredPublications.length !== 1 ? 'results' : 'result'}
              <span className="ml-3 inline-flex items-center bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                {activeCategoryLabel}{searchQuery ? ` • "${searchQuery}"` : ''}
              </span>
            </p>
          </div>"
        </Container>
      </Section>

      {/* Publications Grid */}
      <Section background="gray" spacing="lg">
        <Container>
          <div className="lg:grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {filteredPublications.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8">
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
                    <button 
                      onClick={() => setSelectedArticle(publication)}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
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
              <Button onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setSelectedArticle(null); }}>
                Clear Filters
              </Button>
            </div>
          )}
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
