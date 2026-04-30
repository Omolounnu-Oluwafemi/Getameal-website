"use client";

import Image from "next/image";
import { useState } from "react";

export interface CookFood {
  image: string;
  label: string;
  name: string;
  price: string;
  unit: string;
}

export interface CookData {
  name: string;
  location: string;
  rating: string;
  reviews: number;
  avatar: string;
  foods: readonly [CookFood, CookFood];
}

export default function MunaCard({ cook }: { cook: CookData }) {
  const [left, right] = cook.foods;
  const [qty, setQty] = useState(1);

  return (
    <div
      style={{
        width: "clamp(230px, 22vw, 300px)",
        backgroundColor: "#fff",
        borderRadius: 16,
        border: "5px solid #EDEDED",
        boxShadow: "0px 15px 50px 0px #0000001A",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        paddingBottom: 10,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "8px 8px 0",
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
            border: "1.5px solid #EDEDED",
          }}
        >
          <Image
            src={cook.avatar}
            alt={cook.name}
            width={40}
            height={40}
            style={{
              objectFit: "cover",
              objectPosition: "top",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div style={{ minWidth: 0 }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "#111",
              lineHeight: 1.2,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {cook.name}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              marginTop: 2,
            }}
          >
            <Image src="/YellowStar.svg" alt="star" width={15} height={15} />
            <span style={{ fontSize: 12, color: "#555", fontWeight: 600 }}>
              {cook.rating} ({cook.reviews})
            </span>
            <Image
              src="/locationOutline.svg"
              alt="location"
              width={15}
              height={15}
            />
            <span style={{ fontSize: 12, color: "#555" }}>{cook.location}</span>
          </div>
        </div>
      </div>

      {/* Food items — each column owns its image + info */}
      <div
        style={{
          display: "flex",
          gap: 8,
          padding: "0 0 0 8px",
          marginTop: 4,
          flexShrink: 0,
        }}
      >
        {/* Left item */}
        <div
          style={{
            flex: "1 1 0",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            borderRadius: 13,
            gap: 6,
            boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
            border: "0.81px solid var(--Grey-75, #EDEDED) solid #EDEDED",
          }}
        >
          {/* Image */}
          <div
            style={{
              position: "relative",
              height: "clamp(110px, 12vw, 160px)",
              flexShrink: 0,
              borderTopLeftRadius: 13,
              borderTopRightRadius: 13,
              overflow: "hidden",
            }}
          >
            <Image
              src={left.image}
              alt={left.name}
              fill
              style={{ objectFit: "cover" }}
              sizes="180px"
            />
            {/* Quantity control */}
            <div
              style={{
                position: "absolute",
                bottom: 8,
                right: 8,
                display: "flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "white",
                borderRadius: 10,
                padding: "7px 12px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.14)",
                whiteSpace: "nowrap",
              }}
            >
              <button
                onClick={(e) => { e.stopPropagation(); setQty((q) => Math.max(0, q - 1)); }}
                style={{ display: "flex", alignItems: "center", background: "none", border: "none", padding: 0, cursor: "pointer" }}
              >
                <Image src="/trash.svg" alt="remove" width={11} height={11} style={{ display: "block" }} />
              </button>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#111", lineHeight: 1, display: "block", minWidth: 8, textAlign: "center" }}>
                {qty}
              </span>
              <button
                onClick={(e) => { e.stopPropagation(); setQty((q) => q + 1); }}
                style={{ display: "flex", alignItems: "center", background: "none", border: "none", padding: 0, cursor: "pointer", fontSize: 14, fontWeight: 700, color: "#000", lineHeight: 1 }}
              >
                +
              </button>
            </div>
          </div>
          {/* Info */}
          <div style={{ paddingBottom: 2, minWidth: 0, paddingLeft: 6 }}>
            <p
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: "#209D01",
                padding: "2px 2px",
                marginBottom: 1,
              }}
            >
              {left.label}
            </p>
            <p
              style={{
                fontSize: 10,
                fontWeight: 500,
                color: "#111",
                lineHeight: 1.3,
                padding: "2px 2px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {left.name}
            </p>
            <p
              style={{
                fontSize: 12,
                color: "#444",
                fontWeight: 700,
                padding: "2px 2px",
              }}
            >
              {left.price}
              <span
                style={{
                  fontSize: 9,
                }}
              >
                /{left.unit}
              </span>
            </p>
          </div>
        </div>

        {/* Right item — half-visible, bleeds to card edge */}
        <div
          style={{
            width: "clamp(75px, 7.5vw, 100px)",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          {/* Image */}
          <div
            style={{
              position: "relative",
              height: "clamp(110px, 12vw, 160px)",
              flexShrink: 0,
              borderTopLeftRadius: 13,
              overflow: "hidden",
            }}
          >
            <Image
              src={right.image}
              alt={right.name}
              fill
              style={{ objectFit: "cover" }}
              sizes="100px"
            />
            {/* Popular badge */}
            <div
              style={{
                position: "absolute",
                top: 8,
                left: 6,
                backgroundColor: "white",
                borderRadius: 10,
                padding: "4px 7px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: 8,
                  fontWeight: 600,
                  color: "#111",
                  lineHeight: 1,
                }}
              >
                Popular
              </span>
            </div>
          </div>
          {/* Info */}
          <div style={{ paddingBottom: 4, minWidth: 0, paddingLeft: 6 }}>
            <p
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: "#209D01",
                marginBottom: 2,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                padding: "2px 2px",
              }}
            >
              {right.label}
            </p>
            <p
              style={{
                fontSize: 10,
                fontWeight: 500,
                color: "#111",
                lineHeight: 1.3,
                marginBottom: 2,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                padding: "2px 2px",
              }}
            >
              {right.name}
            </p>
            <p
              style={{
                fontSize: 12,
                color: "#444",
                fontWeight: 700,
                padding: "2px 2px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {right.price}
              <span
                style={{
                  fontSize: 9,
                }}
              >
                /{right.unit}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          padding: "12px 8px",
          flexWrap: "wrap",
          rowGap: 0,
        }}
      >
        <Image src="/pickup.svg" alt="pickup" width={15} height={15} />
        <span style={{ fontSize: 10, color: "#222222", fontWeight: 500 }}>
          Pick-up
        </span>
        <span style={{ fontSize: 10, color: "#ccc" }}>•</span>
        <Image src="/dot.svg" alt="dot" width={6} height={15} />
        <span style={{ fontSize: 10, color: "#222222", fontWeight: 600 }}>
          Available
        </span>
        <span style={{ fontSize: 10, color: "#222222" }}>•</span>
        <Image src="/delivery.svg" alt="delivery" width={15} height={15} />
        <span style={{ fontSize: 10, color: "#222222", fontWeight: 500 }}>
          Delivery
        </span>
        <Image src="/dot.svg" alt="dot" width={6} height={15} />
        <span style={{ fontSize: 10, color: "#222222", fontWeight: 600 }}>
          Not Available
        </span>
      </div>
    </div>
  );
}
