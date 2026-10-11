import type { ArtistSymbol as SymbolType } from '../../types';

interface Props {
  symbol: SymbolType;
  className?: string;
}

export function ArtistSymbol({ symbol, className }: Props) {
  switch (symbol) {
    case 'circle-bar':
      return (
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className={className}
          aria-hidden="true"
        >
          <circle cx="50" cy="50" r="35" />
          <line x1="15" y1="50" x2="85" y2="50" />
        </svg>
      );
    case 'orb-cross':
      return (
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.8" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className={className}
          aria-hidden="true"
        >
          {/* Top horns / crescent */}
          <path d="M 28 8 C 28 22, 40 30, 50 30 C 60 30, 72 22, 72 8" />
          {/* Main circle */}
          <circle cx="50" cy="48" r="18" />
          {/* Bottom cross */}
          <line x1="50" y1="66" x2="50" y2="92" />
          <line x1="38" y1="79" x2="62" y2="79" />
        </svg>
      );
    case 'triangle-cross':
      return (
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className={className}
          aria-hidden="true"
        >
          <polygon points="50,20 75,55 25,55" />
          <line x1="50" y1="55" x2="50" y2="90" />
          <line x1="35" y1="75" x2="65" y2="75" />
        </svg>
      );
    default:
      return null;
  }
}
