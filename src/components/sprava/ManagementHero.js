export function ManagementHero() {
  return (
    <>
      <section className="bg-accent-cream relative w-full overflow-hidden border-b border-black/5">
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 md:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-heading text-accent-navy mb-6 text-4xl leading-[1.15] font-extrabold sm:mb-8 sm:text-5xl md:text-6xl lg:text-7xl">
              Správa nemovitosti — vy inkasujete, my řešíme provoz
            </h1>

            <p className="text-text mx-auto mb-10 max-w-3xl px-4 text-lg leading-relaxed sm:mb-12 sm:text-xl md:text-2xl">
              Přebíráme každodenní operativu pronajatého bytu — komunikaci s nájemníkem, platby,
              opravy, kontroly a reporting. <br className="hidden sm:block" />
              <span className="text-accent-navy font-semibold">
                Vy máte přehled, ale nemusíte nic řešit.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
