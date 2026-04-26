import { WrenchIcon, ShieldCheckIcon, BarChart2Icon, CheckCircleIcon } from 'lucide-react';
export function ManagementBenefits() {
  return (
    <section className="w-full bg-accent-cream py-16 sm:py-20 md:py-28 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-accent-navy mb-3 sm:mb-4">
            Co za vás řešíme
          </h2>
          <p className="text-lg sm:text-xl text-text max-w-2xl mx-auto">
            Správa nemovitosti znamená, že se nemusíte starat o provoz.{' '}
            <span className="font-semibold text-accent-navy">
              My řešíme operativu, vy máte přehled.
            </span>
          </p>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 items-stretch">
          {/* LEFT — Large featured card (3/5 width) */}
          <div className="lg:col-span-3 bg-accent-navy rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-premium-lg">
            {/* Top content */}
            <div>
              {/* Tag */}
              <div className="inline-flex items-center bg-text-main/12 text-text-main text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-text-main/20 mb-6">
                Náš závazek
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-text-main mb-4 leading-tight">
                Váš byt je v bezpečných rukou
              </h3>

              <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-8">
                Přebíráme každodenní provoz pronajatého bytu — od komunikace s nájemníkem přes
                platby až po koordinaci oprav. Vy dostáváte pravidelný přehled.
              </p>

              {/* Checkmarks */}
              <ul className="space-y-3 mb-10">
                <li className="flex items-center gap-3">
                  <CheckCircleIcon
                    className="w-5 h-5 text-text-muted shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="text-text-main font-medium">
                    Komunikace s nájemníkem — jedno kontaktní místo
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircleIcon
                    className="w-5 h-5 text-text-muted shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="text-text-main font-medium">
                    Kontrola plateb a řešení nedoplatků
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircleIcon
                    className="w-5 h-5 text-text-muted shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="text-text-main font-medium">
                    Koordinace oprav a údržby v dohodnutém limitu
                  </span>
                </li>
              </ul>
            </div>

            {/* Bottom stat bar */}
            <div className="border-t border-text-main/10 pt-6">
              <div className="grid grid-cols-3 divide-x divide-text-main/10">
                <div className="text-center px-4 first:pl-0 last:pr-0">
                  <div className="font-heading font-extrabold text-2xl sm:text-3xl text-text-main mb-1">
                    24h
                  </div>
                  <div className="text-xs text-text-muted leading-snug">
                    Reakce na požadavky
                  </div>
                </div>
                <div className="text-center px-4">
                  <div className="font-heading font-extrabold text-2xl sm:text-3xl text-text-main mb-1">
                    0
                  </div>
                  <div className="text-xs text-text-muted leading-snug">
                    Neuhrazených nájmů
                  </div>
                </div>
                <div className="text-center px-4 first:pl-0 last:pr-0">
                  <div className="font-heading font-extrabold text-2xl sm:text-3xl text-text-main mb-1">
                    100%
                  </div>
                  <div className="text-xs text-text-muted leading-snug">Transparentnost</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — 3 stacked cards (2/5 width) */}
          <div className="lg:col-span-2 flex flex-col gap-5 sm:gap-6">
            {/* Card 01 */}
            <div className="relative bg-white rounded-2xl p-6 border border-black/5 shadow-premium flex-1 overflow-hidden">
              <div className="absolute top-4 right-5 font-heading font-extrabold text-5xl text-accent-navy/5 leading-none select-none">
                01
              </div>
              <div className="relative">
                <div className="bg-accent-navy/8 rounded-xl p-3 inline-flex mb-4 border border-accent-navy/10">
                  <WrenchIcon className="w-7 h-7 text-accent-navy" strokeWidth={2.5} />
                </div>
                <h4 className="font-heading font-bold text-lg sm:text-xl text-accent-navy mb-2">
                  Prověření řemeslníci
                </h4>
                <p className="text-sm text-text leading-relaxed">
                  Máme síť spolehlivých dodavatelů. Opravy řešíme rychle a za férové ceny — bez
                  překvapení na faktuře.
                </p>
              </div>
            </div>

            {/* Card 02 */}
            <div className="relative bg-white rounded-2xl p-6 border border-black/5 shadow-premium flex-1 overflow-hidden">
              <div className="absolute top-4 right-5 font-heading font-extrabold text-5xl text-accent-navy/5 leading-none select-none">
                02
              </div>
              <div className="relative">
                <div className="bg-accent-navy/8 rounded-xl p-3 inline-flex mb-4 border border-accent-navy/10">
                  <ShieldCheckIcon className="w-7 h-7 text-accent-navy" strokeWidth={2.5} />
                </div>
                <h4 className="font-heading font-bold text-lg sm:text-xl text-accent-navy mb-2">
                  Žádné skryté poplatky
                </h4>
                <p className="text-sm text-text leading-relaxed">
                  Naše ceny jsou jasné od začátku. Vše je dohledatelné v měsíčním výkazu, který
                  dostáváte automaticky.
                </p>
              </div>
            </div>

            {/* Card 03 */}
            <div className="relative bg-white rounded-2xl p-6 border border-black/5 shadow-premium flex-1 overflow-hidden">
              <div className="absolute top-4 right-5 font-heading font-extrabold text-5xl text-accent-navy/5 leading-none select-none">
                03
              </div>
              <div className="relative">
                <div className="bg-accent-navy/8 rounded-xl p-3 inline-flex mb-4 border border-accent-navy/10">
                  <BarChart2Icon className="w-7 h-7 text-accent-navy" strokeWidth={2.5} />
                </div>
                <h4 className="font-heading font-bold text-lg sm:text-xl text-accent-navy mb-2">
                  Pravidelný reporting
                </h4>
                <p className="text-sm text-text leading-relaxed">
                  Každý měsíc dostanete přehled plateb, oprav a stavu bytu. Vždy víte, co se děje s
                  vaší investicí.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

