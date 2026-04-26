'use client';

import React, { useState } from 'react';
import { PhoneIcon, FileTextIcon, HomeIcon, CalendarIcon, BarChartIcon } from 'lucide-react';
import { ManagementModal } from '@/components/modal/ctaSection';
export function ManagementProcess() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const steps = [
    {
      number: '01',
      icon: PhoneIcon,
      title: 'Vstupní konzultace',
      description:
        'Probereme stav nemovitosti, vaše očekávání a navrhneme rozsah správy, který vám dává smysl.',
    },
    {
      number: '02',
      icon: FileTextIcon,
      title: 'Nastavení podmínek',
      description:
        'Dohodneme rozsah služeb, limity pro opravy, způsob reportingu a komunikační pravidla. Vše transparentně.',
    },
    {
      number: '03',
      icon: HomeIcon,
      title: 'Převzetí správy',
      description:
        'Převezmeme komunikaci s nájemníkem, nastavíme procesy a začneme se starat o běžný provoz bytu.',
    },
    {
      number: '04',
      icon: CalendarIcon,
      title: 'Měsíční správa a provoz',
      description:
        'Hlídáme platby, řešíme požadavky nájemníka, koordinujeme opravy a údržbu — vše v dohodnutém režimu.',
    },
    {
      number: '05',
      icon: BarChartIcon,
      title: 'Reporting a dlouhodobá péče',
      description:
        'Pravidelně dostáváte přehled plateb, oprav a stavu bytu. Doporučíme, co je potřeba řešit dál.',
    },
  ];
  return (
    <>
      <section className="w-full border-b border-black/5 bg-white py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="font-heading text-accent-navy mb-3 text-3xl font-extrabold sm:mb-4 sm:text-4xl md:text-5xl">
              Jak správa probíhá v praxi
            </h2>
            <p className="text-text text-lg sm:text-xl">
              Od první konzultace po pravidelný reporting — krok za krokem.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="bg-accent-cream hover:border-accent-navy/15 flex flex-col items-start gap-4 rounded-2xl border border-black/5 p-6 transition-all duration-300 sm:flex-row sm:gap-6 sm:rounded-3xl sm:p-8"
                >
                  <div className="flex shrink-0 items-center gap-4 sm:gap-6">
                    <div className="bg-accent-navy text-text-main shadow-premium flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-bold sm:h-20 sm:w-20 sm:text-3xl">
                      {step.number}
                    </div>
                    <div className="rounded-xl border border-black/5 bg-white p-3 sm:rounded-2xl sm:p-4">
                      <Icon className="text-accent-navy h-8 w-8 sm:h-10 sm:w-10" strokeWidth={2} />
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
              className="bg-primary hover:bg-primary-dark shadow-premium-lg cursor-pointer rounded-2xl px-10 py-4 text-base font-bold text-white transition-all duration-300 sm:px-12 sm:py-5 sm:text-lg"
            >
              Chci předat správu
            </button>
          </div>
        </div>
      </section>

      <ManagementModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

