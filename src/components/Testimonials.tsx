'use client';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Martin Bailey',
    role: 'ADVISOR',
    rating: 5,
    quote: 'I had a fantastic experience with moving express. Their team was courteous, efficient, and treated my belongings as if they were their own. Moving express turned what could have been a daunting task into a smooth transition.',
  },
  {
    name: 'Stephen Welch',
    role: 'SATISFIED CLIENT',
    rating: 5,
    quote: 'Partnering with this financial consulting team was a game-changer for our business. Their expert guidance on cash flow management and budgeting helped us optimize resources and improve profitability.',
  },
  {
    name: 'Adeline Wood',
    role: 'SATISFIED CLIENT',
    rating: 5,
    quote: 'We needed guidance navigating complex financial regulations. Provided expert support and tailored strategies that helped us stay compliant while also growing our business.',
  },
  {
    name: 'Naomi Violet',
    role: 'CEO & FOUNDER',
    rating: 5,
    quote: 'The advice I received from gfcs was practical and actionable. They made complex financial concepts easy to understand, and I now feel empowered to make informed decisions for my business.',
  },
  {
    name: 'Alex Zander',
    role: 'WORKER',
    rating: 5,
    quote: 'I had a fantastic experience with moving express. Their team was courteous, efficient, and treated my belongings as if they were their own. Moving express turned what could have been a daunting task into a smooth transition.',
  },
  {
    name: 'Anna Briggs',
    role: 'GENERAL MANAGER',
    rating: 5,
    quote: 'I had a fantastic experience with moving express. Their team was courteous, efficient, and treated my belongings as if they were their own. Moving express turned what could have been a daunting task into a smooth transition.',
  },
];

const VISIBLE = 3;

export default function Testimonials() {
  const [start, setStart] = useState(0);

  const visible = [];
  for (let i = 0; i < VISIBLE; i++) {
    visible.push(testimonials[(start + i) % testimonials.length]);
  }

  const prev = () => setStart(s => (s - 1 + testimonials.length) % testimonials.length);
  const next = () => setStart(s => (s + 1) % testimonials.length);

  return (
    <section style={{ padding: '110px 0', background: '#ECF0F4' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 50, flexWrap: 'wrap', gap: 20 }}>
          <div style={{ maxWidth: 520 }}>
            <span className="section-label" style={{ marginBottom: 16, display: 'flex' }}>TESTIMONIALS</span>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 800, color: '#16222D', lineHeight: 1.25 }}>
              We&apos;ve delivered 56+ projects that help<br />companies generate real results.
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            {[prev, next].map((fn, i) => (
              <button key={i} onClick={fn} style={{
                width: 48, height: 48,
                borderRadius: '50%',
                border: `2px solid ${i === 1 ? '#A0C342' : '#E4E4E4'}`,
                background: i === 1 ? '#A0C342' : '#fff',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.3s',
                color: i === 1 ? '#16222D' : '#16222D',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#16222D'; (e.currentTarget as HTMLButtonElement).style.borderColor = '#16222D'; (e.currentTarget as HTMLButtonElement).style.color = '#fff'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = i === 1 ? '#A0C342' : '#fff'; (e.currentTarget as HTMLButtonElement).style.borderColor = i === 1 ? '#A0C342' : '#E4E4E4'; (e.currentTarget as HTMLButtonElement).style.color = '#16222D'; }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={i === 0 ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div style={{
          background: '#16222D', borderRadius: 8, padding: '20px 32px',
          display: 'flex', gap: 32, alignItems: 'center', marginBottom: 40,
          flexWrap: 'wrap',
        }}>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>CUSTOMER SATISFACTION</div>
          <div style={{ height: 30, width: 1, background: 'rgba(255,255,255,0.2)' }} />
          <div>
            <span style={{ fontSize: 28, fontWeight: 800, color: '#A0C342' }}>4.9</span>
            <span style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>/5</span>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>Based on 1,500+ reviews</div>
          <div style={{ marginLeft: 'auto', color: '#A0C342', fontSize: 20, letterSpacing: 2 }}>★★★★★</div>
        </div>

        {/* Testimonial cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {visible.map((t, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: 8,
              padding: 32,
              boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
              position: 'relative',
              transition: 'all 0.4s ease',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 50px rgba(0,0,0,0.12)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 30px rgba(0,0,0,0.06)'; }}
            >
              {/* Quote icon */}
              <div style={{ fontSize: 60, lineHeight: 0.8, color: '#A0C342', fontFamily: 'Georgia, serif', marginBottom: 16 }}>&ldquo;</div>

              {/* Stars */}
              <div style={{ color: '#F5A623', fontSize: 14, letterSpacing: 2, marginBottom: 16 }}>{'★'.repeat(t.rating)}</div>

              <p style={{ color: '#696F6F', fontSize: 15, lineHeight: 1.75, marginBottom: 24 }}>{t.quote}</p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 20, borderTop: '1px solid #E4E4E4' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #16222D, #A0C342)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontWeight: 700, fontSize: 16, flexShrink: 0,
                }}>
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: '#16222D' }}>{t.name}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: '#A0C342', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 36 }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setStart(i)} style={{
              width: i === start ? 24 : 8, height: 8, borderRadius: 4,
              background: i === start ? '#A0C342' : '#E4E4E4',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'all 0.4s ease',
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}
