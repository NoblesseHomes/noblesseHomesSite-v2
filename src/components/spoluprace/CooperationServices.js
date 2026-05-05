import { CheckIcon } from 'lucide-react';
export default function CooperationServices() {
  const services = [
    'Nastavení ceny a strategie pronájmu',
    'Inzerce + komunikace se zájemci',
    'Organizace a vedení prohlídek',
    'Výběr nájemníka (prověření bonity a referencí)',
    'Příprava smluv + předání bytu s protokolem',
    'Průběžná správa po nastěhování (platby, komunikace, servis)',
  ];
  return (
    <section className="bg-accent-warmGray w-full border-b border-black/5 py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="font-heading text-accent-navy mb-3 text-3xl font-extrabold sm:mb-4 sm:text-4xl md:text-5xl">
            Co pro vašeho klienta zajistíme
          </h2>
          <p className="text-text mx-auto max-w-2xl text-lg sm:text-xl">
            Váš klient dostane profesionální servis — od prvního kontaktu po dlouhodobou péči o
            nemovitost.
          </p>
        </div>

        <div className="shadow-premium rounded-2xl border border-black/5 bg-white p-8 sm:rounded-3xl sm:p-12">
          <ul className="space-y-4 sm:space-y-5">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="bg-accent-navy/8 border-accent-navy/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border sm:h-10 sm:w-10">
                  <CheckIcon className="text-accent-navy h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} />
                </div>
                <span className="text-text pt-1 text-base leading-relaxed sm:text-lg">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
