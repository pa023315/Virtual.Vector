import { cn } from '../../utils/cn';
import { Menu } from 'lucide-react';
import type { Language } from '../../types';

interface MobileHeaderProps {
  onMenuOpen: () => void;
  isDarkBackground?: boolean;
}

export function MobileHeader({ onMenuOpen, isDarkBackground = true }: MobileHeaderProps) {
  return (
    <header className={cn(
      "fixed top-0 left-0 w-full h-16 z-navigation lg:hidden flex items-center justify-between px-5",
      isDarkBackground ? "text-paper" : "text-ink"
    )}>
      <div className="font-display tracking-widest text-sm font-bold">
        Virtual Vector
      </div>
      <button 
        className="p-2 -mr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink rounded-sm"
        onClick={onMenuOpen}
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>
    </header>
  );
}
