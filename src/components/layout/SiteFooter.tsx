import { Link } from 'react-router-dom';
import type { Language } from '../../types';

export function SiteFooter({ lang }: { lang: Language }) {
  return (
    <footer className="bg-ink-deep text-paper/60 py-12 md:py-24 border-t border-paper/10">
      <div className="max-w-content mx-auto px-5 md:px-[4vw] flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="flex flex-col gap-6">
          <div className="font-display tracking-widest text-2xl text-paper">Virtual Vector</div>
          <div className="flex flex-col gap-2 text-sm tracking-wider">
            <a href="mailto:contact@example.com" className="hover:text-pink transition-colors">contact@example.com</a>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-pink transition-colors" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="#" className="hover:text-pink transition-colors" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 text-xs tracking-wider md:text-right">
          <Link to="/PrivacyPolicy" className="hover:text-pink transition-colors inline-block focus:outline-none focus-visible:ring-1 focus-visible:ring-pink rounded-sm">
            {lang === 'zh' ? '隱私權政策' : 'Privacy Policy'}
          </Link>
          <div className="text-paper/40">
            © 2024 Virtual Vector. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
