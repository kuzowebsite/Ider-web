export const languages = {
    mn: "Монгол",
    en: "English",
    jp: "日本語",
    kr: "한국어",
    cn: "中文",
  } as const
  
  export type Language = keyof typeof languages
  
  export const defaultLanguage: Language = "mn"
  
  