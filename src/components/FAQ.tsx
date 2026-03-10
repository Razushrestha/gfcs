'use client';
import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: 'How much capital does my business make?',
    a: "Every client's situation is unique. During our consultation, we assess your goals, risk tolerance, income, and future financial roadmap to provide a tailored capital analysis and growth plan.",
  },
  {
    q: 'What is a "liquidity ratio"?',
    a: 'A liquidity ratio measures a company\'s ability to pay its short-term obligations using its liquid assets. Common liquidity ratios include the current ratio, quick ratio, and cash ratio, each providing insight into financial health.',
  },
  {
    q: 'What is a "pro forma financial statement"?',
    a: 'Pro forma financial statements are forward-looking projections that estimate future financial performance based on assumptions about revenue growth, costs, and business changes. They\'re essential for planning and investor presentations.',
  },
  {
    q: 'Difference between revenue and income?',
    a: 'Revenue is the total money earned from sales before any expenses are deducted. Income (or net income) is what remains after all expenses, taxes, and costs have been subtracted from revenue. Income shows actual profitability.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ padding: '110px 0', background: '#fff' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 70, alignItems: 'start' }}>
          {/* Left: FAQ accordion */}
          <div>
            <span className="section-label" style={{ marginBottom: 16, display: 'flex' }}>FAQ.</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: '#16222D', marginBottom: 16, lineHeight: 1.25 }}>
              Here&apos;s everything you need to know about working with us.
            </h2>
            <p style={{ color: '#696F6F', fontSize: 15, lineHeight: 1.8, marginBottom: 36 }}>
              We&apos;ve compiled answers to the most common questions our clients ask.
            </p>

            <div>
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => setOpen(open === i ? null : i)}
                    style={{ color: open === i ? '#A0C342' : '#16222D' }}
                  >
                    <span>{faq.q}</span>
                    <div style={{
                      width: 30, height: 30, borderRadius: '50%',
                      background: open === i ? '#A0C342' : '#ECF0F4',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, transition: 'all 0.3s',
                    }}>
                      <svg width="14" height="14" fill="none" stroke={open === i ? '#16222D' : '#16222D'} strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={open === i ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'} />
                      </svg>
                    </div>
                  </button>
                  {open === i && (
                    <div style={{ paddingBottom: 20, paddingRight: 40 }}>
                      <p style={{ color: '#696F6F', fontSize: 15, lineHeight: 1.75 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Can't find answer card */}
          <div style={{ position: 'sticky', top: 100 }}>
            <div style={{
              background: '#16222D',
              borderRadius: 12,
              padding: 48,
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Decoration */}
              <div style={{
                position: 'absolute', top: -30, right: -30,
                width: 150, height: 150, borderRadius: '50%',
                background: 'rgba(160,195,66,0.12)',
              }} />
              <div style={{
                position: 'absolute', bottom: -20, left: -20,
                width: 100, height: 100, borderRadius: '50%',
                background: 'rgba(160,195,66,0.08)',
              }} />

              <div style={{
                width: 72, height: 72, background: '#A0C342', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 24px', position: 'relative', zIndex: 1,
              }}>
                <svg width="32" height="32" fill="none" stroke="#16222D" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h3 style={{ color: '#fff', fontSize: 24, fontWeight: 800, marginBottom: 16, position: 'relative', zIndex: 1, lineHeight: 1.3 }}>
                Can&apos;t find your answer?
              </h3>

              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, lineHeight: 1.75, marginBottom: 32, position: 'relative', zIndex: 1 }}>
                If you have questions or need more details, feel free to reach out. Our expert team is always ready to help you.
              </p>

              <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none', position: 'relative', zIndex: 1 }}>
                Let&apos;s Talk
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              {/* Contact info */}
              <div style={{ marginTop: 36, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.1)', position: 'relative', zIndex: 1 }}>
                <a href="tel:+012389547321" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, color: '#fff', textDecoration: 'none', marginBottom: 10 }}>
                  <svg width="16" height="16" fill="none" stroke="#A0C342" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +01 23-895-4732
                </a>
                <a href="mailto:reply@example.com" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 14 }}>
                  <svg width="14" height="14" fill="none" stroke="#A0C342" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  reply@example.com
                </a>
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
