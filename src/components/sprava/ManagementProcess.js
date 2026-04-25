'use client';

import React, { useState } from 'react';
import { PhoneIcon, FileTextIcon, HomeIcon, CalendarIcon, BarChartIcon } from 'lucide-react';
// import { ManagementModal } from './ManagementModal'
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
      <section className="w-full bg-white py-16 sm:py-20 md:py-28 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-accent-navy mb-3 sm:mb-4">
              Jak správa probíhá v praxi
            </h2>
            <p className="text-lg sm:text-xl text-text">
              Od první konzultace po pravidelný reporting — krok za krokem.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start bg-accent-cream rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-black/5 hover:border-accent-navy/15 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 sm:gap-6 shrink-0">
                    <div className="bg-accent-navy text-white font-bold text-2xl sm:text-3xl w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center shadow-premium">
                      {step.number}
                    </div>
                    <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-black/5">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-accent-navy" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-accent-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-text leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary text-white font-bold text-base sm:text-lg px-10 sm:px-12 py-4 sm:py-5 rounded-2xl hover:bg-primary-dark transition-all duration-300 shadow-premium-lg hover:shadow-[0_12px_48px_rgba(221,153,51,0.2)]"
            >
              Chci předat správu
            </button>
          </div>
        </div>
      </section>

      {/* <ManagementModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      /> */}
    </>
  );
}
