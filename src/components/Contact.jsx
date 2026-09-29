import React, { useState } from 'react';
import { Mail, Instagram, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { creatorInfo } from '../data/portfolioData';

export default function Contact({ formData, setFormData, onSubmitSuccess }) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.fullName} (${formData.businessName || 'Business'})`);
    const bodyContent = encodeURIComponent(
      `Hi Venu,\n\nI visited your portfolio website and would like to discuss social media content services.\n\n` +
      `Details:\n` +
      `• Name: ${formData.fullName}\n` +
      `• Business: ${formData.businessName || 'N/A'}\n` +
      `• Email: ${formData.email}\n` +
      `• Selected Service: ${formData.service}\n` +
      `• Package/Budget: ${formData.budget}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Looking forward to hearing from you!\n`
    );

    const mailtoUri = `mailto:${creatorInfo.email}?subject=${subject}&body=${bodyContent}`;
    
    setFormSubmitted(true);
    if (onSubmitSuccess) {
      onSubmitSuccess("Inquiry prepared! Opening your mail client...");
    }
    window.location.href = mailtoUri;
  };

  return (
    <section id="contact" className="py-20 bg-beige-card border-t border-beige-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-extrabold tracking-widest uppercase text-forest bg-sage px-3 py-1 rounded-full">
              Start A Conversation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-forest font-heading">
              Let's Create Something Great.
            </h2>
            <p className="text-base text-charcoal-light leading-relaxed">
              Have a business that needs engaging social media content? Let's work together.
            </p>

            {/* Contact Info Items */}
            <div className="space-y-4 pt-4">
              
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-beige-border shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-forest text-sage flex items-center justify-center font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-light block">
                    Email Contact
                  </span>
                  <a href={`mailto:${creatorInfo.email}`} className="text-sm font-bold text-forest hover:underline">
                    {creatorInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-beige-border shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-forest text-sage flex items-center justify-center font-bold">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-light block">
                    Instagram Profile
                  </span>
                  <a href={creatorInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-forest hover:underline">
                    {creatorInfo.instagram}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-beige-border shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-forest text-sage flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-light block">
                    Base Location
                  </span>
                  <span className="text-sm font-bold text-forest">
                    {creatorInfo.location}
                  </span>
                </div>
              </div>

            </div>

            <div className="bg-sage/40 border border-sage-border p-4 rounded-2xl text-xs text-forest">
              💡 <strong>Fast Turnaround:</strong> Inquiries are typically reviewed and answered within 24 hours. A tailored initial content proposal is included.
            </div>
          </div>

          {/* Contact Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-beige-border shadow-xl">
              
              {formSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-sage text-forest rounded-full flex items-center justify-center text-3xl font-bold mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-forest font-heading">
                    Inquiry Prepared!
                  </h3>
                  <p className="text-sm text-charcoal-light max-w-md mx-auto">
                    Your default email client has been opened with your inquiry pre-filled. If it didn't open automatically, you can also copy your message below:
                  </p>
                  <div className="bg-beige-card p-4 rounded-xl text-left text-xs font-mono text-charcoal border border-beige-border space-y-1">
                    <p><strong>Name:</strong> {formData.fullName}</p>
                    <p><strong>Business:</strong> {formData.businessName}</p>
                    <p><strong>Service:</strong> {formData.service}</p>
                    <p><strong>Package:</strong> {formData.budget}</p>
                    <p><strong>Message:</strong> {formData.message}</p>
                  </div>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="bg-forest text-beige px-6 py-2.5 rounded-full text-xs font-bold"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-1.5">
                        Full Name *
                      </label>
                      <input 
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-3 rounded-xl border border-beige-border bg-beige-card focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest text-sm text-charcoal"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-1.5">
                        Email Address *
                      </label>
                      <input 
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="name@yourbusiness.com"
                        className="w-full px-4 py-3 rounded-xl border border-beige-border bg-beige-card focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest text-sm text-charcoal"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-1.5">
                      Business Name
                    </label>
                    <input 
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                      placeholder="e.g. Hyderabad Roastery or Artisan Threads"
                      className="w-full px-4 py-3 rounded-xl border border-beige-border bg-beige-card focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest text-sm text-charcoal"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-1.5">
                        Service Interested In
                      </label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-beige-border bg-beige-card focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest text-sm text-charcoal"
                      >
                        <option value="Social Media Content">Social Media Content</option>
                        <option value="Reels Scripts">Reels Scripts</option>
                        <option value="Monthly Content Calendars">Monthly Content Calendars</option>
                        <option value="Canva Post Designs">Canva Post Designs</option>
                        <option value="Full Retainer / All Services">Full Retainer / All Services</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-1.5">
                        Budget / Package Plan
                      </label>
                      <select 
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-beige-border bg-beige-card focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest text-sm text-charcoal"
                      >
                        <option value="Starter — ₹2,500/month">Starter — ₹2,500/month</option>
                        <option value="Growth — ₹5,000/month">Growth — ₹5,000/month (Recommended)</option>
                        <option value="Premium — ₹10,000/month">Premium — ₹10,000/month</option>
                        <option value="Custom Project Quote">Custom Project Quote</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-1.5">
                      Message / Project Details *
                    </label>
                    <textarea 
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell me about your business, current Instagram page, goals, or what kind of content you're hoping to create..."
                      className="w-full px-4 py-3 rounded-xl border border-beige-border bg-beige-card focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest text-sm text-charcoal"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="w-full bg-forest text-beige py-4 rounded-xl font-extrabold text-base hover:bg-forest-deep transition shadow-lg hover:shadow-2xl flex items-center justify-center gap-2 group"
                    >
                      <span>Send Inquiry</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="text-[11px] text-charcoal-light text-center pt-1 leading-normal">
                    *Note: Clicking "Send Inquiry" launches a functional mailto draft directly with all your filled details. Direct automated form submissions without mail clients require backend integration (such as Formspree, Resend, or EmailJS).
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
