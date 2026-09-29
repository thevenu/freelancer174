import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-beige/90 backdrop-blur-md border-b border-beige-border transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-forest text-sage flex items-center justify-center font-bold text-lg font-heading shadow-md group-hover:scale-105 transition-transform">
            VJ
          </div>
          <div>
            <span className="font-heading font-bold text-lg text-forest tracking-tight block">
              Venu Jerripothu
            </span>
            <span className="text-[11px] text-charcoal/80 font-medium block">
              Social Media Content Creator
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-forest">
          <a href="#home" className="hover:text-charcoal-light transition-colors">Home</a>
          <a href="#about" className="hover:text-charcoal-light transition-colors">About</a>
          <a href="#portfolio" className="hover:text-charcoal-light transition-colors">Portfolio</a>
          <a href="#captions" className="hover:text-charcoal-light transition-colors">Captions</a>
          <a href="#reels" className="hover:text-charcoal-light transition-colors">Reels Scripts</a>
          <a href="#services" className="hover:text-charcoal-light transition-colors">Services</a>
          <a href="#pricing" className="hover:text-charcoal-light transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-charcoal-light transition-colors">Contact</a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="#contact" 
            className="bg-forest text-beige px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-forest-deep hover:shadow-lg transition-all transform active:scale-95"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-beige-border text-forest"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-beige-card border-b border-beige-border px-4 pt-3 pb-6 space-y-3">
          <a 
            href="#home" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-forest border-b border-beige-border/50"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-forest border-b border-beige-border/50"
          >
            About
          </a>
          <a 
            href="#portfolio" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-forest border-b border-beige-border/50"
          >
            Portfolio
          </a>
          <a 
            href="#captions" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-forest border-b border-beige-border/50"
          >
            Sample Captions
          </a>
          <a 
            href="#reels" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-forest border-b border-beige-border/50"
          >
            Reels Scripts
          </a>
          <a 
            href="#services" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-forest border-b border-beige-border/50"
          >
            Services
          </a>
          <a 
            href="#pricing" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-forest border-b border-beige-border/50"
          >
            Pricing
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-forest"
          >
            Contact
          </a>
          <div className="pt-2">
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full bg-forest text-beige py-3 rounded-full font-bold text-sm shadow-md"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
