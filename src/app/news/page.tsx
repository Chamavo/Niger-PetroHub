"use client";

import React from "react";
import { useI18n } from "@/components/I18nProvider";
import PlaceholderImage from "@/components/PlaceholderImage";
import { Calendar, ChevronRight, Mail } from "lucide-react";

export default function NewsPage() {
  const { t } = useI18n();

  const newsItems = [
    {
      id: 1,
      image: "/photo-pipeline-agadem.jpg",
      date: "February 24, 2026",
      title: "Minister Hamadou Tinni Unveils NPDH Roadmap",
      excerpt: "The Ministry of Petroleum introduces the 2026-2030 strategic plan for digital transformation of the upstream sector, highlighting the central role of the Data Hub in attracting new international consortia."
    },
    {
      id: 2,
      image: "/photo-drilling-field.jpg",
      date: "June 12, 2024",
      title: "SONIDEP Launches First Upstream Operations",
      excerpt: "Niger's national oil company marks a historic milestone by becoming a full operator in the Agadem basin, signaling a new era of resource sovereignty and industrial development."
    },
    {
      id: 3,
      image: "/photo-soraz-refinery.jpg",
      date: "January 15, 2024",
      title: "PENB Export Pipeline: Niger's Gateway to Global Markets",
      excerpt: "Operational report shows record efficiency for the Niger-Benin pipeline, with over 90,000 bpd exported during the first quarter of fiscal year 2024."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Page Header */}
      <section className="py-24 border-b border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-accent mb-6">
            {t.newsPage.title}
          </h1>
          <div className="h-1 w-24 bg-accent mx-auto" />
        </div>
      </section>

      {/* Featured Articles Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {newsItems.map((news) => (
              <article key={news.id} className="group cursor-pointer">
                <div className="relative h-64 mb-6 overflow-hidden border border-border">
                  <PlaceholderImage 
                    src={news.image} 
                    alt={news.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-2">
                    <Calendar size={12} /> {news.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 leading-tight group-hover:text-accent transition-colors">
                   {news.title}
                </h3>
                <p className="text-sm text-foreground/50 leading-relaxed mb-6 line-clamp-3">
                  {news.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent/60 group-hover:text-accent">
                  {t.newsPage.readMore} <ChevronRight size={16} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-24 bg-secondary border-t border-border mt-auto">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-background p-12 border border-accent/20">
             <div className="space-y-4 text-center md:text-left">
               <div className="flex items-center justify-center md:justify-start gap-4 text-accent">
                 <Mail size={32} />
                 <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground">
                   Sector Newsletter
                 </h2>
               </div>
               <p className="text-sm text-foreground/50 max-w-sm">
                 Stay updated on legal updates, new block attributions, and sector milestones.
               </p>
             </div>
             <form className="w-full md:w-auto flex flex-col sm:flex-row gap-2" onSubmit={e => e.preventDefault()}>
               <div className="relative">
                 <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="bg-secondary border border-border p-4 pr-12 text-sm focus:border-accent outline-none text-foreground/70 w-full sm:w-80 rounded-none transition-colors"
                 />
               </div>
               <button className="bg-accent hover:bg-accent/90 text-primary px-8 py-4 font-bold uppercase text-xs tracking-widest whitespace-nowrap transition-all">
                 {t.newsPage.newsletter}
               </button>
             </form>
          </div>
        </div>
      </section>
    </div>
  );
}
