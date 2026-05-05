import CooperationFAQ from '@/components/spoluprace/CooperationFAQ';
import CooperationForWhom from '@/components/spoluprace/CooperationForWhom';
import CooperationHero from '@/components/spoluprace/CooperationHero';
import CooperationProcess from '@/components/spoluprace/CooperationProcess';
import CooperationServices from '@/components/spoluprace/CooperationServices';
import CooperationSituations from '@/components/spoluprace/CooperationSituations';

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
