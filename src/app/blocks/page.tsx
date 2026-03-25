"use client";

import React, { useState } from "react";
import { useI18n } from "@/components/I18nProvider";
import PlaceholderImage from "@/components/PlaceholderImage";
import { Lock, Search, Filter } from "lucide-react";

export default function BlocksPage() {
  const { t } = useI18n();
  const [activeFilter, setActiveFilter] = useState("all");
  const [lockedBlock, setLockedBlock] = useState<string | null>(null);

  const blocks = [
    { id: "NE-01", name: "Block NE-01 — Termit Basin", basin: "oriental", area: "12,500", seismic: "2D | 3D", status: "open" },
    { id: "NE-07", name: "Block NE-07 — Termit Basin", basin: "oriental", area: "8,900", seismic: "2D", status: "open" },
    { id: "OC-03", name: "Block OC-03 — Iullemmeden", basin: "occidental", area: "15,200", seismic: "2D", status: "open" },
    { id: "NE-12", name: "Block NE-12 — Djado Basin", basin: "oriental", area: "22,000", seismic: "Gravity-Mag", status: "under-study" },
    { id: "OC-09", name: "Block OC-09 — Tamesna", basin: "occidental", area: "11,400", seismic: "Limited 2D", status: "open" },
    { id: "NE-05", name: "Block NE-05 — Agadem", basin: "oriental", area: "6,700", seismic: "2D | 3D", status: "open" },
  ];

  const filteredBlocks = activeFilter === "all" ? blocks : blocks.filter(b => b.basin === activeFilter);

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="relative h-[400px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <PlaceholderImage
            src="/photo-desert-niger.jpg"
            alt="Desert Niger"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background-primary/60 z-10" />
        </div>
        <div className="relative z-20 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-text-primary px-4">
            {t.blocksPage.title}
          </h1>
          <div className="h-1 w-24 bg-accent-green mx-auto" />
        </div>
      </section>

      {/* Intro & Filter Bar */}
      <section className="py-16 bg-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
            <div className="max-w-xl">
              <p className="text-lg text-text-secondary leading-relaxed">
                {t.blocksPage.intro} The Nigerien government offers standardized terms for exploration through Production Sharing Contracts (PSC).
              </p>
            </div>
            <div className="flex flex-wrap gap-2 bg-background-secondary p-1 border border-border rounded-sm">
              <FilterButton 
                active={activeFilter === "all"} 
                onClick={() => setActiveFilter("all")}
                label={t.blocksPage.filterAll} 
              />
              <FilterButton 
                active={activeFilter === "oriental"} 
                onClick={() => setActiveFilter("oriental")}
                label={t.blocksPage.filterOriental} 
              />
              <FilterButton 
                active={activeFilter === "occidental"} 
                onClick={() => setActiveFilter("occidental")}
                label={t.blocksPage.filterOccidental} 
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlocks.map((block) => (
              <div 
                key={block.id}
                className="group relative bg-background-card border border-border hover:border-accent-orange/50 transition-all p-8 flex flex-col gap-6"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm ${
                      block.status === 'open' ? 'bg-green-500/10 text-green-500' : 'bg-white/5 text-white/40'
                    }`}>
                      {block.status === 'open' ? 'Open' : 'Under Study'}
                    </span>
                    <span className="text-[10px] font-medium text-text-muted uppercase tracking-widest">
                       {block.basin === 'oriental' ? 'Basin Oriental' : 'Basin Occidental'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-orange transition-colors">
                    {block.name}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4 border-y border-border py-4 my-2 text-xs">
                  <div>
                    <span className="block text-text-muted uppercase tracking-widest mb-1">{t.blocksPage.area}</span>
                    <span className="font-bold">{block.area} km²</span>
                  </div>
                  <div>
                    <span className="block text-text-muted uppercase tracking-widest mb-1">Data</span>
                    <span className="font-bold">{block.seismic}</span>
                  </div>
                </div>

                <button 
                  onClick={() => setLockedBlock(block.id)}
                  className="w-full bg-background-secondary hover:bg-accent-orange hover:text-white py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                >
                  {t.blocksPage.viewData}
                </button>

                {/* Locked Overlay */}
                {lockedBlock === block.id && (
                  <div className="absolute inset-0 z-30 bg-background-card/95 backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
                    <div className="w-12 h-12 bg-accent-green/20 rounded-full flex items-center justify-center mb-4">
                      <Lock className="text-accent-green" size={24} />
                    </div>
                    <p className="text-sm font-medium text-text-primary mb-6 max-w-[200px]">
                       {t.blocksPage.locked}
                    </p>
                    <div className="flex flex-col w-full gap-2">
                      <button 
                        className="bg-accent-orange text-white py-3 rounded-sm text-[10px] font-bold uppercase tracking-tighter"
                        onClick={() => setLockedBlock(null)}
                      >
                         Apply for Subscription
                      </button>
                      <button 
                        className="text-text-muted hover:text-text-primary py-2 text-[10px] font-bold uppercase"
                        onClick={() => setLockedBlock(null)}
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-24 p-12 bg-accent-orange relative overflow-hidden flex flex-col items-center text-center gap-8">
             <div className="absolute top-0 right-0 p-8 opacity-10">
               <PlaceholderImage src="/logo-ministere-petrole-niger.png" alt="Logo" width={200} height={200} />
             </div>
             <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight max-w-2xl relative z-10">
               {t.blocksPage.cta}
             </h2>
             <button className="bg-background-primary text-accent-orange px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform relative z-10">
               {t.blocksPage.subscribe}
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FilterButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all ${
        active ? "bg-accent-orange text-white" : "text-text-muted hover:text-text-primary"
      }`}
    >
      {label}
    </button>
  );
}
