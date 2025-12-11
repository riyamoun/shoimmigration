"use client";

import { Globe, ChevronDown, Menu, X, Phone, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { countries } from '@/data/countries';

const MegaNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Countries', 
      href: '#',
      dropdown: true,
      megaMenu: true
    },
    { name: 'Services', href: '#services' },
    { name: 'Success Stories', href: '#testimonials' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+611234567890" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              +61 1234 567 890
            </a>
            <a href="mailto:info@shoimmigration.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-4 h-4" />
              info@shoimmigration.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/60">MARA Registered Agent</span>
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3' 
            : 'bg-slate-900/95 backdrop-blur-lg py-4'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className={`p-2 rounded-lg transition-all duration-300 ${
                scrolled ? 'bg-slate-900' : 'bg-gold/20'
              }`}>
                <Globe className="w-6 h-6 text-gold" />
              </div>
              <div>
                <span className={`text-xl font-serif font-bold transition-colors duration-300 ${
                  scrolled ? 'text-slate-900' : 'text-white'
                }`}>
                  ShoImmigration
                </span>
                <span className={`block text-xs ${scrolled ? 'text-slate-500' : 'text-white/60'}`}>
                  Global Migration Experts
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div 
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.megaMenu && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      scrolled 
                        ? 'text-slate-700 hover:text-gold hover:bg-slate-100' 
                        : 'text-white/90 hover:text-gold hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Mega Menu for Countries */}
                  {item.megaMenu && activeDropdown === item.name && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 mt-2">
                      <div className="grid grid-cols-3 gap-6">
                        {countries.map((country) => (
                          <Link
                            key={country.slug}
                            href={`/country/${country.slug}`}
                            className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <span className="text-3xl">{country.flag}</span>
                            <div className="flex-1">
                              <h4 className="font-semibold text-slate-900 group-hover/item:text-gold transition-colors">
                                {country.name}
                              </h4>
                              <p className="text-xs text-slate-500 mb-2">{country.tagline}</p>
                              <div className="flex flex-wrap gap-1">
                                {country.subLinks.slice(0, 3).map((link) => (
                                  <span 
                                    key={link.slug}
                                    className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                                  >
                                    {link.name}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
                        <span className="text-sm text-slate-500">
                          Can't find your destination?
                        </span>
                        <Link 
                          href="#contact"
                          className="text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
                        >
                          Contact our experts →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link 
                href="#contact"
                className="bg-gold hover:bg-gold-dark text-slate-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/25"
              >
                Free Assessment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={scrolled ? 'text-slate-900' : 'text-white'} size={24} />
              ) : (
                <Menu className={scrolled ? 'text-slate-900' : 'text-white'} size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t">
            <div className="container mx-auto px-6 py-6">
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block py-3 text-slate-700 font-medium hover:text-gold transition-colors"
                      onClick={() => !item.megaMenu && setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.megaMenu && (
                      <div className="pl-4 space-y-1 mt-2">
                        {countries.map((country) => (
                          <Link
                            key={country.slug}
                            href={`/country/${country.slug}`}
                            className="flex items-center gap-2 py-2 text-slate-600 hover:text-gold transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span>{country.flag}</span>
                            <span>{country.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-6 pt-6 border-t">
                <Link 
                  href="#contact"
                  className="block w-full bg-gold text-slate-900 font-semibold px-6 py-3 rounded-lg text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Free Assessment
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default MegaNavbar;

