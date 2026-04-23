"use client";

import { useEffect, useRef } from "react";

// Cook pins placed around Lagos Mainland / Lekki
const COOK_PINS = [
  { lat: 6.602, lng: 3.348, img: "/people1.png", name: "Babatunde" },
  { lat: 6.578, lng: 3.315, img: "/people2.png", name: "Mama Ngozi" },
  { lat: 6.625, lng: 3.385, img: "/people3.png", name: "Aunty Ola" },
  { lat: 6.558, lng: 3.362, img: "/people4.png", name: "Emeka" },
  { lat: 6.612, lng: 3.420, img: "/people5.png", name: "Funke Y." },
];

const MUNACHI_POS = { lat: 6.582, lng: 3.355 };

export default function HeroMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current) return;

    // Prevent double-init (React Strict Mode)
    if (mapInstanceRef.current) {
      (mapInstanceRef.current as { remove: () => void }).remove();
      mapInstanceRef.current = null;
    }

    let cancelled = false;

    import("leaflet").then((L) => {
      if (cancelled || !mapRef.current) return;

      // Clear any residual Leaflet state on the DOM node
      // @ts-expect-error leaflet attaches _leaflet_id to the container
      if (mapRef.current._leaflet_id) {
        // already initialized — skip
        return;
      }

      const map = L.map(mapRef.current, {
        center: [6.585, 3.365],
        zoom: 13,
        zoomControl: false,
        scrollWheelZoom: false,
        dragging: false,
        touchZoom: false,
        doubleClickZoom: false,
        keyboard: false,
        attributionControl: false,
      });

      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      }).addTo(map);

      COOK_PINS.forEach((cook) => {
        const icon = L.divIcon({
          html: `<div style="
            width:44px;height:44px;border-radius:50%;
            border:3px solid white;
            box-shadow:0 2px 8px rgba(0,0,0,0.25);
            overflow:hidden;cursor:pointer;
          "><img src="${cook.img}" style="width:100%;height:100%;object-fit:cover;object-position:top;" /></div>`,
          className: "",
          iconSize: [44, 44],
          iconAnchor: [22, 22],
        });
        L.marker([cook.lat, cook.lng], { icon })
          .addTo(map)
          .bindTooltip(cook.name, { direction: "top", offset: [0, -24] });
      });

      const mIcon = L.divIcon({
        html: `<div style="
          width:52px;height:52px;border-radius:50%;
          border:3px solid white;
          box-shadow:0 3px 12px rgba(0,0,0,0.3);
          overflow:hidden;cursor:pointer;
        "><img src="/people1.png" style="width:100%;height:100%;object-fit:cover;object-position:top;" /></div>`,
        className: "",
        iconSize: [52, 52],
        iconAnchor: [26, 26],
      });
      L.marker([MUNACHI_POS.lat, MUNACHI_POS.lng], { icon: mIcon }).addTo(map);
    });

    return () => {
      cancelled = true;
      if (mapInstanceRef.current) {
        (mapInstanceRef.current as { remove: () => void }).remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
