'use client';
import { useEffect, useRef, useState } from 'react';

function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const step = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(ease * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function CounterItem({ value, suffix, label, desc }: { value: number; suffix: string; label: string; desc: string }) {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 800, color: '#fff', lineHeight: 1 }}>
        {count}<span style={{ color: '#A0C342' }}>{suffix}</span>
      </div>
      <div style={{ fontSize: 13, fontWeight: 700, color: '#A0C342', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 6, marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', maxWidth: 200, margin: '0 auto' }}>{desc}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <>
      {/* Customer Satisfaction Section */}
      <section style={{ padding: '110px 0', background: '#ECF0F4' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 70, alignItems: 'center' }}>
            {/* Left */}
            <div>
              <span className="section-label" style={{ marginBottom: 16, display: 'flex' }}>WHY CHOOSE US</span>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: '#16222D', marginBottom: 20, lineHeight: 1.25 }}>
                With a global reach our firm has been in business
              </h2>
              <p style={{ color: '#696F6F', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                Our firm is built on a foundation of responsiveness. We understand that in a
                fast-paced business world, a timely answer is a competitive advantage.
              </p>

              {/* Feature bullets */}
              {[
                'Social security and pension optimization',
                'GST, TDS, and income tax filings',
                'Tax deductions & exemptions guidance',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 6, height: 6, background: '#A0C342', borderRadius: '50%', flexShrink: 0 }} />
                  <span style={{ color: '#696F6F', fontSize: 15 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Right: mini cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { icon: '🔍', title: 'Market Research', desc: 'Businesses that partner with us gain a strategic advantage' },
                { icon: '🛡️', title: 'Risk Management', desc: 'Businesses that partner with us gain a strategic advantage' },
                { icon: '📋', title: 'Tax Preparation', desc: 'Businesses that partner with us gain a strategic advantage' },
                { icon: '📈', title: 'Growth Strategy', desc: 'Businesses that partner with us gain a strategic advantage' },
              ].map(card => (
                <div key={card.title} style={{
                  background: '#fff',
                  borderRadius: 8,
                  padding: 24,
                  boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'}
                  onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'}
                >
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{card.icon}</div>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: '#16222D', marginBottom: 8 }}>{card.title}</h4>
                  <p style={{ fontSize: 13, color: '#696F6F', lineHeight: 1.6 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats numbers section */}
      <section style={{ padding: '90px 0', background: '#16222D', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.05,
          backgroundImage: `radial-gradient(circle at 1px 1px, #A0C342 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Heading */}
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span className="section-label-dark" style={{ justifyContent: 'center', marginBottom: 16 }}>CUSTOMER SATISFACTION</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
              Driving growth with strategies tailored for success
            </h2>
          </div>

          {/* Counter grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48 }}>
            <CounterItem value={1500} suffix="+" label="Projects Completed" desc="We've delivered 56+ projects that help companies" />
            <CounterItem value={99} suffix="%" label="Success Rate" desc="Analyze and monitor business reporting data" />
            <CounterItem value={14} suffix="K+" label="Happy Clients" desc="Trusted by 14K+ businesses worldwide" />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 800, color: '#fff', lineHeight: 1 }}>
                4.<span style={{ color: '#A0C342' }}>5</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#A0C342', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 6, marginBottom: 4 }}>
                Rating
              </div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>Top rated company</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
