import { useOutletContext, Link } from 'react-router-dom';
import type { Language } from '../types';

export function PrivacyPolicy() {
  const { lang } = useOutletContext<{ lang: Language }>();

  return (
    <div className="min-h-screen bg-paper text-ink pt-32 pb-24 px-5 md:px-[4vw]">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center text-sm font-display tracking-widest text-pink mb-12 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-pink rounded-sm">
          ← {lang === 'zh' ? '返回首頁' : 'BACK TO HOME'}
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-display tracking-widest mb-12">
          {lang === 'zh' ? '隱私權政策' : 'Privacy Policy'}
        </h1>
        
        <div className="prose prose-lg text-ink/80 leading-relaxed">
          <p>
            {lang === 'zh' 
              ? 'Virtual Vector（以下簡稱本企劃）極為重視您的隱私權。請閱讀以下隱私權保護政策，了解我們如何收集、應用及保護您的個人資訊。'
              : 'Virtual Vector respects your privacy. Please read the following privacy policy to understand how we collect, use, and protect your personal information.'}
          </p>
          <h2 className="text-xl font-display mt-8 mb-4">
            {lang === 'zh' ? '一、資料收集與使用' : '1. Data Collection and Use'}
          </h2>
          <p>
            {lang === 'zh'
              ? '在您參與本企劃徵選時，我們將收集您的基本資料（如姓名、電子郵件、聯絡方式等）及徵選所需之影音檔案。這些資料僅用於本次徵選評估、聯絡及相關作業，絕不會用於其他商業用途。'
              : 'When you participate in our audition, we collect basic information (name, email, etc.) and required media files. This data is strictly used for audition evaluation and contact, not for other commercial purposes.'}
          </p>
          <h2 className="text-xl font-display mt-8 mb-4">
            {lang === 'zh' ? '二、資料保護' : '2. Data Protection'}
          </h2>
          <p>
            {lang === 'zh'
              ? '本企劃主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料。'
              : 'We use firewalls, anti-virus systems, and necessary security measures to protect your data. Only authorized personnel have access to your personal information.'}
          </p>
        </div>
      </div>
    </div>
  );
}
