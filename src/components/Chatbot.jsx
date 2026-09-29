import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, ArrowRight, RefreshCw, Bot, User, Check } from 'lucide-react';
import { creatorInfo, pricingPlans, sampleProjects, services } from '../data/portfolioData';

export default function Chatbot({ onChoosePackage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: `Hello! 👋 I'm Venu's AI Assistant. I can help you explore content packages, generate viral Reel hooks for your business, answer questions about our pricing, or help you book a project!`,
      quickReplies: ['💰 Pricing & Plans', '💡 Generate Reel Hook', '📁 Sample Projects', '✍️ Book a Package']
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleScrollTo = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const generateAIResponse = (userText) => {
    const text = userText.toLowerCase().trim();

    // 1. Pricing & Packages
    if (text.includes('price') || text.includes('pricing') || text.includes('cost') || text.includes('package') || text.includes('plan') || text.includes('rate') || text.includes('charges') || text.includes('how much')) {
      return {
        text: `Here are Venu's introductory monthly content packages:\n\n` +
          `• 🌿 **Starter (₹2,500/mo)**: 8 Captions + 4 Reels Scripts + 1 Content Calendar.\n` +
          `• ⭐ **Growth (₹5,000/mo - Most Popular)**: 12 Captions + 8 Reels Scripts + 8 Canva Post Designs + 1 Monthly Calendar.\n` +
          `• 🚀 **Premium (₹10,000/mo)**: 20 Captions + 12 Reels Scripts + 12 Canva Designs + Monthly Calendar & Content Strategy.\n\n` +
          `Which package fits your current brand goals best?`,
        actions: [
          { label: 'Select Starter (₹2.5K)', action: () => onChoosePackage('Starter', '₹2,500') },
          { label: 'Select Growth (₹5K)', action: () => onChoosePackage('Growth', '₹5,000') },
          { label: 'Select Premium (₹10K)', action: () => onChoosePackage('Premium', '₹10,000') }
        ],
        quickReplies: ['View Pricing on Page', 'What services are included?', 'Contact Venu']
      };
    }

    // 2. Services
    if (text.includes('service') || text.includes('what do you do') || text.includes('offer') || text.includes('deliver') || text.includes('canva') || text.includes('calendar')) {
      return {
        text: `Venu specializes in 4 core social media services tailored for businesses:\n\n` +
          `1. ✍️ **Social Media Content**: Captions, hooks, and promotional copy that drive engagement.\n` +
          `2. 🎬 **Reels Scripts**: High-retention 15–30s scripts with 3-second hooks, visual directions, and audio cues.\n` +
          `3. 📅 **Monthly Content Calendars**: Organized weekly pillars, holiday posts, and scheduled themes.\n` +
          `4. 🎨 **Canva Post Designs**: Clean branded social templates matching your brand aesthetics.\n` +
          `5. 🌐 **Telugu-English Localization**: Authentic bilingual messaging for Hyderabad/AP audiences.`,
        actions: [
          { label: 'Go to Services Section', action: () => handleScrollTo('services') },
          { label: 'See Pricing Plans', action: () => handleScrollTo('pricing') }
        ],
        quickReplies: ['Generate Reel Hook', 'View Sample Projects', 'How much does it cost?']
      };
    }

    // 3. Projects / Samples
    if (text.includes('sample') || text.includes('project') || text.includes('portfolio') || text.includes('work') || text.includes('cafe') || text.includes('fashion') || text.includes('real estate')) {
      return {
        text: `Venu's portfolio features 3 complete fictional sample brand campaigns:\n\n` +
          `• ☕ **Brew & Bloom Café** (F&B): Artisanal coffee promos, weekend specials, dessert drops, and a coffee-making Reel.\n` +
          `• 👗 **Urban Thread Boutique** (Fashion): Collection reveal, everyday capsule styling, festive silk edits, and 3-way styling Reel.\n` +
          `• 🏡 **Skyline Homes** (Real Estate): Dream home copy, architectural features, location promotions, and property walkthrough Reel.`,
        actions: [
          { label: 'View Portfolio Section', action: () => handleScrollTo('portfolio') },
          { label: 'Read Sample Captions', action: () => handleScrollTo('captions') },
          { label: 'Explore Reels Scripts', action: () => handleScrollTo('reels') }
        ],
        quickReplies: ['Show me Reels Scripts', 'What are your rates?', 'Generate a hook for my business']
      };
    }

    // 4. Reels or Scripts
    if (text.includes('reel') || text.includes('script') || text.includes('video') || text.includes('tiktok') || text.includes('youtube')) {
      return {
        text: `Short-form video is where algorithms reward retention! Venu writes complete Reels scripts featuring:\n\n` +
          `• 🎣 **0–3s Viral Hooks** to stop scrolling\n` +
          `• 🎬 **Scene-by-scene visual directions**\n` +
          `• 🎙️ **Exact voiceover & music timing cues**\n` +
          `• 🎯 **High-converting Call to Action (CTA)**\n\n` +
          `There are 5 complete scripts available on this page ready to copy!`,
        actions: [
          { label: 'Go to Reels Section', action: () => handleScrollTo('reels') }
        ],
        quickReplies: ['Generate Reel Hook', 'Check Pricing', 'Contact Venu']
      };
    }

    // 5. Hook / Content Idea Generator
    if (text.includes('hook') || text.includes('idea') || text.includes('gym') || text.includes('restaurant') || text.includes('bakery') || text.includes('dental') || text.includes('doctor') || text.includes('salon') || text.includes('ecommerce') || text.includes('jewelry') || text.includes('tech') || text.includes('generate')) {
      // Extract industry or use a generic rich response
      let industry = 'your business';
      if (text.includes('gym') || text.includes('fitness')) industry = 'Fitness / Gym';
      else if (text.includes('bakery') || text.includes('cake')) industry = 'Bakery / Desserts';
      else if (text.includes('dental') || text.includes('clinic')) industry = 'Dental / Healthcare';
      else if (text.includes('salon') || text.includes('beauty')) industry = 'Salon / Beauty';
      else if (text.includes('restaurant') || text.includes('food')) industry = 'Restaurant / Café';
      else if (text.includes('jewelry')) industry = 'Jewelry Brand';
      else if (text.includes('clothing') || text.includes('fashion')) industry = 'Fashion Boutique';

      return {
        text: `💡 **Custom Content Ideas for ${industry}:**\n\n` +
          `🎯 **Hook 1 (Curiosity/Mistake):** "Stop doing this if you want actual results in 2026..."\n` +
          `🎯 **Hook 2 (POV/Aesthetic):** "POV: You finally found the hidden gem everyone has been whispering about in Hyderabad."\n` +
          `🎯 **Hook 3 (Relatable Value):** "3 things nobody tells you before trying this for the first time."\n\n` +
          `Want Venu to build a dedicated 30-day calendar and 8 customized scripts for your exact brand?`,
        actions: [
          { label: 'Select Growth Plan (₹5,000)', action: () => onChoosePackage('Growth', '₹5,000') },
          { label: 'Send an Inquiry', action: () => handleScrollTo('contact') }
        ],
        quickReplies: ['View Pricing', 'Contact Venu', 'Tell me more about services']
      };
    }

    // 6. Contact / Hire / Email / Instagram
    if (text.includes('hire') || text.includes('contact') || text.includes('email') || text.includes('instagram') || text.includes('call') || text.includes('book') || text.includes('whatsapp') || text.includes('venu')) {
      return {
        text: `You can reach Venu directly via:\n\n` +
          `• ✉️ **Email**: venujerripothu07@gmail.com\n` +
          `• 📸 **Instagram**: @thevenu._ (https://instagram.com/thevenu._)\n` +
          `• 📍 **Location**: Hyderabad, India\n\n` +
          `You can also fill out the contact form below and Venu will reply within 24 hours with a custom proposal!`,
        actions: [
          { label: 'Open Contact Form', action: () => handleScrollTo('contact') },
          { label: 'Visit Instagram (@thevenu._)', action: () => window.open('https://instagram.com/thevenu._', '_blank') }
        ],
        quickReplies: ['Check Pricing Plans', 'View Sample Projects', 'Generate Reel Hook']
      };
    }

    // 7. Telugu Localization
    if (text.includes('telugu') || text.includes('local') || text.includes('hyderabad') || text.includes('language')) {
      return {
        text: `Yes! Venu provides **Telugu-English Content Localization**. 🌐\n\n` +
          `Marketing to audiences in Telangana and Andhra Pradesh requires authentic regional nuance, cultural references, and conversational tone that pure English copy often misses.\n\n` +
          `Venu crafts punchy bilingual captions and Reels scripts tailored for maximum local resonance!`,
        actions: [
          { label: 'Hire for Localized Content', action: () => handleScrollTo('contact') }
        ],
        quickReplies: ['What are the prices?', 'Generate Reel Hook', 'View Sample Projects']
      };
    }

    // Default Fallback
    return {
      text: `Thanks for asking! I'm programmed with full knowledge of Venu Jerripothu's portfolio:\n\n` +
        `• 🌿 **Pricing Plans** (Starter ₹2.5K, Growth ₹5K, Premium ₹10K)\n` +
        `• ✍️ **Services** (Captions, Reels Scripts, Monthly Calendars, Canva Designs)\n` +
        `• 💡 **Instant Brainstorming** (Type any industry like "gym" or "restaurant" to generate hooks!)\n` +
        `• 📩 **Direct Inquiries** (Connect with Venu at venujerripothu07@gmail.com or @thevenu._)`,
      actions: [
        { label: 'View Pricing', action: () => handleScrollTo('pricing') },
        { label: 'Contact Venu', action: () => handleScrollTo('contact') }
      ],
      quickReplies: ['💰 Pricing & Plans', '💡 Generate Reel Hook', '📁 Sample Projects', '✍️ Book a Package']
    };
  };

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: query
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAIResponse(query);
      const botMessage = {
        id: Date.now() + 1,
        sender: 'bot',
        text: response.text,
        actions: response.actions,
        quickReplies: response.quickReplies
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 450);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 1,
        sender: 'bot',
        text: `Chat reset! 👋 How can I help you today? Ask about pricing, services, sample projects, or let's generate content hooks for your business.`,
        quickReplies: ['💰 Pricing & Plans', '💡 Generate Reel Hook', '📁 Sample Projects', '✍️ Book a Package']
      }
    ]);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-forest text-sage p-4 rounded-full shadow-2xl border-2 border-sage hover:bg-forest-deep hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group"
          aria-label="Open AI Assistant"
        >
          <div className="relative">
            <Sparkles className="w-6 h-6 text-sage animate-spin-slow" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-sage rounded-full animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-sage rounded-full"></span>
          </div>
          <span className="font-bold text-sm text-beige pr-1 hidden sm:inline-block">
            Chat with AI Assistant
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[95vw] sm:w-[400px] h-[580px] max-h-[90vh] bg-beige-card border-2 border-forest/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300">
          
          {/* Header */}
          <div className="bg-forest text-beige p-4 flex items-center justify-between border-b border-forest-deep shadow-sm">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-sage text-forest flex items-center justify-center font-bold text-base font-heading">
                  VJ
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-forest"></span>
              </div>
              <div>
                <h3 className="font-bold text-sm text-white font-heading flex items-center gap-1.5">
                  Venu's AI Assistant
                  <span className="text-[10px] bg-sage text-forest font-bold px-1.5 py-0.2 rounded-full">AI</span>
                </h3>
                <p className="text-[11px] text-sage-light">Online • Instant Answers</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                className="w-8 h-8 rounded-lg text-sage-light hover:text-white hover:bg-forest-light flex items-center justify-center transition"
                title="Reset conversation"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg text-sage-light hover:text-white hover:bg-forest-light flex items-center justify-center transition"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-beige/60">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className="flex items-start gap-2 max-w-[88%]">
                  {msg.sender === 'bot' && (
                    <div className="w-7 h-7 rounded-lg bg-forest text-sage flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold shadow-sm">
                      🤖
                    </div>
                  )}

                  <div
                    className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-forest text-beige rounded-br-none'
                        : 'bg-white text-charcoal border border-beige-border rounded-bl-none'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>

                    {/* Action buttons inside bot messages */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-beige-border space-y-1.5">
                        {msg.actions.map((act, actIdx) => (
                          <button
                            key={actIdx}
                            onClick={() => {
                              act.action();
                              setIsOpen(false);
                            }}
                            className="w-full text-left bg-forest/5 hover:bg-forest hover:text-beige text-forest text-xs font-bold px-3 py-1.5 rounded-xl border border-forest/15 transition flex items-center justify-between group"
                          >
                            <span>{act.label}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Quick reply chips */}
                {msg.quickReplies && (
                  <div className="flex flex-wrap gap-1.5 mt-2 ml-9">
                    {msg.quickReplies.map((reply, rIdx) => (
                      <button
                        key={rIdx}
                        onClick={() => handleSend(reply)}
                        className="bg-white hover:bg-sage text-forest text-[11px] font-semibold px-2.5 py-1 rounded-full border border-beige-border hover:border-sage transition shadow-xs active:scale-95"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-charcoal-light">
                <div className="w-7 h-7 rounded-lg bg-forest text-sage flex items-center justify-center text-xs">
                  🤖
                </div>
                <div className="bg-white p-3 rounded-2xl border border-beige-border flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-forest animate-pulse"></span>
                  <span className="w-2 h-2 rounded-full bg-forest animate-pulse delay-150"></span>
                  <span className="w-2 h-2 rounded-full bg-forest animate-pulse delay-300"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-white border-t border-beige-border">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about pricing, hooks, services..."
                className="flex-1 bg-beige-card px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-charcoal border border-beige-border focus:outline-none focus:ring-2 focus:ring-forest"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl bg-forest text-sage flex items-center justify-center hover:bg-forest-deep disabled:opacity-40 disabled:cursor-not-allowed transition shadow-md"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <p className="text-[10px] text-charcoal-light text-center mt-1.5">
              Powered by Venu's AI Assistant • Responds instantly
            </p>
          </div>

        </div>
      )}
    </>
  );
}
