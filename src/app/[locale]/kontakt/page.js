import ContactSection from '@/components/kontakt/ContactSection';
import ContactFeedbackForm from '@/components/kontakt/ContactFeedbackForm';
import GoogleMaps from '@/components/googleMap';

export default function Kontakt() {
  return (
    <>
      <ContactSection />
      <ContactFeedbackForm />

      <GoogleMaps />
    </>
  );
}
