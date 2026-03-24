'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'À Propos', href: '/a-propos' },
    { name: 'FAQ & Contact', href: '/contact#contact' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform',
          scrolled ? 'py-3' : 'py-5'
        )}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div
            className={cn(
              'flex items-center justify-between mx-auto max-w-7xl rounded-full transition-all duration-500 glassmorphism',
              scrolled ? 'px-6 py-3 shadow-soft' : 'px-4 py-3'
            )}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group relative z-50 w-[100px] h-10 md:w-[140px] md:h-14 overflow-hidden mix-blend-multiply">
              <Image 
                src="/logo.png" 
                alt="Boomi Logistique" 
                fill 
                className="object-contain object-center scale-[2.5] origin-center" 
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-brand-midnight/80 hover:text-brand-orange transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4 relative z-50">
              <Link
                href="/expedier"
                className="hidden md:flex items-center gap-2 bg-brand-midnight text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-brand-orange transition-all duration-300 shadow-soft hover:shadow-soft-hover hover:-translate-y-0.5"
              >
                Expédier un colis
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                className="md:hidden p-2 text-brand-midnight hover:text-brand-orange transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden flex flex-col"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-heading font-bold text-brand-midnight hover:text-brand-orange transition-colors border-b border-gray-100 pb-4"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/expedier"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 bg-brand-orange text-white px-6 py-4 rounded-xl font-bold text-lg"
              >
                Expédier un colis
                <ArrowRight className="w-5 h-5" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
