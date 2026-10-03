import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../utils/cn';
import { navItems } from '../../data/content';
import { X } from 'lucide-react';
import type { Language } from '../../types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function MobileMenu({ isOpen, onClose, lang, onLanguageChange }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleNavClick = (id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
          animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
          exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-menu-overlay bg-paper text-ink flex flex-col pt-20 px-6 pb-10"
        >
          <button 
            className="absolute top-4 right-5 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink rounded-sm"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="flex-1 flex flex-col justify-center gap-8">
            <ul className="flex flex-col gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="flex flex-col items-start text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-pink rounded-sm"
                  >
                    <span className="text-pink font-display text-sm tracking-widest mb-1">{item.numberKey}</span>
                    <span className="text-3xl font-display tracking-widest uppercase">{item.label[lang]}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto flex items-center justify-between pt-8 border-t border-ink/10">
            <div className="flex items-center gap-4 font-display tracking-widest text-lg">
              <button 
                className={cn("transition-colors", lang === 'en' ? "text-ink" : "text-ink/40")}
                onClick={() => onLanguageChange('en')}
              >
                EN
              </button>
              <span className="text-ink/20">/</span>
              <button 
                className={cn("transition-colors", lang === 'zh' ? "text-ink" : "text-ink/40")}
                onClick={() => onLanguageChange('zh')}
              >
                ZH
              </button>
            </div>
            <div className="text-xs text-ink/40 tracking-wider">
              Virtual Vector
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
