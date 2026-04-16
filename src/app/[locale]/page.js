import { getTranslations } from 'next-intl/server';
import { Hero } from '@/components/mainHero/hero';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { PropertyCard } from '@/components/propertyCard/card';
import { properties } from '@/properties';
import { CTASection } from '@/components/ctaSection/section';

export default async function MainPage() {
  const t = await getTranslations('mainPage');

  return (
    <>
      <Hero />
      <section
        id="nabidka"
        className="w-full bg-accent-cream py-16 sm:py-20 md:py-28 border-b border-black/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
            <div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-accent-navy leading-tight mb-2">
                Aktuální nabídka bytů
              </h2>
              <p className="text-base sm:text-lg text-text/70 max-w-xl">
                Reálné byty, které právě spravujeme nebo pronajímáme. Kvalitně připravené a ověřené.
              </p>
            </div>
            <Link
              href="/nabidka-bytu"
              className="shrink-0 flex items-center gap-2 text-accent-navy font-bold text-sm sm:text-base hover:gap-3 hover:text-primary transition-all duration-200"
            >
              <span>Zobrazit vše</span>
              <ArrowRightIcon className="w-5 h-5" strokeWidth={2.5} />
            </Link>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                image={property.image}
                badge={property.badge}
                badgeVariant={property.badgeVariant}
                price={property.price}
                priceUnit={property.priceUnit}
                title={property.title}
                location={property.location}
                area={property.area}
                layout={property.layout}
                floor={property.floor}
                photoCount={property.photoCount}
              />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
