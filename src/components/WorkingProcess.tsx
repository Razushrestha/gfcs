'use client';
const steps = [
  {
    num: '01',
    title: 'Empowering businesses with finance and leadership',
    desc: 'Strengthening businesses through expert financial guidance and leadership support. We help teams make smarter decisions to achieve success with clarity.',
    precision: 'UNMATCHED PRECISION',
    features: ['Revenue Optimization Strategies', 'Pricing & Profitability Analysis', 'Customer Retention Strategy'],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    num: '02',
    title: 'Supporting success with finance and leadership',
    desc: 'Strengthening businesses through expert financial guidance and leadership support. We help teams make smarter decisions to achieve success with clarity.',
    precision: 'UNMATCHED PRECISION',
    features: ['Customer Lifetime Value', 'Demand Forecasting & Sales Planning', 'Product Mix & Portfolio Optimization'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    num: '03',
    title: 'Elevating performance through finance and leadership',
    desc: 'Strengthening businesses through expert financial guidance and leadership support. We help teams make smarter decisions to achieve success with clarity.',
    precision: 'UNMATCHED PRECISION',
    features: ['Upselling & Cross-Selling Strategy', 'Pricing & Profitability Analysis', 'Churn Prediction & Prevention Analytics'],
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
  },
];

export default function WorkingProcess() {
  return (
    <section style={{ padding: '110px 0', background: '#16222D', position: 'relative', overflow: 'hidden' }}>
      {/* Bg pattern */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: `repeating-linear-gradient(45deg, #A0C342 0, #A0C342 1px, transparent 0, transparent 50%)`,
        backgroundSize: '20px 20px',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 64px' }}>
          <span className="section-label-dark" style={{ justifyContent: 'center', marginBottom: 16 }}>WORKING PROCESS</span>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 800, color: '#fff', lineHeight: 1.25 }}>
            The work process of accounting,<br />taxation & payroll processing
          </h2>
        </div>

        {/* Steps grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {steps.map((step) => (
            <div key={step.num} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 8,
              padding: 32,
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s ease',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.07)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(160,195,66,0.3)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.04)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              {/* Big number bg */}
              <div className="process-number">{step.num}</div>

              {/* Step number badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 50, height: 50, background: '#A0C342', borderRadius: '50%',
                fontSize: 16, fontWeight: 800, color: '#16222D', marginBottom: 20,
                position: 'relative', zIndex: 1,
              }}>
                {step.num}
              </div>

              <h3 style={{ color: '#fff', fontSize: 19, fontWeight: 700, marginBottom: 14, lineHeight: 1.4, position: 'relative', zIndex: 1 }}>
                {step.title}
              </h3>

              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.75, marginBottom: 24, position: 'relative', zIndex: 1 }}>
                {step.desc}
              </p>

              {/* Image */}
              {step.img && (
                <div style={{ borderRadius: 6, overflow: 'hidden', marginBottom: 20, height: 160, background: '#1e3040', position: 'relative', zIndex: 1 }}>
                  <img src={step.img} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
                </div>
              )}

              {/* Precision box */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20, position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', color: '#A0C342', marginBottom: 12 }}>
                  {step.precision}
                </div>
                {step.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <div style={{ width: 5, height: 5, background: '#A0C342', borderRadius: '50%', flexShrink: 0 }} />
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom counter */}
        <div style={{ textAlign: 'center', marginTop: 60, paddingTop: 48, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ fontSize: 72, fontWeight: 800, color: '#A0C342', lineHeight: 1 }}>12<span style={{ fontSize: 40 }}>+</span></div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, marginTop: 8 }}>
            We&apos;ve delivered 56+ projects that help<br />companies generate real results.
          </p>
        </div>
      </div>
    </section>
  );
}
