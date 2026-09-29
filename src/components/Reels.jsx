import React from 'react';
import { Copy, Eye, Clock } from 'lucide-react';
import { reelsScripts } from '../data/portfolioData';

export default function Reels({ onSelectScript, onCopy }) {
  return (
    <section id="reels" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-extrabold tracking-widest uppercase text-forest bg-sage px-3 py-1 rounded-full">
            Viral Video Direction
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-forest font-heading mt-2">
            Instagram Reels Scripts
          </h2>
          <p className="text-base text-charcoal-light mt-2">
            Five production-ready short-form video scripts complete with duration, 3-second retention hooks, visual scene breakdowns, voiceovers, and high-converting CTAs.
          </p>
        </div>

        {/* Reels Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reelsScripts.map((script) => (
            <div 
              key={script.id}
              className="bg-white rounded-3xl border border-beige-border p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="bg-forest text-sage text-xs font-bold px-3 py-1 rounded-full">
                    {script.business}
                  </span>
                  <span className="text-xs font-semibold text-forest bg-beige-card px-2.5 py-1 rounded-full border border-beige-border flex items-center gap-1">
                    <Clock className="w-3 h-3 text-forest" /> {script.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-forest font-heading">
                  {script.id}. {script.title}
                </h3>

                {/* Hook Box */}
                <div className="bg-beige-card p-3.5 rounded-2xl border border-beige-border space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-forest block">
                    🎣 The Hook (0-3s):
                  </span>
                  <p className="text-xs text-charcoal font-semibold italic">
                    "{script.hook}"
                  </p>
                </div>

                {/* Scene Preview */}
                <div className="text-xs text-charcoal-light space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-forest block">
                    Scene Breakdown ({script.scenes.length} Scenes):
                  </span>
                  <p className="line-clamp-2 italic">
                    {script.scenes[0].time} — {script.scenes[0].visual}
                  </p>
                </div>

                {/* CTA preview */}
                <div className="text-xs text-charcoal bg-sage/20 p-2.5 rounded-xl border border-sage/40">
                  <strong>CTA:</strong> {script.cta}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <button 
                  onClick={() => onSelectScript(script)}
                  className="bg-forest text-beige py-2.5 rounded-xl text-xs font-bold hover:bg-forest-deep transition flex items-center justify-center gap-1 shadow-sm"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Full</span>
                </button>
                <button 
                  onClick={() => {
                    const fullText = `REEL SCRIPT: ${script.title} (${script.business})\nDuration: ${script.duration}\nHook: ${script.hook}\n\nSCENES:\n` +
                      script.scenes.map(s => `[${s.time}]\nVisual: ${s.visual}\nAudio: ${s.audio}\nOn-screen text: ${s.textOnScreen}\n`).join('\n') +
                      `\nCTA: ${script.cta}`;
                    onCopy(fullText, `${script.title} Script`);
                  }}
                  className="bg-sage text-forest py-2.5 rounded-xl text-xs font-bold hover:bg-sage-dark transition flex items-center justify-center gap-1 border border-sage-border"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Script</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
