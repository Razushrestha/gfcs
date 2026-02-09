import React from 'react';
import ServicePageTemplate from '@/components/sections/ServicePageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Audit & Assurance Services | GFCS Nepal',
  description: 'Comprehensive audit and assurance services ensuring regulatory compliance, financial transparency, and stakeholder confidence in Nepal.',
};

export default function AuditPage() {
  return (
    <ServicePageTemplate
      title="Audit & Assurance"
      subtitle="Ensuring Compliance, Transparency, and Stakeholder Confidence"
      overview="Our Audit & Assurance services provide comprehensive examination of your financial statements and internal controls. We ensure regulatory compliance with Nepal's accounting standards while delivering insights that enhance transparency, governance, and stakeholder confidence."
      challenges={[
        {
          title: 'Compliance Risks',
          description: 'Navigating complex regulatory requirements and staying current with evolving accounting standards in Nepal.',
        },
        {
          title: 'Financial Transparency',
          description: 'Ensuring accurate and reliable financial reporting that meets stakeholder expectations and regulatory mandates.',
        },
        {
          title: 'Stakeholder Confidence',
          description: 'Building trust with investors, lenders, and regulators through credible financial assurance.',
        },
        {
          title: 'Regulatory Audits',
          description: 'Preparing for and successfully managing statutory and regulatory audit requirements.',
        },
      ]}
      approach={[
        {
          title: 'Planning & Risk Assessment',
          description: 'We begin with a thorough understanding of your business, industry, and specific audit requirements. Our team identifies key risk areas and develops a tailored audit plan.',
        },
        {
          title: 'Internal Controls Evaluation',
          description: 'Comprehensive review of your internal control systems to identify strengths and areas for improvement, ensuring operational effectiveness.',
        },
        {
          title: 'Substantive Testing',
          description: 'Detailed examination of financial transactions, account balances, and supporting documentation using professional audit procedures.',
        },
        {
          title: 'Analysis & Reporting',
          description: 'We analyze findings, document observations, and prepare comprehensive audit reports with actionable recommendations.',
        },
        {
          title: 'Management Discussion',
          description: 'In-depth discussions with management to review findings, clarify issues, and collaborate on implementation of improvements.',
        },
      ]}
      benefits={[
        {
          title: 'Regulatory Compliance',
          description: 'Full adherence to Nepal Accounting Standards and regulatory requirements.',
        },
        {
          title: 'Improved Governance',
          description: 'Strengthened internal controls and corporate governance practices.',
        },
        {
          title: 'Risk Mitigation',
          description: 'Identification and management of financial and operational risks.',
        },
        {
          title: 'Credible Reporting',
          description: 'Reliable financial statements that build stakeholder confidence.',
        },
      ]}
      testimonial={{
        quote: 'GFCS provided thorough audit services that not only ensured our compliance but also identified areas for operational improvement. Their team is professional, detail-oriented, and truly understands Nepal\'s regulatory environment.',
        author: 'Rajesh Sharma',
        company: 'Manufacturing Enterprise',
      }}
    />
  );
}
