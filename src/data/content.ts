import type { NavItem, TeamMember, ArtistMember } from '../types';

export const IS_AUDITION_OPEN = false;

export const navItems: NavItem[] = [
  { id: 'hero', label: { zh: '首頁', en: 'HOME' }, numberKey: '00' },
  { id: 'statement', label: { zh: '從瓶中誕生', en: 'STATEMENT' }, numberKey: '01' },
  { id: 'artists', label: { zh: '藝人', en: 'ARTISTS' }, numberKey: '02' },
  { id: 'team', label: { zh: '計劃團隊', en: 'TEAM' }, numberKey: '03' },
];

export const artistMembers: ArtistMember[] = [
  {
    number: '01',
    name: { zh: '藝人一號：聲音座標', en: 'Artist 01: Vocal Vector' },
    role: { zh: 'VOCALIST', en: 'VOCALIST' },
    description: { zh: '以獨特的聲線劃破寂靜，尋找記憶與未來的共鳴點。', en: 'Piercing the silence with a unique voice, finding the resonance between memories and the future.' },
    element: 'SALT',
    ability: { zh: '操縱結晶體', en: 'MEMORY CRYSTALLIZATION' },
    status: 'AWAKENED',
    origin: 'VESSEL NO.01',
    tags: ['VOCALIST', 'DREAM POP'],
    symbol: 'circle-bar',
    tone: 'salt',
    socialUrl: '#',
  },
  {
    number: '02',
    name: { zh: '藝人二號：透明節拍', en: 'Artist 02: Lucid Beat' },
    role: { zh: 'PRODUCER', en: 'PRODUCER' },
    description: { zh: '在虛擬空間中編織透明的節奏，將心跳轉化為電子的脈動。', en: 'Weaving transparent rhythms in virtual space, transforming heartbeats into electronic pulses.' },
    element: 'MERCURY',
    ability: { zh: '液態共鳴', en: 'LIQUID RESONANCE' },
    status: 'AWAKENED',
    origin: 'VESSEL NO.02',
    tags: ['PRODUCER', 'ELECTRONICA'],
    symbol: 'orb-cross',
    tone: 'mercury',
    socialUrl: '#',
  },
  {
    number: '03',
    name: { zh: '藝人三號：舞台訊號', en: 'Artist 03: Stage Signal' },
    role: { zh: 'PERFORMER', en: 'PERFORMER' },
    description: { zh: '用肢體與光影傳遞能量，在虛無中構築真實的舞台體驗。', en: 'Transmitting energy through body and light, constructing a real stage experience in the void.' },
    element: 'SULFUR',
    ability: { zh: '熱能舞動', en: 'THERMAL DANCE' },
    status: 'AWAKENED',
    origin: 'VESSEL NO.03',
    tags: ['PERFORMER', 'FUTURE SOUL'],
    symbol: 'triangle-cross',
    tone: 'sulfur',
    socialUrl: '#',
  }
];

export const teamMembers: TeamMember[] = [
  { id: 't1', name: { zh: '桂馬數位 KEIMA', en: 'KEIMA DIGITAL' }, role: { zh: '主創', en: 'Creator' }, imageKey: 'team-1' },
  { id: 't2', name: { zh: '幻律', en: 'Rhythm' }, role: { zh: '音樂製作', en: 'Music Producer' }, imageKey: 'team-2' },
  { id: 't3', name: { zh: '白紙', en: 'Blank' }, role: { zh: '美術設定', en: 'Character Design' }, imageKey: 'team-3' },
  { id: 't4', name: { zh: '影', en: 'Shadow' }, role: { zh: '影像製作', en: 'Video Production' }, imageKey: 'team-4' },
  { id: 't5', name: { zh: '墨', en: 'Ink' }, role: { zh: '視覺設計', en: 'Visual Design' }, imageKey: 'team-5' },
  { id: 't6', name: { zh: '響', en: 'Echo' }, role: { zh: '音效設計', en: 'Sound Design' }, imageKey: 'team-6' },
  { id: 't7', name: { zh: '紡', en: 'Spin' }, role: { zh: '3D 建模', en: '3D Modeling' }, imageKey: 'team-7' },
  { id: 't8', name: { zh: '織', en: 'Weave' }, role: { zh: '專案管理', en: 'Project Manager' }, imageKey: 'team-8' }
];

export const assetMap: Record<string, string> = {
  'hero-bg': 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop', // Placeholder abstract
  'team-1': 'https://i.meee.com.tw/KO5109l.png',
  'team-2': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
  'team-3': 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop',
  'team-4': 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop',
  'team-5': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
  'team-6': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
  'team-7': 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop',
  'team-8': 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop',
};
