import { Link } from '@/i18n/navigation';
import { MailIcon, PhoneIcon, MapPinIcon, HomeIcon } from 'lucide-react';

const dataYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full bg-accent-navy border-t border-white/10">
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 border-b border-white/10">
          <div className="flex flex-col items-center text-center gap-5">
            <p className="text-footer-text text-2xl sm:text-3xl font-semibold leading-snug max-w-3xl">
              Hledáte realitní kancelář nebo správu nemovitosti, které můžete opravdu důvěřovat?
            </p>
            <a
              href="tel:+420123456789"
              className="inline-flex items-center justify-center whitespace-nowrap min-w-56 px-8 py-4 rounded-xl bg-primary text-white font-bold text-base hover:bg-primary-dark transition-colors duration-200"
            >
              Spojte se s námi
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="bg-white/10 rounded-xl p-2 border border-white/15">
                <HomeIcon className="w-5 h-5 text-footer-text" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-lg text-footer-text">NoblesseHomes</span>
            </div>
            <p className="text-sm text-footer-text-muted leading-relaxed">
              Profesionální správa a pronájem nemovitostí v Praze a okolí.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm text-footer-text mb-3 uppercase tracking-wider">
              Služby
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sprava"
                  className="text-footer-text-muted text-sm hover:text-footer-text transition-colors duration-200"
                >
                  Správa nemovitostí
                </Link>
              </li>
              <li>
                <a
                  href="#pronajem"
                  className="text-footer-text-muted text-sm hover:text-footer-text transition-colors duration-200"
                >
                  Pronájem bytů
                </a>
              </li>
              <li>
                <a
                  href="#nabidka"
                  className="text-footer-text-muted text-sm hover:text-footer-text transition-colors duration-200"
                >
                  Nabídka bytů
                </a>
              </li>
              <li>
                <a
                  href="#spoluprace"
                  className="text-footer-text-muted text-sm hover:text-footer-text transition-colors duration-200"
                >
                  Spolupráce pro partnery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm text-footer-text mb-3 uppercase tracking-wider">
              Kontakt
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="w-4 h-4 text-footer-text-muted shrink-0" />
                <a
                  href="tel:+420123456789"
                  className="text-footer-text-muted text-sm hover:text-footer-text transition-colors duration-200"
                >
                  +420 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MailIcon className="w-4 h-4 text-footer-text-muted shrink-0" />
                <a
                  href="mailto:info@noblesse-homes.cz"
                  className="text-footer-text-muted text-sm hover:text-footer-text transition-colors duration-200"
                >
                  info@noblesse-homes.cz
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="w-4 h-4 text-footer-text-muted shrink-0 mt-0.5" />
                <span className="text-footer-text-muted text-sm">Václavské náměstí 1, Praha 1</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
          <p className="text-footer-text-muted text-xs">{`© ${dataYear} NoblesseHomes. Všechna práva vyhrazena.`}</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs">
            <a
              href="#"
              className="text-footer-text-muted hover:text-footer-text transition-colors duration-200"
            >
              Ochrana osobních údajů
            </a>
            <a
              href="#"
              className="text-footer-text-muted hover:text-footer-text transition-colors duration-200"
            >
              Podmínky použití
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
