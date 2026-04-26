'use client';
import React, { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="hover:border-accent-navy/15 shadow-premium hover:shadow-premium-lg overflow-hidden rounded-2xl border border-black/5 bg-white transition-all duration-300 sm:rounded-3xl">
      <button
        onClick={onToggle}
        className="hover:bg-accent-cream/50 flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-200 sm:px-8 sm:py-6"
      >
        <span className="font-heading text-accent-navy pr-6 text-lg font-bold sm:pr-8 sm:text-xl">
          {question}
        </span>
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? 'bg-accent-navy rotate-180' : 'bg-accent-navy/8'} cursor-pointer`}
        >
          <ChevronDownIcon
            className={`h-5 w-5 transition-colors duration-300 ${isOpen ? 'text-footer-text' : 'text-accent-navy'}`}
            strokeWidth={2.5}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="text-text border-t border-black/5 px-6 pt-5 pb-5 text-sm leading-relaxed sm:px-8 sm:pt-6 sm:pb-6 sm:text-base">
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
    <section className="w-full border-b border-black/5 bg-white py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="font-heading text-accent-navy mb-3 text-3xl font-extrabold sm:mb-4 sm:text-4xl md:text-5xl">
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
