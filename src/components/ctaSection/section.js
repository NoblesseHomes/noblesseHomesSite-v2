'use client';

import { useEffect, useState } from 'react';
import { ManagementModal } from '@/components/modal/ctaSection';

export function CTASection({ textH1, textP, textButton, modalType }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isModalOpen]);
  return (
    <>
      <section className="w-full bg-accent-navy py-14 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white mb-3">
            Potřebujete konzultaci?
          </h2>
          <p className="text-base sm:text-lg text-white/60 mb-8 max-w-xl mx-auto">
            Rádi vám poradíme s pronájmem nebo správou nemovitosti. Nezávazně a zdarma.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-primary cursor-pointer text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-premium-lg"
          >
            Nezávazná poptávka
          </button>
        </div>
      </section>

      <ManagementModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
