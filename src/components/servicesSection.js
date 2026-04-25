import { Link } from '@/i18n/navigation';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import bg from '@/asset/header/prague-bg.webp';
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
    <section className="w-full bg-accent-cream border-b border-black/5 py-14 sm:py-18 md:py-22">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-accent-navy leading-tight">
            Naše služby
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {services.map((service) => {
            return (
              <Link
                key={service.title}
                href={service.href}
                className={`group relative overflow-hidden rounded-2xl border border-white/15 shadow-premium hover:shadow-premium-lg transition-all duration-300 ${
                  service.wide ? 'md:col-span-2' : ''
                }`}
              >
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${service.imagePosition}`}
                    preload={true}
                  />
                  <div className="absolute inset-0 bg-accent-navy/55" />
                  <div className="absolute inset-0 bg-linear-to-t from-accent-navy/80 via-accent-navy/40 to-accent-navy/15" />
                </div>

                <div
                  className={`relative z-10 flex flex-col justify-end p-6 sm:p-8 min-h-70 sm:min-h-80 ${
                    service.wide ? 'md:min-h-85' : ''
                  }`}
                >
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-footer-text mb-3">
                    {service.title}
                  </h3>
                  <p className="text-footer-text-muted text-sm sm:text-base leading-relaxed max-w-2xl">
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
