'use client';
import Link from 'next/link';

const mainPages = ['Home', 'Blog', 'About', 'Blog Page', 'Service Page'];
const companyLinks = [
  'Service Single', 'Sign In', 'Blog Single', 'Sign Up',
  'Products', 'Packages', 'Contact', 'Style Guide',
];

export default function Footer() {
  return (
    <footer style={{ background: '#0e1a24', color: '#fff' }}>
      {/* Main footer columns */}
      <div style={{ padding: '70px 0 40px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: 48, marginBottom: 56 }}>
            {/* Column 1: About */}
            <div>
              <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', marginBottom: 20 }}>
                <div style={{ width: 38, height: 38, background: '#A0C342', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" fill="none" stroke="#16222D" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span style={{ fontSize: 24, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>gfcs</span>
              </Link>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>
                With years of experience and a results-focused approach, we empower businesses
                to navigate complexity and achieve their goals.
              </p>
              {/* Social */}
              <div style={{ display: 'flex', gap: 10 }}>
                {[
                  { label: 'FB', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                  { label: 'TW', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                  { label: 'LI', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z' },
                  { label: 'IG', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h.01M17.5 6.5h.01M6.5 17.5h.01M17.5 17.5h.01M4.5 4.5h15a2 2 0 012 2v11a2 2 0 01-2 2h-15a2 2 0 01-2-2v-11a2 2 0 012-2z' },
                ].map(s => (
                  <a key={s.label} href="#" style={{
                    width: 36, height: 36, borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.6)',
                    transition: 'all 0.3s',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#A0C342'; (e.currentTarget as HTMLAnchorElement).style.borderColor = '#A0C342'; (e.currentTarget as HTMLAnchorElement).style.color = '#16222D'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.15)'; (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)'; }}>
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Main Pages */}
            <div>
              <h4 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 24, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                Main Pages
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {mainPages.map(page => (
                  <li key={page} style={{ marginBottom: 10 }}>
                    <Link href="/" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, transition: 'all 0.3s' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#A0C342'; (e.currentTarget as HTMLAnchorElement).style.paddingLeft = '6px'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.55)'; (e.currentTarget as HTMLAnchorElement).style.paddingLeft = '0'; }}>
                      <span style={{ width: 4, height: 4, background: '#A0C342', borderRadius: '50%', flexShrink: 0 }} />
                      {page}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Our Company */}
            <div>
              <h4 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 24, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                Our Company
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {companyLinks.map(link => (
                  <li key={link} style={{ marginBottom: 10 }}>
                    <Link href="/" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, transition: 'all 0.3s' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#A0C342'; (e.currentTarget as HTMLAnchorElement).style.paddingLeft = '6px'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.55)'; (e.currentTarget as HTMLAnchorElement).style.paddingLeft = '0'; }}>
                      <span style={{ width: 4, height: 4, background: '#A0C342', borderRadius: '50%', flexShrink: 0 }} />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h4 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 24, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                Newsletter
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                Stay tuned and subscribe to our newsletter for the latest financial insights.
              </p>
              <form onSubmit={e => e.preventDefault()}>
                <div style={{ marginBottom: 12 }}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', height: 50, borderRadius: 5, fontSize: 14 }}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 14 }}>
                  Subscribe Now
                </button>
              </form>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 12 }}>
                By Subscribing, Your Accept Privacy Policy
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>
              Copyright © 2025 <span style={{ color: '#A0C342', fontWeight: 600 }}>gfcs</span>, All Rights Reserved.
            </p>
            <div style={{ display: 'flex', gap: 24 }}>
              {['Privacy Policy', 'Terms of Service', 'Licensing'].map(link => (
                <Link key={link} href="/" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#A0C342')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer .container > div { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          footer .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
