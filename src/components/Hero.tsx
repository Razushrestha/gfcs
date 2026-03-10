'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  { word: 'Expert', label: 'FINANCIAL' },
  { word: 'Advisor', label: 'BUSINESS' },
  { word: 'Consultant', label: 'FINANCIAL' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 400);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{
      background: 'linear-gradient(135deg, #16222D 0%, #1e2f3d 50%, #16222D 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: `radial-gradient(circle at 1px 1px, #A0C342 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      {/* Decorative large text BG */}
      <div style={{
        position: 'absolute', right: -40, top: '50%', transform: 'translateY(-50%)',
        fontSize: 320, fontWeight: 900, color: 'rgba(255,255,255,0.02)',
        lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
        letterSpacing: '-0.05em',
      }}>GF</div>

      {/* Green decorative circle */}
      <div style={{
        position: 'absolute', right: '10%', top: '15%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(160,195,66,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          {/* Left Content */}
          <div>
            {/* Label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <div style={{ width: 40, height: 2, background: '#A0C342' }} />
              <span style={{ color: '#A0C342', fontWeight: 700, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                WELCOME TO GFCS
              </span>
            </div>

            {/* Heading */}
            <h1 style={{ fontSize: 'clamp(42px, 5vw, 72px)', fontWeight: 800, color: '#fff', marginBottom: 8, lineHeight: 1.1 }}>
              Your Trusted
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8, overflow: 'hidden' }}>
              <h1 style={{
                fontSize: 'clamp(42px, 5vw, 72px)',
                fontWeight: 800,
                color: '#A0C342',
                lineHeight: 1.1,
                transition: 'all 0.4s ease',
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? 'translateY(-20px)' : 'translateY(0)',
              }}>
                {slides[current].label}
              </h1>
            </div>
            <h1 style={{
              fontSize: 'clamp(42px, 5vw, 72px)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: 28,
              lineHeight: 1.1,
              transition: 'all 0.4s ease',
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating ? 'translateY(20px)' : 'translateY(0)',
            }}>
              {slides[current].word}
            </h1>

            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, lineHeight: 1.8, maxWidth: 480, marginBottom: 40 }}>
              Transform your financial strategy with our expert consulting team.
              We craft solutions tailored to your business needs for lasting growth.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>
                Discover More
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/services" style={{
                color: '#fff', fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8,
                padding: '14px 34px', border: '2px solid rgba(255,255,255,0.25)', borderRadius: 50, transition: 'all 0.4s',
                textDecoration: 'none',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#A0C342'; (e.currentTarget as HTMLAnchorElement).style.color = '#A0C342'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.25)'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}>
                Our Services
              </Link>
            </div>

            {/* Slide dots */}
            <div style={{ display: 'flex', gap: 8, marginTop: 40 }}>
              {slides.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} style={{
                  width: i === current ? 28 : 8, height: 8,
                  borderRadius: 4,
                  background: i === current ? '#A0C342' : 'rgba(255,255,255,0.3)',
                  border: 'none', cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  padding: 0,
                }} />
              ))}
            </div>
          </div>

          {/* Right: Info cards */}
          <div style={{ position: 'relative' }}>
            {/* Main dark card */}
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              borderRadius: 12,
              border: '1px solid rgba(255,255,255,0.1)',
              padding: 40,
              backdropFilter: 'blur(10px)',
            }}>
              {/* Experience badge */}
              <div style={{
                background: '#A0C342', borderRadius: 8, padding: '16px 20px',
                marginBottom: 24, display: 'inline-flex', alignItems: 'center', gap: 12,
              }}>
                <span style={{ fontSize: 42, fontWeight: 800, color: '#16222D', lineHeight: 1 }}>25</span>
                <div>
                  <div style={{ fontWeight: 700, color: '#16222D', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em' }}>+</div>
                  <div style={{ fontWeight: 700, color: '#16222D', fontSize: 12, letterSpacing: '0.05em' }}>Years of<br />Experience</div>
                </div>
              </div>

              <h3 style={{ color: '#fff', fontSize: 22, fontWeight: 700, marginBottom: 16, lineHeight: 1.4 }}>
                Finance & Accounting Expertise You Can Trust
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
                Our mission is to provide exceptional Accounting, Taxation & Payroll Processing
                Services to businesses and individuals.
              </p>

              {/* Feature list */}
              {['Innovation strategy', 'Process optimization', 'Risk assessment'].map(feat => (
                <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 20, height: 20, background: '#A0C342', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="10" height="10" fill="none" stroke="#16222D" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, fontWeight: 500 }}>{feat}</span>
                </div>
              ))}
            </div>

            {/* Floating badge - bottom left */}
            <div style={{
              position: 'absolute', bottom: -20, left: -20,
              background: '#fff', borderRadius: 10,
              padding: '14px 20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{ width: 42, height: 42, background: '#ECF0F4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" fill="none" stroke="#A0C342" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 18, color: '#16222D', lineHeight: 1 }}>14K+</div>
                <div style={{ fontSize: 12, color: '#696F6F', marginTop: 2 }}>Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="#fff" />
        </svg>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
