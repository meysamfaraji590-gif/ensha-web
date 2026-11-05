
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  translations,
  type Language,
  type TranslationKey,
} from "./translations";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  chooseLanguage: (language: Language) => void;
  hasChosenLanguage: boolean;
  ready: boolean;
  t: (key: TranslationKey) => string;
};

const LANGUAGE_STORAGE_KEY = "ensha-language";

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [savedLanguage, setSavedLanguage] = useState<Language | null>(null);
  const [languageOverride, setLanguageOverride] = useState<Language | null>(
    null,
  );
  const [hasChosenLanguage, setHasChosenLanguage] = useState(false);
  const [ready, setReady] = useState(false);

  const language = languageOverride ?? savedLanguage ?? "fa";

  useEffect(() => {
    try {
      const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

      if (storedLanguage === "fa" || storedLanguage === "en") {
        setSavedLanguage(storedLanguage);
        setHasChosenLanguage(true);
      }
    } catch {
      // If storage is unavailable, the app can still run in Persian.
    }

    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    document.documentElement.lang = language;
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
  }, [language, ready]);

  const persistLanguage = useCallback((nextLanguage: Language) => {
    setLanguageOverride(nextLanguage);
    setHasChosenLanguage(true);

    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    } catch {
      // Language remains available for the current session.
    }
  }, []);

  const chooseLanguage = useCallback(
    (nextLanguage: Language) => {
      persistLanguage(nextLanguage);
    },
    [persistLanguage],
  );

  const setLanguage = useCallback(
    (nextLanguage: Language) => {
      persistLanguage(nextLanguage);
    },
    [persistLanguage],
  );

  const t = useCallback(
    (key: TranslationKey) => translations[language][key],
    [language],
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      chooseLanguage,
      hasChosenLanguage,
      ready,
      t,
    }),
    [
      language,
      setLanguage,
      chooseLanguage,
      hasChosenLanguage,
      ready,
      t,
    ],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used within a LanguageProvider",
    );
  }

  return context;
}
