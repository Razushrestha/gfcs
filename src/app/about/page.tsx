'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const teamMembers = [
  { name: 'Justin Novak', role: 'TAX EXAMINER', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Myles Evander', role: 'GENERAL MANAGER', img: 'https://randomuser.me/api/portraits/men/44.jpg' },
  { name: 'John Harris', role: 'CHIEF OFFICER', img: 'https://randomuser.me/api/portraits/men/55.jpg' },
  { name: 'Bryson Tiller', role: 'BUSINESS MANAGER', img: 'https://randomuser.me/api/portraits/men/28.jpg' },
  { name: 'Walker Scobell', role: 'LEGAL OFFICER', img: 'https://randomuser.me/api/portraits/men/36.jpg' },
  { name: 'Jacob Elordi', role: 'FINANCE ADVISOR', img: 'https://randomuser.me/api/portraits/men/47.jpg' },
];

const testimonials = [
  { name: 'Martin Bailey', role: 'ADVISOR', text: 'The team at gfcs has been instrumental in transforming our financial strategy. Their expert advice and innovative approach helped us achieve significant growth while managing risks effectively.' },
  { name: 'Stephen Welch', role: 'SATISFIED CLIENT', text: 'Working with gfcs has been a game-changer for our business. Their comprehensive financial services and deep expertise have given us the confidence to make bold decisions and achieve our goals.' },
  { name: 'Adeline Wood', role: 'SATISFIED CLIENT', text: 'gfcs\'s team of financial experts has provided invaluable guidance throughout our growth journey. Their commitment to understanding our unique needs and delivering tailored solutions has been outstanding.' },
];

