import { MapPinIcon, PhoneIcon, MailIcon, Clock3Icon, CameraIcon } from 'lucide-react';

const contactItems = [
  {
    icon: MapPinIcon,
    label: 'Adresa',
    content: (
      <>
        Přístavní 531/24, Praha 7-Holešovice
        <br />
        170 00, Česká republika
      </>
    ),
  },
  {
    icon: PhoneIcon,
    label: 'Telefon',
    content: (
      <>
        <a
          href="tel:+420735080191"
          className="hover:text-accent-navy transition-colors duration-200"
        >
          +420 735 080 191
        </a>
        <br />
        {/* <a
          href="tel:+420777123456"
          className="hover:text-accent-navy transition-colors duration-200"
        >
          +420 777 123 456
        </a> */}
      </>
    ),
  },
  {
    icon: MailIcon,
    label: 'E-mail',
    content: (
      <a
        href="mailto:info@noblessehomes.cz"
        className="hover:text-accent-navy transition-colors duration-200"
      >
        info@noblessehomes.cz
      </a>
    ),
  },
  {
    icon: Clock3Icon,
    label: 'Pracovní doba',
    content: 'Po-Pá: 9:00-18:00',
  },
];

export default function ContactSection() {
  return (
    <>
      <section className="bg-accent-navy relative w-full overflow-hidden border-b border-white/10">
        <div className="bg-accent-navy absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <h1 className="font-heading text-text-main text-4xl font-extrabold sm:text-5xl">
            Kontakt
          </h1>
          <p className="text-text-muted mx-auto mt-4 max-w-2xl text-base sm:text-lg">
            Jsme tu pro vás. Napište nám nebo zavolejte a vše společně nastavíme podle vašich
            potřeb.
          </p>
        </div>
      </section>

      <section className="bg-accent-cream w-full">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:gap-12 md:py-20">
          <div className="rounded-3xl border border-black/8 bg-white p-6 sm:p-8">
            <h2 className="text-accent-navy text-2xl font-extrabold sm:text-3xl">
              Noblesse Culture, s.r.o.
            </h2>
            <p className="text-text mt-2 text-xs md:text-sm">IČO: 08919607 </p>
            <p className="text-text mt-4 text-xs leading-relaxed sm:text-sm">
              Realitní partner s individuálním přístupem. Pomůžeme s pronájmem i správou nemovitostí
              v Praze a okolí.
            </p>

            <div className="mt-7 space-y-5 border-t border-black/8 pt-7">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <Icon className="text-accent-navy mt-0.5 h-5 w-5 shrink-0" strokeWidth={2.3} />
                    <div>
                      <p className="text-accent-navy font-semibold">{item.label}</p>
                      <div className="text-text mt-1 text-sm leading-relaxed sm:text-base">
                        {item.content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-4">
            <div className="from-accent-navy/8 to-primary/10 flex aspect-16/11 w-full items-center justify-center rounded-2xl border border-dashed border-black/15 bg-linear-to-br">
              <div className="text-center">
                <CameraIcon className="text-accent-navy/45 mx-auto h-10 w-10" strokeWidth={1.8} />
                <p className="text-accent-navy/60 mt-3 text-sm font-medium sm:text-base">
                  Místo pro fotografii týmu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
