import type { NavItem, TeamMember, ArtistMember } from '../types';

export const navItems: NavItem[] = [
  { id: 'hero', label: { zh: '首頁', en: 'HOME' }, numberKey: '00' },
  { id: 'statement', label: { zh: '箱庭旅團', en: 'FLASK TROUPE' }, numberKey: '01' },
  { id: 'artists', label: { zh: '成員', en: 'MEMBERS' }, numberKey: '02' },
  { id: 'team', label: { zh: '計劃團隊', en: 'TEAM' }, numberKey: '03' },
];

export const artistMembers: ArtistMember[] = [
  {
    number: '01',
    name: { zh: '砂惿 Saltøy', en: 'Saltøy' },
    role: { zh: '', en: '' },
    description: { zh: '細膩晶透的歌聲，淨化你的心靈。', en: 'A delicate and crystalline voice that purifies your soul.' },
    element: { zh: '鹽', en: 'SALT' },
    ability: { zh: '晶透聲體', en: 'MEMORY CRYSTALLIZATION' },
    status: { zh: '已覺醒', en: 'AWAKENED' },
    origin: { zh: '素體 01 號', en: 'VESSEL NO.01' },
    tags: { zh: [], en: [] },
    symbol: 'circle-bar',
    tone: 'salt',
    socialUrl: 'https://www.youtube.com/@Saltoy.FlaskTroupe',
    xUrl: 'https://x.com/Saltoy_FT',
  },
  {
    number: '02',
    name: { zh: '維芙 Viv', en: 'Viv' },
    role: { zh: '', en: '' },
    description: { zh: '甜膩聲音的陷阱，流轉你的日常', en: 'A sweet vocal trap, drifting through your daily rhythm.' },
    element: { zh: '水銀', en: 'MERCURY' },
    ability: { zh: '汞流無垠', en: 'LIQUID RESONANCE' },
    status: { zh: '已覺醒', en: 'AWAKENED' },
    origin: { zh: '素體 02 號', en: 'VESSEL NO.02' },
    tags: { zh: [], en: [] },
    symbol: 'orb-cross',
    tone: 'mercury',
    socialUrl: 'https://www.youtube.com/@Viv.FlaskTroupe',
    xUrl: 'https://x.com/Vivvv_FT',
  },
  {
    number: '03',
    name: { zh: '琉南 Reyunna', en: 'Reyunna' },
    role: { zh: '', en: '' },
    description: { zh: '燃燒幽火的帥氣，在舞台上絢爛', en: 'The cool brilliance of burning ghost flames, radiating on stage.' },
    element: { zh: '硫磺', en: 'SULFUR' },
    ability: { zh: '磺塊能量', en: 'THERMAL DANCE' },
    status: { zh: '已覺醒', en: 'AWAKENED' },
    origin: { zh: '素體 03 號', en: 'VESSEL NO.03' },
    tags: { zh: [], en: [] },
    symbol: 'triangle-cross',
    tone: 'sulfur',
    socialUrl: 'https://www.youtube.com/@Reyunna.FlaskTroupe',
    xUrl: 'https://x.com/Reyunna_FT',
  }
];

export const teamMembers: TeamMember[] = [
  { id: 't1', name: { zh: '桂馬數位 KEIMA', en: '桂馬數位 KEIMA' }, role: { zh: '主創', en: 'Creator' }, imageKey: 'team-1' },
  { id: 't2', name: { zh: '科碼新媒體', en: '科碼新媒體' }, role: { zh: '動捕支援', en: 'Mocap Support' }, imageKey: 'team-2' },
  { id: 't3', name: { zh: 'バルス株式会社', en: 'バルス株式会社' }, role: { zh: '3D角色製作', en: '3D Character Production' }, imageKey: 'team-3' },
  { id: 't8', name: { zh: '春魚創意', en: '春魚創意' }, role: { zh: '商務支援', en: 'Business Support' }, imageKey: 'team-8' },
  { id: 't4', name: { zh: '惡兔重工', en: '惡兔重工' }, role: { zh: '3D角色製作', en: '3D Character Production' }, imageKey: 'team-4' }
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
