export default function RentalHero() {
  return (
    <>
      <section className="bg-accent-cream relative w-full overflow-hidden border-b border-black/5">
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 md:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-heading text-accent-navy mb-6 text-4xl leading-[1.15] font-extrabold sm:mb-8 sm:text-5xl md:text-6xl lg:text-7xl">
              Pronajměte byt rychle a bezpečně —{' '}
              <span className="text-accent-navy/70">bez zbytečných starostí</span>
            </h1>

            <p className="text-text mx-auto mb-4 max-w-3xl px-4 text-lg leading-relaxed sm:mb-6 sm:text-xl md:text-2xl">
              Najdeme prověřeného nájemníka, nastavíme strategii ceny, zařídíme prohlídky, dokumenty
              i předání.
            </p>
            <p className="text-text/70 mx-auto mb-10 max-w-2xl px-4 text-base leading-relaxed sm:mb-12 sm:text-lg">
              Vy máte klid — my řešíme celý proces pronájmu od A do Z.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
