'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const services = [
  {
    slug: 'business-growth',
    title: 'Business Growth',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '40px', height: '40px' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    desc: 'We deliver strategic business growth consulting designed to help companies scale efficiently. Our team analyzes market trends, competitive landscapes, and internal capabilities to craft growth roadmaps that drive sustainable expansion.',
    features: ['Revenue Optimization', 'Market Expansion', 'Competitive Analysis', 'Growth Strategy', 'Performance Metrics'],
  },
  {
    slug: 'capital-markets',
    title: 'Capital Markets',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '40px', height: '40px' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    desc: 'Navigate the complexities of capital markets with confidence. We provide expert guidance on equity and debt financing, IPO preparation, bond issuance, and secondary market strategies to optimize your capital structure.',
    features: ['Equity Financing', 'Debt Management', 'IPO Advisory', 'Bond Issuance', 'Market Analysis'],
  },
  {
    slug: 'business-planning',
    title: 'Business Planning',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '40px', height: '40px' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    desc: 'Comprehensive business planning services to help you define your vision, set achievable goals, and develop a roadmap to success. From startup planning to strategic pivots, we help businesses chart the right course.',
    features: ['Strategic Planning', 'Financial Projections', 'Goal Setting', 'Risk Assessment', 'Milestone Tracking'],
  },
  {
    slug: 'financial-planning',
    title: 'Financial Planning',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '40px', height: '40px' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    desc: 'Our financial planning services help individuals and businesses build a solid financial foundation. We create comprehensive plans covering budgeting, investments, retirement, and wealth management.',
    features: ['Wealth Management', 'Retirement Planning', 'Investment Strategy', 'Budgeting', 'Estate Planning'],
  },
  {
    slug: 'taxes-planning',
    title: 'Taxes Planning',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '40px', height: '40px' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
    desc: 'Minimize your tax burden legally and effectively with our expert tax planning strategies. We work proactively to identify opportunities throughout the year, not just at tax time.',
    features: ['Tax Optimization', 'Corporate Tax', 'Individual Tax', 'Tax Compliance', 'International Tax'],
  },
  {
    slug: 'capital-restructuring',
    title: 'Capital Restructuring',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '40px', height: '40px' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    desc: 'When your business needs a financial transformation, our capital restructuring experts are here to help. We analyze your current capital structure and develop strategies to optimize debt-equity balance and improve financial health.',
    features: ['Debt Restructuring', 'Equity Optimization', 'Merger Advisory', 'Divestitures', 'Financial Recovery'],
  },
  {
    slug: 'tax-consulting',
    title: 'Tax Consulting',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '40px', height: '40px' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    desc: 'Strategic tax consulting that goes beyond compliance. We provide in-depth analysis of your tax position and develop comprehensive strategies to legally minimize your tax obligations while maintaining full regulatory compliance.',
    features: ['Tax Strategy', 'Transfer Pricing', 'VAT Consulting', 'Tax Due Diligence', 'Dispute Resolution'],
  },
  {
    slug: 'professional-advisory',
    title: 'Professional Advisory',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '40px', height: '40px' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    desc: 'Access our team of seasoned financial professionals for expert advisory services. Whether you need guidance on complex transactions, regulatory issues, or strategic decisions, our advisors provide the insight you need.',
    features: ['Executive Advisory', 'Board Advisory', 'M&A Advisory', 'Regulatory Guidance', 'Strategic Decisions'],
  },
  {
    slug: 'audit-assurance',
    title: 'Audit & Assurance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '40px', height: '40px' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    desc: 'Our audit and assurance services provide stakeholders with confidence in your financial statements. We conduct thorough, efficient audits that not only ensure compliance but also identify opportunities for improvement.',
    features: ['Financial Audits', 'Internal Audits', 'Compliance Review', 'Risk Assurance', 'Financial Reporting'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner title="Our Services" breadcrumb="Services" />

        {/* Services Grid */}
        <section style={{ padding: '100px 0', background: '#fff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>WHAT WE OFFER</div>
              <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#16222D', marginTop: '15px', maxWidth: '600px', margin: '15px auto 0' }}>
                Comprehensive Financial Services
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
              {services.map((service, i) => (
                <div key={service.slug} style={{
                  background: '#fff', border: '1px solid #E4E4E4', borderRadius: '8px',
                  padding: '40px 30px', position: 'relative', overflow: 'hidden',
                  transition: 'all 0.3s ease', cursor: 'pointer'
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = '#A0C342';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = '#E4E4E4';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    position: 'absolute', top: '20px', right: '20px',
                    fontSize: '60px', fontWeight: '700', color: '#ECF0F4', lineHeight: '1'
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="service-icon">{service.icon}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#16222D', margin: '20px 0 12px' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: '#696F6F', lineHeight: '1.7', fontSize: '15px', marginBottom: '20px' }}>
                    {service.desc}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 25px' }}>
                    {service.features.map((f) => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#A0C342" strokeWidth="2.5" style={{ width: '14px', height: '14px', flexShrink: 0 }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span style={{ color: '#696F6F', fontSize: '14px' }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={`/services/${service.slug}`} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    color: '#A0C342', fontWeight: '700', fontSize: '14px',
                    textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.5px'
                  }}>
                    Learn More
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '14px', height: '14px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: '80px 0', background: '#16222D' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#fff', marginBottom: '20px' }}>
              Ready to Transform Your Financial Future?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '17px', marginBottom: '35px', maxWidth: '600px', margin: '0 auto 35px' }}>
              Get in touch with our team of experts today and let us help you achieve your financial goals.
            </p>
            <a href="/contact" className="btn-primary">Get A Free Consultation</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
