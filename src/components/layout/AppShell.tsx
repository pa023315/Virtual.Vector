import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { DesktopSideNav } from './DesktopSideNav';
import { MobileHeader } from './MobileHeader';
import { MobileMenu } from './MobileMenu';
import { SiteFooter } from './SiteFooter';
import { useLanguage } from '../../hooks/useLanguage';
import { useActiveSection } from '../../hooks/useActiveSection';
import { navItems } from '../../data/content';

export function AppShell() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, changeLang } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Track active section only on home page
  const sectionIds = isHomePage ? navItems.map(item => item.id) : [];
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="relative min-h-screen">
      <DesktopSideNav 
        activeSection={activeSection} 
        lang={lang} 
        onLanguageChange={changeLang} 
      />
      
      <MobileHeader 
        onMenuOpen={() => setIsMobileMenuOpen(true)} 
        isDarkBackground={isHomePage} 
      />
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        lang={lang}
        onLanguageChange={changeLang}
      />

      <main className="lg:ml-[var(--nav-rail-width)] min-h-screen flex flex-col">
        {/* We use React Router Outlet context to pass down lang */}
        <div className="flex-1">
          <Outlet context={{ lang }} />
        </div>
        <SiteFooter lang={lang} />
      </main>
    </div>
  );
}
