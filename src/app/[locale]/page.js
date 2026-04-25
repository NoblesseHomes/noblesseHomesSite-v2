import { Hero } from '@/components/mainHero/hero';
import { StatsStrip } from '@/components/statsStrip';
import { ServicesSection } from '@/components/servicesSection';

import { PartnersSection } from '@/components/partnersSection';

export default function MainPage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesSection />

      <PartnersSection />
    </>
  );
}
