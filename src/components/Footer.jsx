import React from 'react';
import { Mail, Instagram, MapPin } from 'lucide-react';
import { creatorInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-forest text-beige pt-16 pb-12 border-t border-forest-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Creator Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sage text-forest flex items-center justify-center font-bold text-lg font-heading">
                VJ
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-white">{creatorInfo.name}</h4>
                <p className="text-xs text-sage font-medium">{creatorInfo.role}</p>
              </div>
            </div>
            <p className="text-xs text-sage-light/80 leading-relaxed max-w-sm">
              Helping businesses create engaging social media posts, captions, Reels scripts, and strategic calendars using AI-assisted creativity from Hyderabad, India.
            </p>
            <div className="text-xs text-sage flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> {creatorInfo.location}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-sage">
              Navigation
            </h5>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#home" className="hover:text-sage transition">Home</a>
              <a href="#about" className="hover:text-sage transition">About Me</a>
              <a href="#portfolio" className="hover:text-sage transition">Portfolio (3 Projects)</a>
              <a href="#captions" className="hover:text-sage transition">Sample Captions</a>
              <a href="#reels" className="hover:text-sage transition">Reels Scripts</a>
              <a href="#services" className="hover:text-sage transition">Services</a>
              <a href="#pricing" className="hover:text-sage transition">Pricing Plans</a>
              <a href="#contact" className="hover:text-sage transition">Hire Me</a>
            </div>
          </div>

          {/* Social Placeholders */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-sage">
              Connect & Inquire
            </h5>
            <div className="space-y-2 text-xs">
              <a 
                href={`mailto:${creatorInfo.email}`} 
                className="flex items-center gap-2 text-sage-light hover:text-white transition"
              >
                <Mail className="w-4 h-4 text-sage" />
                <span>{creatorInfo.email}</span>
              </a>
              <a 
                href={creatorInfo.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sage-light hover:text-white transition"
              >
                <Instagram className="w-4 h-4 text-sage" />
                <span>{creatorInfo.instagram}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-sage-light/60 gap-4">
          <p>© {new Date().getFullYear()} {creatorInfo.name}. All rights reserved.</p>
          <p>Designed with Forest Green, Sage Green & Warm Beige Palette.</p>
        </div>

      </div>
    </footer>
  );
}
