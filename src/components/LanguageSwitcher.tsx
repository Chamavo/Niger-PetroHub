"use client";

import React from "react";
import { useI18n } from "@/components/I18nProvider";
import { Locale } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      {(["fr", "en", "ar"] as const).map((lang, index) => (
        <React.Fragment key={lang}>
          <button
            onClick={() => setLocale(lang as Locale)}
            className={`transition-colors uppercase ${
              locale === lang ? "text-accent" : "text-foreground/60 hover:text-foreground"
            }`}
          >
            {lang === "ar" ? "عربي" : lang}
          </button>
          {index < 2 && <span className="text-border">|</span>}
        </React.Fragment>
      ))}
    </div>
  );
}
