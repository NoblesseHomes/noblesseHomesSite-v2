'use client';

import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

export default function GoogleMaps() {
  const position = { lat: 50.104095, lng: 14.451565 };
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API;

  return (
    <section className="bg-accent-cream w-full pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-black/10 bg-white p-4">
          <div className="h-105 w-full overflow-hidden rounded-2xl border border-black/10">
            <APIProvider apiKey={apiKey}>
              <Map
                mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID}
                className="h-full w-full rounded-2xl"
                defaultCenter={position}
                defaultZoom={15}
                disableDefaultUI={true}
              >
                <AdvancedMarker position={position} />
              </Map>
            </APIProvider>
          </div>
        </div>
      </div>
    </section>
  );
}
