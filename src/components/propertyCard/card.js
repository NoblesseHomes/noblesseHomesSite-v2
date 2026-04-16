import React from 'react';
import { Link } from '@/i18n/navigation';
import {
  MapPinIcon,
  CameraIcon,
  ArrowRightIcon,
  RulerIcon,
  LayoutIcon,
  BuildingIcon,
} from 'lucide-react';
import Image from 'next/image';

const badgeStyles = {
  rent: 'bg-accent-navy text-white',
  sale: 'bg-primary text-white',
  reserved: 'bg-white/90 text-accent-navy border border-accent-navy/20',
};
export function PropertyCard({
  id,
  image,
  badge,
  badgeVariant = 'rent',
  price,
  priceUnit,
  title,
  location,
  area,
  layout,
  floor,
  photoCount,
}) {
  const detailUrl = id ? `/nabidka-bytu/${id}` : '#nabidka';
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-black/5 shadow-premium hover:shadow-premium-lg transition-all duration-300 flex flex-col">
      {/* Image container */}
      <div className="relative overflow-hidden aspect-4/3">
        <Image
          width={400}
          height={300}
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />

        {/* Status badge — top left */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-sm ${badgeStyles[badgeVariant]}`}
          >
            {badge}
          </span>
        </div>

        {/* Photo count — top right */}
        {photoCount && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1.5 rounded-full">
              <CameraIcon className="w-3.5 h-3.5" strokeWidth={2.5} />
              {photoCount}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Price */}
        <div className="flex items-baseline gap-1.5 mb-2">
          <span className="font-heading text-xl sm:text-2xl text-accent-navy font-bold">
            {price}
          </span>
          {priceUnit && <span className="text-sm text-text/60 font-medium">{priceUnit}</span>}
        </div>

        {/* Title */}
        <h3 className="font-heading text-base sm:text-lg text-accent-navy mb-2 leading-snug line-clamp-2 font-semibold">
          {title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 mb-4">
          <MapPinIcon className="w-4 h-4 text-text/40 shrink-0" strokeWidth={2.5} />
          <span className="text-sm text-text/70 truncate">{location}</span>
        </div>

        {/* Specs row */}
        <div className="flex items-center gap-4 py-3 border-t border-black/5 mb-4">
          <div className="flex items-center gap-1.5">
            <RulerIcon className="w-4 h-4 text-text/40" strokeWidth={2} />
            <span className="text-sm font-medium text-text">{area}</span>
          </div>
          <div className="w-px h-4 bg-black/10" />
          <div className="flex items-center gap-1.5">
            <LayoutIcon className="w-4 h-4 text-text/40" strokeWidth={2} />
            <span className="text-sm font-medium text-text">{layout}</span>
          </div>
          {floor && (
            <>
              <div className="w-px h-4 bg-black/10" />
              <div className="flex items-center gap-1.5">
                <BuildingIcon className="w-4 h-4 text-text/40" strokeWidth={2} />
                <span className="text-sm font-medium text-text">{floor}</span>
              </div>
            </>
          )}
        </div>

        {/* CTA */}
        <Link
          href={detailUrl}
          className="mt-auto flex items-center justify-center gap-2 w-full bg-accent-navy text-white font-bold text-sm py-3 rounded-xl hover:bg-primary transition-all duration-300 group/btn"
        >
          <span>Více informací</span>
          <ArrowRightIcon
            className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
            strokeWidth={2.5}
          />
        </Link>
      </div>
    </article>
  );
}
