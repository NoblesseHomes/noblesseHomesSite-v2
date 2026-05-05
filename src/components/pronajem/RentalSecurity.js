import { SearchIcon, ShieldCheckIcon, FileTextIcon, CameraIcon } from 'lucide-react';
export default function RentalSecurity() {
  return (
    <section className="w-full border-b border-black/5 bg-white py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="font-heading text-accent-navy mb-3 text-3xl font-extrabold sm:mb-4 sm:text-4xl md:text-5xl">
            Bezpečný pronájem začíná správným výběrem nájemníka
          </h2>
          <p className="text-text mx-auto max-w-2xl text-lg sm:text-xl">
            Každý krok procesu je navržen tak, aby chránil vás a vaši nemovitost.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          <div className="bg-accent-cream shadow-premium relative overflow-hidden rounded-2xl border border-black/5 p-6 sm:rounded-3xl sm:p-8">
            <div className="bg-accent-navy/3 absolute top-0 right-0 h-20 w-20 rounded-bl-full" />
            <div className="relative">
              <div className="bg-accent-navy/8 border-accent-navy/10 mb-5 inline-flex rounded-xl border p-3">
                <SearchIcon className="text-accent-navy h-7 w-7" strokeWidth={2.5} />
              </div>
              <h3 className="font-heading text-accent-navy mb-3 text-xl font-bold sm:text-2xl">
                Důkladná filtrace zájemců
              </h3>
              <p className="text-text text-sm leading-relaxed sm:text-base">
                Neplýtváme časem prohlídkami s nevhodnými kandidáty. Každý zájemce prochází filtrací
                ještě před domluvením termínu.
              </p>
            </div>
          </div>

          <div className="bg-accent-cream shadow-premium relative overflow-hidden rounded-2xl border border-black/5 p-6 sm:rounded-3xl sm:p-8">
            <div className="bg-accent-navy/3 absolute top-0 right-0 h-20 w-20 rounded-bl-full" />
            <div className="relative">
              <div className="bg-accent-navy/8 border-accent-navy/10 mb-5 inline-flex rounded-xl border p-3">
                <ShieldCheckIcon className="text-accent-navy h-7 w-7" strokeWidth={2.5} />
              </div>
              <h3 className="font-heading text-accent-navy mb-3 text-xl font-bold sm:text-2xl">
                Prověření před podpisem
              </h3>
              <p className="text-text text-sm leading-relaxed sm:text-base">
                Kombinujeme dostupné nástroje pro ověření bonity a referencí. Podpis smlouvy
                proběhne jen s prověřeným kandidátem.
              </p>
            </div>
          </div>

          <div className="bg-accent-cream shadow-premium relative overflow-hidden rounded-2xl border border-black/5 p-6 sm:rounded-3xl sm:p-8">
            <div className="bg-accent-navy/3 absolute top-0 right-0 h-20 w-20 rounded-bl-full" />
            <div className="relative">
              <div className="bg-accent-navy/8 border-accent-navy/10 mb-5 inline-flex rounded-xl border p-3">
                <FileTextIcon className="text-accent-navy h-7 w-7" strokeWidth={2.5} />
              </div>
              <h3 className="font-heading text-accent-navy mb-3 text-xl font-bold sm:text-2xl">
                Jasná pravidla od začátku
              </h3>
              <p className="text-text text-sm leading-relaxed sm:text-base">
                Podmínky, kauce, termíny a domovní pravidla jsou jasně definovány ve smlouvě. Žádné
                šedé zóny, žádná překvapení.
              </p>
            </div>
          </div>

          <div className="bg-accent-navy border-accent-navy shadow-premium-lg relative overflow-hidden rounded-2xl border-2 p-6 sm:rounded-3xl sm:p-8">
            <div className="absolute top-0 right-0 h-20 w-20 rounded-bl-full bg-white/5" />
            <div className="relative">
              <div className="mb-5 inline-flex rounded-xl border border-white/15 bg-white/10 p-3">
                <CameraIcon className="text-text-main/60 h-7 w-7" strokeWidth={2.5} />
              </div>
              <h3 className="font-heading text-text-main mb-3 text-xl font-bold sm:text-2xl">
                Předání s protokolem a fotodokumentací
              </h3>
              <p className="text-text-main/60 text-sm leading-relaxed sm:text-base">
                Stav bytu při předání je kompletně zdokumentovaný. Fotografie a protokol chrání vás
                v případě budoucích sporů.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
