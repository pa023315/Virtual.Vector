import { motion } from 'motion/react';
import { cn } from '../../utils/cn';
import { assetMap } from '../../data/content';
import type { Language } from '../../types';
import { HeroDecoration } from './HeroDecoration';

export function HeroSection({ lang }: { lang: Language }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="hero" className="relative min-h-[100svh] bg-dark-stage px-5 md:px-[4vw] overflow-hidden flex flex-col justify-between py-10 md:py-12">
      {/* Background Image/Texture */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-[-1] bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: `url(${assetMap['hero-bg']})` }}
        aria-hidden="true"
      />
      
      {/* New Alchemy Decorations */}
      <HeroDecoration />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-content flex-1 flex flex-col justify-between w-full h-full max-w-content mx-auto"
      >
        {/* Top Spacer */}
        <div className="flex-none" />

        {/* Center: Main Logo Layer */}
        <div className="flex-1 flex flex-col items-center justify-center -mt-[6vh] md:-mt-[8vh] pointer-events-none">
          <div className="hero-logo w-[75vw] md:w-[60%] max-w-[640px] flex flex-col items-center pointer-events-auto">
            <motion.img
              variants={itemVariants}
              src="https://i.meee.com.tw/ExqHvku.png"
              alt="虛擬向量 Virtual Vector Logo"
              className="w-full h-auto object-contain"
            />
            <motion.div 
              variants={itemVariants}
              className="mt-4 md:mt-6 font-display uppercase tracking-[0.2em] md:tracking-[0.4em] text-paper/40 text-[10px] md:text-xs select-none"
              aria-hidden="true"
            >
              virtualvectorstudio
            </motion.div>
          </div>
        </div>

        {/* Bottom: auxiliary text and slogan */}
        <div className="flex-none flex flex-col items-start gap-6 md:gap-8 relative z-10 pb-[2vh]">
          {/* Layer 2: Visual Auxiliary Text (Bottom Left) */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-3 font-display uppercase tracking-[0.3em] text-paper/20 text-xs select-none"
            aria-hidden="true"
          >
            VIRTUAL VECTOR
            <div className="flex gap-1 ml-2">
              <span className="w-1 h-1 rounded-full bg-salt/30" />
              <span className="w-1 h-1 rounded-full bg-mercury/30" />
              <span className="w-1 h-1 rounded-full bg-sulfur/30" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-md">
            <p className="text-lg md:text-xl text-paper/90 tracking-widest leading-relaxed">
              {lang === 'zh' ? '跨越次元，與你相遇' : 'Crossing dimensions to meet you.'}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
