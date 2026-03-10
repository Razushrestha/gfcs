'use client';
import Link from 'next/link';

interface PageBannerProps {
  title: string;
  breadcrumb?: string;
  breadcrumbs?: { label: string; href?: string }[];
  subtitle?: string;
}

export default function PageBanner({ title, breadcrumb, breadcrumbs, subtitle }: PageBannerProps) {
  const crumbs = breadcrumbs ?? (breadcrumb ? [{ label: breadcrumb }] : []);
  const activeLabel = crumbs[crumbs.length - 1]?.label || title;

  return (
    <div style={{
      background: 'linear-gradient(135deg, #0a1520 0%, #16222D 55%, #1c2f40 100%)',
      minHeight: 380,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.05,
        backgroundImage: 'radial-gradient(circle at 1px 1px, #A0C342 1px, transparent 0)',
        backgroundSize: '36px 36px',
      }} />

      {/* Left accent bar */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 5,
        background: 'linear-gradient(to bottom, transparent, #A0C342 25%, #A0C342 75%, transparent)',
      }} />

      {/* Right large glow */}
      <div style={{
        position: 'absolute', right: '-100px', top: '50%', transform: 'translateY(-50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(160,195,66,0.1) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      {/* Top-left decorative rings */}
      <div style={{
        position: 'absolute', left: '3%', top: '-60px',
        width: 260, height: 260, borderRadius: '50%',
        border: '1px solid rgba(160,195,66,0.1)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', left: '6%', top: '-30px',
        width: 130, height: 130, borderRadius: '50%',
        border: '1px solid rgba(160,195,66,0.07)',
        pointerEvents: 'none',
      }} />

      {/* Diagonal shape right */}
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0,
        width: '40%',
        background: 'linear-gradient(135deg, transparent 50%, rgba(160,195,66,0.04) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Bottom accent line */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(to right, #A0C342 0%, rgba(160,195,66,0.3) 40%, transparent 80%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '90px 20px' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, textDecoration: 'none', transition: 'color 0.3s', fontWeight: 500 }}
            onMouseEnter={e => (e.currentTarget.style.color = '#A0C342')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
            Home
          </Link>
          {crumbs.map((crumb, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="12" height="12" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              {crumb.href ? (
                <Link href={crumb.href} style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, textDecoration: 'none', fontWeight: 500 }}>
                  {crumb.label}
                </Link>
              ) : (
                <span style={{ color: '#A0C342', fontSize: 13, fontWeight: 700 }}>{crumb.label}</span>
              )}
            </span>
          ))}
        </div>

        {/* Green pill tag */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(160,195,66,0.12)', border: '1px solid rgba(160,195,66,0.3)',
          borderRadius: 100, padding: '6px 18px', marginBottom: 22,
        }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#A0C342', boxShadow: '0 0 8px rgba(160,195,66,0.8)' }} />
          <span style={{ color: '#A0C342', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            {activeLabel}
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(40px, 6vw, 72px)',
          fontWeight: 900,
          color: '#fff',
          lineHeight: 1.05,
          letterSpacing: '-0.025em',
          marginBottom: 18,
        }}>
          {title}
        </h1>

        {/* Accent underline */}
        <div style={{
          width: 70, height: 4,
          background: 'linear-gradient(to right, #A0C342, rgba(160,195,66,0.2))',
          borderRadius: 2, marginBottom: 20,
        }} />

        {subtitle && (
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16, maxWidth: 520, lineHeight: 1.75, margin: 0 }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

