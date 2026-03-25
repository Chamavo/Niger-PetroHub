"use client";

import React from "react";
import { useI18n } from "@/components/I18nProvider";
import PlaceholderImage from "@/components/PlaceholderImage";
import { ArrowRight, CheckCircle2, Factory, Gavel, Globe, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const { t, locale } = useI18n();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <PlaceholderImage
            src="/hero-agadem-aerial.jpg"
            alt="Hero Agadem Aerial"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center">

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-4 uppercase">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-accent-orange hover:bg-accent-orange/90 text-white px-8 py-4 rounded-sm font-bold uppercase transition-all flex items-center gap-2">
              {t.hero.explore} <ArrowRight size={18} />
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-accent-orange px-8 py-4 rounded-sm font-bold uppercase transition-all">
              {t.hero.request}
            </button>
          </div>
        </div>


      </section>

      {/* Stats Bar */}
      <section className="bg-background-secondary border-y border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem value="~2B" label={t.stats.reserves} />
            <StatItem value="37" label={t.stats.blocks} />
            <StatItem value="40K" label={t.stats.seismic} />
            <StatItem value="$15" label={t.stats.cost} />
          </div>
        </div>
      </section>

      {/* Niger's Petroleum Potential */}
      <section className="py-24 bg-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-accent-green">
                {t.potential.title}
              </h2>
              <div className="space-y-6 text-text-secondary leading-relaxed md:text-lg">
                <p>{t.potential.p1}</p>
                <p>{t.potential.p2}</p>
                <p>{t.potential.p3}</p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 border border-accent-orange/20 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
              <div className="border-4 border-accent-orange p-1">
                <PlaceholderImage
                  src="/map-bassins-niger.jpg"
                  alt="Map Bassins Niger"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest in Niger */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-accent-green text-center mb-16">
            {t.whyInvest.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <WhyInvestCard 
              icon={<Zap className="text-accent-green" size={32} />} 
              text={t.whyInvest.cost} 
            />
            <WhyInvestCard 
              icon={<Globe className="text-accent-green" size={32} />} 
              text={t.whyInvest.attribution} 
            />
            <WhyInvestCard 
              icon={<Gavel className="text-accent-green" size={32} />} 
              text={t.whyInvest.legal} 
            />
            <WhyInvestCard 
              icon={<ShieldCheck className="text-accent-green" size={32} />} 
              text={t.whyInvest.infrastructure} 
            />
          </div>
        </div>
      </section>

      {/* Active Operators */}
      <section className="py-20 border-y border-border bg-background-primary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-text-secondary/40 mb-12">
            {t.operators.title}
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <PlaceholderImage src="/logo-cnpc.png" alt="CNPC" width={100} height={40} className="h-10 w-auto object-contain" />
             <PlaceholderImage src="/logo-savannah-energy.png" alt="Savannah Energy" width={120} height={40} className="h-8 w-auto object-contain" />
             <PlaceholderImage src="/logo-sonatrach.png" alt="Sonatrach" width={120} height={40} className="h-10 w-auto object-contain" />
             <PlaceholderImage src="/logo-sonidep.png" alt="Sonidep" width={100} height={40} className="h-10 w-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold uppercase tracking-tight text-accent-green">
              Latest News
            </h2>
            <button className="text-accent-orange hover:underline text-sm font-bold uppercase tracking-widest">
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NewsCard 
              date="Feb 24, 2026"
              title="Minister Hamadou Tinni Unveils NPDH Roadmap"
              excerpt="Strategic vision for the normalization of oil data access introduced at Niamey energy forum."
            />
            <NewsCard 
              date="Jun 15, 2024"
              title="SONIDEP Launches First Upstream Operations"
              excerpt="National oil company begins its journey as an operator in the Agadem basin."
            />
            <NewsCard 
              date="Jan 10, 2024"
              title="PENB Export Pipeline Reaches Capacity"
              excerpt="Niger's strategic export route proves vital for West African hydrocarbon logistics."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center space-y-2">
      <div className="text-4xl md:text-5xl font-black text-accent-orange tracking-tighter">
        {value}
      </div>
      <div className="text-[10px] md:text-xs uppercase tracking-widest text-text-secondary font-bold max-w-[120px] mx-auto">
        {label}
      </div>
    </div>
  );
}

function WhyInvestCard({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="bg-background-card p-8 border border-border flex items-start gap-6 hover:border-accent-orange/40 transition-colors group">
      <div className="p-4 bg-accent-green/5 rounded-sm group-hover:bg-accent-green/10 transition-colors">
        {icon}
      </div>
      <p className="text-lg font-medium text-text-secondary leading-snug">
        {text}
      </p>
    </div>
  );
}

function NewsCard({ date, title, excerpt }: { date: string; title: string; excerpt: string }) {
  return (
    <div className="bg-background-card border border-border p-8 flex flex-col gap-6 hover:bg-background-secondary transition-all cursor-pointer group">
      <div className="space-y-4">
        <span className="text-[10px] font-bold text-accent-green uppercase tracking-widest">{date}</span>
        <h3 className="text-xl font-bold leading-tight group-hover:text-accent-orange transition-colors">
          {title}
        </h3>
        <p className="text-sm text-text-secondary line-clamp-2">
          {excerpt}
        </p>
      </div>
      <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-muted group-hover:text-accent-orange">
        Read More <ArrowRight size={14} />
      </div>
    </div>
  );
}
