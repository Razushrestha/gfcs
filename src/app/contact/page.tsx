'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main>
        <PageBanner title="Contact Us" breadcrumb="Contact" />

        {/* Contact Info Bar */}
        <section style={{ padding: '60px 0', background: '#16222D' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '32px', height: '32px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                  label: 'Our Address',
                  value: '174 Street Charleston, New York, NY',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '32px', height: '32px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  ),
                  label: 'Phone Number',
                  value: '+1 440 848 8222',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '32px', height: '32px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  ),
                  label: 'Email Address',
                  value: 'noreply@pbminfotech.com',
                },
              ].map((item) => (
                <div key={item.label} style={{
                  display: 'flex', alignItems: 'center', gap: '20px',
                  padding: '30px 40px', background: 'rgba(255,255,255,0.05)'
                }}>
                  <div style={{ color: '#A0C342', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>{item.label}</div>
                    <div style={{ color: '#fff', fontWeight: '600', fontSize: '16px' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form + Map */}
        <section style={{ padding: '100px 0', background: '#ECF0F4' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
              {/* Left: Form */}
              <div style={{ background: '#fff', borderRadius: '8px', padding: '50px', boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}>
                <div className="section-label">SEND A MESSAGE</div>
                <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#16222D', margin: '15px 0 30px' }}>
                  Get In Touch With Us
                </h2>
                {submitted ? (
                  <div style={{
                    background: '#f0fce6', border: '1px solid #A0C342', borderRadius: '8px',
                    padding: '25px', textAlign: 'center'
                  }}>
                    <div style={{ color: '#A0C342', fontSize: '40px', marginBottom: '10px' }}>✓</div>
                    <h3 style={{ color: '#16222D', marginBottom: '10px' }}>Message Sent!</h3>
                    <p style={{ color: '#696F6F' }}>Thank you for contacting us. We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      <div>
                        <label style={{ display: 'block', color: '#16222D', fontWeight: '600', fontSize: '14px', marginBottom: '8px' }}>Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          style={{
                            width: '100%', height: '55px', border: '1px solid #E4E4E4',
                            borderRadius: '5px', padding: '0 18px', fontSize: '15px',
                            color: '#16222D', outline: 'none', boxSizing: 'border-box',
                            fontFamily: 'inherit', background: '#fff'
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', color: '#16222D', fontWeight: '600', fontSize: '14px', marginBottom: '8px' }}>Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Your email"
                          style={{
                            width: '100%', height: '55px', border: '1px solid #E4E4E4',
                            borderRadius: '5px', padding: '0 18px', fontSize: '15px',
                            color: '#16222D', outline: 'none', boxSizing: 'border-box',
                            fontFamily: 'inherit', background: '#fff'
                          }}
                        />
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      <div>
                        <label style={{ display: 'block', color: '#16222D', fontWeight: '600', fontSize: '14px', marginBottom: '8px' }}>Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Your phone"
                          style={{
                            width: '100%', height: '55px', border: '1px solid #E4E4E4',
                            borderRadius: '5px', padding: '0 18px', fontSize: '15px',
                            color: '#16222D', outline: 'none', boxSizing: 'border-box',
                            fontFamily: 'inherit', background: '#fff'
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', color: '#16222D', fontWeight: '600', fontSize: '14px', marginBottom: '8px' }}>Subject</label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={e => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Message subject"
                          style={{
                            width: '100%', height: '55px', border: '1px solid #E4E4E4',
                            borderRadius: '5px', padding: '0 18px', fontSize: '15px',
                            color: '#16222D', outline: 'none', boxSizing: 'border-box',
                            fontFamily: 'inherit', background: '#fff'
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#16222D', fontWeight: '600', fontSize: '14px', marginBottom: '8px' }}>Message *</label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your message here..."
                        rows={5}
                        style={{
                          width: '100%', border: '1px solid #E4E4E4',
                          borderRadius: '5px', padding: '15px 18px', fontSize: '15px',
                          color: '#16222D', outline: 'none', resize: 'vertical',
                          boxSizing: 'border-box', fontFamily: 'inherit', background: '#fff'
                        }}
                      />
                    </div>
                    <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Right: Info + Hours */}
              <div>
                <div className="section-label">CONTACT INFO</div>
                <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#16222D', margin: '15px 0 25px' }}>
                  We&apos;d Love to Hear From You
                </h2>
                <p style={{ color: '#696F6F', lineHeight: '1.8', marginBottom: '35px' }}>
                  Have a question, need advice, or ready to start your financial journey? Our team of experts is here to help. Reach out and we&apos;ll respond promptly.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                  {[
                    { label: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
                    { label: 'Saturday', hours: '10:00 AM - 4:00 PM' },
                    { label: 'Sunday', hours: 'Closed' },
                  ].map((h) => (
                    <div key={h.label} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '18px 25px', background: '#fff', borderRadius: '8px',
                      border: '1px solid #E4E4E4'
                    }}>
                      <span style={{ fontWeight: '600', color: '#16222D' }}>{h.label}</span>
                      <span style={{ color: h.hours === 'Closed' ? '#ff6b6b' : '#A0C342', fontWeight: '700' }}>{h.hours}</span>
                    </div>
                  ))}
                </div>

                <div style={{
                  background: '#16222D', borderRadius: '8px', padding: '35px',
                  borderLeft: '4px solid #A0C342'
                }}>
                  <h3 style={{ color: '#fff', fontWeight: '700', fontSize: '20px', marginBottom: '12px' }}>
                    Need Urgent Help?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginBottom: '20px' }}>
                    For urgent financial matters, call us directly. Our senior advisors are available for emergency consultations.
                  </p>
                  <a href="tel:+14408488222" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    color: '#A0C342', fontWeight: '700', textDecoration: 'none'
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '18px', height: '18px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    +1 440 848 8222
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
