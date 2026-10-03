import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import type { Language } from '../../types';

export function StatementSection({ lang }: { lang: Language }) {
  return (
    <section id="statement" className="py-24 md:py-32 px-5 md:px-[4vw] bg-paper text-ink relative overflow-hidden">
      {/* Removed Background Ghost Text */}
      <div className="absolute top-0 right-[-5%] text-[20vw] font-display uppercase tracking-widest text-ghost-dark leading-none select-none pointer-events-none z-0 hidden">
        STATEMENT
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-content mx-auto relative z-10"
      >
        <SectionHeading 
          numberKey="01" 
          title={lang === 'zh' ? '從瓶中誕生' : 'Born in the Flask'} 
          subtitle="ORIGIN" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          <div className="md:col-span-5 md:col-start-2">
            <h3 className="text-2xl md:text-3xl font-display tracking-widest leading-relaxed mb-6">
              {lang === 'zh' 
                ? '三種元素，三具人造之身\n走出燒瓶之後，開始旅行' 
                : 'Three Elements. Three Artificial Souls.\nBeyond the flask, the journey begins.'}
            </h3>
          </div>
          <div className="md:col-span-5">
            <div className="flex flex-col gap-6 text-ink/80 leading-relaxed text-lg whitespace-pre-line">
              <p>
                {lang === 'zh' 
                  ? '從某處實驗室中誕生的 Homunculus（人造人），被賦予了煉金術基本元素中的鹽、水銀、硫磺的性質和能力。'
                  : 'Born in a laboratory somewhere, the Homunculi were each given the properties and abilities of salt, mercury, and sulfur—the fundamental elements of alchemy.'}
              </p>
              <p>
                {lang === 'zh'
                  ? '在察覺造物主的消失之後，三人踏出瓶子，組成了 FLASK TROUPE，並展開旅行。她們使用獨特的能力與舞蹈，將世界納入「燒瓶」之中。'
                  : 'When they realize their creator has vanished, the three step out of the flask, form FLASK TROUPE, and begin their journey. With their singular abilities and dance, they will draw the world into the flask.'}
              </p>
            </div>
          </div>
        </div>

        {/* Concept Image */}
        <div className="w-full max-w-4xl mx-auto mb-16 overflow-hidden">
          <img 
            src="https://i.meee.com.tw/sZpyxie.png" 
            alt="FLASK TROUPE Concept" 
            className="w-full aspect-[2.5/1] md:aspect-[4/1] object-cover object-center scale-[1.15] mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity duration-500 select-none pointer-events-none"
            loading="lazy"
          />
        </div>

        {/* Video Player */}
        <div className="aspect-video w-full max-w-4xl mx-auto rounded-sm overflow-hidden bg-ink/5 shadow-2xl relative">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0" 
            title="Virtual Vector Statement Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}
