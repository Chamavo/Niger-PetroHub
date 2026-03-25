"use client";

import React from "react";
import { useI18n } from "@/components/I18nProvider";
import PlaceholderImage from "@/components/PlaceholderImage";
import { Database, Folder, Layers, Map as MapIcon } from "lucide-react";

export default function GeologyPage() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="relative h-[400px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <PlaceholderImage
            src="/photo-drilling-field.jpg"
            alt="Drilling Field"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background-primary/60 z-10" />
        </div>
        <div className="relative z-20 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-text-primary px-4">
            {t.geologyPage.title}
          </h1>
          <div className="h-1 w-24 bg-accent-green mx-auto" />
        </div>
      </section>

      {/* Basin Oriental */}
      <section className="py-24 bg-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold uppercase tracking-tight text-accent-green">
                {t.geologyPage.oriental}
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                The Oriental Basin, primarily the Termit Rift, is Niger&apos;s most prolific oil province. It features a sequence of Cretaceous to Tertiary sediments with excellent reservoir properties in the Sokor and Madama formations.
              </p>
              <div className="grid grid-cols-2 gap-8 py-6 border-y border-border">
                <StatBox label="Fields Discovered" value="106" />
                <StatBox label="2P Reserves" value="815M bbl" />
                <StatBox label="Drilling Success" value=">90%" />
                <StatBox label="Avg. Depth" value="1,900m" />
              </div>
              <div className="flex flex-wrap gap-3">
                {["Sokor", "Madama", "Yogou"].map(fm => (
                  <span key={fm} className="text-[10px] font-bold uppercase tracking-widest border border-accent-green/30 text-accent-green/60 px-3 py-1 rounded-full">
                    {fm} Formation
                  </span>
                ))}
              </div>
            </div>
            <div className="border border-border p-2 bg-background-secondary">
               <PlaceholderImage 
                src="/photo-soraz-refinery.jpg" 
                alt="Oriental Basin" 
                width={600} 
                height={400} 
                className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Basin Occidental */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 border border-border p-2 bg-background-primary">
               <PlaceholderImage 
                src="/photo-pipeline-agadem.jpg" 
                alt="Occidental Basin" 
                width={600} 
                height={400} 
                className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-3xl font-bold uppercase tracking-tight text-accent-green">
                {t.geologyPage.occidental}
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                The Occidental Basin, including the Iullemmeden and Tamesna basins, represents Niger&apos;s frontier potential. While under-explored compared to the East, initial surveys indicate significant structural traps and source rock maturity.
              </p>
              <div className="grid grid-cols-2 gap-8 py-6 border-y border-border">
                <StatBox label="Status" value="Active Exploration" />
                <StatBox label="Key Player" value="Sonatrach (Kafra)" />
                <StatBox label="Potential" value="Frontier" />
                <StatBox label="Basin Type" value="Intracratonic" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Available in CDP */}
      <section className="py-24 bg-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold uppercase tracking-tight text-accent-green mb-4">
              {t.geologyPage.dataAvailable}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto uppercase tracking-widest text-[10px] font-bold">
              The Central Data Repository (CDP) holds a comprehensive set of geophysical and geological assets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             <DataItem icon={<Layers />} title="2D Seismic" value="40,000 km" />
             <DataItem icon={<MapIcon />} title="3D Seismic" value="13,000 km²" />
             <DataItem icon={<Folder />} title="Well Datasets" value="388" />
             <DataItem icon={<Database />} title="Gravity-Mag" value="57,000 km" />
          </div>

          <div className="mt-20 flex flex-col items-center">
             <button className="bg-accent-orange text-white px-12 py-5 rounded-sm font-bold uppercase tracking-widest shadow-xl shadow-accent-orange/10 hover:shadow-accent-orange/20 transition-all">
                {t.geologyPage.cta}
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="block text-[10px] uppercase tracking-widest text-text-muted font-bold mb-1">{label}</span>
      <span className="text-xl font-bold text-text-primary">{value}</span>
    </div>
  );
}

function DataItem({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="bg-background-card p-8 border border-border flex flex-col items-center text-center gap-4 group hover:bg-accent-green/5 transition-all">
       <div className="text-accent-green group-hover:scale-110 transition-transform">{icon}</div>
       <div>
         <span className="block text-2xl font-black text-text-primary tracking-tighter">{value}</span>
         <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary/40">{title}</span>
       </div>
    </div>
  );
}
