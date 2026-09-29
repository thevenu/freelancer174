import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { sampleProjects } from '../data/portfolioData';

export default function Portfolio({ onSelectProject }) {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-fictional text-xs font-bold uppercase tracking-wider mb-3">
              <span>📌</span> Fictional Sample Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-forest font-heading">
              Featured Brand Concepts
            </h2>
            <p className="text-base text-charcoal-light mt-2 max-w-xl">
              Explore detailed sample campaigns demonstrating complete social media content suites crafted for specific business industries.
            </p>
          </div>
          <div className="text-xs text-forest/70 bg-white/70 px-4 py-2 rounded-xl border border-beige-border">
            *All 3 projects are realistic mockups created to demonstrate content strategy.
          </div>
        </div>

        {/* 3 Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sampleProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-3xl border border-beige-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.coverImage} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 flex flex-col gap-1 items-start">
                  <span className="bg-forest text-sage text-xs font-bold px-3 py-1 rounded-full shadow">
                    {project.industry}
                  </span>
                  <span className="badge-fictional bg-beige/95 text-forest text-[10px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur">
                    Fictional Sample
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-forest font-heading mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-charcoal-light italic mb-3">
                    "{project.tagline}"
                  </p>
                  <p className="text-xs text-charcoal mb-4">
                    <strong>Goal:</strong> {project.goal}
                  </p>

                  {/* Content Examples snippet */}
                  <div className="space-y-2 mb-4 bg-beige-card p-3 rounded-xl border border-beige-border">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-forest block">
                      Sample Copy Snippet:
                    </span>
                    <p className="text-xs text-charcoal-light italic line-clamp-2">
                      "{project.posts[0].caption}"
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-1.5 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-forest block">
                      Deliverables Included:
                    </span>
                    <div className="grid grid-cols-2 gap-1 text-[11px] text-charcoal-light">
                      {project.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-1 truncate">
                          <Check className="w-3.5 h-3.5 text-forest flex-shrink-0" />
                          <span className="truncate">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* View Project Button */}
                <div className="pt-2">
                  <button 
                    onClick={() => onSelectProject(project)}
                    className="w-full bg-forest text-beige py-3 rounded-xl font-bold text-sm hover:bg-forest-deep transition shadow flex items-center justify-center gap-2 group-hover:bg-sage group-hover:text-forest"
                  >
                    <span>View Project Suite</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
