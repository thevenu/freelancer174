import React, { useState, useMemo } from 'react';
import { Copy } from 'lucide-react';
import { sampleCaptions } from '../data/portfolioData';

export default function Captions({ onCopy }) {
  const [captionFilter, setCaptionFilter] = useState("all");

  const filteredCaptions = useMemo(() => {
    if (captionFilter === "all") return sampleCaptions;
    return sampleCaptions.filter(c => c.category === captionFilter);
  }, [captionFilter]);

  return (
    <section id="captions" className="py-20 bg-beige-card border-y border-beige-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-extrabold tracking-widest uppercase text-forest bg-sage px-3 py-1 rounded-full">
              Plug & Play Copy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-forest font-heading mt-2">
              Social Media Captions Gallery
            </h2>
            <p className="text-base text-charcoal-light mt-2 max-w-xl">
              Browse 10 sample high-converting social media captions with targeted hashtags. Click any button to instantly copy to your clipboard!
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button 
              onClick={() => setCaptionFilter("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                captionFilter === "all" 
                  ? "bg-forest text-sage shadow" 
                  : "bg-white text-forest border border-beige-border hover:bg-sage/40"
              }`}
            >
              All (10)
            </button>
            <button 
              onClick={() => setCaptionFilter("food")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                captionFilter === "food" 
                  ? "bg-forest text-sage shadow" 
                  : "bg-white text-forest border border-beige-border hover:bg-sage/40"
              }`}
            >
              Café / Food
            </button>
            <button 
              onClick={() => setCaptionFilter("fashion")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                captionFilter === "fashion" 
                  ? "bg-forest text-sage shadow" 
                  : "bg-white text-forest border border-beige-border hover:bg-sage/40"
              }`}
            >
              Fashion
            </button>
            <button 
              onClick={() => setCaptionFilter("realestate")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                captionFilter === "realestate" 
                  ? "bg-forest text-sage shadow" 
                  : "bg-white text-forest border border-beige-border hover:bg-sage/40"
              }`}
            >
              Real Estate
            </button>
          </div>
        </div>

        {/* 10 Captions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCaptions.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-3xl p-6 border border-beige-border shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 relative"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold bg-sage text-forest px-3 py-0.5 rounded-full">
                    {item.business}
                  </span>
                  <span className="text-[11px] font-mono text-forest/60 font-semibold">
                    Caption #{item.id}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-forest font-heading">
                  {item.title}
                </h3>

                <p className="text-sm text-charcoal leading-relaxed whitespace-pre-line bg-beige-card p-4 rounded-2xl border border-beige-border/60">
                  {item.caption}
                </p>

                <div className="text-xs text-forest/80 font-mono font-medium leading-relaxed bg-sage/20 p-2.5 rounded-xl border border-sage/50">
                  {item.hashtags}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end">
                <button 
                  onClick={() => onCopy(`${item.caption}\n\n${item.hashtags}`, `Caption #${item.id}`)}
                  className="bg-forest text-beige hover:bg-forest-deep px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition active:scale-95 shadow-sm"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Caption</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
