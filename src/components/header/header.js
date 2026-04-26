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
        className="hover:bg-accent-cream flex h-8 w-16 items-center justify-between gap-2 rounded-lg border border-black/10 bg-white px-2.5 transition-all duration-200 hover:border-black/20"
        aria-label="Změnit jazyk"
      >
        <span className="flex items-center gap-1.5">
          <span className="text-text/80 text-xs leading-none font-semibold">
            {currentLang.short}
          </span>
        </span>
        <ChevronDownIcon
          className={`text-text/50 h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          strokeWidth={2.5}
        />
      </button>

      {isOpen && (
        <div className="shadow-premium-lg absolute top-full right-0 z-60 mt-2 w-48 overflow-hidden rounded-xl border border-black/5 bg-white">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                handleLanguage(lang.code);
              }}
              className={`grid w-full cursor-pointer grid-cols-[32px_1fr_12px] items-center gap-3 px-4 py-2.5 text-left transition-colors duration-150 ${
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
              <span className="truncate text-sm font-medium whitespace-nowrap">{lang.label}</span>
              <span
                className={`bg-accent-navy h-1.5 w-1.5 justify-self-end rounded-full transition-opacity ${
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

const navMenu = [
  {
    name: 'Správa',
    href: '/sprava',
    active: 'sprava',
  },
  {
    name: 'Pronájem',
    href: '/pronajem',
    active: 'pronajem',
  },
  {
    name: 'Spolupráce',
    href: '/spoluprace',
    active: 'spoluprace',
  },
  {
    name: 'Kontakt',
    href: '/kontakt',
    active: 'kontakt',
  },
  {
    name: 'O nás',
    href: '/o-nas',
    active: 'o-nas',
  },
];
export default function Header() {
  const pathname = usePathname();
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

  console.log(pathname);
  return (
    <>
      <header className="shadow-premium sticky top-0 z-50 w-full border-b border-black/5 bg-white/95 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Desktop: 3-column grid — logo | nav (centered) | actions */}
          <div className="hidden h-20 items-center gap-4 lg:grid lg:grid-cols-[auto_1fr_auto]">
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
              {/* <Link
                href="/sprava"
                className="text-text hover:text-accent-navy group relative font-medium whitespace-nowrap transition-colors duration-200"
              >
                Správa
                <span className="bg-accent-navy absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-200 group-hover:w-full" />
              </Link>
              <Link
                href="/pronajem"
                className="text-text hover:text-accent-navy group relative font-medium whitespace-nowrap transition-colors duration-200"
              >
                Pronájem
                <span className="bg-accent-navy absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-200 group-hover:w-full" />
              </Link>
              <Link
                href="/spoluprace"
                className="text-text hover:text-accent-navy group relative font-medium whitespace-nowrap transition-colors duration-200"
              >
                Spolupráce
                <span className="bg-accent-navy absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-200 group-hover:w-full" />
              </Link>
              <Link
                href="/#kontakt"
                className="text-text hover:text-accent-navy group relative font-medium whitespace-nowrap transition-colors duration-200"
              >
                Kontakt
                <span className="bg-accent-navy absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-200 group-hover:w-full" />
              </Link>
              <Link
                href="/o-nas"
                className="text-text hover:text-accent-navy group relative font-medium whitespace-nowrap transition-colors duration-200"
              >
                O nás
                <span className="bg-accent-navy absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-200 group-hover:w-full" />
              </Link> */}

              {navMenu.map((item, key) => (
                <Link
                  key={key}
                  href={item.href}
                  className="text-text hover:text-accent-navy group relative font-medium whitespace-nowrap transition-colors duration-200"
                >
                  {item.name}
                  <span
                    className={`bg-accent-navy absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-200 group-hover:w-full ${pathname.includes(item.active) && 'w-full'}`}
                  />
                </Link>
              ))}
            </nav>

            {/* Col 3: Language */}
            <div className="flex items-center">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile: simple flex — logo + language + burger */}
          <div className="flex h-16 items-center justify-between lg:hidden">
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
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            className="bg-accent-navy/50 fixed inset-0 z-50 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="shadow-premium-lg fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] overflow-y-auto bg-white lg:hidden">
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="bg-accent-cream flex items-center justify-between border-b border-black/5 p-6">
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
                  className="hover:bg-accent-navy/8 rounded-lg p-2 transition-colors"
                  aria-label="Close menu"
                >
                  <XIcon className="text-accent-navy h-6 w-6" strokeWidth={2.5} />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 p-6">
                <div className="space-y-2">
                  <Link
                    href="/sprava"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:bg-accent-cream block rounded-xl border border-transparent px-4 py-4 transition-colors hover:border-black/5"
                  >
                    <div className="text-accent-navy mb-1 text-lg font-bold">Správa</div>
                    <div className="text-text/60 text-sm">Kompletní správa nemovitostí</div>
                  </Link>

                  <Link
                    href="/pronajem"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:bg-accent-cream block rounded-xl border border-transparent px-4 py-4 transition-colors hover:border-black/5"
                  >
                    <div className="text-accent-navy mb-1 text-lg font-bold">Pronájem</div>
                    <div className="text-text/60 text-sm">Najdeme spolehlivého nájemníka</div>
                  </Link>

                  <Link
                    href="/spoluprace"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:bg-accent-cream block rounded-xl border border-transparent px-4 py-4 transition-colors hover:border-black/5"
                  >
                    <div className="text-accent-navy mb-1 text-lg font-bold">Spolupráce</div>
                    <div className="text-text/60 text-sm">Předejte klienta s důvěrou</div>
                  </Link>

                  <Link
                    href="/#kontakt"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:bg-accent-cream block rounded-xl border border-transparent px-4 py-4 transition-colors hover:border-black/5"
                  >
                    <div className="text-accent-navy mb-1 text-lg font-bold">Kontakt</div>
                    <div className="text-text/60 text-sm">
                      Ozvěte se nám a domluvte si konzultaci
                    </div>
                  </Link>

                  <Link
                    href="/o-nas"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:bg-accent-cream block rounded-xl border border-transparent px-4 py-4 transition-colors hover:border-black/5"
                  >
                    <div className="text-accent-navy mb-1 text-lg font-bold">O nás</div>
                    <div className="text-text/60 text-sm">Kdo jsme a jak pracujeme</div>
                  </Link>
                </div>
              </nav>

              {/* Fixed CTA at bottom */}
              <div className="bg-accent-cream border-t border-black/5 p-6">
                <a
                  href="tel:+420123456789"
                  className="text-accent-navy border-accent-navy/15 hover:border-accent-navy/30 hover:text-accent-navy flex w-full items-center justify-center gap-2 rounded-xl border-2 bg-white px-6 py-3.5 text-center font-bold transition-all duration-200"
                >
                  <PhoneIcon className="h-4.5 w-4.5" strokeWidth={2.5} />
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
