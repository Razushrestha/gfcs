'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'About', href: '/about',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/about#team' },
    ]
  },
  {
    label: 'Services', href: '/services',
    children: [
      { label: 'Business Growth', href: '/services/business-growth' },
      { label: 'Capital Markets', href: '/services/capital-markets' },
      { label: 'Business Planning', href: '/services/business-planning' },
      { label: 'Financial Planning', href: '/services/financial-planning' },
      { label: 'Taxes Planning', href: '/services/taxes-planning' },
      { label: 'Capital Restructuring', href: '/services/capital-restructuring' },
      { label: 'Tax Consulting', href: '/services/tax-consulting' },
      { label: 'Professional Advisory', href: '/services/professional-advisory' },
    ]
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    let lastY = window.scrollY;
    const handler = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 60);
      if (currentY < 60) {
        setVisible(true);
      } else if (currentY > lastY) {
        setVisible(false); // scrolling down — hide
      } else {
        setVisible(true);  // scrolling up — show
      }
      lastY = currentY;
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header style={{ height: 76 }}>
      {/* Main Nav */}
      <nav style={{
        background: scrolled ? 'rgba(22,34,45,0.97)' : '#fff',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? 'none' : '1px solid #E4E4E4',
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.18)' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.38s cubic-bezier(0.4,0,0.2,1), background 0.35s ease, box-shadow 0.35s ease',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 20px' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <div style={{ width: 40, height: 40, background: '#A0C342', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="22" height="22" fill="none" stroke="#16222D" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span style={{ fontSize: 26, fontWeight: 800, color: scrolled ? '#fff' : '#16222D', letterSpacing: '-0.02em', transition: 'color 0.35s' }}>gfcs</span>
          </Link>

          {/* Desktop Nav */}
          <ul style={{ display: 'flex', listStyle: 'none', gap: 2, alignItems: 'center', margin: 0 }} className="hidden-mobile">
            {navLinks.map(link => (
              <li key={link.label} style={{ position: 'relative' }}
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}>
                <Link href={link.href} style={{
                  padding: '8px 16px',
                  color: scrolled ? 'rgba(255,255,255,0.88)' : '#16222D',
                  fontWeight: 600,
                  fontSize: 15,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  transition: 'color 0.3s',
                  textDecoration: 'none',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#A0C342')}
                  onMouseLeave={e => (e.currentTarget.style.color = scrolled ? 'rgba(255,255,255,0.88)' : '#16222D')}>
                  {link.label}
                  {link.children && (
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {link.children && openDropdown === link.label && (
                  <ul style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    background: '#fff',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
                    borderRadius: 5,
                    minWidth: 220,
                    padding: '8px 0',
                    listStyle: 'none',
                    zIndex: 100,
                    borderTop: '3px solid #A0C342',
                  }}>
                    {link.children.map(child => (
                      <li key={child.label}>
                        <Link href={child.href} style={{
                          display: 'block',
                          padding: '10px 20px',
                          fontSize: 14,
                          color: '#16222D',
                          fontWeight: 500,
                          transition: 'all 0.2s',
                          textDecoration: 'none',
                        }}
                          onMouseEnter={e => { e.currentTarget.style.color = '#A0C342'; e.currentTarget.style.paddingLeft = '28px'; }}
                          onMouseLeave={e => { e.currentTarget.style.color = '#16222D'; e.currentTarget.style.paddingLeft = '20px'; }}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
              Get A Quote
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'none' }}
              className="mobile-toggle"
              aria-label="Menu">
              <svg width="24" height="24" fill="none" stroke={scrolled ? '#fff' : '#16222D'} strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{ background: '#fff', borderTop: '1px solid #E4E4E4', padding: '16px 20px' }}>
            {navLinks.map(link => (
              <div key={link.label} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <Link href={link.href} style={{ display: 'block', padding: '12px 0', fontWeight: 600, color: '#16222D', textDecoration: 'none', fontSize: 15 }}
                  onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
                {link.children && (
                  <div style={{ paddingLeft: 16, paddingBottom: 8 }}>
                    {link.children.map(child => (
                      <Link key={child.label} href={child.href} style={{ display: 'block', padding: '8px 0', fontSize: 14, color: '#696F6F', textDecoration: 'none' }}
                        onClick={() => setMobileOpen(false)}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
