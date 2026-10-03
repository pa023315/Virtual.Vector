import { motion } from 'motion/react';

export function HeroDecoration() {
  const drawAnimation = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        pathLength: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.5 }
      }
    }
  };

  const dotAnimation = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.8 + custom * 0.18, duration: 0.4, ease: "easeOut" }
    })
  };

  const breathAnimation = {
    animate: {
      opacity: [0.08, 0.15, 0.08],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Center Container for Logo-relative decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square md:-mt-[8vh]">
        
        {/* 3. Flask Outline (very low opacity) */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center opacity-10"
          variants={breathAnimation}
          animate="animate"
        >
          <svg width="60%" height="60%" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M80 50 L80 120 L30 240 A 20 20 0 0 0 50 270 L150 270 A 20 20 0 0 0 170 240 L120 120 L120 50 Z" stroke="var(--color-alchemy-line)" strokeWidth="1" strokeLinejoin="round" />
            <path d="M70 60 L130 60" stroke="var(--color-alchemy-line)" strokeWidth="1" />
          </svg>
        </motion.div>

        {/* 4. Three Element Orbit (above logo) */}
        <div className="absolute top-0 left-0 w-full h-[60%]">
          <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" className="overflow-visible">
            {/* Orbit lines (broken into segments) */}
            <motion.path 
              d="M 50 200 A 150 150 0 0 1 150 70" 
              stroke="var(--color-alchemy-line)" 
              strokeWidth="1" 
              fill="transparent"
              variants={drawAnimation}
              initial="hidden"
              animate="visible"
            />
            <motion.path 
              d="M 170 60 A 150 150 0 0 1 270 70" 
              stroke="var(--color-alchemy-line)" 
              strokeWidth="1" 
              fill="transparent"
              variants={drawAnimation}
              initial="hidden"
              animate="visible"
            />
            <motion.path 
              d="M 290 85 A 150 150 0 0 1 350 170" 
              stroke="var(--color-alchemy-line)" 
              strokeWidth="1" 
              fill="transparent"
              variants={drawAnimation}
              initial="hidden"
              animate="visible"
            />

            {/* Nodes */}
            {/* Salt */}
            <motion.circle cx="150" cy="70" r="4" fill="var(--color-salt)" custom={0} variants={dotAnimation} initial="hidden" animate="visible" />
            {/* Mercury */}
            <motion.circle cx="270" cy="70" r="4" fill="var(--color-mercury)" custom={1} variants={dotAnimation} initial="hidden" animate="visible" />
            {/* Sulfur */}
            <motion.circle cx="350" cy="170" r="4" fill="var(--color-sulfur)" custom={2} variants={dotAnimation} initial="hidden" animate="visible" />
          </svg>
        </div>

        {/* 5. Three Alchemy Symbols */}
        {/* Salt */}
        <motion.div className="absolute top-[10%] left-[10%] text-salt/20 md:text-salt/30 w-8 h-8" variants={breathAnimation} animate="animate">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
          </svg>
        </motion.div>
        
        {/* Mercury */}
        <motion.div className="absolute top-[5%] right-[15%] text-mercury/20 md:text-mercury/30 w-8 h-12" variants={breathAnimation} animate="animate">
          <svg viewBox="0 0 24 36" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M4 8 A8 8 0 0 1 20 8" />
            <circle cx="12" cy="16" r="6" />
            <line x1="12" y1="22" x2="12" y2="34" />
            <line x1="7" y1="28" x2="17" y2="28" />
          </svg>
        </motion.div>

        {/* Sulfur */}
        <motion.div className="absolute bottom-[20%] right-[5%] text-sulfur/20 md:text-sulfur/30 w-8 h-12" variants={breathAnimation} animate="animate">
          <svg viewBox="0 0 24 36" fill="none" stroke="currentColor" strokeWidth="1">
            <polygon points="12,2 22,20 2,20" />
            <line x1="12" y1="20" x2="12" y2="34" />
            <line x1="6" y1="28" x2="18" y2="28" />
          </svg>
        </motion.div>

        {/* 6. Experimental Details */}
        <div className="absolute top-1/2 left-0 w-4 h-px bg-[var(--color-alchemy-line)]" />
        <div className="absolute top-1/2 right-0 w-4 h-px bg-[var(--color-alchemy-line)]" />
        <div className="absolute bottom-0 left-1/2 w-px h-4 bg-[var(--color-alchemy-line)]" />
        <div className="absolute top-1/4 left-[20%] flex gap-1 opacity-20">
          <div className="w-1 h-1 rounded-full bg-paper" />
          <div className="w-1 h-1 rounded-full bg-paper" />
        </div>
      </div>
    </div>
  );
}
