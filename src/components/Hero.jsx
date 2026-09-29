import React from 'react';
import { Sparkles, ArrowRight, MapPin, Briefcase, UserCheck } from 'lucide-react';
import { creatorInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Bio Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sage text-forest font-bold text-xs uppercase tracking-wider border border-sage-border shadow-sm">
              <span className="w-2 h-2 rounded-full bg-forest animate-ping"></span>
              Available for Client Projects
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-forest font-heading tracking-tight leading-[1.15]">
              Creative Social Media Content That Helps Your Brand <span className="underline decoration-sage decoration-wavy decoration-2">Stand Out</span>.
            </h1>

            <p className="text-lg md:text-xl text-charcoal-light font-normal leading-relaxed max-w-2xl">
              {creatorInfo.subheadline}
            </p>

            {/* Metadata Card: Name, Role, Location */}
            <div className="bg-white/80 backdrop-blur border border-beige-border p-4 sm:p-5 rounded-2xl shadow-sm inline-flex flex-wrap gap-6 items-center">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-forest/70 block">Creator</span>
                <span className="text-base font-bold text-forest block">{creatorInfo.name}</span>
              </div>
              <div className="h-8 w-[1px] bg-beige-border hidden sm:block"></div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-forest/70 block">Specialization</span>
                <span className="text-base font-semibold text-forest block">{creatorInfo.role}</span>
              </div>
              <div className="h-8 w-[1px] bg-beige-border hidden sm:block"></div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-forest/70 block">Location</span>
                <span className="text-base font-semibold text-forest block flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-forest" /> {creatorInfo.location}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#portfolio" 
                className="bg-forest text-beige px-8 py-3.5 rounded-full font-bold text-base hover:bg-forest-deep transition shadow-md hover:shadow-xl transform active:scale-95"
              >
                View My Portfolio
              </a>
              <a 
                href="#contact" 
                className="bg-sage text-forest border border-sage-border px-8 py-3.5 rounded-full font-bold text-base hover:bg-sage-light transition shadow-sm hover:shadow-md transform active:scale-95"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* Right Column: Creative Workspace Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Background Blob */}
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-sage/50 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-forest/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-beige-card">
                <img 
                  src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=900&q=80" 
                  alt="Creative workspace of social media content creator"
                  className="w-full h-[430px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="inline-flex items-center gap-2 bg-sage text-forest px-3 py-1 rounded-full text-xs font-extrabold w-max mb-2">
                    ⚡ AI + Human Storytelling
                  </div>
                  <h3 className="text-xl font-bold font-heading">
                    Crafting high-engagement content for Indian businesses.
                  </h3>
                  <p className="text-xs text-sage-light mt-1">
                    Tailored captions, hooks, and calendars ready for execution.
                  </p>
                </div>
              </div>

              {/* Floating Micro Card */}
              <div className="absolute -bottom-5 -left-5 sm:left-4 bg-white/95 backdrop-blur-md border border-beige-border p-3.5 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-forest text-sage flex items-center justify-center font-bold text-lg">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-forest">Smart Copywriting</p>
                  <p className="text-[11px] text-charcoal-light">English & Telugu Localization</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
