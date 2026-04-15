import { getTranslations } from 'next-intl/server';
import { Hero } from '@/components/mainHero/hero';

export default async function MainPage() {
  const t = await getTranslations('mainPage');

  return (
    <>
      <Hero />
    </>
  );
}
