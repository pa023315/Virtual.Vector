import { cn } from '../../utils/cn';
import { navItems } from '../../data/content';
import type { Language } from '../../types';

interface DesktopSideNavProps {
  activeSection: string;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function DesktopSideNav({ activeSection, lang, onLanguageChange }: DesktopSideNavProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="hidden lg:flex fixed left-0 top-0 h-[100vh] w-[var(--nav-rail-width)] bg-paper border-r border-ink/10 flex-col justify-between py-12 px-8 z-navigation">
      <div className="flex flex-col gap-16">
        <div className="font-display tracking-[0.2em] text-sm text-ink transform -rotate-180" style={{ writingMode: 'vertical-rl' }}>
          CONTENT
        </div>
        
        <ul className="flex flex-col gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className="group flex flex-col items-start text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-pink rounded-sm"
                >
                  <span className={cn(
                    "text-xs font-display tracking-widest mb-1 transition-colors duration-180",
                    isActive ? "text-pink" : "text-ink/40 group-hover:text-ink/70"
                  )}>
                    {item.numberKey}
                  </span>
                  <span className={cn(
                    "text-sm tracking-wider uppercase transition-colors duration-180 relative",
                    isActive ? "text-ink font-medium" : "text-ink/60 group-hover:text-ink"
                  )}>
                    {item.label[lang]}
                    {isActive && (
                      <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-pink" />
                    )}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4 text-xs font-display tracking-widest text-ink/60">
          <button 
            className={cn("hover:text-ink transition-colors", lang === 'en' && "text-ink")}
            onClick={() => onLanguageChange('en')}
          >
            EN
          </button>
          <span>/</span>
          <button 
            className={cn("hover:text-ink transition-colors", lang === 'zh' && "text-ink")}
            onClick={() => onLanguageChange('zh')}
          >
            ZH
          </button>
        </div>
        <div className="text-xs text-ink/40 tracking-wider">
          © 2026 Virtual Vector
        </div>
      </div>
    </nav>
  );
}
