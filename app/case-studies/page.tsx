import React from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | GFCS Nepal',
  description: 'Real results from our audit, tax advisory, accounting, and business consulting engagements.',
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      industry: 'Manufacturing Enterprise',
      service: 'Audit & Assurance',
      challenge: 'A mid-size manufacturing company faced challenges with internal control weaknesses and needed to strengthen financial governance to support expansion plans and attract institutional investors.',
      approach: 'GFCS conducted a comprehensive audit engagement including detailed internal control evaluation, process mapping, and implementation of control improvement recommendations.',
      outcome: 'Strengthened internal controls, achieved clean audit opinion, secured institutional investment, and established robust governance framework supporting sustainable growth.',
      metrics: ['100% compliance achieved', '30% reduction in control gaps', 'Secured institutional funding'],
    },
    {
      industry: 'Technology SME',
      service: 'Tax Advisory',
      challenge: 'A growing technology company struggled with complex tax compliance requirements and wanted to optimize their tax position while ensuring full regulatory adherence.',
      approach: 'Our tax team performed comprehensive tax position analysis, identified optimization opportunities, restructured tax planning approach, and implemented ongoing compliance management.',
      outcome: 'Achieved 15% reduction in effective tax rate through legitimate tax planning strategies while maintaining 100% compliance with Inland Revenue Department requirements.',
      metrics: ['15% tax exposure reduction', '100% on-time filing', 'Zero tax penalties'],
    },
    {
      industry: 'Retail Chain',
      service: 'Accounting Services',
      challenge: 'A multi-location retail business lacked systematic accounting processes, resulting in delayed financial reporting, reconciliation issues, and limited visibility into profitability by location.',
      approach: 'GFCS implemented cloud-based accounting system, established standardized processes across locations, trained staff, and provided ongoing bookkeeping and financial reporting services.',
      outcome: 'Real-time financial visibility across all locations, accurate monthly financial statements, improved cash management, and data-driven decision making capabilities.',
      metrics: ['Real-time reporting achieved', '95% reduction in reconciliation issues', 'Monthly closings in 5 days'],
    },
    {
      industry: 'Foreign Investment Firm',
      service: 'Corporate Services',
      challenge: 'An international company needed to establish presence in Nepal but faced complexity in company registration, licensing, and understanding ongoing compliance obligations.',
      approach: 'We provided end-to-end corporate services including structure consultation, complete registration handling, necessary licensing, and setup of compliance calendar with ongoing management.',
      outcome: 'Successful company establishment in 45 days, all licenses secured, compliant operations from day one, and ongoing compliance management ensuring zero regulatory issues.',
      metrics: ['45-day registration completion', '100% licensing success', 'Zero compliance penalties'],
    },
    {
      industry: 'Hospitality Group',
      service: 'Business Advisory',
      challenge: 'A hospitality group needed strategic guidance for expansion into new markets while managing operational challenges and capital constraints.',
      approach: 'GFCS developed detailed market analysis, financial feasibility models, phased expansion strategy, and provided ongoing advisory support during implementation.',
      outcome: 'Successful launch of three new properties with positive cash flow achieved within projected timelines, operational efficiency improvements, and sustainable growth trajectory.',
      metrics: ['3 new properties launched', 'ROI targets achieved', '25% operational efficiency gain'],
    },
  ];

  return (
    <main className="pt-20">
      <Section spacing="lg" background="white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Case Studies & Success Stories
            </h1>
            <p className="text-xl text-gray-600">
              Real results from our engagements across audit, tax advisory, accounting, corporate services, and business consulting.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <div className="text-sm text-blue-700 font-medium mb-2">{study.service}</div>
                    <h2 className="text-2xl font-bold text-gray-900">{study.industry}</h2>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      Challenge
                    </h3>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      GFCS Approach
                    </h3>
                    <p className="text-gray-700">{study.approach}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Outcome
                    </h3>
                    <p className="text-gray-700 mb-4">{study.outcome}</p>
                    <div className="flex flex-wrap gap-3">
                      {study.metrics.map((metric, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-green-50 text-green-800 text-sm font-medium rounded-full"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg" background="blue">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Let's discuss how our expertise can address your specific challenges and deliver measurable outcomes.
            </p>
            <Button href="/contact" size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
