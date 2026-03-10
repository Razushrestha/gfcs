import Link from 'next/link';

export default function AboutSection() {
  return (
    <section style={{ padding: '110px 0', background: '#ECF0F4' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 70, alignItems: 'center' }}>
          {/* Left: Image collage */}
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {/* Top left - large */}
              <div style={{
                gridRow: '1 / 3',
                background: 'linear-gradient(135deg, #16222D 0%, #1e3a4d 100%)',
                borderRadius: 8,
                minHeight: 360,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: 28,
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80)',
                  backgroundSize: 'cover', backgroundPosition: 'center',
                  opacity: 0.4,
                }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ background: '#A0C342', borderRadius: 6, padding: '14px 18px', display: 'inline-block' }}>
                    <div style={{ fontSize: 36, fontWeight: 800, color: '#16222D', lineHeight: 1 }}>25 <span style={{ fontSize: 20 }}>+</span></div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#16222D', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Years of<br />Experience</div>
                  </div>
                </div>
              </div>

              {/* Top right */}
              <div style={{
                background: 'linear-gradient(135deg, #A0C342 0%, #8ab535 100%)',
                borderRadius: 8,
                minHeight: 170,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 24,
                flexDirection: 'column',
                textAlign: 'center',
              }}>
                <svg width="40" height="40" fill="none" stroke="#16222D" strokeWidth="1.8" viewBox="0 0 24 24" style={{ marginBottom: 12 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#16222D' }}>Business<br />Financial Planning</div>
              </div>

              {/* Bottom right */}
              <div style={{
                background: '#fff',
                borderRadius: 8,
                minHeight: 170,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 24,
                flexDirection: 'column',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
              }}>
                <svg width="40" height="40" fill="none" stroke="#A0C342" strokeWidth="1.8" viewBox="0 0 24 24" style={{ marginBottom: 12 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#16222D' }}>We Provide<br />Expertise You Trust</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="section-label" style={{ marginBottom: 16, display: 'flex' }}>ABOUT US</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: '#16222D', marginBottom: 20, lineHeight: 1.25 }}>
              With a global reach our firm has been in business since 1998.
            </h2>
            <p style={{ color: '#696F6F', fontSize: 16, lineHeight: 1.8, marginBottom: 28 }}>
              Our mission is to provide exceptional Accounting, Taxation & Payroll Processing
              Services to businesses and individuals, helping them achieve financial clarity,
              compliance, growth, and long-term success.
            </p>

            {/* Feature list */}
            <div style={{ marginBottom: 32 }}>
              {['Innovation strategy', 'Process optimization', 'Risk assessment'].map(feat => (
                <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 22, height: 22, background: '#16222D', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="11" height="11" fill="none" stroke="#A0C342" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span style={{ color: '#16222D', fontSize: 15, fontWeight: 600 }}>{feat}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 40, marginBottom: 36, padding: '24px 0', borderTop: '1px solid #E4E4E4', borderBottom: '1px solid #E4E4E4' }}>
              <div>
                <div style={{ fontSize: 44, fontWeight: 800, color: '#16222D', lineHeight: 1 }}>25 <span style={{ color: '#A0C342' }}>+</span></div>
                <div style={{ fontSize: 13, color: '#696F6F', marginTop: 4 }}>Years of experience</div>
              </div>
              <div>
                <div style={{ fontSize: 44, fontWeight: 800, color: '#16222D', lineHeight: 1 }}>1500 <span style={{ color: '#A0C342' }}>+</span></div>
                <div style={{ fontSize: 13, color: '#696F6F', marginTop: 4 }}>Projects completed</div>
              </div>
            </div>

            <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>
              Discover More
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
