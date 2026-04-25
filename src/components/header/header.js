'use client';

import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { ChevronDownIcon, PhoneIcon, XIcon } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import logo from '@/asset/header/logo_new.svg';

import cz from '@/asset/flags/cz.svg';
import en from '@/asset/flags/en.svg';

const languages = [
  {
    code: 'cs',
    label: 'Čeština',
    flag: cz,
    short: 'CZ',
  },
  {
    code: 'en',
    label: 'English',
    flag: en,
    short: 'EN',
  },
  // {
  //   code: 'ru',
  //   label: 'Русский',
  //   flag: 'cz',
  //   short: 'RU',
  // },
  // {
  //   code: 'uk',
  //   label: 'Українська',
  //   flag: 'cz',
  //   short: 'UA',
  // },
];

function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const locale = useLocale();

  const currentLang = useMemo(() => {
    return languages.find((lang) => lang.code === locale) ?? languages[0];
  }, [locale]);

  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleLanguage(nextLocale) {
    setIsOpen(false);

    if (nextLocale === locale) return;

    router.replace(pathname, { locale: nextLocale });
  }
  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-8 w-16 flex items-center justify-between gap-2 px-2.5 rounded-lg border border-black/10 hover:border-black/20 bg-white hover:bg-accent-cream transition-all duration-200"
        aria-label="Změnit jazyk"
      >
        <span className="flex items-center gap-1.5">
          <span className="text-xs font-semibold text-text/80 leading-none">
            {currentLang.short}
          </span>
        </span>
        <ChevronDownIcon
          className={`w-3.5 h-3.5 text-text/50 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          strokeWidth={2.5}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl border border-black/5 shadow-premium-lg overflow-hidden z-60">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                handleLanguage(lang.code);
              }}
              className={`w-full grid grid-cols-[32px_1fr_12px] items-center gap-3 px-4 py-2.5 text-left transition-colors duration-150 cursor-pointer ${
                currentLang.code === lang.code
                  ? 'bg-accent-navy/8 text-accent-navy'
                  : 'hover:bg-accent-cream text-text'
              }`}
            >
              <span className="inline-flex h-5 w-7 items-center justify-center overflow-hidden rounded-sm border border-black/10 bg-white">
                <Image
                  src={lang.flag}
                  alt={`${lang.label} flag`}
                  width={32}
                  height={20}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="text-sm font-medium truncate whitespace-nowrap">{lang.label}</span>
              <span
                className={`w-1.5 h-1.5 rounded-full bg-accent-navy justify-self-end transition-opacity ${
                  currentLang.code === lang.code ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMobileMenuOpen]);
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-black/5 shadow-premium transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Desktop: 3-column grid — logo | nav (centered) | actions */}
          <div className="hidden lg:grid lg:grid-cols-[auto_1fr_auto] items-center h-20 gap-4">
            {/* Col 1: Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                width={110}
                height={50}
                alt="NoblesseHomes"
                className="h-12 w-auto"
              />
            </Link>

            {/* Col 2: Navigation — perfectly centered */}
            <nav className="flex items-center justify-center gap-5 xl:gap-7">
              <Link
                href="/sprava"
                className="text-text font-medium hover:text-accent-navy transition-colors duration-200 relative group whitespace-nowrap"
              >
                Správa
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-navy transition-all duration-200 group-hover:w-full" />
              </Link>
              <Link
                href="/pronajem"
                className="text-text font-medium hover:text-accent-navy transition-colors duration-200 relative group whitespace-nowrap"
              >
                Pronájem
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-navy transition-all duration-200 group-hover:w-full" />
              </Link>
              <Link
                href="/spoluprace"
                className="text-text font-medium hover:text-accent-navy transition-colors duration-200 relative group whitespace-nowrap"
              >
                Spolupráce
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-navy transition-all duration-200 group-hover:w-full" />
              </Link>
              <Link
                href="/#kontakt"
                className="text-text font-medium hover:text-accent-navy transition-colors duration-200 relative group whitespace-nowrap"
              >
                Kontakt
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-navy transition-all duration-200 group-hover:w-full" />
              </Link>
              <Link
                href="/o-nas"
                className="text-text font-medium hover:text-accent-navy transition-colors duration-200 relative group whitespace-nowrap"
              >
                O nás
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-navy transition-all duration-200 group-hover:w-full" />
              </Link>
            </nav>

            {/* Col 3: Language */}
            <div className="flex items-center">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile: simple flex — logo + language + burger */}
          <div className="flex lg:hidden items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                width={110}
                height={50}
                alt="NoblesseHomes"
                className="h-10 w-auto"
              />
            </Link>
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-accent-navy p-2"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-accent-navy/50 backdrop-blur-sm z-50 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 shadow-premium-lg lg:hidden overflow-y-auto">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-black/5 bg-accent-cream">
                <div className="flex items-center gap-3">
                  <Image
                    src={logo}
                    width={110}
                    height={50}
                    alt="NoblesseHomes"
                    className="h-9 w-auto"
                  />
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-accent-navy/8 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <XIcon className="w-6 h-6 text-accent-navy" strokeWidth={2.5} />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 p-6">
                <div className="space-y-2">
                  <Link
                    href="/sprava"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-4 px-4 rounded-xl hover:bg-accent-cream transition-colors border border-transparent hover:border-black/5"
                  >
                    <div className="font-bold text-lg text-accent-navy mb-1">Správa</div>
                    <div className="text-sm text-text/60">Kompletní správa nemovitostí</div>
                  </Link>

                  <Link
                    href="/pronajem"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-4 px-4 rounded-xl hover:bg-accent-cream transition-colors border border-transparent hover:border-black/5"
                  >
                    <div className="font-bold text-lg text-accent-navy mb-1">Pronájem</div>
                    <div className="text-sm text-text/60">Najdeme spolehlivého nájemníka</div>
                  </Link>

                  <Link
                    href="/spoluprace"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-4 px-4 rounded-xl hover:bg-accent-cream transition-colors border border-transparent hover:border-black/5"
                  >
                    <div className="font-bold text-lg text-accent-navy mb-1">Spolupráce</div>
                    <div className="text-sm text-text/60">Předejte klienta s důvěrou</div>
                  </Link>

                  <Link
                    href="/#kontakt"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-4 px-4 rounded-xl hover:bg-accent-cream transition-colors border border-transparent hover:border-black/5"
                  >
                    <div className="font-bold text-lg text-accent-navy mb-1">Kontakt</div>
                    <div className="text-sm text-text/60">Ozvěte se nám a domluvte si konzultaci</div>
                  </Link>

                  <Link
                    href="/o-nas"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-4 px-4 rounded-xl hover:bg-accent-cream transition-colors border border-transparent hover:border-black/5"
                  >
                    <div className="font-bold text-lg text-accent-navy mb-1">O nás</div>
                    <div className="text-sm text-text/60">Kdo jsme a jak pracujeme</div>
                  </Link>
                </div>
              </nav>

              {/* Fixed CTA at bottom */}
              <div className="p-6 border-t border-black/5 bg-accent-cream">
                <a
                  href="tel:+420123456789"
                  className="flex items-center justify-center gap-2 w-full text-accent-navy font-bold text-center px-6 py-3.5 rounded-xl border-2 border-accent-navy/15 hover:border-accent-navy/30 hover:text-accent-navy transition-all duration-200 bg-white"
                >
                  <PhoneIcon className="w-4.5 h-4.5" strokeWidth={2.5} />
                  +420 123 456 789
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
