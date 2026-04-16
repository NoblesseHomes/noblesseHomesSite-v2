import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import Remax from '@/asset/partners/remax.png';
import Psn from '@/asset/partners/psn.png';
import Palatinum from '@/asset/partners/palatinum.png';

const partners = [
  {
    name: 'RE/MAX Partner',
    logo: Remax,
    href: 'https://www.remax-ambassador.cz/',
  },
  {
    name: 'PSN',
    logo: Psn,

    href: 'https://psn.cz/',
  },
  {
    name: 'Palatinum',
    logo: Palatinum,
    href: 'https://www.palatinumglobal.com/',
  },
];
export function PartnersSection() {
  return (
    <section className="w-full bg-accent-cream border-b border-black/5 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
          {/* Label */}
          <div className="shrink-0 text-center sm:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-text/40 mb-1">
              Naši partneři
            </p>
            <p className="text-sm text-text/60">Kdo nám důvěřuje</p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-12 bg-black/10 shrink-0" />

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-8 sm:gap-12 flex-1">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center"
                title={partner.name}
              >
                <Link href={partner.href} target="_blank">
                  <Image
                    width={150}
                    height={50}
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 sm:h-10 w-auto object-contain opacity-60 hover:opacity-90 transition-opacity duration-300 grayscale hover:grayscale-0"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
