export type GeoLocation = Location[]

export interface Location {
  name: string
  local_names: LocalNames
  lat: number
  lon: number
  country: string
  state: string
}

export interface LocalNames {
  eo: string
  mr: string
  te: string
  ta: string
  ru: string
  hi: string
  cs: string
  he: string
  ar: string
  pa: string
  fa: string
  zh: string
  oc: string
  ml: string
  en: string
  ja: string
  kn: string
  sr: string
  ka: string
  tr: string
  ur: string
}
