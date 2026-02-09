import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'blue';
  spacing?: 'sm' | 'md' | 'lg';
  id?: string;
}

export default function Section({
  children,
  className = '',
  background = 'white',
  spacing = 'lg',
  id,
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-blue-50',
  };

  const spacings = {
    sm: 'py-12 sm:py-16',
    md: 'py-16 sm:py-20',
    lg: 'py-20 sm:py-24 lg:py-32',
  };

  return (
    <section id={id} className={`${backgrounds[background]} ${spacings[spacing]} ${className}`}>
      {children}
    </section>
  );
}
