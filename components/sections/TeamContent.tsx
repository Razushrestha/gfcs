'use client';

import React, { useState } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  expertise: string;
  bio: string;
  experience: string;
  specializations: string[];
  email: string;
  linkedin?: string;
  image: string;
}

export default function TeamContent() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Ramesh K. Shrestha',
      designation: 'Founding Partner & CEO',
      expertise: 'Audit & Corporate Governance',
      bio: 'Ramesh brings over 20 years of experience in audit, assurance, and corporate governance. A chartered accountant with extensive knowledge of Nepal\'s regulatory framework, he has led audit engagements for some of the country\'s largest enterprises and financial institutions.',
      experience: '20+ years',
      specializations: ['Statutory Audit', 'Internal Controls', 'Corporate Governance', 'Risk Management'],
      email: 'ramesh.shrestha@gfcs.com.np',
      linkedin: '#',
      image: '/team/ramesh.jpg',
    },
    {
      id: '2',
      name: 'Sunita Tamang',
      designation: 'Partner - Tax Advisory',
      expertise: 'Corporate Tax & Compliance',
      bio: 'Sunita specializes in corporate tax planning, international taxation, and transfer pricing. With 15+ years advising multinational corporations and domestic enterprises, she provides strategic tax solutions that optimize outcomes while ensuring full regulatory compliance.',
      experience: '15+ years',
      specializations: ['Corporate Tax Planning', 'International Taxation', 'Transfer Pricing', 'Tax Disputes'],
      email: 'sunita.tamang@gfcs.com.np',
      linkedin: '#',
      image: '/team/sunita.jpg',
    },
    {
      id: '3',
      name: 'Anil Bajracharya',
      designation: 'Partner - Business Advisory',
      expertise: 'Strategy & Financial Planning',
      bio: 'Anil is a seasoned business advisor with expertise in growth strategy, financial modeling, and business restructuring. He has successfully guided numerous businesses through expansion, turnaround, and transformation initiatives across diverse industries.',
      experience: '18+ years',
      specializations: ['Growth Strategy', 'Financial Modeling', 'Business Restructuring', 'M&A Advisory'],
      email: 'anil.bajracharya@gfcs.com.np',
      linkedin: '#',
      image: '/team/anil.jpg',
    },
    {
      id: '4',
      name: 'Meera Rana',
      designation: 'Senior Manager - Accounting',
      expertise: 'Financial Reporting & Systems',
      bio: 'Meera leads our accounting services team with a focus on financial reporting, accounting systems implementation, and process optimization. Her attention to detail and systematic approach ensure clients receive accurate, timely financial information.',
      experience: '12+ years',
      specializations: ['Financial Reporting', 'Accounting Systems', 'Process Improvement', 'Internal Controls'],
      email: 'meera.rana@gfcs.com.np',
      image: '/team/meera.jpg',
    },
    {
      id: '5',
      name: 'Prakash Adhikari',
      designation: 'Senior Manager - Corporate Services',
      expertise: 'Corporate Law & Compliance',
      bio: 'Prakash specializes in corporate law, company formation, and regulatory compliance. His comprehensive understanding of Nepal\'s corporate regulatory environment helps clients navigate complex legal and administrative requirements efficiently.',
      experience: '14+ years',
      specializations: ['Company Formation', 'Corporate Compliance', 'Board Governance', 'Regulatory Filings'],
      email: 'prakash.adhikari@gfcs.com.np',
      image: '/team/prakash.jpg',
    },
    {
      id: '6',
      name: 'Rita Gurung',
      designation: 'Manager - Audit & Assurance',
      expertise: 'Financial Audit & Internal Controls',
      bio: 'Rita brings strong analytical skills and meticulous attention to detail to every audit engagement. She has conducted numerous statutory audits across various sectors and specializes in internal control evaluation and improvement.',
      experience: '10+ years',
      specializations: ['Statutory Audit', 'Internal Audit', 'Controls Testing', 'Risk Assessment'],
      email: 'rita.gurung@gfcs.com.np',
      image: '/team/rita.jpg',
    },
    {
      id: '7',
      name: 'Navaraj Regmi',
      designation: 'Chief Executive Officer (CEO)',
      expertise: 'Executive Leadership',
      bio: 'Navaraj leads GFCS strategic direction and operations, with 15 years driving growth and client success.',
      experience: '15 years',
      specializations: ['Strategic Planning', 'Operations Management', 'Client Relations'],
      email: 'navaraj.regmi@gfcsnepal.com',
      image: '/team/navaraj.jpg',
    },
    {
      id: '8',
      name: 'Ramhari Khanal',
      designation: 'Managing Director & Founder',
      expertise: 'Firm Leadership',
      bio: 'Ramhari is the founding force behind GFCS and brings 25 years of leadership, business development and regulatory expertise.',
      experience: '25+ years',
      specializations: ['Business Development', 'Regulatory Affairs', 'Firm Strategy'],
      email: 'ramhari@gfcsnepal.com',
      image: '/team/ramhari.jpg',
    },
    {
      id: '9',
      name: 'Susmita Neupane',
      designation: 'Corporate Affairs Manager',
      expertise: 'Corporate Affairs & Compliance',
      bio: 'Susmita manages corporate affairs and regulatory relationships, ensuring smooth compliance and stakeholder communication.',
      experience: '3+ years',
      specializations: ['Corporate Compliance', 'Stakeholder Relations'],
      email: 'susmita.neupane@gfcsnepal.com',
      image: '/team/susmita.jpg',
    },
    {
      id: '10',
      name: 'Sushma Adhakari',
      designation: 'Corporate Lawyer',
      expertise: 'Corporate Law',
      bio: 'Sushma advises on corporate legal matters, contracts and compliance with a practical, solutions-focused approach.',
      experience: '2+ years',
      specializations: ['Corporate Law', 'Contract Review', 'Regulatory Compliance'],
      email: 'sushma.adhakari@gfcsnepal.com',
      image: '/team/sushma-adhakari.jpg',
    },
    {
      id: '11',
      name: 'Ambika Poudel',
      designation: 'Office Assistant',
      expertise: 'Office Administration',
      bio: 'Ambika supports day-to-day office operations and client coordination to keep the firm running smoothly.',
      experience: '2+ years',
      specializations: ['Office Administration', 'Client Support'],
      email: 'ambika.poudel@gfcsnepal.com',
      image: '/team/ambika.jpg',
    },
    {
      id: '12',
      name: 'Jamuna Poudel',
      designation: 'Account Officer',
      expertise: 'Accounting Operations',
      bio: 'Jamuna handles transactional accounting and assists with monthly financial reporting.',
      experience: '2+ years',
      specializations: ['Accounts Payable', 'Bookkeeping'],
      email: 'jamuna.poudel@gfcsnepal.com',
      image: '/team/jamuna.jpg',
    },
    {
      id: '13',
      name: 'Nil Bahadur Khadka',
      designation: 'Account Manager',
      expertise: 'Client Accounts & Reporting',
      bio: 'Nil manages client accounts and ensures timely financial reporting and reconciliations.',
      experience: '2+ years',
      specializations: ['Financial Reporting', 'Client Accounting'],
      email: 'nilbahadur.khadka@gfcsnepal.com',
      image: '/team/nilbahadur.jpg',
    },
    {
      id: '14',
      name: 'Kabita Neupane',
      designation: 'HR Manager',
      expertise: 'Human Resources',
      bio: 'Kabita leads HR initiatives including recruitment, employee relations and HR policy implementation.',
      experience: '7+ years',
      specializations: ['Recruitment', 'Employee Relations', 'HR Policy'],
      email: 'kabita.neupane@gfcsnepal.com',
      image: '/team/kabita.jpg',
    },
    {
      id: '15',
      name: 'Shila Adhakari',
      designation: 'Account Officer',
      expertise: 'Accounting Operations',
      bio: 'Shila supports accounting processes and month-end close activities for client accounts.',
      experience: '2+ years',
      specializations: ['Bookkeeping', 'Reconciliations'],
      email: 'shila.adhakari@gfcsnepal.com',
      image: '/team/shila.jpg',
    },
    {
      id: '16',
      name: 'Shushma Basnet',
      designation: 'Finance Manager',
      expertise: 'Financial Management',
      bio: 'Shushma oversees financial planning, budgeting and internal financial controls.',
      experience: '3+ years',
      specializations: ['Budgeting', 'Financial Controls', 'Management Reporting'],
      email: 'shushma.basnet@gfcsnepal.com',
      image: '/team/shushma.jpg',
    },
    {
      id: '17',
      name: 'Rabina Amgain',
      designation: 'Account Manager',
      expertise: 'Client Accounting',
      bio: 'Rabina manages client relationships and ensures accurate, timely delivery of accounting services.',
      experience: '3+ years',
      specializations: ['Client Accounting', 'Financial Reporting'],
      email: 'rabina.amgain@gfcsnepal.com',
      image: '/team/rabina.jpg',
    },
  ];

  return (
    <>
      <main className="pt-20">
        <Section spacing="lg" background="white">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Our Leadership Team
              </h1>
              <p className="text-xl text-gray-600">
                Experienced professionals dedicated to delivering excellence in financial advisory services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="aspect-square bg-gray-200 flex items-center justify-center">
                    <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-sm text-blue-700 font-medium mb-2">{member.designation}</p>
                    <p className="text-sm text-gray-600 mb-4">{member.expertise}</p>
                    <button className="text-blue-700 text-sm font-medium hover:text-blue-800">
                      View Profile →
                    </button>
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
                Work with Nepal's Leading Financial Experts
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Our team combines decades of experience with deep expertise in Nepal's regulatory and business environment.
              </p>
              <Button href="/contact" size="lg">
                Schedule a Consultation
              </Button>
            </div>
          </Container>
        </Section>
      </main>

      {selectedMember && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">{selectedMember.name}</h2>
                    <p className="text-blue-700 font-medium mb-2">{selectedMember.designation}</p>
                    <p className="text-sm text-gray-600">{selectedMember.experience} of experience</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Bio</h3>
                <p className="text-gray-700 leading-relaxed">{selectedMember.bio}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.specializations.map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-6 border-t">
                <a
                  href={`mailto:${selectedMember.email}`}
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-700"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
                {selectedMember.linkedin && (
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-700"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
