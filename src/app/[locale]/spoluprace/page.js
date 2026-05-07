import CooperationFAQ from '@/components/spoluprace/CooperationFAQ';
import CooperationForWhom from '@/components/spoluprace/CooperationForWhom';
import CooperationHero from '@/components/spoluprace/CooperationHero';
import CooperationProcess from '@/components/spoluprace/CooperationProcess';
import CooperationServices from '@/components/spoluprace/CooperationServices';
import CooperationSituations from '@/components/spoluprace/CooperationSituations';
import createMetadata from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return createMetadata({
    title: 'Spolupráce pro partnery a makléře | NoblesseHomes',
    description:
      'Spolupracujte s NoblesseHomes a předejte klienty s důvěrou. Zajistíme profesionální pronájem i správu nemovitostí, rychlou komunikaci a férové podmínky spolupráce.',
    locale,
    path: '/spoluprace',
  });
}

export default function Spoluprace() {
  return (
    <>
      <CooperationHero />
      <CooperationForWhom />
      <CooperationSituations />
      <CooperationServices />
      <CooperationProcess />
      <CooperationFAQ />
    </>
  );
}
