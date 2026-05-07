import ContactSection from '@/components/kontakt/ContactSection';
import ContactFeedbackForm from '@/components/kontakt/ContactFeedbackForm';
import GoogleMaps from '@/components/googleMap';
import createMetadata from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return createMetadata({
    title: 'Kontaktujte NoblesseHomes | Správa a pronájem v Praze',
    description:
      'Máte dotaz k pronájmu nebo správě nemovitosti? Spojte se s týmem NoblesseHomes. Rádi vám poradíme a navrhneme řešení na míru pro vaši situaci.',
    locale,
    path: '/kontakt',
  });
}

export default function Kontakt() {
  return (
    <>
      <ContactSection />
      <ContactFeedbackForm />

      <GoogleMaps />
    </>
  );
}
