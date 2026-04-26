'use client';

import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { ArrowRightIcon, PhoneIcon } from 'lucide-react';
import bg from '@/asset/header/prague-bg.webp';

export function Hero() {
  return (
    <section className="relative w-full min-h-svh lg:min-h-[85vh] flex items-center overflow-hidden bg-accent-navy">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          preload={true}
          src={bg}
          alt="Praha — Karlův most a Pražský hrad"
          className="w-full h-full object-cover"
        />
        {/* Stronger darkening for readability */}
        <div className="absolute inset-0 bg-accent-navy/50" />
        <div className="absolute inset-0 bg-linear-to-t from-accent-navy/80 via-accent-navy/40 to-accent-navy/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 lg:py-20">
        <div className="max-w-4xl">
          <div className="bg-accent-navy/55 backdrop-blur-md rounded-3xl p-8 sm:p-10 lg:p-12 border border-text-main/15 text-left shadow-premium-lg">
            <p className="text-text-muted font-bold text-sm sm:text-base tracking-widest uppercase mb-4">
              NoblesseHomes
            </p>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-main mb-5 leading-[1.15]">
              Realitní kancelář a správa nemovitostí v&nbsp;Praze
            </h1>
            <p className="text-base sm:text-lg text-text-muted mb-8 leading-relaxed max-w-2xl">
              Pronájem, správa a kompletní servis pro majitele nemovitostí. Profesionálně,
              transparentně a s&nbsp;osobním přístupem.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="tel:+420123456789"
                className="inline-flex items-center justify-center gap-2.5 bg-primary text-white font-bold text-base px-7 py-3.5 rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-premium-lg hover:shadow-[0_12px_48px_rgba(221,153,51,0.3)]"
              >
                <PhoneIcon className="w-5 h-5" strokeWidth={2.5} />
                Kontaktovat nás
              </a>
              <Link
                href="#sluzby"
                className="inline-flex items-center justify-center gap-2 bg-text-main/12 backdrop-blur-sm text-text-main font-bold text-base px-7 py-3.5 rounded-xl border border-text-main/25 hover:bg-text-main/20 transition-all duration-300"
              >
                Prohlédnout služby
                <ArrowRightIcon className="w-4 h-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

