import React, { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message, visible, onHide }) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onHide();
      }, 3200);
      return () => clearTimeout(timer);
    }
  }, [visible, onHide]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-forest text-beige px-5 py-3.5 rounded-2xl shadow-2xl border border-sage/30 animate-bounce duration-300">
      <div className="w-7 h-7 rounded-full bg-sage flex items-center justify-center text-forest font-bold text-sm">
        <CheckCircle2 className="w-4 h-4" />
      </div>
      <div>
        <p className="text-sm font-semibold">{message}</p>
        <p className="text-xs text-sage">Ready to paste into your social app!</p>
      </div>
    </div>
  );
}
