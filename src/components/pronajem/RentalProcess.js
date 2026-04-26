'use client';
import React, { useState } from 'react';
import { PhoneIcon, CameraIcon, UsersIcon, KeyIcon } from 'lucide-react';
import { ManagementModal } from '@/components/modal/ctaSection';
export default function RentalProcess() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const steps = [
    {
      number: '01',
      icon: PhoneIcon,
      title: 'Konzultace',
      description:
        'Probereme byt, vaše cíle a očekávání. Doporučíme cenovou strategii a optimální postup pronájmu.',
    },
    {
      number: '02',
      icon: CameraIcon,
      title: 'Příprava a marketing',
      description:
        'Vytvoříme profesionální nabídku — foto, texty, inzerce na portálech. Filtrujeme příchozí zájemce.',
    },
    {
      number: '03',
      icon: UsersIcon,
      title: 'Výběr nájemníka',
      description:
        'Vedeme prohlídky, prověřujeme zájemce a doporučíme nejlepšího kandidáta. Vy máte poslední slovo.',
    },
    {
      number: '04',
      icon: KeyIcon,
      title: 'Smlouva a předání',
      description:
        'Připravíme smlouvu, předávací protokol a fotodokumentaci. Zajistíme hladké předání klíčů.',
    },
  ];
  return (
    <>
      <section className="w-full border-b border-black/5 bg-white py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="font-heading text-accent-navy mb-3 text-3xl font-extrabold sm:mb-4 sm:text-4xl md:text-5xl">
              Jak probíhá pronájem s námi
            </h2>
            <p className="text-text text-lg sm:text-xl">
              Čtyři kroky od prvního kontaktu po předání klíčů.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="bg-accent-cream hover:border-accent-navy/15 flex flex-col items-start gap-4 rounded-2xl border border-black/5 p-6 transition-all duration-300 sm:flex-row sm:gap-6 sm:rounded-3xl sm:p-8"
                >
                  <div className="flex shrink-0 items-center gap-4 sm:gap-6">
                    <div className="bg-accent-navy shadow-premium flex h-14 w-14 min-w-14 items-center justify-center rounded-2xl text-2xl font-bold text-white sm:h-20 sm:w-20 sm:min-w-14 sm:text-3xl">
                      {step.number}
                    </div>
                    <div className="rounded-xl border border-black/5 bg-white p-3 sm:rounded-2xl sm:p-4">
                      <Icon className="text-accent-navy h-7 w-7 sm:h-9 sm:w-9" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-accent-navy mb-2 text-xl font-bold sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="text-text text-sm leading-relaxed sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center sm:mt-16">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary hover:bg-primary-dark shadow-premium-lg cursor-pointer rounded-2xl px-10 py-4 text-base font-bold text-white transition-all duration-300 hover:shadow-[0_12px_48px_rgba(221,153,51,0.2)] sm:px-12 sm:py-5 sm:text-lg"
            >
              Chci nezávazně pronajmout byt
            </button>
          </div>
        </div>
      </section>

      <ManagementModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
