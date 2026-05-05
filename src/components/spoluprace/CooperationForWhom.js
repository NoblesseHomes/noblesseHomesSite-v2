import {
  BanknoteIcon,
  ScaleIcon,
  HomeIcon,
  WrenchIcon,
  PaletteIcon,
  CalculatorIcon,
  SearchIcon,
  BuildingIcon,
  UsersIcon,
} from 'lucide-react';
export default function CooperationForWhom() {
  const partners = [
    {
      icon: BanknoteIcon,
      title: 'Hypoteční poradci / úvěroví specialisté',
    },
    {
      icon: ScaleIcon,
      title: 'Advokáti / notáři',
    },
    {
      icon: HomeIcon,
      title: 'Realitní makléři',
    },
    {
      icon: WrenchIcon,
      title: 'Rekonstrukce / stavební firmy',
    },
    {
      icon: PaletteIcon,
      title: 'Architekti / interiéry / home staging',
    },
    {
      icon: CalculatorIcon,
      title: 'Daňoví poradci / účetní',
    },
    {
      icon: SearchIcon,
      title: 'Odhadci / znalci',
    },
    {
      icon: BuildingIcon,
      title: 'SVJ / bytová družstva / správci domů',
    },
    {
      icon: UsersIcon,
      title: 'Relokační služby / HR',
    },
  ];
  return (
    <section className="bg-accent-navy w-full border-b border-white/10 py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="font-heading text-text-main mb-3 text-3xl font-extrabold sm:mb-4 sm:text-4xl md:text-5xl">
            Pro koho je spolupráce určena
          </h2>
          <p className="text-text-muted mx-auto max-w-2xl text-lg sm:text-xl">
            Pokud se u vás objevují klienti s nemovitostí k pronájmu nebo investičním bytem — máte
            komu je s důvěrou předat.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
              >
                <div className="shrink-0 rounded-xl border border-white/15 bg-white/10 p-3">
                  <Icon className="text-text-muted h-6 w-6" strokeWidth={2.5} />
                </div>
                <p className="font-heading text-text-main text-base leading-snug font-bold">
                  {partner.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
