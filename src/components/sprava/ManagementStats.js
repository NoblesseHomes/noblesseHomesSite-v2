import { HomeIcon, UsersIcon, AwardIcon, HeadphonesIcon } from 'lucide-react';
const stats = [
  {
    icon: HomeIcon,
    value: '20+',
    label: 'nemovitostí ve správě',
  },
  {
    icon: UsersIcon,
    value: '3+',
    label: 'roky zkušeností',
  },
  {
    icon: AwardIcon,
    value: '0',
    label: 'neuhrazených nájmů u klientů',
  },
  {
    icon: HeadphonesIcon,
    value: '24h',
    label: 'reakce na požadavky',
  },
];
export function ManagementStats() {
  return (
    <section className="w-full bg-accent-navy py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center px-4 sm:px-8 py-4 sm:py-5 bg-accent-navy"
              >
                <div className="bg-white/10 rounded-xl p-3 inline-flex mb-5 border border-white/15">
                  <Icon className="w-7 h-7 text-white/70" strokeWidth={2.5} />
                </div>
                <div className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-2 leading-none">
                  {stat.value}
                </div>
                <p className="text-sm sm:text-base text-white/70 font-medium leading-snug">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
