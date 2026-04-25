'use client';
import React, { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-black/5 overflow-hidden transition-all duration-300 hover:border-accent-navy/15 shadow-premium hover:shadow-premium-lg">
      <button
        onClick={onToggle}
        className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left transition-colors duration-200 hover:bg-accent-cream/50"
      >
        <span className="font-heading font-bold text-lg sm:text-xl text-accent-navy pr-6 sm:pr-8">
          {question}
        </span>
        <div
          className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-accent-navy rotate-180' : 'bg-accent-navy/8'}`}
        >
          <ChevronDownIcon
            className={`w-5 h-5 transition-colors duration-300 ${isOpen ? 'text-footer-text' : 'text-accent-navy'}`}
            strokeWidth={2.5}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="px-6 sm:px-8 pb-5 sm:pb-6 text-sm sm:text-base text-text leading-relaxed border-t border-black/5 pt-5 sm:pt-6">
          {answer}
        </div>
      </div>
    </div>
  );
}
export function ManagementFAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    {
      question: 'V čem se správa liší od pronájmu?',
      answer:
        'Pronájem je jednorázová služba — najdeme nájemníka a předáme byt. Správa je dlouhodobá — přebíráme každodenní provoz pronajatého bytu: platby, komunikaci, opravy, kontroly.',
    },
    {
      question: 'Kdo schvaluje opravy a do jaké částky?',
      answer:
        'Nastavíme limit společně. Do limitu řešíme operativně, nad limit schvalujete vy. Vše je dohledatelné v měsíčním výkazu.',
    },
    {
      question: 'Co když nájemník přestane platit?',
      answer:
        'Hlídáme splatnosti, posíláme upomínky a spouštíme postup dle smlouvy. Cílem je řešit problém včas, ne až když je pozdě.',
    },
    {
      question: 'Jak často kontrolujete stav bytu?',
      answer:
        'Dle domluvy — pravidelně, aby se předešlo škodám. Po každé kontrole dostanete zprávu s fotodokumentací.',
    },
    {
      question: 'Jak vypadá měsíční reporting?',
      answer:
        'Přehled přijatých plateb, provedených oprav, stavu bytu a doporučení dalšího postupu. Dostáváte ho automaticky.',
    },
    {
      question: 'Řešíte i komunikaci se SVJ a pojišťovnou?',
      answer:
        'Ano — havárie, pojistné události, komunikace se SVJ. Řešíme to v rámci správy, abyste nemuseli.',
    },
  ];
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-28 border-b border-black/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-accent-navy mb-3 sm:mb-4">
            Často kladené otázky
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
