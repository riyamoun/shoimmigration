"use client";

import { Globe, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className={`p-2 rounded-lg transition-all duration-300 ${
            scrolled ? 'bg-slate-900' : 'bg-white/10 backdrop-blur'
          }`}>
            <Globe className={`w-6 h-6 ${scrolled ? 'text-gold' : 'text-gold'}`} />
          </div>
          <span className={`text-xl font-serif font-bold transition-colors duration-300 ${
            scrolled ? 'text-slate-900' : 'text-white'
          }`}>
            ShoImmigration
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'Services', 'About', 'Success Stories', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`text-sm font-medium transition-all duration-300 hover:text-gold relative group ${
                scrolled ? 'text-slate-700' : 'text-white/90'
              }`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="#contact"
            className="bg-gold hover:bg-gold-dark text-slate-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/25"
          >
            Free Assessment
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={scrolled ? 'text-slate-900' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl p-6">
          <nav className="flex flex-col gap-4">
            {['Home', 'Services', 'About', 'Success Stories', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-slate-700 font-medium py-2 hover:text-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-gold text-slate-900 font-semibold px-6 py-3 rounded-lg text-center mt-4"
            >
              Free Assessment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
