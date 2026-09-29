import React from 'react';
import { Check, Minus } from 'lucide-react';
import { pricingPlans } from '../data/portfolioData';

export default function Pricing({ onChoosePackage }) {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <span className="text-xs font-extrabold tracking-widest uppercase text-forest bg-sage px-3 py-1 rounded-full">
            Transparent Packages
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-forest font-heading">
            Simple Monthly Plans
          </h2>
          <p className="text-base text-charcoal-light">
            Introductory service pricing tailored for local startups, cafés, boutiques, and emerging brands.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => {
            if (plan.isPopular) {
              return (
                <div 
                  key={index}
                  className="bg-forest text-beige rounded-3xl p-8 border-2 border-sage shadow-2xl relative flex flex-col justify-between space-y-6 transform md:-translate-y-2"
                >
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-sage text-forest text-xs font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                    {plan.badge}
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-sage font-heading">{plan.name}</h3>
                      <span className="text-xs font-semibold text-sage bg-white/10 px-3 py-1 rounded-full">
                        High Impact
                      </span>
                    </div>
                    <div className="mb-6">
                      <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                      <span className="text-sm text-sage font-semibold"> / month</span>
                    </div>
                    <p className="text-xs text-sage-light mb-6">
                      {plan.description}
                    </p>

                    <div className="space-y-3 pt-4 border-t border-white/20">
                      {plan.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-sm text-beige-card">
                          <Check className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => onChoosePackage(plan.name, plan.price)}
                    className="w-full bg-sage text-forest py-3.5 rounded-xl font-extrabold text-sm hover:bg-white transition shadow-lg"
                  >
                    Choose {plan.name}
                  </button>
                </div>
              );
            }

            return (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 border border-beige-border shadow-sm hover:shadow-lg transition flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-forest font-heading">{plan.name}</h3>
                    <span className="text-xs font-semibold text-charcoal-light bg-beige-card px-3 py-1 rounded-full border border-beige-border">
                      {plan.badge}
                    </span>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-extrabold text-forest">{plan.price}</span>
                    <span className="text-sm text-charcoal-light font-semibold"> / month</span>
                  </div>
                  <p className="text-xs text-charcoal-light mb-6">
                    {plan.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-beige-border">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-sm text-charcoal">
                        <Check className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {plan.missing && plan.missing.map((miss, mIdx) => (
                      <div key={mIdx} className="flex items-start gap-2.5 text-xs text-charcoal-light/70">
                        <Minus className="w-4 h-4 text-charcoal-light/40 flex-shrink-0 mt-0.5" />
                        <span>{miss}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => onChoosePackage(plan.name, plan.price)}
                  className="w-full bg-beige-card text-forest border-2 border-forest py-3 rounded-xl font-bold text-sm hover:bg-forest hover:text-beige transition shadow-sm"
                >
                  Choose {plan.name}
                </button>
              </div>
            );
          })}
        </div>

        {/* Pricing Disclaimer Note */}
        <div className="mt-12 text-center max-w-2xl mx-auto bg-white/60 border border-beige-border rounded-2xl p-4 text-xs text-charcoal-light">
          <p>
            <strong>Please Note:</strong> These are introductory service prices intended for early-stage portfolio collaboration. Deliverables, posting frequencies, revisions, and exact scope are subject to mutual agreement prior to contract kick-off.
          </p>
        </div>

      </div>
    </section>
  );
}
