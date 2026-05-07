import { Hero } from '@/components/mainHero/hero';
import { StatsStrip } from '@/components/statsStrip';
import { ServicesSection } from '@/components/servicesSection';

import { PartnersSection } from '@/components/partnersSection';

import createMetadata from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return createMetadata({
    locale,
    title: 'Správa a pronájem nemovitostí v Praze | NoblesseHomes',
    description:
      'NoblesseHomes zajišťuje profesionální správu a pronájem bytů v Praze. Najdeme spolehlivého nájemníka, vyřešíme smlouvy, předání i každodenní péči o nemovitost.',
  });
}

export default async function MainPage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesSection />
      <PartnersSection />
    </>
  );
}
