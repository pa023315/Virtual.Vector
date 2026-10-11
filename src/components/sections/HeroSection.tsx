import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { cn } from '../../utils/cn';
import { assetMap } from '../../data/content';
import type { Language } from '../../types';
import { HeroDecoration } from './HeroDecoration';
import { HeroParticles } from './HeroParticles';

export function HeroSection({ lang }: { lang: Language }) {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 });

  // Mouse parallax motion values (normalized -0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 45, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 25 });

  // Parallax shifts for background geometry
  const bgShiftX = useTransform(springX, [-0.5, 0.5], [10, -10]);
  const bgShiftY = useTransform(springY, [-0.5, 0.5], [10, -10]);

  // Parallax shifts for logo aura
  const auraShiftX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const auraShiftY = useTransform(springY, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    if (!isHovered) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

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
    <section 
      id="hero" 
      className="relative min-h-[100svh] bg-dark-stage px-5 md:px-[4vw] overflow-hidden flex flex-col justify-between py-10 md:py-12"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image/Texture */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-[-1] bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: `url(${assetMap['hero-bg']})` }}
        aria-hidden="true"
      />

      {/* Ambient Mouse Spotlight */}
      {isHovered && (
        <div 
          className="absolute inset-0 pointer-events-none z-[1] transition-opacity duration-500"
          style={{
            background: `radial-gradient(450px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(187, 237, 255, 0.05), transparent 80%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Alchemical Sublimation Particles */}
      <HeroParticles />
      
      {/* Alchemy Decorations with Spring Parallax */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{ x: bgShiftX, y: bgShiftY }}
        aria-hidden="true"
      >
        <HeroDecoration />
      </motion.div>
      
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
          <div className="hero-logo relative w-[75vw] md:w-[60%] max-w-[640px] flex flex-col items-center pointer-events-auto">
            {/* Soft Dark Flame Aura behind Logo */}
            <motion.div
              style={{ x: auraShiftX, y: auraShiftY }}
              className="absolute -inset-10 md:-inset-20 rounded-full pointer-events-none blur-3xl select-none -z-10"
              animate={{
                scale: [0.95, 1.06, 0.95],
                opacity: [0.2, 0.35, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden="true"
            >
              <div 
                className="w-full h-full rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(251, 128, 123, 0.25) 0%, rgba(187, 237, 255, 0.12) 45%, rgba(242, 227, 165, 0.08) 70%, transparent 100%)",
                }}
              />
            </motion.div>

            <motion.img
              variants={itemVariants}
              src="https://i.meee.com.tw/ExqHvku.png"
              alt="虛擬向量 Virtual Vector Logo"
              className="w-full h-auto object-contain relative z-10 drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
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
