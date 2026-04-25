'use client';

import React, { useState } from 'react';
// import { ManagementModal } from './ManagementModal';
export function ManagementHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section className="relative w-full bg-accent-cream overflow-hidden border-b border-black/5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-accent-navy/5 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-20 w-48 h-48 bg-accent-navy/4 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-navy/3 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-accent-navy mb-6 sm:mb-8 leading-[1.15]">
              Správa nemovitosti — vy inkasujete, my řešíme provoz
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-text mb-10 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
              Přebíráme každodenní operativu pronajatého bytu — komunikaci s nájemníkem, platby,
              opravy, kontroly a reporting. <br className="hidden sm:block" />
              <span className="font-semibold text-accent-navy">
                Vy máte přehled, ale nemusíte nic řešit.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center px-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-2xl hover:bg-primary-dark transition-all duration-300 shadow-premium-lg text-center"
              >
                Chci předat správu
              </button>
              <a
                href="tel:+420123456789"
                className="bg-white text-accent-navy font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-2xl hover:bg-accent-cream transition-all duration-300 border-2 border-accent-navy/15 hover:border-accent-navy/30 shadow-premium hover:shadow-premium-lg text-center"
              >
                Nezávazná konzultace
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <ManagementModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
    </>
  );
}
