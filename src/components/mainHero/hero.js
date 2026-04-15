'use client';

import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { HomeIcon, SettingsIcon, HandshakeIcon, ArrowRightIcon, PhoneIcon } from 'lucide-react';
import bg from '@/asset/header/prague-bg.webp';
const services = [
  {
    title: 'Pronájem nemovitosti',
    description: 'Najdeme spolehlivého nájemníka a vyřešíme veškeré papírování.',
    icon: HomeIcon,
    link: '/pronajem',
  },
  {
    title: 'Správa nemovitosti',
    description: 'Kompletní péče o váš byt, komunikace s nájemníky a řešení oprav.',
    icon: SettingsIcon,
    link: '/sprava',
  },
  {
    title: 'Spolupráce pro makléře',
    description: 'Předejte nám klienta a získejte férovou provizi za doporučení.',
    icon: HandshakeIcon,
    link: '/spoluprace',
  },
];
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-24 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-12 lg:gap-8">
          {/* Left Column: Text & CTA */}
          <div className="w-full lg:w-1/2">
            <div className="bg-accent-navy/50 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/10 text-center lg:text-left">
              <p className="text-white/60 font-bold text-sm sm:text-base tracking-widest uppercase mb-4">
                NoblesseHomes
              </p>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-5 leading-[1.15]">
                Realitní kancelář a správa nemovitostí v&nbsp;Praze
              </h1>
              <p className="text-base sm:text-lg text-white/75 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Pronájem, správa a kompletní servis pro majitele nemovitostí. Profesionálně,
                transparentně a s&nbsp;osobním přístupem.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="tel:+420123456789"
                  className="inline-flex items-center justify-center gap-2.5 bg-primary text-white font-bold text-base px-7 py-3.5 rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-premium-lg hover:shadow-[0_12px_48px_rgba(221,153,51,0.3)]"
                >
                  <PhoneIcon className="w-5 h-5" strokeWidth={2.5} />
                  Nezávazná konzultace
                </a>
                <Link
                  href="/nabidka-bytu"
                  className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm text-white font-bold text-base px-7 py-3.5 rounded-xl border border-white/20 hover:bg-white/25 transition-all duration-300"
                >
                  Nabídka bytů
                  <ArrowRightIcon className="w-4 h-4" strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Service Cards */}
          <div className="w-full lg:w-[45%] max-w-lg mx-auto lg:mx-0 flex flex-col gap-4 lg:justify-between">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="flex-1 flex">
                  <Link
                    href={service.link}
                    className="group flex flex-1 justify-center bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 shadow-premium hover:shadow-premium-lg hover:bg-white transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 sm:gap-5">
                      <div className="shrink-0 bg-accent-navy/8 p-3.5 rounded-xl border border-accent-navy/10 group-hover:bg-accent-navy group-hover:border-accent-navy transition-colors duration-300">
                        <Icon
                          className="w-6 h-6 text-accent-navy group-hover:text-[#e0e0e0] transition-colors duration-300"
                          strokeWidth={2.5}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-bold text-lg sm:text-xl text-accent-navy mb-1.5 flex items-center justify-between">
                          {service.title}
                          <ArrowRightIcon
                            className="w-5 h-5 text-accent-navy/50 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                            strokeWidth={2.5}
                          />
                        </h3>
                        <p className="text-sm sm:text-base text-text/80 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
