'use client';
import Link from 'next/link';

const services = [
  {
    slug: 'business-growth',
    name: 'Business Growth',
    desc: 'Maximize your tax benefits with our proactive planning and hassle-free filing services.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    slug: 'capital-markets',
    name: 'Capital Markets',
    desc: 'Stay organized and focused on growth while we handle your day-to-day financial records.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    slug: 'business-planning',
    name: 'Business Planning',
    desc: 'Maximize your tax benefits with our proactive planning and hassle-free filing services.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    slug: 'financial-planning',
    name: 'Financial Planning',
    desc: 'We specialize in helping small businesses thrive by providing expert financial guidance.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    slug: 'taxes-planning',
    name: 'Taxes Planning',
    desc: 'Stay organized and focused on growth while we handle your day financial record with care.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
  },
  {
    slug: 'capital-restructuring',
    name: 'Capital Restructuring',
    desc: 'Comprehensive capital restructuring strategies to optimize your business financial structure.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    slug: 'tax-consulting',
    name: 'Tax Consulting',
    desc: 'Expert tax consulting services to navigate complex regulations and minimize your liability.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    slug: 'professional-advisory',
    name: 'Professional Advisory',
    desc: 'Professional advisory services to guide your business decisions at every critical stage.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section style={{ padding: '110px 0', background: '#fff' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 64px' }}>
          <span className="section-label" style={{ justifyContent: 'center', marginBottom: 16 }}>OUR SERVICES</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#16222D', marginBottom: 18, lineHeight: 1.2 }}>
            Why choose us as your<br />accountant consultant?
          </h2>
          <p style={{ color: '#696F6F', fontSize: 16 }}>
            your precious time and effort spent for finding a solution that actually helps your business grow.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 24,
        }}>
          {services.map((svc) => (
            <div
              key={svc.slug}
              className="service-card"
              style={{
                background: '#fff',
                border: '1px solid #E4E4E4',
                borderRadius: 5,
                padding: 32,
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = '#A0C342';
                el.style.boxShadow = '0 20px 60px 0 rgba(0,0,0,0.08)';
                el.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = '#E4E4E4';
                el.style.boxShadow = 'none';
                el.style.transform = 'translateY(0)';
              }}
            >
              {/* Number */}
              <div style={{ position: 'absolute', top: 16, right: 20, fontSize: 48, fontWeight: 800, color: 'rgba(160,195,66,0.12)', lineHeight: 1 }}>
                {String(services.indexOf(svc) + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className="service-icon" style={{ marginBottom: 20, color: '#16222D', transition: 'all 0.4s' }}>
                {svc.icon}
              </div>

              <h3 style={{ fontSize: 19, fontWeight: 700, color: '#16222D', marginBottom: 10, lineHeight: 1.3 }}>
                <Link href={`/services/${svc.slug}`} style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#A0C342')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#16222D')}>
                  {svc.name}
                </Link>
              </h3>

              <p style={{ color: '#696F6F', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{svc.desc}</p>

              <Link href={`/services/${svc.slug}`} style={{
                color: '#A0C342', fontWeight: 700, fontSize: 13, letterSpacing: '0.1em',
                textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none',
                transition: 'gap 0.3s',
              }}
                onMouseEnter={e => (e.currentTarget.style.gap = '10px')}
                onMouseLeave={e => (e.currentTarget.style.gap = '6px')}>
                Read More
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* View All button */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link href="/services" className="btn-primary" style={{ textDecoration: 'none' }}>
            View All Services
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
