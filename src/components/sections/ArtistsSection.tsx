import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { artistMembers } from '../../data/content';
import { ArtistSymbol } from '../common/ArtistSymbol';
import type { Language, ArtistTone } from '../../types';
import { cn } from '../../utils/cn';

const getToneColors = (tone: ArtistTone) => {
  switch (tone) {
    case 'salt': return 'text-[var(--color-salt)] group-hover:drop-shadow-[0_0_12px_rgba(187,237,255,0.4)]';
    case 'mercury': return 'text-[var(--color-mercury)] group-hover:drop-shadow-[0_0_12px_rgba(251,128,123,0.4)]';
    case 'sulfur': return 'text-[var(--color-sulfur)] group-hover:drop-shadow-[0_0_12px_rgba(242,227,165,0.4)]';
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

const getImageToneGlow = (tone: ArtistTone) => {
  switch (tone) {
    case 'salt': return 'drop-shadow-[0_0_16px_rgba(187,237,255,0.35)] group-hover:drop-shadow-[0_0_24px_rgba(187,237,255,0.55)]';
    case 'mercury': return 'drop-shadow-[0_0_16px_rgba(251,128,123,0.35)] group-hover:drop-shadow-[0_0_24px_rgba(251,128,123,0.55)]';
    case 'sulfur': return 'drop-shadow-[0_0_16px_rgba(242,227,165,0.35)] group-hover:drop-shadow-[0_0_24px_rgba(242,227,165,0.55)]';
    default: return 'drop-shadow-[0_0_16px_rgba(255,255,255,0.35)] group-hover:drop-shadow-[0_0_24px_rgba(255,255,255,0.55)]';
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
            title={lang === 'zh' ? '成員' : 'Members'} 
            subtitle={lang === 'zh' ? '箱庭旅團' : 'FLASK TROUPE'} 
            isDark
          />
          <div className="hidden md:block absolute right-0 top-0 text-[6vw] font-display uppercase tracking-widest text-ghost opacity-20 select-none leading-none pointer-events-none" aria-hidden="true">
            {lang === 'zh' ? '箱庭旅團' : 'FLASK TROUPE'}
          </div>
          {/* Mobile version ghost text */}
          <div className="md:hidden mt-4 text-3xl font-display uppercase tracking-widest text-ghost opacity-20 select-none leading-none pointer-events-none" aria-hidden="true">
            {lang === 'zh' ? '箱庭旅團' : 'FLASK TROUPE'}
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
              className="group relative flex-1 p-8 md:p-10 lg:p-12 flex flex-col overflow-hidden transition-transform duration-500 hover:-translate-y-2 focus-within:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              
              {/* Vertical Watermark */}
              <div 
                className="absolute top-10 -right-4 md:-right-8 origin-bottom-right -rotate-90 text-5xl md:text-6xl font-display uppercase tracking-[0.45em] text-paper/[0.04] select-none pointer-events-none"
                aria-hidden="true"
              >
                {lang === 'zh' ? '人造人' : 'HOMUNCULUS'}
              </div>

              {/* Top Bar */}
              <div className="flex justify-between items-start text-xs md:text-sm font-display tracking-widest text-paper/60 uppercase relative z-10">
                <span>
                  {artist.number} / {lang === 'zh' ? '人造人' : 'HOMUNCULUS'}&nbsp; <span className={cn(getToneColors(artist.tone))}>{artist.element[lang]}</span>
                </span>
              </div>

              {/* Center Symbol / Character Image - 1 line-height spacing above & below */}
              <div className="flex items-center justify-center relative z-10 my-5 md:my-6">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ 
                    duration: 7, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    times: [0, 0.5, 1]
                  }}
                  className={cn(
                    "w-44 h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 transition-all duration-700 motion-reduce:animate-none flex items-center justify-center",
                    !artist.imageUrl && getToneColors(artist.tone),
                    !artist.imageUrl && "drop-shadow-[0_0_6px_currentColor]",
                    artist.imageUrl && getImageToneGlow(artist.tone)
                  )}
                >
                  <ArtistSymbol 
                    symbol={artist.symbol} 
                    imageUrl={artist.imageUrl}
                    alt={artist.name[lang]}
                    className="w-full h-full" 
                  />
                </motion.div>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl md:text-4xl font-display tracking-widest mb-4">
                    {artist.name[lang]}
                  </h3>
                  <p className="text-base md:text-lg text-paper/75 leading-relaxed mb-8">
                    {artist.description[lang]}
                  </p>
                  {artist.tags[lang].length > 0 && (
                    <div className="flex flex-wrap gap-2.5 mb-8">
                      {artist.tags[lang].map((tag) => (
                        <span key={tag} className="text-xs tracking-wider px-2.5 py-1.5 border border-paper/20 rounded-sm text-paper/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-8 pt-4">
                  {artist.socialUrl && (
                    <a 
                      href={artist.socialUrl} 
                      className={cn(
                        "text-sm md:text-base font-display tracking-widest uppercase pb-1.5 border-b transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-stage rounded-sm",
                        "border-paper/20 text-paper/60",
                        getToneHoverClasses(artist.tone)
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      YouTube
                    </a>
                  )}
                  {artist.xUrl && (
                    <a 
                      href={artist.xUrl} 
                      className={cn(
                        "text-sm md:text-base font-display tracking-widest uppercase pb-1.5 border-b transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-stage rounded-sm",
                        "border-paper/20 text-paper/60",
                        getToneHoverClasses(artist.tone)
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      X
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
