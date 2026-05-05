const stats = [
  {
    value: '200+',
    label: 'Zrealizovaných objektů',
  },
  {
    value: '30+',
    label: 'Objektů ve správě',
  },
  {
    value: '3+',
    label: 'Roky na trhu',
  },
];

export function StatsStrip() {
  return (
    <section className="bg-accent-navy w-full border-y border-white/10">
      <div className="mx-auto max-w-7xl px-3 py-6 sm:px-6 sm:py-10">
        <div className="grid grid-cols-3 gap-2 text-center sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-text-main mb-1 text-2xl font-extrabold sm:mb-2 sm:text-4xl">
                {stat.value}
              </p>
              <p className="text-text-muted text-[11px] leading-snug sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
