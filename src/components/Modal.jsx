import React from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-beige-card border border-beige-border rounded-3xl p-6 md:p-8 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-beige-border mb-5">
          <h3 className="text-xl md:text-2xl font-bold text-forest font-heading">{title}</h3>
          <button 
            onClick={onClose} 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-beige text-forest hover:bg-sage transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
