const steps = [
  {
    num: '01',
    title: 'Time Savings',
    desc: 'Companies reduce financial admin work by 50%. Free yourself from the burden of daily financial records.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Cost Reduction',
    desc: 'Companies reduce financial admin work by 50%. We optimize processes to lower operating costs significantly.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const docFlow = [
  { label: 'Document secured', icon: '🔒' },
  { label: 'Sent for approval', icon: '📤' },
  { label: 'Payment approved', icon: '✅' },
];

export default function WhyChooseUs() {
  return (
    <section style={{ padding: '110px 0', background: '#fff' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 70, alignItems: 'center' }}>
          {/* Left content */}
          <div>
            <span className="section-label" style={{ marginBottom: 16, display: 'flex' }}>WHY CHOOSE US</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: '#16222D', marginBottom: 20, lineHeight: 1.25 }}>
              With a global reach our firm has been in business
            </h2>
            <p style={{ color: '#696F6F', fontSize: 16, lineHeight: 1.8, marginBottom: 36 }}>
              Our mission is to provide exceptional Accounting, Taxation & Payroll Processing
              Services to businesses and individuals, helping them achieve.
            </p>

            {/* Steps */}
            <div style={{ marginBottom: 36 }}>
              {steps.map(step => (
                <div key={step.num} style={{
                  display: 'flex', gap: 20, marginBottom: 28, alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: 56, height: 56, background: '#ECF0F4',
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, color: '#A0C342', transition: 'all 0.3s',
                  }}>
                    {step.icon}
                  </div>
                  <div style={{ flex: 1, borderBottom: step.num === '01' ? '1px solid #E4E4E4' : 'none', paddingBottom: step.num === '01' ? 28 : 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                      <span style={{ fontSize: 12, fontWeight: 800, color: '#A0C342' }}>{step.num}</span>
                      <h4 style={{ fontSize: 18, fontWeight: 700, color: '#16222D', margin: 0 }}>{step.title}</h4>
                    </div>
                    <p style={{ color: '#696F6F', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Reach CTA area */}
            <div style={{ background: '#ECF0F4', borderRadius: 8, padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 46, height: 46, background: '#A0C342', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="22" height="22" fill="none" stroke="#16222D" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 13, color: '#696F6F', marginBottom: 2 }}>Need help? Call us now</div>
                <a href="tel:+012389547321" style={{ fontSize: 18, fontWeight: 700, color: '#16222D', textDecoration: 'none' }}>
                  +01 23-895-4732
                </a>
              </div>
            </div>
          </div>

          {/* Right: Document workflow visual */}
          <div style={{ position: 'relative' }}>
            <div style={{
              background: '#16222D',
              borderRadius: 12,
              padding: 40,
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Bg decoration */}
              <div style={{
                position: 'absolute', top: -40, right: -40,
                width: 200, height: 200, borderRadius: '50%',
                background: 'rgba(160,195,66,0.1)',
              }} />

              <h3 style={{ color: '#fff', fontSize: 22, fontWeight: 700, marginBottom: 32, position: 'relative', zIndex: 1 }}>
                Streamlined Document<br />Workflow Process
              </h3>

              {/* Document flow steps */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                {docFlow.map((doc, i) => (
                  <div key={doc.label} style={{ display: 'flex', alignItems: 'center', marginBottom: i < docFlow.length - 1 ? 0 : 0 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 20 }}>
                      <div style={{
                        width: 52, height: 52, borderRadius: '50%',
                        background: i === 0 ? '#A0C342' : i === 1 ? 'rgba(160,195,66,0.3)' : 'rgba(255,255,255,0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        border: `2px solid ${i === 0 ? '#A0C342' : 'rgba(160,195,66,0.3)'}`,
                        fontSize: 22,
                      }}>
                        {doc.icon}
                      </div>
                      {i < docFlow.length - 1 && (
                        <div style={{ width: 2, height: 40, background: 'rgba(160,195,66,0.3)', margin: '4px 0' }} />
                      )}
                    </div>
                    <div style={{ paddingBottom: i < docFlow.length - 1 ? 40 : 0 }}>
                      <div style={{ color: '#fff', fontWeight: 600, fontSize: 16 }}>{doc.label}</div>
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>
                        {i === 0 ? 'File securely stored in system' : i === 1 ? 'Forwarded for manager review' : 'Transaction completed successfully'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom mini stats */}
              <div style={{
                marginTop: 36, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.1)',
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, position: 'relative', zIndex: 1,
              }}>
                {[
                  { val: '99%', label: 'Success Rate' },
                  { val: '50%', label: 'Time Saved' },
                ].map(stat => (
                  <div key={stat.label} style={{ textAlign: 'center', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: 8 }}>
                    <div style={{ fontSize: 30, fontWeight: 800, color: '#A0C342', lineHeight: 1 }}>{stat.val}</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginTop: 4 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
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
