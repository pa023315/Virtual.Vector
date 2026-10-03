import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../utils/cn';
import { Plus } from 'lucide-react';

interface AccordionProps {
  title: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
  isDark?: boolean;
}

export function Accordion({ title, children, isOpen: controlledIsOpen, onToggle, className, isDark = false }: AccordionProps) {
  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(false);
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : uncontrolledIsOpen;

  const handleToggle = () => {
    if (isControlled && onToggle) {
      onToggle();
    } else {
      setUncontrolledIsOpen(!isOpen);
    }
  };

  return (
    <div className={cn("border-b", isDark ? "border-paper/20" : "border-ink/10", className)}>
      <button
        type="button"
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-pink rounded-sm group"
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        <span className={cn("text-lg font-medium transition-colors duration-180", isDark ? "text-paper group-hover:text-pink" : "text-ink group-hover:text-pink")}>{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={cn("flex-shrink-0 ml-4", isDark ? "text-paper" : "text-ink")}
        >
          <Plus className="w-6 h-6" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className={cn("pb-6 leading-relaxed", isDark ? "text-paper/80" : "text-ink/80")}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
