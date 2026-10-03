import { useOutletContext, Link } from 'react-router-dom';
import type { Language } from '../types';

export function NotFound() {
  const { lang } = useOutletContext<{ lang: Language }>();

  return (
    <div className="min-h-screen bg-dark-stage text-paper flex flex-col items-center justify-center px-5 text-center">
      <h1 className="text-[15vw] md:text-[10vw] font-display uppercase tracking-widest text-ghost leading-none mb-8 select-none">
        404
      </h1>
      <p className="text-xl md:text-2xl tracking-widest text-paper/80 mb-12">
        {lang === 'zh' ? '找不到此頁面' : 'PAGE NOT FOUND'}
      </p>
      <Link 
        to="/"
        className="px-8 py-4 border border-paper/30 rounded-sm font-display tracking-[0.2em] uppercase text-sm hover:bg-paper hover:text-ink transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink"
      >
        {lang === 'zh' ? '返回首頁' : 'BACK TO HOME'}
      </Link>
    </div>
  );
}
