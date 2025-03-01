"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Language, defaultLanguage, languages } from "@/i18n-config"

type LanguageContextType = {
  currentLanguage: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(defaultLanguage)

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && languages[savedLanguage]) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
  }

  return <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

