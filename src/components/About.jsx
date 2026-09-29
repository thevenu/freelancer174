import React from 'react';
import { Bot, PenTool, Clapperboard, Calendar, Palette, Languages } from 'lucide-react';
import { creatorInfo } from '../data/portfolioData';

export default function About() {
  const iconMap = {
    Bot: <Bot className="w-6 h-6" />,
    PenTool: <PenTool className="w-6 h-6" />,
    Clapperboard: <Clapperboard className="w-6 h-6" />,
    Calendar: <Calendar className="w-6 h-6" />,
    Palette: <Palette className="w-6 h-6" />,
    Languages: <Languages className="w-6 h-6" />
  };

  return (
    <section id="about" className="py-20 bg-beige-card border-y border-beige-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-extrabold tracking-widest uppercase text-forest bg-sage px-3 py-1 rounded-full">
            Story & Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-forest font-heading">
            {creatorInfo.aboutTitle}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            {creatorInfo.aboutDescription}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {creatorInfo.skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-beige p-6 rounded-3xl border border-beige-border hover:border-sage hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-forest text-sage flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                {iconMap[skill.icon] || <PenTool className="w-6 h-6" />}
              </div>
              <h3 className="text-lg font-bold text-forest mb-2 font-heading">{skill.title}</h3>
              <p className="text-sm text-charcoal-light leading-normal">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
