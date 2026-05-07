import RentalHero from '@/components/pronajem/RentalHero';
import RentalForWhom from '@/components/pronajem/RentalForWhom';
import RentalIncludes from '@/components/pronajem/RentalIncludes';
import RentalProcess from '@/components/pronajem/RentalProcess';
import RentalComparison from '@/components/pronajem/RentalComparison';
import RentalSecurity from '@/components/pronajem/RentalSecurity';
import RentalFAQ from '@/components/pronajem/RentalFAQ';
import createMetadata from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return createMetadata({
    title: 'Pronájem bytu v Praze rychle a bezpečně | NoblesseHomes',
    description:
      'Zajistíme pronájem vaší nemovitosti od A do Z: správné nacenění, kvalitní inzerci, prověření nájemníka, smlouvy i předání bytu. Pronajímejte bez stresu.',
    locale,
    path: '/pronajem',
  });
}

export default async function Pronajem() {
  return (
    <>
      <RentalHero />
      <RentalForWhom />
      <RentalIncludes />
      <RentalProcess />
      <RentalComparison />
      <RentalSecurity />
      <RentalFAQ />
    </>
  );
}
