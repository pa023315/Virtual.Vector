import { motion } from 'motion/react';
import { cn } from '../../utils/cn';

interface MarqueeBandProps {
  text: string;
  isDark?: boolean;
}

export function MarqueeBand({ text, isDark = true }: MarqueeBandProps) {
  // We duplicate the text multiple times to create a seamless loop
  const content = Array(6).fill(text).join(' \u00A0\u00A0/\u00A0\u00A0 ');

  return (
    <div 
      className={cn(
        "py-6 overflow-hidden flex whitespace-nowrap",
        isDark ? "bg-ink-deep text-paper border-y border-ink" : "bg-paper text-ink border-y border-ink/10"
      )}
    >
      <motion.div
        className="font-display tracking-widest text-2xl uppercase flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <span className="px-4">{content}</span>
        <span className="px-4">{content}</span>
      </motion.div>
    </div>
  );
}
