"use client";
import { createContext, useContext, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { translations } from "@/lib/i18n";

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}>({ lang: "it", setLang: () => {}, t: (k) => k });

export function useLang() {
  return useContext(LangContext);
}

function detectInitialLang(): Lang {
  if (typeof navigator === "undefined") return "it";
  return navigator.language.toLowerCase().startsWith("it") ? "it" : "en";
}

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Lazy initializer reads the browser language once on mount, synchronously,
  // instead of defaulting to "it" and correcting via a setState-in-effect.
  const [lang, setLang] = useState<Lang>(() => detectInitialLang());

  const t = (key: string): string => {
    const dict = translations[lang] as Record<string, string>;
    const fallback = translations.en as Record<string, string>;
    return dict[key] || fallback[key] || key;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}
