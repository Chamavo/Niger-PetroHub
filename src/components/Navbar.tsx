"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import PlaceholderImage from "@/components/PlaceholderImage";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { t, locale } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: t.nav.blocks, href: "/blocks" },
    { name: t.nav.geology, href: "/geology" },
    { name: t.nav.invest, href: "/invest" },
    { name: t.nav.access, href: "/access" },
    { name: t.nav.news, href: "/news" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-nav backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <PlaceholderImage
              src="/logo-ministere-petrole-niger.png"
              alt="CDP Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-xl font-bold tracking-tighter text-white group-hover:text-accent-orange transition-colors">
              CDP
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white hover:text-accent-orange transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="h-6 w-px bg-border mx-2" />

            <div className="flex items-center gap-6">
              <LanguageSwitcher />
              <Link
                href="/access"
                className="bg-accent-orange hover:bg-accent-orange/90 text-white px-5 py-2.5 rounded-sm text-sm font-bold uppercase transition-all"
              >
                {t.nav.requestAccess}
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white/70 hover:text-accent-orange"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 z-40 bg-nav flex flex-col p-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-6 items-center pt-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-bold text-white hover:text-accent-orange transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="w-full h-px bg-border my-4" />
            <Link
              href="/access"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center bg-accent-orange text-white px-5 py-4 rounded-sm text-lg font-bold uppercase"
            >
              {t.nav.requestAccess}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
