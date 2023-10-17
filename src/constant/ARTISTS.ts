export const ARTISTS = {
  Aespa: 'Aespa',
  BoA: 'BoA',
  EXO: 'EXO',
  KANGTA: 'KANGTA',
  NCT: 'NCT',
  NCT127: 'NCT127',
  NCT_DREAM: 'NTC_DREAM',
  RIIZE: 'RIIZE',
  RedVelvet: 'RedVelvet',
  SHINEE: 'SHINEE',
  SNSD: 'SNSD',
  SUPER_JUNIOR: 'SUPER_JUNIOR',
  SuperM: 'SuperM',
  TVXQ: 'TVXQ',
  WayV: 'WayV',
  GOT: 'GOT',
} as const

export type ArtistsType = keyof typeof ARTISTS

export default ARTISTS
