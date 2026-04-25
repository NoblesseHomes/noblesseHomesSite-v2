import { XCircleIcon, CheckCircleIcon } from 'lucide-react';
export function ManagementPainPoints() {
  const pairs = [
    {
      problem: 'Neplatiči a opožděné platby',
      solution:
        'Prověřujeme bonitu nájemníků, hlídáme splatnosti a spouštíme upomínkový postup dle smlouvy.',
    },
    {
      problem: 'Neustálé telefonáty a požadavky',
      solution: 'Jedno kontaktní místo pro vše. Nájemník volá nám — vy máte klid.',
    },
    {
      problem: 'Opravy a shánění řemeslníků',
      solution: 'Máme síť prověřených dodavatelů. Opravy řešíme rychle, v dohodnutém limitu.',
    },
    {
      problem: 'Nejasné vyúčtování a výdaje',
      solution: 'Přehledná evidence všech plateb a výdajů. Měsíční výkaz dostáváte automaticky.',
    },
    {
      problem: 'Obava o stav bytu',
      solution: 'Pravidelné kontroly stavu s fotodokumentací. Problémy zachytíme včas.',
    },
  ];
  return (
    <section className="w-full bg-accent-cream py-16 sm:py-20 md:py-28 border-b border-black/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-accent-navy mb-3 sm:mb-4">
            Co majitele nejčastěji trápí
          </h2>
          <p className="text-lg sm:text-xl text-text max-w-2xl mx-auto">— a jak to řešíme</p>
        </div>

        {/* Column headers — desktop only */}
        <div className="hidden sm:grid sm:grid-cols-2 gap-6 sm:gap-8 mb-4 px-2">
          <div className="flex items-center gap-2">
            <XCircleIcon className="w-5 h-5 text-problem-accent" strokeWidth={2.5} />
            <span className="font-heading font-bold text-sm uppercase tracking-wider text-text/50">
              Problém
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5 text-accent-navy" strokeWidth={2.5} />
            <span className="font-heading font-bold text-sm uppercase tracking-wider text-text/50">
              Naše řešení
            </span>
          </div>
        </div>

        {/* Pairs */}
        <div className="space-y-4 sm:space-y-3">
          {pairs.map((pair, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 rounded-2xl overflow-hidden border border-black/5 shadow-premium"
            >
              {/* Problem */}
              <div className="flex items-start gap-3 bg-problem-bg/60 px-5 sm:px-6 py-4 sm:py-5 border-b sm:border-b-0 sm:border-r border-black/5">
                <XCircleIcon
                  className="w-5 h-5 text-problem-accent shrink-0 mt-0.5"
                  strokeWidth={2.5}
                />
                <span className="font-semibold text-sm sm:text-base text-accent-navy leading-snug">
                  {pair.problem}
                </span>
              </div>
              {/* Solution */}
              <div className="flex items-start gap-3 bg-white px-5 sm:px-6 py-4 sm:py-5">
                <CheckCircleIcon
                  className="w-5 h-5 text-accent-navy shrink-0 mt-0.5"
                  strokeWidth={2.5}
                />
                <span className="text-sm sm:text-base text-text leading-relaxed">
                  {pair.solution}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
