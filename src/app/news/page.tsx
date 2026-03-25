"use client";

import React from "react";
import { useI18n } from "@/components/I18nProvider";
import PlaceholderImage from "@/components/PlaceholderImage";
import { Calendar, ChevronRight, Mail } from "lucide-react";

export default function NewsPage() {
  const { t } = useI18n();



  return (
    <div className="flex flex-col w-full bg-background-primary min-h-screen">
      {/* Page Header */}
      <section className="py-24 border-b border-border bg-background-secondary/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-accent-green mb-6">
            {t.newsPage.title}
          </h1>
          <div className="h-1 w-24 bg-accent-green mx-auto" />
        </div>
      </section>

      {/* Featured Articles Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {t.newsPage.articles.map((news: any, idx: number) => (
              <article key={idx} className="group cursor-pointer rtl:text-right">
                <div className="relative h-64 mb-6 overflow-hidden border border-border">
                  <PlaceholderImage 
                    src={idx === 0 ? "/photo-pipeline-agadem.jpg" : idx === 1 ? "/photo-drilling-field.jpg" : "/photo-soraz-refinery.jpg"} 
                    alt={news.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 bg-background-card/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-accent-green uppercase tracking-widest flex items-center gap-2">
                    <Calendar size={12} /> {news.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4 leading-tight group-hover:text-accent-orange transition-colors">
                   {news.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-3">
                  {news.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-orange/60 group-hover:text-accent-orange rtl:flex-row-reverse">
                  {t.newsPage.readMore} <ChevronRight size={16} className="rtl:rotate-180" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-24 bg-background-secondary border-t border-border mt-auto">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-background-card p-12 border border-border rtl:flex-row-reverse">
             <div className="space-y-4 text-center md:text-left rtl:md:text-right">
               <div className="flex items-center justify-center md:justify-start gap-4 text-accent-green rtl:flex-row-reverse">
                 <Mail size={32} />
                 <h2 className="text-2xl font-bold uppercase tracking-tight text-text-primary">
                   {t.newsPage.newsletter}
                 </h2>
               </div>
               <p className="text-sm text-text-secondary/50 max-w-sm">
                 {t.hero.subtitle}
               </p>
             </div>
             <form className="w-full md:w-auto flex flex-col sm:flex-row gap-2 rtl:flex-row-reverse" onSubmit={e => e.preventDefault()}>
               <div className="relative">
                 <input 
                  type="email" 
                  placeholder={t.newsPage.placeholder}
                  className="bg-background-secondary border border-border p-4 pr-12 text-sm focus:border-accent-orange outline-none text-text-secondary/70 w-full sm:w-80 rounded-none transition-colors rtl:text-right"
                 />
               </div>
               <button className="bg-accent-orange hover:bg-accent-orange/90 text-text-primary px-8 py-4 font-bold uppercase text-xs tracking-widest whitespace-nowrap transition-all">
                 {t.newsPage.join}
               </button>
             </form>
          </div>
        </div>
      </section>
    </div>
  );
}
