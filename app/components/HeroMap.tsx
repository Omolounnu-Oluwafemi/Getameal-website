"use client";

import { useEffect, useRef } from "react";

// Cook pins placed around Lagos Mainland / Lekki
const COOK_PINS = [
  { lat: 6.602, lng: 3.348, initials: "BF", color: "#f59e0b", name: "Babatunde" },
  { lat: 6.578, lng: 3.315, initials: "MN", color: "#10b981", name: "Mama Ngozi" },
  { lat: 6.625, lng: 3.385, initials: "AO", color: "#6366f1", name: "Aunty Ola" },
  { lat: 6.558, lng: 3.362, initials: "EK", color: "#f43f5e", name: "Emeka" },
  { lat: 6.612, lng: 3.420, initials: "FY", color: "#8b5cf6", name: "Funke Y." },
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
            background:${cook.color};border:3px solid white;
            box-shadow:0 2px 8px rgba(0,0,0,0.25);
            display:flex;align-items:center;justify-content:center;
            color:white;font-weight:700;font-size:13px;font-family:sans-serif;
            cursor:pointer;
          ">${cook.initials}</div>`,
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
          background:#f97316;border:3px solid white;
          box-shadow:0 3px 12px rgba(0,0,0,0.3);
          display:flex;align-items:center;justify-content:center;
          color:white;font-weight:800;font-size:14px;font-family:sans-serif;
          cursor:pointer;
        ">MK</div>`,
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
