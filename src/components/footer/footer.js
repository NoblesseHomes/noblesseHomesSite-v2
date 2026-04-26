import { Link } from '@/i18n/navigation';
import { MailIcon, PhoneIcon, MapPinIcon, HomeIcon } from 'lucide-react';

const dataYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-accent-navy w-full border-t border-white/10">
      <div>
        <div className="mx-auto max-w-7xl border-b border-white/10 px-4 py-8 sm:px-6 sm:py-10">
          <div className="flex flex-col items-center gap-5 text-center">
            <p className="text-text-main max-w-3xl text-2xl leading-snug font-semibold sm:text-3xl">
              Hledáte realitní kancelář nebo správu nemovitosti, které můžete opravdu důvěřovat?
            </p>
            <a
              href="tel:+420123456789"
              className="bg-primary hover:bg-primary-dark inline-flex min-w-56 items-center justify-center rounded-xl px-8 py-4 text-base font-bold whitespace-nowrap text-white transition-colors duration-200"
            >
              Spojte se s námi
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <div className="rounded-xl border border-white/15 bg-white/10 p-2">
                <HomeIcon className="text-text-main h-5 w-5" strokeWidth={2.5} />
              </div>
              <span className="text-text-main text-lg font-bold">NoblesseHomes</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              Profesionální správa a pronájem nemovitostí v Praze a okolí.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-text-main mb-3 text-sm font-bold tracking-wider uppercase">
              Služby
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sprava"
                  className="text-text-muted hover:text-text-main text-sm transition-colors duration-200"
                >
                  Správa nemovitostí
                </Link>
              </li>
              <li>
                <a
                  href="#pronajem"
                  className="text-text-muted hover:text-text-main text-sm transition-colors duration-200"
                >
                  Pronájem bytů
                </a>
              </li>
              <li>
                <a
                  href="#nabidka"
                  className="text-text-muted hover:text-text-main text-sm transition-colors duration-200"
                >
                  Nabídka bytů
                </a>
              </li>
              <li>
                <a
                  href="#spoluprace"
                  className="text-text-muted hover:text-text-main text-sm transition-colors duration-200"
                >
                  Spolupráce pro partnery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-text-main mb-3 text-sm font-bold tracking-wider uppercase">
              Kontakt
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="text-text-muted h-4 w-4 shrink-0" />
                <a
                  href="tel:+420735080191"
                  className="text-text-muted hover:text-text-main text-sm transition-colors duration-200"
                >
                  +420 735 080 191
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MailIcon className="text-text-muted h-4 w-4 shrink-0" />
                <a
                  href="mailto:info@noblesse-homes.cz"
                  className="text-text-muted hover:text-text-main text-sm transition-colors duration-200"
                >
                  info@noblessehomes.cz
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="text-text-muted mt-0.5 h-4 w-4 shrink-0" />
                <span className="text-text-muted text-sm">
                  Přístavní 531/24, Praha 7-Holešovice
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-text-muted text-xs">{`© ${dataYear} NoblesseHomes. Všechna práva vyhrazena.`}</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs">
            <a
              href="#"
              className="text-text-muted hover:text-text-main transition-colors duration-200"
            >
              Ochrana osobních údajů
            </a>
            <a
              href="#"
              className="text-text-muted hover:text-text-main transition-colors duration-200"
            >
              Podmínky použití
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

