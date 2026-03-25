"use client";

import React from "react";
import { useI18n } from "@/components/I18nProvider";
import { Check, Send, Star } from "lucide-react";

export default function AccessPage() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col w-full bg-background-primary">
      {/* Page Header */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-accent-orange mb-6 leading-tight">
            {t.accessPage.title}
          </h1>
          <div className="h-1 w-24 bg-accent-green mx-auto" />
        </div>
      </section>

      {/* Subscription Tiers */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Explorer Tier */}
            <TierCard 
              title={t.accessPage.explorer}
              price="$5,000"
              period="/ year"
              features={[
                "Block summary sheets (all 37 blocks)",
                "Basin overview maps",
                "Legal framework documents",
                "Sector news bulletin"
              ]}
              buttonText={t.accessPage.subscribe}
              variant="outline"
            />

            {/* Analyst Tier (Popular) */}
            <TierCard 
              title={t.accessPage.analyst}
              price="$25,000"
              period="/ year"
              features={[
                "Everything in Explorer",
                "Full seismic dataset access by block",
                "Well logs (388 datasets)",
                "Gravity-magnetic data",
                "Geological reports by basin"
              ]}
              buttonText={t.accessPage.subscribe}
              variant="filled"
              popular
            />

            {/* Investor Ready Tier */}
            <TierCard 
              title={t.accessPage.investorReady}
              price="$15,000"
              period="/ engagement"
              features={[
                "Bespoke package",
                "Due diligence assistance",
                "Ministry of Petroleum introduction",
                "Block attribution support",
                "Bilingual documentation (FR/EN)"
              ]}
              buttonText={t.accessPage.requestQuote}
              variant="premium"
            />
          </div>

          <p className="mt-16 text-center text-sm text-text-secondary/40 max-w-2xl mx-auto italic">
            {t.accessPage.confidentiality}
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-background-secondary border-t border-border">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-background-primary border border-border p-12 shadow-2xl shadow-black/50">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-accent-orange mb-8 text-center">
              Request Portal Access
            </h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label={t.accessPage.form.name} placeholder="John Doe" />
                <InputGroup label={t.accessPage.form.org} placeholder="Energy Corp" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label={t.accessPage.form.country} placeholder="France" />
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 px-1">
                    {t.accessPage.form.tier}
                  </label>
                  <select className="bg-background-secondary border border-border p-3 text-sm focus:border-accent-orange outline-none text-text-secondary/70 rounded-none transition-colors">
                    <option>{t.accessPage.explorer}</option>
                    <option>{t.accessPage.analyst}</option>
                    <option>{t.accessPage.investorReady}</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 px-1">
                  {t.accessPage.form.message}
                </label>
                <textarea 
                  rows={4}
                  className="bg-background-secondary border border-border p-3 text-sm focus:border-accent-orange outline-none text-text-secondary/70 rounded-none transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button className="w-full bg-accent-orange hover:bg-accent-orange/90 text-text-primary py-4 rounded-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3">
                {t.accessPage.form.send} <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function TierCard({ title, price, period, features, buttonText, variant, popular = false }: any) {
  const styles = {
    outline: "border border-accent-orange/30 bg-background-primary",
    filled: "border-2 border-accent-orange bg-accent-orange/5",
    premium: "border border-border bg-background-secondary"
  };

  return (
    <div className={`relative p-10 flex flex-col h-full hover:translate-y-[-8px] transition-all duration-300 ${styles[variant as keyof typeof styles]}`}>
      {popular && (
        <div className="absolute top-0 right-10 -translate-y-1/2 bg-accent-orange text-text-primary text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1 flex items-center gap-2">
          <Star size={12} fill="currentColor" /> Popular
        </div>
      )}
      
      <div className="mb-8">
        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-accent-orange mb-2">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black text-text-primary tracking-tighter">{price}</span>
          <span className="text-sm font-bold text-text-secondary/30 uppercase">{period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-12 flex-grow">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex gap-3 text-sm text-text-secondary/60 leading-tight border-b border-border/30 pb-3">
            <Check className="text-accent-green shrink-0" size={16} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-4 rounded-sm text-xs font-black uppercase tracking-widest transition-all ${
        variant === 'filled' ? 'bg-accent-orange text-text-primary hover:bg-accent-orange/90' : 'border border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-text-primary'
      }`}>
        {buttonText}
      </button>
    </div>
  );
}

function InputGroup({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-bold uppercase tracking-widest text-text-secondary/40 px-1">
        {label}
      </label>
      <input 
        type="text" 
        className="bg-background-secondary border border-border p-3 text-sm focus:border-accent-orange outline-none text-text-secondary/70 rounded-none transition-colors"
        placeholder={placeholder}
      />
    </div>
  );
}
