import { motion } from 'motion/react';
import { cn } from '../../utils/cn';

export function DecorativeField() {
  return (
    <div 
      className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Alchemical Lines and Circles */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          {/* Faint grid / geometric lines */}
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1="0" y1="70%" x2="100%" y2="70%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" />
        </svg>
      </div>

      {/* Floating Flask & Geometric Shapes */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[15%] left-[5%] md:left-[10%] w-64 h-64 md:w-96 md:h-96 opacity-10 text-mercury motion-reduce:animate-none"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          {/* Flask outline */}
          <path d="M 40 10 L 60 10 L 60 30 L 80 70 A 10 10 0 0 1 70 90 L 30 90 A 10 10 0 0 1 20 70 L 40 30 Z" />
          {/* Liquid level */}
          <line x1="25" y1="65" x2="75" y2="65" strokeDasharray="1 2" />
          <line x1="28" y1="75" x2="72" y2="75" strokeDasharray="1 2" />
        </svg>
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[50%] right-[5%] md:right-[15%] w-72 h-72 md:w-[28rem] md:h-[28rem] opacity-[0.07] text-sulfur motion-reduce:animate-none"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          {/* Triangle alchemy geometric lines */}
          <polygon points="50,10 90,80 10,80" />
          <circle cx="50" cy="56" r="24" />
          <line x1="50" y1="10" x2="50" y2="80" />
        </svg>
      </motion.div>

      {/* Chemical Marks */}
      <div className="absolute bottom-[20%] left-[8%] font-display text-4xl md:text-6xl text-salt opacity-5 tracking-widest font-light select-none">
        NaCl
      </div>
      <div className="absolute top-[30%] right-[10%] font-display text-5xl md:text-7xl text-mercury opacity-[0.03] tracking-widest font-light select-none">
        Hg
      </div>
      <div className="absolute bottom-[10%] right-[25%] font-display text-6xl md:text-8xl text-sulfur opacity-[0.02] tracking-widest font-light select-none">
        S
      </div>

      {/* Noise overlay for paper/dust grain */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'
        }}
      />
    </div>
  );
}
