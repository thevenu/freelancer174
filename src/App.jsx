import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Captions from './components/Captions';
import Reels from './components/Reels';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Toast from './components/Toast';
import Chatbot from './components/Chatbot';

export default function App() {
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [selectedScript, setSelectedScript] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    businessName: "",
    service: "Social Media Content",
    budget: "Growth — ₹5,000/month",
    message: ""
  });

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
  };

  const copyToClipboard = (text, itemLabel) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        triggerToast(`Copied ${itemLabel} to clipboard!`);
      }).catch(() => {
        fallbackCopy(text, itemLabel);
      });
    } else {
      fallbackCopy(text, itemLabel);
    }
  };

  const fallbackCopy = (text, itemLabel) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      triggerToast(`Copied ${itemLabel} to clipboard!`);
    } catch (err) {
      triggerToast("Failed to copy. Please copy manually.");
    }
    document.body.removeChild(textArea);
  };

  const handleChoosePackage = (packageName, budgetValue) => {
    setFormData(prev => ({
      ...prev,
      budget: `${packageName} — ${budgetValue}/month`
    }));
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    triggerToast(`Selected ${packageName} package! Form updated.`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-beige text-charcoal font-sans antialiased selection:bg-sage selection:text-forest">
      {/* Toast Notification */}
      <Toast 
        message={toastMessage} 
        visible={showToast} 
        onHide={() => setShowToast(false)} 
      />

      {/* Project Suite Modal */}
      {selectedProject && (
        <Modal 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
        >
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="badge-fictional px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                Fictional Sample Project
              </span>
              <span className="bg-sage text-forest px-3 py-1 rounded-full text-xs font-bold">
                {selectedProject.industry}
              </span>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md max-h-72">
              <img 
                src={selectedProject.coverImage} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="bg-forest/5 p-4 rounded-2xl border border-forest/10">
              <h4 className="font-bold text-forest mb-1">Project Goal:</h4>
              <p className="text-sm text-charcoal-light">{selectedProject.goal}</p>
              <h4 className="font-bold text-forest mt-3 mb-1">Visual & Tone Direction:</h4>
              <p className="text-sm text-charcoal-light">{selectedProject.visualStyle}</p>
            </div>

            <div>
              <h4 className="font-bold text-forest text-lg mb-3">Included Deliverables:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {selectedProject.deliverables.map((del, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-charcoal bg-white p-2.5 rounded-xl border border-beige-border">
                    <span className="text-forest font-bold">✓</span> {del}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-forest text-lg mb-3">Sample Post Copy & Strategy:</h4>
              <div className="space-y-3">
                {selectedProject.posts.map((post, pIdx) => (
                  <div key={pIdx} className="bg-white p-4 rounded-2xl border border-beige-border space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-forest uppercase tracking-wider bg-sage/60 px-2 py-0.5 rounded-md">
                        {post.type}
                      </span>
                      <button 
                        onClick={() => copyToClipboard(`${post.caption}\n\n${post.hashtags}`, post.type)}
                        className="text-xs font-semibold text-forest hover:underline flex items-center gap-1"
                      >
                        Copy Post
                      </button>
                    </div>
                    <p className="text-sm text-charcoal italic">"{post.caption}"</p>
                    <p className="text-xs text-forest/70 font-mono">{post.hashtags}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-forest text-beige p-5 rounded-2xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sage uppercase tracking-wider">Featured Reels Strategy</span>
                <button 
                  onClick={() => copyToClipboard(`Reel: ${selectedProject.reelsScript.title}\nHook: ${selectedProject.reelsScript.hook}\nVisual: ${selectedProject.reelsScript.visual}\nAudio: ${selectedProject.reelsScript.audio}\nCTA: ${selectedProject.reelsScript.cta}`, "Reels Strategy")}
                  className="text-xs bg-sage text-forest font-semibold px-2.5 py-1 rounded-lg hover:bg-white transition"
                >
                  Copy Reels Strategy
                </button>
              </div>
              <h5 className="font-bold text-lg">{selectedProject.reelsScript.title}</h5>
              <p className="text-xs text-sage-light"><strong>Hook:</strong> {selectedProject.reelsScript.hook}</p>
              <p className="text-xs text-sage-light"><strong>Visual Direction:</strong> {selectedProject.reelsScript.visual}</p>
              <p className="text-xs text-sage-light"><strong>CTA:</strong> {selectedProject.reelsScript.cta}</p>
            </div>
          </div>
        </Modal>
      )}

      {/* Reels Full Script Modal */}
      {selectedScript && (
        <Modal
          isOpen={!!selectedScript}
          onClose={() => setSelectedScript(null)}
          title={selectedScript.title}
        >
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-sage text-forest px-3 py-1 rounded-full text-xs font-bold">
                {selectedScript.business}
              </span>
              <span className="bg-forest text-beige px-3 py-1 rounded-full text-xs font-semibold">
                ⏱ {selectedScript.duration}
              </span>
              <span className="border border-forest/30 text-forest px-3 py-1 rounded-full text-xs font-medium">
                🎯 {selectedScript.targetAudience}
              </span>
            </div>

            <div className="bg-sage/30 border border-sage p-4 rounded-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-forest">The Viral Hook (First 3 Seconds):</span>
              <p className="text-base font-semibold text-forest mt-1">"{selectedScript.hook}"</p>
            </div>

            <div>
              <h4 className="font-bold text-forest text-lg mb-3">Scene-by-Scene Breakdown:</h4>
              <div className="space-y-3">
                {selectedScript.scenes.map((scene, sIdx) => (
                  <div key={sIdx} className="bg-white p-4 rounded-2xl border border-beige-border space-y-1.5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold bg-forest text-sage px-2 py-0.5 rounded">
                        {scene.time}
                      </span>
                      <span className="text-xs text-forest font-medium bg-beige px-2 py-0.5 rounded">
                        Text: {scene.textOnScreen}
                      </span>
                    </div>
                    <p className="text-xs text-charcoal-light"><strong>🎬 Visual:</strong> {scene.visual}</p>
                    <p className="text-xs text-charcoal"><strong>🎙️ Audio / Voiceover:</strong> {scene.audio}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-beige-card border border-forest/20 p-4 rounded-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-forest">Call To Action (CTA):</span>
              <p className="text-sm font-medium text-forest mt-1">{selectedScript.cta}</p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3">
              <button 
                onClick={() => {
                  const fullText = `REEL SCRIPT: ${selectedScript.title} (${selectedScript.business})\nDuration: ${selectedScript.duration}\nHook: ${selectedScript.hook}\n\nSCENES:\n` +
                    selectedScript.scenes.map(s => `[${s.time}]\nVisual: ${s.visual}\nAudio: ${s.audio}\nOn-screen text: ${s.textOnScreen}\n`).join('\n') +
                    `\nCTA: ${selectedScript.cta}`;
                  copyToClipboard(fullText, "Full Reels Script");
                }}
                className="w-full bg-forest text-beige font-bold py-3 px-6 rounded-xl hover:bg-forest-deep transition shadow-md flex items-center justify-center gap-2"
              >
                <span>📋 Copy Entire Script</span>
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Main Sections */}
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Portfolio onSelectProject={(project) => setSelectedProject(project)} />
        <Captions onCopy={copyToClipboard} />
        <Reels 
          onSelectScript={(script) => setSelectedScript(script)} 
          onCopy={copyToClipboard} 
        />
        <Services />
        <Pricing onChoosePackage={handleChoosePackage} />
        <Contact 
          formData={formData} 
          setFormData={setFormData}
          onSubmitSuccess={(msg) => triggerToast(msg)}
        />
      </main>
      <Footer />
      <Chatbot onChoosePackage={handleChoosePackage} />
    </div>
  );
}
