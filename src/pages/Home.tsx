import { useOutletContext } from 'react-router-dom';
import { HeroSection } from '../components/sections/HeroSection';
import { StatementSection } from '../components/sections/StatementSection';
import { ArtistsSection } from '../components/sections/ArtistsSection';
import { TeamSection } from '../components/sections/TeamSection';
import { MarqueeBand } from '../components/decor/MarqueeBand';
import { DecorativeField } from '../components/decor/DecorativeField';
import type { Language } from '../types';

export function Home() {
  const { lang } = useOutletContext<{ lang: Language }>();

  return (
    <>
      <DecorativeField />
      <HeroSection lang={lang} />
      <StatementSection lang={lang} />
      <ArtistsSection lang={lang} />
      <MarqueeBand text="Virtual Vector" />
      <TeamSection lang={lang} />
    </>
  );
}
