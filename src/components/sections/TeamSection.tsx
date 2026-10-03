import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { teamMembers, assetMap } from '../../data/content';
import type { Language } from '../../types';

export function TeamSection({ lang }: { lang: Language }) {
  return (
    <section id="team" className="py-24 md:py-32 px-5 md:px-[4vw] bg-paper text-ink relative">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-content mx-auto"
      >
        <SectionHeading 
          numberKey="03" 
          title={lang === 'zh' ? '計劃團隊' : 'Team'} 
          subtitle={lang === 'zh' ? '團隊陣容' : 'PROJECT TEAM'} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-16 md:mt-24">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className={`flex flex-col gap-6 ${index % 2 === 1 ? 'md:mt-16' : ''}`}
            >
              <div className="aspect-square w-full overflow-hidden bg-ink/5 rounded-sm flex items-center justify-center p-6">
                <img 
                  src={assetMap[member.imageKey]} 
                  alt={member.name[lang]} 
                  className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="text-pink font-display tracking-widest text-xs mb-2">
                  {member.role[lang]}
                </div>
                <h4 className="text-2xl font-display tracking-widest">
                  {member.name[lang]}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
