'use client';

import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { ArrowRightIcon, PhoneIcon } from 'lucide-react';
import bg from '@/asset/header/prague-bg.webp';

export function Hero() {
  return (
    <section className="bg-accent-navy relative flex min-h-svh w-full items-center overflow-hidden lg:min-h-[85vh]">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          preload={true}
          src={bg}
          alt="Praha — Karlův most a Pražský hrad"
          className="h-full w-full object-cover"
        />
        {/* Stronger darkening for readability */}
        <div className="bg-accent-navy/50 absolute inset-0" />
        <div className="from-accent-navy/80 via-accent-navy/40 to-accent-navy/20 absolute inset-0 bg-linear-to-t" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-20">
        <div className="max-w-4xl">
          <div className="bg-accent-navy/55 border-text-main/15 shadow-premium-lg rounded-3xl border p-8 text-left backdrop-blur-md sm:p-10 lg:p-12">
            <p className="text-text-muted mb-4 text-sm font-bold tracking-widest uppercase sm:text-base">
              NoblesseHomes
            </p>
            <h1 className="font-heading text-text-main mb-5 text-3xl leading-[1.15] font-extrabold sm:text-4xl md:text-5xl lg:text-6xl">
              Realitní kancelář a správa nemovitostí v&nbsp;Praze
            </h1>
            <p className="text-text-muted mb-8 max-w-2xl text-base leading-relaxed sm:text-lg">
              Pronájem, správa a kompletní servis pro majitele nemovitostí. Profesionálně,
              transparentně a s&nbsp;osobním přístupem.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/kontakt"
                className="bg-primary hover:bg-primary-dark shadow-premium-lg text-text-main inline-flex items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-base font-bold transition-all duration-300 hover:shadow-[0_12px_48px_rgba(221,153,51,0.3)]"
              >
                <PhoneIcon className="h-5 w-5" strokeWidth={2.5} />
                Kontaktovat nás
              </Link>
              <Link
                href="#sluzby"
                className="bg-text-main/12 text-text-main border-text-main/25 hover:bg-text-main/20 inline-flex items-center justify-center gap-2 rounded-xl border px-7 py-3.5 text-base font-bold backdrop-blur-sm transition-all duration-300"
              >
                Prohlédnout služby
                <ArrowRightIcon className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
