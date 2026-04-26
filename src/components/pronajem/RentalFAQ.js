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
        <span className="font-heading text-accent-navy pr-6 text-base font-bold sm:pr-8 sm:text-lg">
          {question}
        </span>
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? 'bg-accent-navy rotate-180' : 'bg-accent-navy/8'} cursor-pointer`}
        >
          <ChevronDownIcon
            className={`h-5 w-5 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-accent-navy'}`}
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
export default function RentalFAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    {
      question: 'Jak rychle umíte najít nájemníka?',
      answer:
        'Záleží na lokalitě, stavu a ceně. Po konzultaci navrhneme strategii a reálný odhad termínu obsazení.',
    },
    {
      question: 'Pomůžete mi nastavit správnou cenu?',
      answer:
        'Ano — doporučíme cenové rozpětí a taktiku podle aktuálního trhu. Navrhneme, zda optimalizovat pro rychlost nebo výnos.',
    },
    {
      question: 'Zajišťujete i profesionální fotky a texty?',
      answer:
        'Ano — připravíme nabídku tak, aby zaujala správnou cílovou skupinu a vynikla mezi konkurencí.',
    },
    {
      question: 'Kolik prohlídek budu muset absolvovat?',
      answer:
        'Minimálně — prohlídky vedeme my. Vy dostanete doporučení nejlepšího kandidáta, bez nutnosti být přítomni.',
    },
    {
      question: 'Jak prověřujete zájemce?',
      answer:
        'Kombinujeme filtraci, strukturovaný rozhovor a dostupné ověření bonity a referencí před podpisem smlouvy.',
    },
    {
      question: 'Připravíte smlouvu a dokumenty?',
      answer:
        'Ano — nájemní smlouva, předávací protokol, fotodokumentace a potřebné přílohy jsou součástí naší služby.',
    },
    {
      question: 'Co potřebujete ode mě na začátku?',
      answer:
        'Základní informace o bytě, preferovaný typ nájemníka, pravidla a termín dostupnosti. Zbytek zařídíme.',
    },
    {
      question: 'Můžu si finálně vybrat nájemníka sám?',
      answer:
        'Ano — my doporučíme nejlepšího kandidáta na základě prověření, ale finální rozhodnutí je vždy na vás.',
    },
  ];
  return (
    <section className="bg-accent-warmGray w-full border-b border-black/5 py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="font-heading text-accent-navy mb-3 text-3xl font-extrabold sm:mb-4 sm:text-4xl md:text-5xl">
            Časté otázky k pronájmu
          </h2>
          <p className="text-text text-lg sm:text-xl">Máte otázku, která tu není? Zavolejte nám.</p>
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
