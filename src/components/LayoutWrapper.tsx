"use client";

import React, { useEffect } from "react";
import { useI18n } from "@/components/I18nProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutWrapper({
  children,
  interVar,
  notoVar,
}: {
  children: React.ReactNode;
  interVar: string;
  notoVar: string;
}) {
  const { locale } = useI18n();

  useEffect(() => {
     document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
     document.documentElement.lang = locale;
  }, [locale]);

  return (
    <div className={`${interVar} ${notoVar} ${locale === 'ar' ? 'font-arabic' : 'font-sans'}`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
    </div>
  );
}
