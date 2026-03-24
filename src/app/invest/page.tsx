"use client";

import React from "react";
import { useI18n } from "@/components/I18nProvider";
import PlaceholderImage from "@/components/PlaceholderImage";
import { FileText, Landmark, Scale, Shield } from "lucide-react";

export default function InvestPage() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="relative h-[400px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <PlaceholderImage
            src="/photo-investors-meeting.png"
            alt="Investors Meeting"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70 z-10" />
        </div>
        <div className="relative z-20 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white px-4">
            {t.investPage.title}
          </h1>
          <div className="h-1 w-24 bg-accent mx-auto" />
        </div>
      </section>

      {/* Legal Framework */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-accent text-center mb-16">
            {t.investPage.legal}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <LegalCard 
              icon={<Scale />} 
              title="Petroleum Code 2017" 
              desc="Modern legislation providing clarity on exploration rights, environmental obligations, and local content requirements."
            />
            <LegalCard 
              icon={<FileText />} 
              title="Production Sharing Contract" 
              desc="Standard PSC terms with flexible royalty-tax structures tailored to both rift and frontier basin economics."
            />
            <LegalCard 
              icon={<Shield />} 
              title="Stabilization & Arbitration" 
              desc="Robust legal protections including fiscal stabilization clauses and international arbitration (ICSID/OHADA)."
            />
          </div>
        </div>
      </section>

      {/* Fiscal Terms Table */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-accent text-center mb-16">
            {t.investPage.fiscal}
          </h2>
          <div className="overflow-x-auto border border-border">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-background border-b border-border">
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-accent">Item</th>
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-accent">Terms</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <FiscalRow item="Royalty" terms="12.5%" />
                <FiscalRow item="Tax Oil" terms="40% – 60%" />
                <FiscalRow item="Cost Stop" terms="70%" />
                <FiscalRow item="VAT & Customs" terms="Exempt (Exploration + First 5 years production)" />
                <FiscalRow item="Block Attribution Delay" terms="~3 Months" />
                <FiscalRow item="Exploration Period" terms="Up to 10 Years" />
                <FiscalRow item="Production Period" terms="Minimum 25 Years" />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-accent text-center mb-16">
            {t.investPage.infrastructure}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <InfrastructureCard 
              image="/photo-soraz-refinery.jpg"
              title="SORAZ Refinery — Zinder"
              desc="20,000 bpd capacity supplying domestic and regional markets with high-quality refined products."
            />
            <InfrastructureCard 
              image="/photo-pipeline-agadem.jpg"
              title="PENB Export Pipeline"
              desc="1,950 km strategic route from Agadem to Sèmè (Benin), unlocking global export potential for Nigerien crude."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <div className="bg-accent/5 p-12 border border-accent/20 rounded-sm">
             <Landmark className="text-accent mx-auto mb-6" size={48} />
             <h3 className="text-2xl font-bold text-foreground mb-4 uppercase">
               {t.investPage.cta}
             </h3>
             <button className="bg-accent text-primary px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-accent/90 transition-colors">
               {t.investPage.contact}
             </button>
           </div>
        </div>
      </section>
    </div>
  );
}

function LegalCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="p-8 bg-secondary border border-border space-y-4 hover:border-accent/40 transition-colors">
      <div className="text-accent">{icon}</div>
      <h3 className="text-xl font-bold text-foreground uppercase tracking-tight">{title}</h3>
      <p className="text-sm text-foreground/50 leading-relaxed">{desc}</p>
    </div>
  );
}

function FiscalRow({ item, terms }: { item: string; terms: string }) {
  return (
    <tr className="hover:bg-white/5 transition-colors">
      <td className="p-6 text-sm font-bold text-foreground/80">{item}</td>
      <td className="p-6 text-sm text-foreground/60">{terms}</td>
    </tr>
  );
}

function InfrastructureCard({ image, title, desc }: { image: string; title: string; desc: string }) {
  return (
    <div className="group overflow-hidden border border-border bg-secondary">
      <div className="h-64 overflow-hidden">
        <PlaceholderImage 
          src={image} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-8 space-y-4">
        <h3 className="text-xl font-bold text-accent uppercase tracking-tight">{title}</h3>
        <p className="text-sm text-foreground/60 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
