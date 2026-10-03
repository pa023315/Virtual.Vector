import { useState, useEffect } from 'react';
import type { Language } from '../types';

export function useLanguage() {
  const [lang, setLang] = useState<Language>('zh');

  useEffect(() => {
    const saved = localStorage.getItem('app_lang');
    if (saved === 'zh' || saved === 'en') {
      setLang(saved);
    }
  }, []);

  const changeLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('app_lang', newLang);
  };

  return { lang, changeLang };
}
