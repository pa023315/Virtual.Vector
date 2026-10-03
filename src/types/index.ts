export type Language = 'zh' | 'en';

export interface LocalizedString {
  zh: string;
  en: string;
}

export interface NavItem {
  id: string;
  label: LocalizedString;
  numberKey: string;
}

export interface ScheduleItem {
  id: string;
  date: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
}

export interface TeamMember {
  id: string;
  name: LocalizedString;
  role: LocalizedString;
  imageKey: string;
}

export interface FaqItem {
  id: string;
  question: LocalizedString;
  answer: LocalizedString | LocalizedString[];
}

export type ArtistTone = 'salt' | 'mercury' | 'sulfur';
export type ArtistSymbol = 'circle-bar' | 'orb-cross' | 'triangle-cross';

export interface ArtistMember {
  number: string;
  role: LocalizedString;
  name: LocalizedString;
  description: LocalizedString;
  element: string;
  ability: LocalizedString;
  status: string;
  origin: string;
  tags: string[];
  symbol: ArtistSymbol;
  tone: ArtistTone;
  profileUrl?: string;
  socialUrl?: string;
  imageUrl?: string;
}

