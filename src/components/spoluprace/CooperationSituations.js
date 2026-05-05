import { TrendingUpIcon, ClockIcon, WrenchIcon, ShieldCheckIcon } from 'lucide-react';
export default function CooperationSituations() {
  const situations = [
    {
      icon: TrendingUpIcon,
      title: 'Klient kupuje byt na investici',
      description: 'Chce rychle pronajímat a mít stabilní výnos bez starostí.',
    },
    {
      icon: ClockIcon,
      title: 'Majitel nemá čas řešit pronájem',
      description: 'Potřebuje někoho, kdo převezme celý proces od A do Z.',
    },
    {
      icon: WrenchIcon,
      title: 'Byt je po rekonstrukci a je připravený na trh',
      description: 'Stačí nastavit cenu, připravit nabídku a najít nájemníka.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Klient chce mít vše právně a procesně správně',
      description: 'Smlouvy, protokoly, prověření — profesionální přístup od začátku.',
    },
  ];
  return (
    <section className="w-full border-b border-black/5 bg-white py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="font-heading text-accent-navy mb-3 text-3xl font-extrabold sm:mb-4 sm:text-4xl md:text-5xl">
            Typické situace
          </h2>
          <p className="text-text mx-auto max-w-2xl text-lg sm:text-xl">
            Kdy nás doporučit? Pokud váš klient řeší některou z těchto situací.
          </p>
        </div>

        {/* 4 cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {situations.map((situation, index) => {
            const Icon = situation.icon;
            return (
              <div
                key={index}
                className="shadow-premium relative overflow-hidden rounded-2xl border border-black/5 bg-white p-6 sm:rounded-3xl sm:p-8"
              >
                <div className="relative">
                  <div className="bg-accent-navy/8 border-accent-navy/10 mb-5 inline-flex rounded-xl border p-3">
                    <Icon className="text-accent-navy h-7 w-7" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-heading text-accent-navy mb-3 text-xl font-bold sm:text-2xl">
                    {situation.title}
                  </h3>
                  <p className="text-text text-sm leading-relaxed sm:text-base">
                    {situation.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
