import { CheckCircleIcon } from 'lucide-react';
export default function RentalForWhom() {
  const items = [
    {
      title: 'Byt je volný a chcete ho pronajmout bez chaosu',
      description:
        'Přebíráme celý proces — od inzerce po předání klíčů. Žádný chaos, žádné improvizace.',
    },
    {
      title: 'Nemáte čas řešit desítky telefonátů a prohlídek',
      description:
        'Komunikaci se zájemci a organizaci prohlídek řešíme za vás. Vy dostanete jen doporučení.',
    },
    {
      title: 'Chcete minimalizovat riziko špatného nájemníka',
      description:
        'Každého zájemce prověřujeme — bonita, reference, rizika. Doporučíme jen spolehlivého kandidáta.',
    },
    {
      title: 'Nejste si jistí, jak byt připravit, aby se pronajal rychle',
      description:
        'Doporučíme drobné úpravy a prezentaci, které zvyšují zájem. Bez zbytečných investic.',
    },
    {
      title: 'Nechcete řešit papírování a předání',
      description:
        'Smlouva, protokol, fotodokumentace, předání klíčů — vše zajistíme kompletně za vás.',
    },
    {
      title: 'Chcete mít proces pod kontrolou, ale bez stresu',
      description:
        'Dostanete jasný postup, průběžné informace a finální doporučení. Bez nekonečných zpráv a dohadů.',
    },
  ];
  return (
    <section className="bg-accent-navy w-full border-b border-white/10 py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="font-heading text-text-main mb-3 text-3xl font-extrabold sm:mb-4 sm:text-4xl md:text-5xl">
            Pro koho je naše služba pronájmu ideální
          </h2>
          <p className="text-text-muted mx-auto max-w-2xl text-lg sm:text-xl">
            Pokud se poznáváte v některém z těchto bodů, jsme tu pro vás.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 ${index === 4 ? 'sm:col-span-2 lg:col-span-1 lg:col-start-auto' : ''}`}
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                <CheckCircleIcon className="text-text-muted h-4 w-4" strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-heading text-text-main mb-1 text-base leading-snug font-bold sm:text-lg">
                  {item.title}
                </p>
                <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
