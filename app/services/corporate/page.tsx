import React from 'react';
import ServicePageTemplate from '@/components/sections/ServicePageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Services | GFCS Nepal',
  description: 'Complete corporate setup, governance, and compliance support for businesses in Nepal.',
};

export default function CorporatePage() {
  return (
    <ServicePageTemplate
      title="Corporate Services"
      subtitle="Complete Corporate Setup & Compliance Support"
      overview="Our Corporate Services provide end-to-end support for company formation, corporate governance, regulatory compliance, and administrative requirements. We guide you through Nepal's corporate regulatory landscape, ensuring your business operates with full legal compliance."
      challenges={[
        {
          title: 'Complex Registration Process',
          description: 'Navigating the multi-step company registration and licensing requirements in Nepal.',
        },
        {
          title: 'Ongoing Compliance',
          description: 'Meeting continuous reporting, filing, and renewal obligations with various government agencies.',
        },
        {
          title: 'Governance Requirements',
          description: 'Establishing proper board structures, maintaining corporate records, and conducting required meetings.',
        },
        {
          title: 'Regulatory Changes',
          description: 'Staying current with evolving corporate laws and compliance requirements.',
        },
      ]}
      approach={[
        {
          title: 'Corporate Structure Planning',
          description: 'Consultation on optimal business structure, share capital, and ownership arrangements.',
        },
        {
          title: 'Registration & Licensing',
          description: 'Complete handling of company registration with Office of Company Registrar and all necessary licensing.',
        },
        {
          title: 'Compliance Management',
          description: 'Ongoing management of annual returns, corporate filings, and regulatory obligations.',
        },
        {
          title: 'Governance Support',
          description: 'Assistance with board meetings, resolutions, minute-keeping, and statutory record maintenance.',
        },
      ]}
      benefits={[
        {
          title: 'Seamless Setup',
          description: 'Efficient company formation without regulatory delays.',
        },
        {
          title: 'Full Compliance',
          description: 'All corporate obligations met on time, every time.',
        },
        {
          title: 'Good Governance',
          description: 'Proper structures and processes for corporate management.',
        },
        {
          title: 'Expert Guidance',
          description: 'Professional support navigating Nepal\'s corporate regulations.',
        },
      ]}
      testimonial={{
        quote: 'GFCS handled our entire company registration process and continues to manage our compliance calendar. Their knowledge of Nepal corporate law saved us considerable time and ensured everything was done correctly.',
        author: 'David Chen',
        company: 'Foreign Investment Firm',
      }}
    />
  );
}
