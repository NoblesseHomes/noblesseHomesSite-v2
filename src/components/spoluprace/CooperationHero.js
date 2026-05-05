import { GiftIcon, ArrowDownIcon } from 'lucide-react';
export default function CooperationHero() {
  return (
    <>
      <section className="bg-accent-cream relative w-full overflow-hidden border-b border-black/5">
        <div className="bg-accent-navy/5 absolute top-20 right-20 h-40 w-40 rounded-full blur-3xl" />
        <div className="bg-accent-navy/4 absolute bottom-32 left-20 h-48 w-48 rounded-full blur-3xl" />
        <div className="bg-accent-navy/3 absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 md:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-heading text-accent-navy mb-6 text-4xl leading-[1.15] font-extrabold sm:mb-8 sm:text-5xl md:text-6xl lg:text-7xl">
              Máte klienta, který řeší pronájem nebo investiční byt?
            </h1>

            <p className="text-text mx-auto mb-6 max-w-3xl px-4 text-lg leading-relaxed sm:mb-8 sm:text-xl md:text-2xl">
              Předejte nám kontakt — postaráme se o pronájem i správu. Váš klient dostane
              profesionální servis, vy máte jistotu, že je v dobrých rukou.
            </p>

            <div className="bg-accent-navy shadow-premium-lg mb-10 inline-flex items-center gap-3 rounded-2xl px-6 py-4 sm:mb-12 sm:px-8 sm:py-5">
              <GiftIcon className="text-text-muted h-6 w-6 shrink-0" strokeWidth={2.5} />
              <div className="text-left">
                <p className="text-text-main text-base font-bold sm:text-lg">
                  Bonus za úspěšné doporučení
                </p>
                <p className="text-text-muted text-xs sm:text-sm">
                  Férové podmínky spolupráce — dohodneme se na konkrétním modelu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
