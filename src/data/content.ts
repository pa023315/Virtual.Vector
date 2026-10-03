import type { NavItem, TeamMember, ArtistMember } from '../types';

export const IS_AUDITION_OPEN = false;

export const navItems: NavItem[] = [
  { id: 'hero', label: { zh: '首頁', en: 'HOME' }, numberKey: '00' },
  { id: 'statement', label: { zh: '箱庭旅團', en: 'FLASK TROUPE' }, numberKey: '01' },
  { id: 'artists', label: { zh: '藝人', en: 'ARTISTS' }, numberKey: '02' },
  { id: 'team', label: { zh: '計劃團隊', en: 'TEAM' }, numberKey: '03' },
];

export const artistMembers: ArtistMember[] = [
  {
    number: '01',
    name: { zh: '藝人一號：聲音座標', en: 'Artist 01: Vocal Vector' },
    role: { zh: '主唱歌手', en: 'VOCALIST' },
    description: { zh: '以獨特的聲線劃破寂靜，尋找記憶與未來的共鳴點。', en: 'Piercing the silence with a unique voice, finding the resonance between memories and the future.' },
    element: { zh: '鹽', en: 'SALT' },
    ability: { zh: '操縱結晶體', en: 'MEMORY CRYSTALLIZATION' },
    status: { zh: '已覺醒', en: 'AWAKENED' },
    origin: { zh: '素體 01 號', en: 'VESSEL NO.01' },
    tags: { zh: ['主唱', '夢幻流行'], en: ['VOCALIST', 'DREAM POP'] },
    symbol: 'circle-bar',
    tone: 'salt',
    socialUrl: '#',
  },
  {
    number: '02',
    name: { zh: '藝人二號：透明節拍', en: 'Artist 02: Lucid Beat' },
    role: { zh: '音樂製作', en: 'PRODUCER' },
    description: { zh: '在虛擬空間中編織透明的節奏，將心跳轉化為電子的脈動。', en: 'Weaving transparent rhythms in virtual space, transforming heartbeats into electronic pulses.' },
    element: { zh: '水銀', en: 'MERCURY' },
    ability: { zh: '液態共鳴', en: 'LIQUID RESONANCE' },
    status: { zh: '已覺醒', en: 'AWAKENED' },
    origin: { zh: '素體 02 號', en: 'VESSEL NO.02' },
    tags: { zh: ['音樂製作', '電子音樂'], en: ['PRODUCER', 'ELECTRONICA'] },
    symbol: 'orb-cross',
    tone: 'mercury',
    socialUrl: '#',
  },
  {
    number: '03',
    name: { zh: '藝人三號：舞台訊號', en: 'Artist 03: Stage Signal' },
    role: { zh: '舞台表演', en: 'PERFORMER' },
    description: { zh: '用肢體與光影傳遞能量，在虛無中構築真實的舞台體驗。', en: 'Transmitting energy through body and light, constructing a real stage experience in the void.' },
    element: { zh: '硫磺', en: 'SULFUR' },
    ability: { zh: '熱能舞動', en: 'THERMAL DANCE' },
    status: { zh: '已覺醒', en: 'AWAKENED' },
    origin: { zh: '素體 03 號', en: 'VESSEL NO.03' },
    tags: { zh: ['舞台表演', '未來靈魂'], en: ['PERFORMER', 'FUTURE SOUL'] },
    symbol: 'triangle-cross',
    tone: 'sulfur',
    socialUrl: '#',
  }
];

export const teamMembers: TeamMember[] = [
  { id: 't1', name: { zh: '桂馬數位 KEIMA', en: '桂馬數位 KEIMA' }, role: { zh: '主創', en: 'Creator' }, imageKey: 'team-1' },
  { id: 't2', name: { zh: '科碼新媒體', en: '科碼新媒體' }, role: { zh: '動捕支援', en: 'Mocap Support' }, imageKey: 'team-2' },
  { id: 't3', name: { zh: 'バルス株式会社', en: 'バルス株式会社' }, role: { zh: '3D角色製作', en: '3D Character Production' }, imageKey: 'team-3' },
  { id: 't4', name: { zh: '惡兔重工', en: '惡兔重工' }, role: { zh: '3D角色製作', en: '3D Character Production' }, imageKey: 'team-4' },
  { id: 't5', name: { zh: '@reoenl', en: '@reoenl' }, role: { zh: '角色設計', en: 'Character Design' }, imageKey: 'team-5' },
  { id: 't6', name: { zh: '@Akefumi305', en: '@Akefumi305' }, role: { zh: '角色設計', en: 'Character Design' }, imageKey: 'team-6' },
  { id: 't7', name: { zh: '@sayuki_9696', en: '@sayuki_9696' }, role: { zh: '角色設計', en: 'Character Design' }, imageKey: 'team-7' },
  { id: 't8', name: { zh: '春魚創意', en: '春魚創意' }, role: { zh: '商務支援', en: 'Business Support' }, imageKey: 'team-8' }
];

export const assetMap: Record<string, string> = {
  'hero-bg': 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop', // Placeholder abstract
  'team-1': 'https://i.meee.com.tw/KO5109l.png',
  'team-2': 'https://i.meee.com.tw/SV7O5PD.jpg',
  'team-3': 'https://i.meee.com.tw/6WjgUfj.png',
  'team-4': 'https://i.meee.com.tw/vWgyYpZ.png',
  'team-5': 'https://i.meee.com.tw/V1hZdtZ.png',
  'team-6': 'https://i.meee.com.tw/V1hZdtZ.png',
  'team-7': 'https://i.meee.com.tw/V1hZdtZ.png',
  'team-8': 'https://i.meee.com.tw/Qm0fMDt.png',
};
