"use client";
import { createContext, useContext, useState, useEffect } from "react";
import type { Lang } from "@/lib/i18n";

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}>({ lang: "it", setLang: () => {}, t: (k) => k });

export function useLang() {
  return useContext(LangContext);
}

import { translations } from "@/lib/i18n";

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("it");

  useEffect(() => {
    // Auto-detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith("it")) {
      setLang("it");
    } else {
      setLang("en");
    }
  }, []);

  const t = (key: string): string => {
    return (translations[lang] as any)[key] || (translations.en as any)[key] || key;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}
