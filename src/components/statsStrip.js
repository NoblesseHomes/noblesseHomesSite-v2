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
    <section className="w-full bg-accent-navy border-y border-white/10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-10">
        <div className="grid grid-cols-3 gap-2 sm:gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-2xl sm:text-4xl font-extrabold text-footer-text mb-1 sm:mb-2">
                {stat.value}
              </p>
              <p className="text-footer-text-muted text-[11px] leading-snug sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
