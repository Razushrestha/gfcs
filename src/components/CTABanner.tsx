'use client';
import Link from 'next/link';

const logos = ['gfcs', 'FinCorp', 'TaxPro', 'AccuBooks', 'CapMax', 'WealthTrust', 'AuditPro', 'LegalFin'];

export default function CTABanner() {
  const repeated = [...logos, ...logos, ...logos, ...logos];

  return (
    <>
      {/* Logo/Client Marquee */}
      <div style={{ background: '#16222D', padding: '40px 0', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Join the 14k + businesses using gfcs
          </p>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <div className="animate-marquee">
            {repeated.map((name, i) => (
              <div key={i} style={{
                padding: '0 48px',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                gap: 0,
              }}>
                <span style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.35)',
                  letterSpacing: '-0.01em',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.3s',
                }}>
                  {name}
                </span>
                <span style={{ color: 'rgba(160,195,66,0.4)', fontSize: 12, marginLeft: 48 }}>✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #A0C342 0%, #8ab535 100%)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Bg pattern */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.08,
          backgroundImage: `radial-gradient(circle at 1px 1px, #16222D 1px, transparent 0)`,
          backgroundSize: '30px 30px',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 32 }}>
            <div style={{ maxWidth: 560 }}>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 800, color: '#16222D', marginBottom: 12, lineHeight: 1.2 }}>
                Let&apos;s start working together.<br />Get in touch with us today!
              </h2>
              <p style={{ color: 'rgba(22,34,45,0.75)', fontSize: 16, lineHeight: 1.7 }}>
                Our nearly 350+ expert team members are ready to help you now. Let us handle your financial complexities.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                background: '#16222D',
                color: '#fff',
                padding: '16px 36px',
                borderRadius: 50,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}>
                Contact Us Now
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
