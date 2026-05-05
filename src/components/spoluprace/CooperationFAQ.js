'use client';
import { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="shadow-premium hover:shadow-premium-lg overflow-hidden rounded-2xl border border-black/5 bg-white transition-all duration-300 hover:border-black/10 sm:rounded-3xl">
      <button
        onClick={onToggle}
        className="hover:bg-accent-cream/50 flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-200 sm:px-8 sm:py-6"
      >
        <span className="font-heading text-accent-navy pr-6 text-base font-bold sm:pr-8 sm:text-lg">
          {question}
        </span>
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? 'bg-accent-navy rotate-180' : 'bg-accent-navy/8'}`}
        >
          <ChevronDownIcon
            className={`h-5 w-5 cursor-pointer transition-colors duration-300 ${isOpen ? 'text-white' : 'text-accent-navy'}`}
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
export default function CooperationFAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    {
      question: 'Jak rychle klienta kontaktujete?',
      answer:
        'Do 24 hodin od předání kontaktu. Klientovi se ozveme, probereme situaci a navrhneme další postup.',
    },
    {
      question: 'V jakých lokalitách fungujete?',
      answer:
        'Aktuálně se zaměřujeme na Prahu a blízké okolí. Pokud máte klienta mimo Prahu, kontaktujte nás — rádi posoudíme možnosti.',
    },
    {
      question: 'Co když klient ještě nemá byt připravený?',
      answer:
        'Nevadí — poradíme s přípravou bytu, doporučíme úpravy a navrhneme optimální postup ještě před spuštěním pronájmu.',
    },
    {
      question: 'Co potřebujete, abyste mohli začít?',
      answer:
        'Stačí jméno klienta, telefonní číslo a krátký popis situace (typ nemovitosti, záměr). Zbytek vyřešíme my.',
    },
  ];
  return (
    <section className="bg-accent-warmGray w-full border-b border-black/5 py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="font-heading text-accent-navy mb-3 text-3xl font-extrabold sm:mb-4 sm:text-4xl md:text-5xl">
            Časté otázky ke spolupráci
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
