import { Link } from '@/i18n/navigation';
import { MailIcon, PhoneIcon, MapPinIcon, HomeIcon, Import } from 'lucide-react';

const dataYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full bg-accent-cream border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="bg-accent-navy/8 rounded-xl p-2 border border-accent-navy/10">
                <HomeIcon className="w-5 h-5 text-accent-navy" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-lg text-accent-navy">NoblesseHomes</span>
            </div>
            <p className="text-sm text-text/60 leading-relaxed">
              Profesionální správa a pronájem nemovitostí v Praze a okolí.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm text-accent-navy mb-3 uppercase tracking-wider">
              Služby
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sprava"
                  className="text-text text-sm hover:text-primary transition-colors duration-200"
                >
                  Správa nemovitostí
                </Link>
              </li>
              <li>
                <a
                  href="#pronajem"
                  className="text-text text-sm hover:text-primary transition-colors duration-200"
                >
                  Pronájem bytů
                </a>
              </li>
              <li>
                <a
                  href="#nabidka"
                  className="text-text text-sm hover:text-primary transition-colors duration-200"
                >
                  Nabídka bytů
                </a>
              </li>
              <li>
                <a
                  href="#spoluprace"
                  className="text-text text-sm hover:text-primary transition-colors duration-200"
                >
                  Spolupráce pro partnery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm text-accent-navy mb-3 uppercase tracking-wider">
              Kontakt
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="w-4 h-4 text-text/40 shrink-0" />
                <a
                  href="tel:+420123456789"
                  className="text-text text-sm hover:text-primary transition-colors duration-200"
                >
                  +420 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MailIcon className="w-4 h-4 text-text/40 shrink-0" />
                <a
                  href="mailto:info@noblesse-homes.cz"
                  className="text-text text-sm hover:text-primary transition-colors duration-200"
                >
                  info@noblesse-homes.cz
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="w-4 h-4 text-text/40 shrink-0 mt-0.5" />
                <span className="text-text text-sm">Václavské náměstí 1, Praha 1</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
          <p className="text-text/50 text-xs">{`© ${dataYear} NoblesseHomes. Všechna práva vyhrazena.`}</p>
          <div className="flex gap-5 text-xs">
            <a href="#" className="text-text/50 hover:text-primary transition-colors duration-200">
              Ochrana osobních údajů
            </a>
            <a href="#" className="text-text/50 hover:text-primary transition-colors duration-200">
              Podmínky použití
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
