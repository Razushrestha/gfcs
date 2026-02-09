import React from 'react';
import TeamContent from '@/components/sections/TeamContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | GFCS Nepal',
  description: 'Meet our experienced team of chartered accountants, tax advisors, and business consultants.',
};

export default function TeamPage() {
  return <TeamContent />;
}
