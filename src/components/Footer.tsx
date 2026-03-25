"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function Footer() {
  const { t } = useI18n();

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.blocks, href: "/blocks" },
    { name: t.nav.geology, href: "/geology" },
    { name: t.nav.invest, href: "/invest" },
    { name: t.nav.access, href: "/access" },
    { name: t.nav.news, href: "/news" },
  ];

  return (
    <footer className="bg-[#111111] border-t border-border py-12 pb-20 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <PlaceholderImage
                src="/logo-ministere-petrole-niger.png"
                alt="NPDH Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <span className="text-xl font-bold tracking-tighter text-text-primary">
                NPDH
              </span>
            </div>
            <p className="text-sm text-text-secondary/50 max-w-xs leading-relaxed">
              Official Nigerien government platform for oil and gas sector data, investment opportunities, and legislative frameworks.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-accent-orange">Navigation</h4>
              <ul className="space-y-2">
                {navLinks.slice(0, 3).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-text-secondary/60 hover:text-accent-orange transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 pt-8">
              <ul className="space-y-2">
                {navLinks.slice(3).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-text-secondary/60 hover:text-accent-orange transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent-orange">Contact Information</h4>
            <p className="text-sm text-text-secondary/60 leading-relaxed">
              {t.footer.contact}
            </p>
            <div className="pt-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-text-secondary/30 font-bold">
          <p>© {new Date().getFullYear()} Ministère du Pétrole du Niger. All Rights Reserved.</p>
          <div className="flex gap-6">
             <span>Terms of Service</span>
             <span>Privacy Policy</span>
             <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
