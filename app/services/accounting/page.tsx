import React from 'react';
import ServicePageTemplate from '@/components/sections/ServicePageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accounting Services | GFCS Nepal',
  description: 'Reliable accounting and bookkeeping services for accurate financial reporting and business insights.',
};

export default function AccountingPage() {
  return (
    <ServicePageTemplate
      title="Accounting Services"
      subtitle="Reliable Accounting & Bookkeeping Excellence"
      overview="Our Accounting Services provide comprehensive financial record-keeping, reporting, and analysis. We ensure accurate, timely, and compliant accounting that gives you clear visibility into your financial position and supports informed decision-making."
      challenges={[
        {
          title: 'Accurate Record-Keeping',
          description: 'Maintaining systematic and error-free financial records across all business transactions.',
        },
        {
          title: 'Timely Financial Reporting',
          description: 'Generating accurate financial statements and reports when needed for decision-making.',
        },
        {
          title: 'Resource Constraints',
          description: 'Limited in-house accounting expertise or capacity to handle growing business complexity.',
        },
        {
          title: 'Compliance Requirements',
          description: 'Meeting accounting standards and regulatory reporting obligations consistently.',
        },
      ]}
      approach={[
        {
          title: 'System Setup & Assessment',
          description: 'Evaluation of current accounting systems and implementation of best practices and appropriate software solutions.',
        },
        {
          title: 'Daily Bookkeeping',
          description: 'Systematic recording of all financial transactions including accounts payable, receivable, and bank reconciliations.',
        },
        {
          title: 'Financial Statement Preparation',
          description: 'Monthly, quarterly, and annual preparation of balance sheets, income statements, and cash flow statements.',
        },
        {
          title: 'Analysis & Advisory',
          description: 'Financial ratio analysis, trend identification, and strategic recommendations based on your financial data.',
        },
      ]}
      benefits={[
        {
          title: 'Accurate Records',
          description: 'Error-free, systematic financial record-keeping you can trust.',
        },
        {
          title: 'Timely Reporting',
          description: 'Financial statements and reports delivered when you need them.',
        },
        {
          title: 'Business Insights',
          description: 'Clear visibility into financial performance and position.',
        },
        {
          title: 'Cost Efficiency',
          description: 'Professional accounting without full-time staff overhead.',
        },
      ]}
      testimonial={{
        quote: 'Outsourcing our accounting to GFCS was one of our best business decisions. Their team maintains impeccable records and provides monthly reports that help us make informed decisions.',
        author: 'Anil Thapa',
        company: 'Retail Chain',
      }}
    />
  );
}
