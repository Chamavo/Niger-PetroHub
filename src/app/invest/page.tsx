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
          <div className="absolute inset-0 bg-background-primary/60 z-10" />
        </div>
        <div className="relative z-20 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-text-primary px-4">
            {t.investPage.title}
          </h1>
          <div className="h-1 w-24 bg-accent-green mx-auto" />
        </div>
      </section>

      {/* Legal Framework */}
      <section className="py-24 bg-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-accent-green text-center mb-16">
            {t.investPage.legal}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <LegalCard 
              icon={<Scale />} 
              title={t.investPage.pillars.code} 
              desc={t.investPage.pillars.codeText}
            />
            <LegalCard 
              icon={<FileText />} 
              title={t.investPage.pillars.contracts} 
              desc={t.investPage.pillars.contractsText}
            />
            <LegalCard 
              icon={<Shield />} 
              title={t.investPage.pillars.content} 
              desc={t.investPage.pillars.contentText}
            />
          </div>
        </div>
      </section>

      {/* Fiscal Terms Table */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-accent-green text-center mb-16">
            {t.investPage.fiscal}
          </h2>
          <div className="overflow-x-auto border border-border">
            <table className="w-full text-left border-collapse rtl:text-right">
              <thead>
                <tr className="bg-background-primary border-b border-border">
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-accent-green rtl:text-right">{t.investPage.fiscalParams.label}</th>
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-accent-green rtl:text-right">{t.investPage.fiscalParams.value}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <FiscalRow item={t.investPage.fiscalParams.royalty} terms="12.5%" />
                <FiscalRow item={t.investPage.fiscalParams.costOil} terms="70%" />
                <FiscalRow item={t.investPage.fiscalParams.profitOil} terms="40% – 60%" />
                <FiscalRow item={t.investPage.fiscalParams.tax} terms="30%" />
                <FiscalRow item={t.whyInvest.attribution} terms="~3 Months" />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-24 bg-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-accent-green text-center mb-16">
            {t.investPage.infrastructure}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <InfrastructureCard 
              image="/photo-soraz-refinery.jpg"
              title={t.investPage.infraCards.sorazTitle}
              desc={t.investPage.infraCards.sorazText}
            />
            <InfrastructureCard 
              image="/photo-pipeline-agadem.jpg"
              title={t.investPage.infraCards.penbTitle}
              desc={t.investPage.infraCards.penbText}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <div className="bg-accent-green/5 p-12 border border-accent-green/20 rounded-sm">
             <Landmark className="text-accent-green mx-auto mb-6" size={48} />
             <h3 className="text-2xl font-bold text-text-primary mb-4 uppercase">
               {t.investPage.cta}
             </h3>
             <button className="bg-accent-orange text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-accent-orange/90 transition-colors">
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
    <div className="p-8 bg-background-card border border-border space-y-4 hover:border-accent-green/40 transition-colors">
      <div className="text-accent-green">{icon}</div>
      <h3 className="text-xl font-bold text-text-primary uppercase tracking-tight">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
    </div>
  );
}

function FiscalRow({ item, terms }: { item: string; terms: string }) {
  return (
    <tr className="hover:bg-background-secondary transition-colors">
      <td className="p-6 text-sm font-bold text-text-primary">{item}</td>
      <td className="p-6 text-sm text-text-secondary">{terms}</td>
    </tr>
  );
}

function InfrastructureCard({ image, title, desc }: { image: string; title: string; desc: string }) {
  return (
    <div className="group overflow-hidden border border-border bg-background-card">
      <div className="h-64 overflow-hidden">
        <PlaceholderImage 
          src={image} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-8 space-y-4">
        <h3 className="text-xl font-bold text-accent-green uppercase tracking-tight">{title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
