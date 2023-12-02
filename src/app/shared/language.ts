const langs = ['en', 'pl', 'ua'] as const
export type Language = typeof langs[number]
export const languages = Object.values(langs) as string[]