import Image from "next/image";

const BENEFITS = [
  {
    title: "Saves You More Time",
    body: [
      "With Getameal, customers place one bulk order for the week instead of cooking every day or ordering food repeatedly.",
      "Meals are prepared in larger portions by trusted home cooks on scheduled cooking dates, then picked up or delivered, so you always have ready-to-eat food whenever you need it.",
    ],
    social: "Over 500+ are waiting to try this out",
    cta: null,
    ctaLabel: null,
    bullets: null,
    bulletsLabel: null,
    image: "/moreTime.png",
  },
  {
    title: "Saves You More Money",
    body: [
      "Instead of paying repeatedly for small orders, delivery fees, and impulse buys, you plan your meals ahead and spend less intentionally.",
    ],
    social: null,
    cta: "#",
    ctaLabel: "Give this a shot",
    bulletsLabel: "How it benefits customers:",
    bullets: [
      "No pickup charges, order once, not multiple times",
      "Lower cost per portion compared to daily food apps",
      "Reduced impulse spending on last-minute meals",
      "Less food waste because you buy planned quantities",
    ],
    image: "/moreMoney.png",
  },
  {
    title: "Earn More Predictably",
    body: [
      "Getameal allows cooks to receive scheduled bulk orders instead of relying on random daily requests. This means you cook in larger, planned batches and generate more stable income.",
    ],
    social: null,
    cta: "#",
    ctaLabel: "Join as a cook",
    bulletsLabel: "How it benefits cooks:",
    bullets: [
      "Receive bulk orders in advance",
      "Plan ingredients with less waste",
      "Cook only when you receive orders",
      "Earn steady, predictable income",
    ],
    image: "/morePredictability.png",
  },
];

const GreenCheckIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    className="shrink-0 mt-0.5"
  >
    <rect width="24" height="24" rx="6" fill="#16a34a" opacity="0.15" />
    <path
      d="M7 12.5l3.5 3.5L17 9"
      stroke="#16a34a"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function BenefitsSection() {
  return (
    <section className="bg-gray-50 py-10 pb-24" id="for-customers">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {BENEFITS.map((b) => (
          <div
            key={b.title}
            className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col lg:flex-row"
            style={{ minHeight: "500px" }}
          >
            {/* ── Text side ── */}
            <div className="lg:w-[42%] px-12 py-16 flex flex-col justify-center">
              <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                {b.title}
              </h3>

              {b.body.map((para, i) => (
                <p key={i} className="text-gray-500 text-sm leading-relaxed mb-4">
                  {para}
                </p>
              ))}

              {/* Social proof row */}
              {b.social && (
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex -space-x-2">
                    {["bg-amber-500", "bg-rose-500", "bg-blue-500", "bg-slate-600"].map(
                      (c, i) => (
                        <div
                          key={i}
                          className={`w-9 h-9 rounded-full ${c} border-2 border-white flex items-center justify-center text-xs font-bold text-white`}
                        >
                          {["👩", "👨", "👩‍🦱", "👨‍🦳"][i]}
                        </div>
                      )
                    )}
                  </div>
                  <span className="text-sm text-gray-500 font-medium">{b.social}</span>
                </div>
              )}

              {/* Bullet list */}
              {b.bulletsLabel && b.bullets && (
                <div className="mt-5">
                  <p className="text-sm font-bold text-gray-900 mb-3">
                    {b.bulletsLabel}
                  </p>
                  <ul className="space-y-2.5">
                    {b.bullets.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <GreenCheckIcon />
                        <span className="text-sm text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              {b.ctaLabel && (
                <div className="mt-8">
                  <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-8 py-3.5 rounded-full transition-colors">
                    {b.ctaLabel}
                  </button>
                </div>
              )}
            </div>

            {/* ── Image side — fills edge-to-edge, no padding ── */}
            <div className="lg:w-[58%] relative overflow-hidden" style={{ minHeight: "400px" }}>
              <Image
                src={b.image}
                alt={b.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
