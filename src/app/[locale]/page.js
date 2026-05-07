import { Hero } from '@/components/mainHero/hero';
import { StatsStrip } from '@/components/statsStrip';
import { ServicesSection } from '@/components/servicesSection';

import { PartnersSection } from '@/components/partnersSection';

import createMetadata from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return createMetadata({
    locale,
    title: 'Home Page',
    description: 'NopblesseHomes',
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
