import { Hero } from '@/components/mainHero/hero';
import { ServicesSection } from '@/components/servicesSection';

import { PartnersSection } from '@/components/partnersSection';

export default function MainPage() {
  return (
    <>
      <Hero />
      <ServicesSection />

      <PartnersSection />
    </>
  );
}
