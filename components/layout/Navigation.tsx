'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      submenu: [
        { name: 'Audit & Assurance', href: '/services/audit' },
        { name: 'Tax Advisory', href: '/services/tax' },
        { name: 'Accounting Services', href: '/services/accounting' },
        { name: 'Corporate Services', href: '/services/corporate' },
        { name: 'Business Advisory', href: '/services/advisory' },
      ],
    },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Publications', href: '/publications' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-800 shadow-md text-white' : 'bg-blue-700 text-white'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="GFCS" className="h-[40px] w-auto object-contain" />
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-white hover:text-blue-200 transition-colors duration-200"
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <div className="absolute left-0 mt-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white shadow-lg rounded-md overflow-hidden">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-slate-50 hover:text-slate-800 transition-colors"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button href="/contact" size="sm" variant="secondary">
              Request Consultation
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-blue-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-blue-700 border-t border-blue-800 text-white">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="block px-4 py-2 text-sm font-medium text-white hover:bg-blue-600/10 hover:text-blue-100 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <div className="ml-4 space-y-1">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block px-4 py-2 text-xs text-white hover:bg-blue-600/10 hover:text-blue-100 rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button href="/contact" size="md" variant="secondary" className="w-full">
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
