'use client';
import Link from 'next/link';

const posts = [
  {
    category: 'INSURANCE',
    categoryColor: '#4A90D9',
    title: 'Making Innovative Strategies For Outstanding.',
    date: 'MARCH 26, 2025',
    author: 'GFCS',
    excerpt: 'Explore innovative strategies that drive outstanding financial results for businesses operating in competitive insurance markets.',
    img: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&q=80',
  },
  {
    category: 'INVESTMENT',
    categoryColor: '#E67E22',
    title: 'The Other Roles Of Financial Advisor?',
    date: 'MARCH 26, 2025',
    author: 'GFCS',
    excerpt: 'Financial advisors play many roles beyond just managing investments. Discover the broader value they bring to your financial life.',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
  },
  {
    category: 'ECONOMY',
    categoryColor: '#27AE60',
    title: 'How To Use The Investment Growth Calculator',
    date: 'MARCH 26, 2025',
    author: 'GFCS',
    excerpt: 'Learn how to use the investment growth calculator to project your portfolio returns and plan for long-term financial success.',
    img: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&q=80',
  },
];

export default function BlogSection() {
  return (
    <section style={{ padding: '110px 0', background: '#fff' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 60px' }}>
          <span className="section-label" style={{ justifyContent: 'center', marginBottom: 16 }}>FRESH NEWS</span>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: '#16222D', lineHeight: 1.25 }}>
            Articles & blog posts with<br />useful information
          </h2>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
          {posts.map((post, i) => (
            <article key={i} style={{
              background: '#fff',
              border: '1px solid #E4E4E4',
              borderRadius: 8,
              overflow: 'hidden',
              transition: 'all 0.4s ease',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.1)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLElement).style.borderColor = '#A0C342';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.borderColor = '#E4E4E4';
              }}
            >
              {/* Image placeholder */}
              <div style={{
                height: 220,
                background: `linear-gradient(135deg, #16222D 0%, ${i === 0 ? '#1e3d5a' : i === 1 ? '#2d3a1e' : '#1a2d3a'} 100%)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Decorative pattern */}
                <div style={{
                  position: 'absolute', inset: 0, opacity: 0.1,
                  backgroundImage: `radial-gradient(circle at 1px 1px, #A0C342 1px, transparent 0)`,
                  backgroundSize: '20px 20px',
                }} />
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                  <svg width="48" height="48" fill="none" stroke="rgba(160,195,66,0.6)" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>

                {/* Category badge */}
                <div style={{
                  position: 'absolute', top: 16, left: 16,
                  background: post.categoryColor,
                  color: '#fff', fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.12em', padding: '5px 12px',
                  borderRadius: 50,
                }}>
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: 28 }}>
                {/* Meta */}
                <div style={{ display: 'flex', gap: 16, marginBottom: 14, fontSize: 12, color: '#696F6F' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    BY {post.author}
                  </span>
                </div>

                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#16222D', marginBottom: 12, lineHeight: 1.4 }}>
                  <Link href="/blog" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#A0C342')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#16222D')}>
                    {post.title}
                  </Link>
                </h3>

                <p style={{ color: '#696F6F', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{post.excerpt}</p>

                <Link href="/blog" style={{
                  color: '#A0C342', fontWeight: 700, fontSize: 13, letterSpacing: '0.1em',
                  textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 6,
                  textDecoration: 'none', transition: 'gap 0.3s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.gap = '10px')}
                  onMouseLeave={e => (e.currentTarget.style.gap = '6px')}>
                  Read More
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
