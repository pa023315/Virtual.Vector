import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { artistMembers } from '../../data/content';
import { ArtistSymbol } from '../common/ArtistSymbol';
import type { Language, ArtistTone } from '../../types';
import { cn } from '../../utils/cn';

const getToneColors = (tone: ArtistTone) => {
  switch (tone) {
    case 'salt': return 'text-[var(--color-salt)] group-hover:drop-shadow-[0_0_12px_rgba(217,216,208,0.4)]';
    case 'mercury': return 'text-[var(--color-mercury)] group-hover:drop-shadow-[0_0_12px_rgba(158,184,190,0.4)]';
    case 'sulfur': return 'text-[var(--color-sulfur)] group-hover:drop-shadow-[0_0_12px_rgba(211,154,54,0.4)]';
    default: return 'text-paper group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]';
  }
};

const getToneHoverClasses = (tone: ArtistTone) => {
  switch (tone) {
    case 'salt': return 'hover:border-[var(--color-salt)] hover:text-[var(--color-salt)]';
    case 'mercury': return 'hover:border-[var(--color-mercury)] hover:text-[var(--color-mercury)]';
    case 'sulfur': return 'hover:border-[var(--color-sulfur)] hover:text-[var(--color-sulfur)]';
    default: return 'hover:border-paper hover:text-paper';
  }
};

export function ArtistsSection({ lang }: { lang: Language }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="artists" className="py-24 md:py-32 px-5 md:px-[4vw] bg-dark-stage text-paper relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-paper/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-paper/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-content mx-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 md:mb-24 relative">
          <SectionHeading 
            numberKey="02" 
            title={lang === 'zh' ? '藝人' : 'Artists'} 
            subtitle="ARTISTS" 
            isDark
          />
          <div className="hidden md:block absolute right-0 top-0 text-[6vw] font-display uppercase tracking-widest text-ghost opacity-20 select-none leading-none pointer-events-none" aria-hidden="true">
            FLASK TROUPE
          </div>
          {/* Mobile version ghost text */}
          <div className="md:hidden mt-4 text-3xl font-display uppercase tracking-widest text-ghost opacity-20 select-none leading-none pointer-events-none" aria-hidden="true">
            FLASK TROUPE
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col md:flex-row border border-paper/10 divide-y md:divide-y-0 md:divide-x divide-paper/10"
        >
          {artistMembers.map((artist) => (
            <motion.article 
              key={artist.number}
              variants={itemVariants}
              className="group relative flex-1 min-h-[720px] p-6 md:p-8 flex flex-col justify-between overflow-hidden transition-transform duration-500 hover:-translate-y-2 focus-within:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              {/* Background Number */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] md:text-[15vw] font-display text-paper/[0.03] select-none pointer-events-none transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                aria-hidden="true"
              >
                {artist.number}
              </div>
              
              {/* Vertical Watermark */}
              <div 
                className="absolute top-8 -right-4 md:-right-8 origin-bottom-right -rotate-90 text-4xl md:text-5xl font-display uppercase tracking-[0.4em] text-paper/[0.04] select-none pointer-events-none"
                aria-hidden="true"
              >
                HOMUNCULUS
              </div>

              {/* Top Bar */}
              <div className="flex justify-between items-start text-xs font-display tracking-widest text-paper/60 uppercase relative z-10">
                <span>{artist.number} / HOMUNCULUS</span>
                <span className="text-right">FLASK TROUPE</span>
              </div>

              {/* Center Symbol */}
              <div className="flex-1 flex items-center justify-center relative z-10 my-12">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ 
                    duration: 7, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    times: [0, 0.5, 1]
                  }}
                  className={cn(
                    "w-32 h-32 md:w-40 md:h-40 transition-all duration-700 motion-reduce:animate-none",
                    getToneColors(artist.tone),
                    "drop-shadow-[0_0_4px_currentColor]"
                  )}
                >
                  <ArtistSymbol symbol={artist.symbol} className="w-full h-full" />
                </motion.div>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 mt-auto">
                {/* Alchemical Sample File */}
                <div className="mb-6 font-mono text-[10px] md:text-xs text-paper/50 tracking-wider uppercase leading-loose border-l border-paper/20 pl-4 py-1">
                  <div>ELEMENT: <span className={cn(getToneColors(artist.tone))}>{artist.element}</span></div>
                  <div>ABILITY: {artist.ability[lang]}</div>
                  <div>STATUS: {artist.status}</div>
                  <div>ORIGIN: {artist.origin}</div>
                </div>

                <div className={cn("text-xs font-display tracking-widest uppercase mb-4", getToneColors(artist.tone))}>
                  {artist.role[lang]}
                </div>
                <h3 className="text-2xl md:text-3xl font-display tracking-widest mb-4">
                  {artist.name[lang]}
                </h3>
                <p className="text-sm md:text-base text-paper/70 leading-relaxed mb-6">
                  {artist.description[lang]}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {artist.tags.map((tag) => (
                    <span key={tag} className="text-[10px] md:text-xs tracking-wider px-2 py-1 border border-paper/20 rounded-sm text-paper/60">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={artist.socialUrl || '#'} 
                    className={cn(
                      "text-xs font-display tracking-widest uppercase pb-1 border-b transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-stage rounded-sm",
                      "border-paper/20 text-paper/60",
                      getToneHoverClasses(artist.tone)
                    )}
                    target={artist.socialUrl && artist.socialUrl !== '#' ? "_blank" : undefined}
                    rel={artist.socialUrl && artist.socialUrl !== '#' ? "noopener noreferrer" : undefined}
                    onClick={(e) => {
                      if (!artist.socialUrl || artist.socialUrl === '#') e.preventDefault();
                    }}
                  >
                    PROFILE / SOCIAL
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
