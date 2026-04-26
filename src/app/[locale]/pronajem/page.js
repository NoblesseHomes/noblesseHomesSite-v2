import RentalHero from '@/components/pronajem/RentalHero';
import RentalForWhom from '@/components/pronajem/RentalForWhom';
import RentalIncludes from '@/components/pronajem/RentalIncludes';
import RentalProcess from '@/components/pronajem/RentalProcess';
import RentalComparison from '@/components/pronajem/RentalComparison';
import RentalSecurity from '@/components/pronajem/RentalSecurity';
import RentalFAQ from '@/components/pronajem/RentalFAQ';

export default async function Pronajem({ params }) {
  const { locale } = await params;

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
