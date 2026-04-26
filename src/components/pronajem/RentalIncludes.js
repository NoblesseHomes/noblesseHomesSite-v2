import { CheckIcon } from 'lucide-react';
export default function RentalIncludes() {
  const items = [
    'Analýza bytu + doporučení cenové strategie',
    'Doporučení přípravy bytu (úklid, drobné opravy, staging — dle potřeby)',
    'Profesionální prezentace nabídky (foto, texty, inzerce)',
    'Komunikace se zájemci (telefon, zprávy, filtrace)',
    'Organizace a vedení prohlídek',
    'Prověření zájemce (bonita, reference, rizika)',
    'Příprava dokumentace (nájemní smlouva, domovní pravidla apod.)',
    'Předávací protokol + fotodokumentace stavu',
    'Předání klíčů + nastavení startu nájmu',
  ];
  return (
    <section className="bg-accent-warmGray w-full border-b border-black/5 py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="font-heading text-accent-navy mb-3 text-3xl font-extrabold sm:mb-4 sm:text-4xl md:text-5xl">
            Co přesně zajistíme v rámci pronájmu
          </h2>
          <p className="text-text text-lg sm:text-xl">
            Kompletní proces — od přípravy nabídky až po předání klíčů.
          </p>
        </div>

        <div className="shadow-premium rounded-2xl border border-black/5 bg-white p-8 sm:rounded-3xl sm:p-12">
          <ul className="space-y-4 sm:space-y-5">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="bg-accent-navy/8 border-accent-navy/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border sm:h-10 sm:w-10">
                  <CheckIcon className="text-accent-navy h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} />
                </div>
                <span className="text-text pt-1 text-base leading-relaxed sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