const socialPaths = [
  { label: 'FB', d: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
  { label: 'LI', d: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z' },
  { label: 'TW', d: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="About Us"
          breadcrumb="About"
          subtitle="Learn about our mission, our people, and our commitment to transforming financial futures."
        />

        {/* About Intro Section */}
        <section style={{ padding: '110px 0', background: '#fff', position: 'relative', overflow: 'hidden' }}>
          {/* subtle bg accent */}
          <div style={{
            position: 'absolute', right: '-150px', top: '-150px',
            width: 500, height: 500, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(160,195,66,0.06) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

              {/* Left: Image collage */}
              <div style={{ position: 'relative' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80"
                    alt="About 1"
                    style={{ width: '100%', borderRadius: '12px', height: '300px', objectFit: 'cover', boxShadow: '0 20px 50px rgba(22,34,45,0.15)' }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                    alt="About 2"
                    style={{ width: '100%', borderRadius: '12px', height: '300px', objectFit: 'cover', marginTop: '50px', boxShadow: '0 20px 50px rgba(22,34,45,0.15)' }}
                  />
                </div>
                {/* Experience badge */}
                <div style={{
                  position: 'absolute', bottom: '-30px', left: '50%', transform: 'translateX(-50%)',
                  background: '#16222D', color: '#fff', padding: '22px 36px', borderRadius: '12px',
                  textAlign: 'center', whiteSpace: 'nowrap',
                  boxShadow: '0 12px 40px rgba(22,34,45,0.25)',
                }}>
                  <div style={{ fontSize: '42px', fontWeight: '900', lineHeight: '1', color: '#A0C342' }}>25+</div>
                  <div style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginTop: 4, color: 'rgba(255,255,255,0.8)' }}>Years of Experience</div>
                </div>
                {/* Decorative border box */}
                <div style={{
                  position: 'absolute', top: '-12px', left: '-12px',
                  width: '55%', height: '55%', borderRadius: '12px',
                  border: '3px solid rgba(160,195,66,0.25)',
                  pointerEvents: 'none', zIndex: -1,
                }} />
              </div>

              {/* Right: Content */}
              <div style={{ paddingTop: 20 }}>
                <div className="section-label">About Our Company</div>
                <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 44px)', fontWeight: '800', color: '#16222D', lineHeight: '1.15', margin: '16px 0 22px', letterSpacing: '-0.02em' }}>
                  Leading Financial &amp; Accounting <span style={{ color: '#A0C342' }}>Consulting</span> Firm
                </h2>
                <p style={{ color: '#696F6F', lineHeight: '1.85', marginBottom: '18px', fontSize: '15.5px' }}>
                  With a global reach, our firm has been in business since 1998. We specialize in providing comprehensive financial consulting services that empower businesses to achieve their goals and navigate complex financial landscapes.
                </p>
                <p style={{ color: '#696F6F', lineHeight: '1.85', marginBottom: '32px', fontSize: '15.5px' }}>
                  Our mission is to provide exceptional Accounting, Taxation &amp; Payroll Processing Services. We combine deep industry expertise with innovative technology to deliver solutions that drive sustainable growth and financial excellence.
                </p>

                {/* Feature list */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '38px' }}>
                  {['Innovation Strategy', 'Process Optimization', 'Risk Assessment', 'Financial Planning'].map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#f8faf2', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(160,195,66,0.2)' }}>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#A0C342', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="11" height="11" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span style={{ color: '#16222D', fontWeight: '600', fontSize: '14px' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <a href="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                  Get In Touch
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section style={{ background: '#A0C342', padding: '50px 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
              {[
                { num: '850+', label: 'Happy Clients' },
                { num: '25+', label: 'Years Experience' },
                { num: '120+', label: 'Expert Advisors' },
                { num: '98%', label: 'Success Rate' },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '10px', borderRight: i < 3 ? '1px solid rgba(22,34,45,0.2)' : 'none' }}>
                  <div style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: '900', color: '#16222D', lineHeight: 1 }}>{stat.num}</div>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(22,34,45,0.6)', textTransform: 'uppercase', letterSpacing: '1.5px', marginTop: 8 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section style={{ padding: '110px 0', background: '#ECF0F4' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>OUR VALUES</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '800', color: '#16222D', marginTop: '16px', letterSpacing: '-0.02em' }}>
                What Drives Us Forward
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
              {([
                { svgPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', title: 'Innovation', desc: 'We continuously adopt new methodologies and technologies to deliver cutting-edge financial solutions that keep our clients ahead of the curve.' },
                { svgPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: 'Integrity', desc: 'Trust is the foundation of every client relationship. We uphold the highest ethical standards in every interaction, decision, and recommendation we make.' },
                { svgPath: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z', title: 'Excellence', desc: 'We are committed to delivering exceptional results. Our relentless pursuit of excellence drives us to go beyond expectations in everything we do.' },
                { svgPath: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Global Reach', desc: 'With clients across multiple continents, our global perspective enables us to bring international insights and best practices to every engagement.' },
                { svgPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', title: 'Data-Driven', desc: 'Our strategies are grounded in rigorous analysis and research, ensuring every recommendation is backed by solid data and proven frameworks.' },
                { svgPath: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', title: 'Adaptability', desc: 'Financial landscapes evolve rapidly. We stay agile and responsive, helping clients navigate change with confidence and clarity.' },
              ] as { svgPath: string; title: string; desc: string }[]).map((v, i) => (
                <div key={i} style={{
                  background: '#fff', borderRadius: '14px', padding: '36px 30px',
                  boxShadow: '0 4px 24px rgba(22,34,45,0.06)',
                  border: '1px solid transparent',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = '#A0C342';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 48px rgba(160,195,66,0.15)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'transparent';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(22,34,45,0.06)';
                  }}>
                  <div style={{ width: 52, height: 52, borderRadius: '12px', background: 'rgba(160,195,66,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <svg width="26" height="26" fill="none" stroke="#A0C342" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d={v.svgPath} />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '19px', fontWeight: '800', color: '#16222D', marginBottom: '12px' }}>{v.title}</h3>
                  <p style={{ color: '#696F6F', lineHeight: '1.8', fontSize: '14.5px', margin: 0 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section style={{ padding: '110px 0', background: '#fff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>OUR TEAM</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '800', color: '#16222D', marginTop: '16px', letterSpacing: '-0.02em' }}>
                Meet Our Expert Team
              </h2>
              <p style={{ color: '#696F6F', maxWidth: '520px', margin: '16px auto 0', lineHeight: '1.75', fontSize: '15px' }}>
                Our diverse team of financial professionals brings decades of combined expertise to every client engagement.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
              {teamMembers.map((member) => (
                <div key={member.name} style={{
                  background: '#fff', borderRadius: '14px', overflow: 'hidden',
                  boxShadow: '0 4px 24px rgba(22,34,45,0.08)',
                  transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-8px)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 60px rgba(22,34,45,0.15)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(22,34,45,0.08)';
                  }}>
                  <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <img src={member.img} alt={member.name} style={{ width: '100%', height: '290px', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }} />
                    {/* Hover overlay with socials */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(22,34,45,0.92) 0%, rgba(22,34,45,0.3) 50%, transparent 100%)',
                      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '20px',
                    }}>
                      <div style={{ display: 'flex', gap: 8, opacity: 0.9 }}>
                        {socialPaths.map(s => (
                          <a key={s.label} href="#" style={{
                            width: 34, height: 34, borderRadius: '50%',
                            background: 'rgba(160,195,66,0.2)', border: '1px solid rgba(160,195,66,0.5)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            transition: 'background 0.3s',
                          }}
                            onMouseEnter={e => (e.currentTarget.style.background = '#A0C342')}
                            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(160,195,66,0.2)')}>
                            <svg width="13" height="13" fill="none" stroke="#fff" strokeWidth="1.8" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d={s.d} />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: '22px 24px', borderTop: '3px solid #A0C342' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#16222D', margin: '0 0 5px' }}>{member.name}</h3>
                    <div style={{ color: '#A0C342', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section style={{ padding: '110px 0', background: '#16222D', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.03,
            backgroundImage: 'radial-gradient(circle at 1px 1px, #A0C342 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }} />
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div className="section-label-dark" style={{ justifyContent: 'center' }}>TESTIMONIALS</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '800', color: '#fff', marginTop: '16px', letterSpacing: '-0.02em' }}>
                What Our Clients Say
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
              {testimonials.map((t, i) => (
                <div key={t.name} style={{
                  background: i === 1 ? '#A0C342' : 'rgba(255,255,255,0.05)',
                  border: i === 1 ? 'none' : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '14px', padding: '38px 32px',
                  transition: 'transform 0.3s ease',
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)'}
                  onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'}>
                  {/* Stars */}
                  <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                    {[...Array(5)].map((_, si) => (
                      <svg key={si} width="16" height="16" fill={i === 1 ? '#16222D' : '#A0C342'} viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  {/* Quote icon */}
                  <div style={{ fontSize: '56px', lineHeight: '1', marginBottom: '6px', color: i === 1 ? 'rgba(22,34,45,0.3)' : 'rgba(160,195,66,0.4)', fontWeight: 900 }}>"</div>
                  <p style={{ color: i === 1 ? 'rgba(22,34,45,0.85)' : 'rgba(255,255,255,0.75)', lineHeight: '1.85', marginBottom: '28px', fontSize: '15px', margin: '0 0 28px' }}>{t.text}</p>
                  <div style={{ borderTop: `1px solid ${i === 1 ? 'rgba(22,34,45,0.15)' : 'rgba(255,255,255,0.1)'}`, paddingTop: '20px', display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: '50%',
                      background: i === 1 ? 'rgba(22,34,45,0.15)' : 'rgba(160,195,66,0.15)',
                      border: `2px solid ${i === 1 ? 'rgba(22,34,45,0.3)' : '#A0C342'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '18px', fontWeight: 800, color: i === 1 ? '#16222D' : '#A0C342',
                    }}>
                      {t.name[0]}
                    </div>
                    <div>
                      <div style={{ fontWeight: '800', color: i === 1 ? '#16222D' : '#fff', fontSize: '16px' }}>{t.name}</div>
                      <div style={{ color: i === 1 ? 'rgba(22,34,45,0.6)' : '#A0C342', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '2px' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section style={{ padding: '110px 0', background: '#fff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>OUR PROCESS</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '800', color: '#16222D', marginTop: '16px', letterSpacing: '-0.02em' }}>
                How We Work With You
              </h2>
            </div>
            <div style={{ position: 'relative' }}>
              {/* Connecting line */}
              <div style={{
                position: 'absolute', top: '44px', left: '12.5%', right: '12.5%', height: '2px',
                background: 'linear-gradient(to right, #A0C342, rgba(160,195,66,0.2))',
                zIndex: 0,
              }} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '28px', position: 'relative', zIndex: 1 }}>
                {[
                  { num: '01', title: 'Initial Consultation', desc: 'We start with a comprehensive consultation to understand your unique financial situation and goals.' },
                  { num: '02', title: 'Strategic Planning', desc: 'Our experts develop a tailored financial strategy aligned with your specific business objectives.' },
                  { num: '03', title: 'Implementation', desc: 'We execute the plan with precision, ensuring every detail is handled with care and expertise.' },
                  { num: '04', title: 'Ongoing Support', desc: 'We provide continuous monitoring and support to adapt your strategy as your business evolves.' },
                ].map((step, i) => (
                  <div key={step.num} style={{ textAlign: 'center', padding: '10px 16px 30px' }}>
                    <div style={{
                      width: '88px', height: '88px', borderRadius: '50%',
                      background: i === 0 ? '#A0C342' : '#fff',
                      border: `3px solid ${i === 0 ? '#A0C342' : '#E4E4E4'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 24px',
                      fontSize: '20px', fontWeight: '900',
                      color: i === 0 ? '#fff' : '#A0C342',
                      boxShadow: i === 0 ? '0 8px 30px rgba(160,195,66,0.4)' : '0 4px 16px rgba(22,34,45,0.08)',
                      transition: 'all 0.3s',
                    }}>
                      {step.num}
                    </div>
                    <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#16222D', marginBottom: '12px' }}>{step.title}</h3>
                    <p style={{ color: '#696F6F', lineHeight: '1.75', fontSize: '14.5px', margin: 0 }}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

