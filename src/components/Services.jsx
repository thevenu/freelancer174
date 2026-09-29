import React from 'react';
import { PenTool, Clapperboard, Calendar, Palette } from 'lucide-react';
import { services } from '../data/portfolioData';

export default function Services() {
  const iconMap = {
    PenTool: <PenTool className="w-7 h-7" />,
    Clapperboard: <Clapperboard className="w-7 h-7" />,
    Calendar: <Calendar className="w-7 h-7" />,
    Palette: <Palette className="w-7 h-7" />
  };

  return (
    <section id="services" className="py-20 bg-beige-card border-y border-beige-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-extrabold tracking-widest uppercase text-forest bg-sage px-3 py-1 rounded-full">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-forest font-heading mt-2">
            Services Designed For Growth
          </h2>
          <p className="text-base text-charcoal-light mt-2">
            Delivering end-to-end creative social media assets so you can focus on running your business.
          </p>
        </div>

        {/* 4 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-beige p-7 rounded-3xl border border-beige-border hover:border-forest hover:shadow-xl transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-forest text-sage flex items-center justify-center font-bold mb-5 shadow">
                  {iconMap[service.icon] || <PenTool className="w-7 h-7" />}
                </div>
                <h3 className="text-xl font-bold text-forest font-heading mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {service.description}
                </p>
              </div>
              <ul className="text-xs text-forest space-y-1.5 pt-2 border-t border-beige-border">
                {service.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>• {bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
