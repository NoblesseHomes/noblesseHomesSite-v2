import { XCircleIcon, CheckCircleIcon } from 'lucide-react';

const rows = [
  {
    task: 'Nastavení ceny a strategie',
    self: 'Odhad bez dat, riziko podhodnocení',
    withUs: 'Doporučení ceny na základě trhu',
  },
  {
    task: 'Příprava bytu (doporučení úprav)',
    self: 'Bez odborného pohledu',
    withUs: 'Konkrétní doporučení pro lepší výnos',
  },
  {
    task: 'Fotky + text nabídky',
    self: 'Vlastní fotky, generický popis',
    withUs: 'Profesionální prezentace, cílený text',
  },
  {
    task: 'Inzerce na portálech',
    self: 'Časově náročné, ruční správa',
    withUs: 'Kompletní inzerce, aktivní správa',
  },
  {
    task: 'Komunikace se zájemci',
    self: 'Desítky hovorů a zpráv denně',
    withUs: 'Filtrace — vy dostanete jen relevantní',
  },
  {
    task: 'Filtrace zájemců',
    self: 'Bez systému, riziko chyb',
    withUs: 'Strukturovaná filtrace před prohlídkou',
  },
  {
    task: 'Organizace prohlídek',
    self: 'Přetížení termíny, logistika',
    withUs: 'Vedeme prohlídky za vás',
  },
  {
    task: 'Prověření zájemce (bonita / reference)',
    self: 'Bez právní jistoty, riziko',
    withUs: 'Prověření bonity a referencí',
  },
  {
    task: 'Vyjednání podmínek (kauce, pravidla)',
    self: 'Bez zkušeností, nevýhodné podmínky',
    withUs: 'Profesionální vyjednání v zájmu majitele',
  },
  {
    task: 'Smlouva + přílohy',
    self: 'Vzorová smlouva, riziko mezer',
    withUs: 'Kompletní dokumentace, právně ošetřená',
  },
  {
    task: 'Předání bytu (protokol, fotky, klíče)',
    self: 'Bez dokumentace, spory v budoucnu',
    withUs: 'Protokol + fotodokumentace, bezpečné předání',
  },
];
export default function RentalComparison() {
  return (
    <section className="bg-accent-cream w-full border-b border-black/5 py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="font-heading text-accent-navy mb-3 text-3xl font-extrabold sm:mb-4 sm:text-4xl md:text-5xl">
            Pronájem svépomocí vs. s námi
          </h2>
          <p className="text-text mx-auto max-w-2xl text-lg sm:text-xl">
            Co obvykle musíte řešit sami — a co převezmeme my.
          </p>
        </div>

        <div className="mb-4 hidden gap-6 px-2 sm:grid sm:grid-cols-2 sm:gap-8">
          <div className="flex items-center gap-2">
            <XCircleIcon className="h-5 w-5 text-red-400" strokeWidth={2.5} />
            <span className="font-heading text-text/50 text-sm font-bold tracking-wider uppercase">
              Když to řešíte sami
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="text-accent-navy h-5 w-5" strokeWidth={2.5} />
            <span className="font-heading text-text/50 text-sm font-bold tracking-wider uppercase">
              Když to řešíte s námi
            </span>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-3">
          {rows.map((row, index) => (
            <div
              key={index}
              className="shadow-premium grid grid-cols-1 overflow-hidden rounded-2xl border border-black/5 sm:grid-cols-2"
            >
              <div className="flex items-start gap-3 border-b border-black/5 bg-red-50/60 px-5 py-4 sm:border-r sm:border-b-0 sm:px-6 sm:py-5">
                <XCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-red-400" strokeWidth={2.5} />
                <div>
                  <span className="text-text/40 mb-1 block text-xs font-bold tracking-wide uppercase sm:hidden">
                    Sami
                  </span>
                  <span className="text-accent-navy text-sm leading-snug font-semibold sm:text-base">
                    {row.self}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white px-5 py-4 sm:px-6 sm:py-5">
                <CheckCircleIcon
                  className="text-accent-navy mt-0.5 h-5 w-5 shrink-0"
                  strokeWidth={2.5}
                />
                <div>
                  <span className="text-accent-navy/40 mb-1 block text-xs font-bold tracking-wide uppercase sm:hidden">
                    S námi
                  </span>
                  <span className="text-text text-sm leading-relaxed sm:text-base">
                    {row.withUs}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
