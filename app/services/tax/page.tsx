import React from 'react';
import ServicePageTemplate from '@/components/sections/ServicePageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tax Advisory Services | GFCS Nepal',
  description: 'Strategic tax planning and compliance solutions for optimal financial outcomes in Nepal.',
};

export default function TaxPage() {
  return (
    <ServicePageTemplate
      title="Tax Advisory"
      subtitle="Strategic Tax Planning & Compliance Solutions"
      overview="Our Tax Advisory services provide comprehensive tax planning, compliance, and optimization strategies tailored to Nepal's tax landscape. We help businesses minimize tax exposure while maintaining full regulatory compliance with Inland Revenue Department requirements."
      challenges={[
        {
          title: 'Complex Tax Regulations',
          description: 'Navigating Nepal\'s evolving tax laws, regulations, and filing requirements for businesses.',
        },
        {
          title: 'Tax Optimization',
          description: 'Balancing tax efficiency with compliance obligations to minimize overall tax burden.',
        },
        {
          title: 'Multinational Compliance',
          description: 'Managing cross-border tax implications and transfer pricing requirements.',
        },
        {
          title: 'Tax Audits & Disputes',
          description: 'Responding to tax authority inquiries and resolving disputes effectively.',
        },
      ]}
      approach={[
        {
          title: 'Tax Position Analysis',
          description: 'Comprehensive review of your current tax position, obligations, and potential exposure areas.',
        },
        {
          title: 'Strategic Tax Planning',
          description: 'Development of tax-efficient strategies aligned with your business objectives and growth plans.',
        },
        {
          title: 'Compliance Management',
          description: 'Preparation and filing of all required tax returns, ensuring accuracy and timely submission.',
        },
        {
          title: 'Advisory & Representation',
          description: 'Expert guidance on tax matters and representation before the Inland Revenue Department when needed.',
        },
      ]}
      benefits={[
        {
          title: 'Tax Efficiency',
          description: 'Optimized tax strategies that minimize liability within legal framework.',
        },
        {
          title: 'Regulatory Compliance',
          description: 'Full adherence to Nepal tax laws and filing requirements.',
        },
        {
          title: 'Risk Management',
          description: 'Proactive identification and mitigation of tax-related risks.',
        },
        {
          title: 'Strategic Insights',
          description: 'Tax planning aligned with business strategy and growth objectives.',
        },
      ]}
      testimonial={{
        quote: 'GFCS helped us navigate complex corporate tax requirements and identified legitimate tax savings we were unaware of. Their expertise in Nepal tax law is outstanding.',
        author: 'Sita Adhikari',
        company: 'Technology SME',
      }}
    />
  );
}
