import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/translations"

export function useTranslation() {
  const { currentLanguage } = useLanguage()

  const t = (key: string) => {
    return translations[currentLanguage][key] || key
  }

  return { t }
}

