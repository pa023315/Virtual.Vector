import type { Language } from '../../types';

export function SiteFooter({ lang }: { lang: Language }) {
  return (
    <footer className="bg-ink-deep text-paper/60 py-12 md:py-20 border-t border-paper/10">
      <div className="max-w-content mx-auto px-5 md:px-[4vw] flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
        {/* Two columns / rows for contact & social channels */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-14 lg:gap-16 w-full lg:w-auto">
          {/* Group 1: 虛擬向量計畫 */}
          <div className="flex flex-col gap-3">
            <div className="font-display tracking-widest text-lg md:text-xl text-paper">
              {lang === 'zh' ? '虛擬向量計畫' : 'Virtual Vector Project'}
            </div>
            <div className="flex flex-col gap-2 text-sm tracking-wider">
              <a 
                href="mailto:virtualvectorstudio@gmail.com" 
                className="hover:text-pink transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-pink rounded-sm"
              >
                virtualvectorstudio@gmail.com
              </a>
              <div className="flex flex-wrap gap-5 mt-1 text-xs md:text-sm font-display tracking-wider">
                <a 
                  href="https://www.facebook.com/Virtual.Vector.studio" 
                  className="hover:text-pink transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-pink rounded-sm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  FB
                </a>
                <a 
                  href="https://x.com/virtual_tw" 
                  className="hover:text-pink transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-pink rounded-sm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  X
                </a>
                <a 
                  href="https://www.threads.com/@virtual.vector.tw" 
                  className="hover:text-pink transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-pink rounded-sm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Threads
                </a>
              </div>
            </div>
          </div>

          {/* Group 2: 箱庭旅團 */}
          <div className="flex flex-col gap-3 border-t sm:border-t-0 sm:border-l border-paper/10 pt-6 sm:pt-0 sm:pl-10 lg:pl-16">
            <div className="font-display tracking-widest text-lg md:text-xl text-paper">
              {lang === 'zh' ? '箱庭旅團' : 'Flask Troupe'}
            </div>
            <div className="flex flex-col gap-2 text-sm tracking-wider">
              <div className="flex flex-wrap gap-5 mt-1 text-xs md:text-sm font-display tracking-wider">
                <a 
                  href="https://www.facebook.com/FlaskTroupe/" 
                  className="hover:text-pink transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-pink rounded-sm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  FB
                </a>
                <a 
                  href="https://x.com/FlaskTroupe" 
                  className="hover:text-pink transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-pink rounded-sm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  X
                </a>
                <a 
                  href="https://www.youtube.com/@FlaskTroupe" 
                  className="hover:text-pink transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-pink rounded-sm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="flex flex-col gap-4 text-xs tracking-wider lg:text-right shrink-0">
          <div className="text-paper/40">
            © 2026 Virtual Vector. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
