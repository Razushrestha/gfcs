'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const posts = [
  {
    slug: 'making-innovative-strategies-for-outstanding',
    category: 'INSURANCE',
    date: 'March 26, 2025',
    author: 'GFCS',
    title: 'Making Innovative Strategies For Outstanding.',
    excerpt: 'In the ever-evolving world of business insurance, staying ahead means embracing innovative strategies that go beyond traditional risk management. We explore how forward-thinking businesses are revolutionizing their insurance approaches.',
    img: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&q=80',
  },
  {
    slug: 'the-other-roles-of-financial-advisor',
    category: 'INVESTMENT',
    date: 'March 26, 2025',
    author: 'GFCS',
    title: 'The Other Roles Of Financial Advisor?',
    excerpt: 'A financial advisor does far more than manage investments. From tax planning to estate management, retirement strategies to business succession planning â€” discover the full spectrum of value a great financial advisor brings.',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
  },
  {
    slug: 'how-to-use-the-investment-growth-calculator',
    category: 'ECONOMY',
    date: 'March 26, 2025',
    author: 'GFCS',
    title: 'How To Use The Investment Growth Calculator',
    excerpt: 'Understanding compound growth is key to long-term wealth creation. Our step-by-step guide walks you through using investment growth calculators to project your financial future and make smarter investment decisions today.',
    img: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&q=80',
  },
  {
    slug: 'understanding-tax-brackets-and-deductions',
    category: 'TAXES',
    date: 'March 20, 2025',
    author: 'GFCS',
    title: 'Understanding Tax Brackets and Deductions',
    excerpt: 'Navigating the tax code doesn\'t have to be overwhelming. This comprehensive guide breaks down tax brackets, explains key deductions, and reveals strategies to legally minimize your tax liability while maximizing returns.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
  },
  {
    slug: 'essential-financial-ratios-every-business-owner-should-know',
    category: 'FINANCE',
    date: 'March 15, 2025',
    author: 'GFCS',
    title: 'Essential Financial Ratios Every Business Owner Should Know',
    excerpt: 'From liquidity ratios to profitability metrics, financial ratios are the vital signs of your business health. Learn which ratios matter most, how to calculate them, and what they reveal about your company\'s financial position.',
    img: 'https://images.unsplash.com/photo-1460467820054-c87ab43e9b59?w=800&q=80',
  },
  {
    slug: 'building-a-retirement-portfolio-that-lasts',
    category: 'RETIREMENT',
    date: 'March 10, 2025',
    author: 'GFCS',
    title: 'Building a Retirement Portfolio That Lasts',
    excerpt: 'The key to a comfortable retirement isn\'t just how much you save â€” it\'s how strategically you invest. Discover proven portfolio construction techniques that balance growth with security for long-term retirement success.',
    img: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&q=80',
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner title="Our Blog" breadcrumb="Blog" />

        {/* Blog Grid */}
        <section style={{ padding: '100px 0', background: '#ECF0F4' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: '60px' }}>
              {posts.map((post) => (
                <article key={post.slug} style={{
                  background: '#fff', borderRadius: '8px', overflow: 'hidden',
                  boxShadow: '0 2px 20px rgba(0,0,0,0.06)', transition: 'transform 0.3s ease'
                }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-5px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', overflow: 'hidden', height: '220px' }}>
                    <img
                      src={post.img}
                      alt={post.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                      onMouseEnter={e => ((e.target as HTMLImageElement).style.transform = 'scale(1.05)')}
                      onMouseLeave={e => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
                    />
                    <div style={{
                      position: 'absolute', top: '15px', left: '15px',
                      background: '#A0C342', color: '#fff', padding: '5px 12px',
                      borderRadius: '3px', fontSize: '12px', fontWeight: '700', letterSpacing: '1px'
                    }}>{post.category}</div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '30px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#696F6F', fontSize: '13px' }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#A0C342" strokeWidth="2" style={{ width: '14px', height: '14px' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        {post.date}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#696F6F', fontSize: '13px' }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#A0C342" strokeWidth="2" style={{ width: '14px', height: '14px' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        {post.author}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#16222D', marginBottom: '12px', lineHeight: '1.4' }}>
                      <a href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }}
                        onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = '#A0C342')}
                        onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = '#16222D')}
                      >{post.title}</a>
                    </h3>
                    <p style={{ color: '#696F6F', lineHeight: '1.7', fontSize: '14px', marginBottom: '20px' }}>
                      {post.excerpt}
                    </p>
                    <a href={`/blog/${post.slug}`} style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      color: '#A0C342', fontWeight: '700', fontSize: '14px',
                      textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.5px'
                    }}>
                      Read More
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '14px', height: '14px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
              {[1, 2, 3].map((n) => (
                <a key={n} href="#" style={{
                  width: '44px', height: '44px', borderRadius: '5px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: n === 1 ? '#A0C342' : '#fff',
                  color: n === 1 ? '#fff' : '#16222D',
                  fontWeight: '700', fontSize: '15px', textDecoration: 'none',
                  border: '1px solid #E4E4E4', transition: 'all 0.2s'
                }}>{n}</a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

