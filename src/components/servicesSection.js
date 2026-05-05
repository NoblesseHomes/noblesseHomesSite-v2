import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import pronajem from '@/asset/services/pronajem.jpg';
import sprava from '@/asset/services/sprava.jpg';
import spoluprace from '@/asset/services/spoluprace.jpg';

const services = [
  {
    title: 'Pronájem nemovitosti',
    description: 'Najdeme spolehlivého nájemníka, připravíme inzerci a vyřešíme smlouvy.',
    href: '/pronajem',
    image: pronajem,
    imagePosition: 'object-[center_30%]',
    wide: false,
  },
  {
    title: 'Správa nemovitosti',
    description: 'Kompletní každodenní péče o byt, komunikace s nájemníky a řešení oprav.',
    href: '/sprava',
    image: sprava,
    imagePosition: 'object-[center_55%]',
    wide: false,
  },
  {
    title: 'Spolupráce',
    description: 'Spolupráce pro majitele i makléře, transparentní podmínky a férová odměna.',
    href: '/spoluprace',
    image: spoluprace,
    imagePosition: 'object-[center_60%]',
    wide: true,
  },
];

export function ServicesSection() {
  return (
    <section
      id="sluzby"
      className="bg-accent-cream w-full border-b border-black/5 py-14 sm:py-18 md:py-22"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="font-heading text-accent-navy text-3xl leading-tight font-extrabold sm:text-4xl md:text-5xl">
            Naše služby
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {services.map((service) => {
            return (
              <Link
                key={service.title}
                href={service.href}
                className={`group shadow-premium hover:shadow-premium-lg relative overflow-hidden rounded-2xl border border-white/15 transition-all duration-300 ${
                  service.wide ? 'md:col-span-2' : ''
                }`}
              >
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${service.imagePosition}`}
                    preload={true}
                  />
                  <div className="bg-accent-navy/55 absolute inset-0" />
                  <div className="from-accent-navy/80 via-accent-navy/40 to-accent-navy/15 absolute inset-0 bg-linear-to-t" />
                </div>

                <div
                  className={`relative z-10 flex min-h-70 flex-col justify-end p-6 sm:min-h-80 sm:p-8 ${
                    service.wide ? 'md:min-h-85' : ''
                  }`}
                >
                  <h3 className="font-heading text-text-main mb-3 text-2xl font-bold sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="text-text-muted max-w-2xl text-sm leading-relaxed sm:text-base">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
