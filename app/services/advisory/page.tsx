import React from 'react';
import ServicePageTemplate from '@/components/sections/ServicePageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Advisory Services | GFCS Nepal',
  description: 'Strategic guidance for business growth, restructuring, and operational excellence in Nepal.',
};

export default function AdvisoryPage() {
  return (
    <ServicePageTemplate
      title="Business Advisory"
      subtitle="Strategic Guidance for Growth & Excellence"
      overview="Our Business Advisory services provide strategic counsel on growth, financial planning, restructuring, and operational improvement. We partner with leadership teams to develop and execute strategies that drive sustainable business success in Nepal's dynamic market."
      challenges={[
        {
          title: 'Growth Strategy',
          description: 'Developing sustainable growth plans in competitive and evolving market conditions.',
        },
        {
          title: 'Financial Planning',
          description: 'Creating realistic budgets, forecasts, and financial models to guide decision-making.',
        },
        {
          title: 'Operational Efficiency',
          description: 'Identifying and addressing inefficiencies that impact profitability and performance.',
        },
        {
          title: 'Business Restructuring',
          description: 'Navigating organizational changes, mergers, or turnaround situations effectively.',
        },
      ]}
      approach={[
        {
          title: 'Business Assessment',
          description: 'Comprehensive analysis of your current position, challenges, and opportunities.',
        },
        {
          title: 'Strategy Development',
          description: 'Collaborative development of actionable strategies aligned with your objectives and market realities.',
        },
        {
          title: 'Financial Modeling',
          description: 'Creation of detailed financial projections, scenarios, and decision-support models.',
        },
        {
          title: 'Implementation Support',
          description: 'Ongoing advisory support during strategy execution, with monitoring and course correction as needed.',
        },
      ]}
      benefits={[
        {
          title: 'Strategic Clarity',
          description: 'Clear roadmap for achieving business objectives.',
        },
        {
          title: 'Informed Decisions',
          description: 'Data-driven insights supporting critical business choices.',
        },
        {
          title: 'Operational Excellence',
          description: 'Improved efficiency and performance across operations.',
        },
        {
          title: 'Sustainable Growth',
          description: 'Strategies built for long-term success and scalability.',
        },
      ]}
      testimonial={{
        quote: 'During a challenging expansion phase, GFCS provided strategic advisory that helped us navigate market complexities and make sound investment decisions. Their business acumen is exceptional.',
        author: 'Priya Rana',
        company: 'Hospitality Group',
      }}
    />
  );
}
