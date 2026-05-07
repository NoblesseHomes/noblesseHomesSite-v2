import { ManagementHero } from '@/components/sprava/ManagementHero';
import { ManagementStats } from '@/components/sprava/ManagementStats';
import { ManagementBenefits } from '@/components/sprava/ManagementBenefits';
import { ManagementProcess } from '@/components/sprava/ManagementProcess';
import { ManagementPainPoints } from '@/components/sprava/ManagementPainPoints';
import { ManagementFAQ } from '@/components/sprava/FAQItem';

import createMetadata from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return createMetadata({
    title: 'Sprava',
    description: 'Sprava',
    locale,
    path: '/sprava',
  });
}

export default function Sprava() {
  return (
    <>
      <ManagementHero />
      <ManagementStats />
      <ManagementBenefits />
      <ManagementProcess />
      <ManagementPainPoints />
      <ManagementFAQ />
    </>
  );
}
