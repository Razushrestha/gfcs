const marqueeItems = [
  'Audit Assurance',
  'Financial Projections',
  'Business Planning',
  'Investment Management',
  'Insurance Consulting',
  'Tax Advisory',
  'Capital Markets',
  'Risk Management',
];

export default function ServicesTicker() {
  const repeated = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div style={{ background: '#A0C342', padding: '18px 0', overflow: 'hidden', position: 'relative' }}>
      <div className="animate-marquee">
        {repeated.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 0, flexShrink: 0 }}>
            <span style={{
              color: '#16222D',
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              padding: '0 32px',
            }}>{item}</span>
            <span style={{ color: '#16222D', opacity: 0.5, fontSize: 20, lineHeight: 1 }}>✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
