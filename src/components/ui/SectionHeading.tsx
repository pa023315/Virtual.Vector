import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  numberKey: string;
  title: string;
  subtitle: string;
  isDark?: boolean;
}

export function SectionHeading({ numberKey, title, subtitle, isDark = false }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end gap-4 md:gap-8">
      <div className="flex items-center gap-4">
        <span className="text-pink font-display text-lg tracking-widest">{numberKey}</span>
        <h2 className={cn("font-display text-4xl md:text-6xl lg:text-7xl tracking-display uppercase leading-none", isDark ? "text-paper" : "text-ink")}>
          {title}
        </h2>
      </div>
      <div className={cn("pb-2 text-sm tracking-widest", isDark ? "text-paper/60" : "text-ink/60")}>
        / {subtitle}
      </div>
    </div>
  );
}
