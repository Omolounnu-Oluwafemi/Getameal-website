import Image from "next/image";

const STEPS = [
  {
    number: "1",
    title: "Explore home cooks near you",
    desc: "Find verified cook that will cook what you want to eat for the week. It's made fresh for you.",
    thumb: { bg: "bg-amber-100", emoji: "👨‍🍳" },
  },
  {
    number: "2",
    title: "Pre-Order the portion you need",
    desc: "Order 5 Litres of egusi, 8 Litres of Jollof rice with protein or any meal of your choice and enjoy for the week.",
    thumb: { bg: "bg-orange-100", emoji: "🍛" },
  },
  {
    number: "3",
    title: "Pick up your order or get it delivered",
    desc: "Once the cook is done cooking your meal, you either get it delivered to you or you pick it up yourself no stories.",
    thumb: { bg: "bg-red-100", emoji: "🛵" },
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-gray-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* ── Left column ── */}
          <div className="lg:w-[50%] w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm">
              <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3C9.5 3 7 5 7 8c0 2 1 3.5 2.5 4.5V20h5v-7.5C16 11.5 17 10 17 8c0-3-2.5-5-5-5z"
                    fill="white"
                  />
                  <circle cx="12" cy="8" r="2" fill="#4ade80" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-700">
                For Customers
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-5">
              Order from the
              <br />
              Kitchen you Trust
            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 leading-relaxed mb-10">
              Every cook share what they are cooking each day, all you need to
              do is find who is cooking what you want to eat and pre-order to
              save more time and money.
            </p>

            {/* Steps */}
            <div className="relative">
              {/* Vertical dashed connector line */}
              <div
                className="absolute left-2.75 top-8 bottom-8 w-px"
                style={{
                  background:
                    "repeating-linear-gradient(to bottom, #d1d5db 0px, #d1d5db 6px, transparent 6px, transparent 12px)",
                }}
              />

              <div className="space-y-8">
                {STEPS.map(({ number, title, desc, thumb }) => (
                  <div key={number} className="flex items-start gap-4">
                    {/* Step number */}
                    <div className="flex flex-col items-center shrink-0 w-6">
                      <span className="text-sm font-bold text-gray-400 leading-none mt-1">
                        {number}
                      </span>
                    </div>

                    {/* Thumbnail */}
                    <div
                      className={`w-14 h-14 rounded-xl ${thumb.bg} shrink-0 flex items-center justify-center text-2xl overflow-hidden`}
                    >
                      {thumb.emoji}
                    </div>

                    {/* Text */}
                    <div className="flex-1 pt-0.5">
                      <p className="text-sm font-bold text-gray-900 mb-1">
                        {title}
                      </p>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column — Kitchen GIF ── */}
          {/* overflow-hidden clips the built-in padding in the GIF frame */}
          <div className="lg:w-[50%] w-full overflow-hidden flex items-center justify-center">
            <Image
              src="/OrderFromKitchen.gif"
              alt="Home kitchen illustration"
              width={900}
              height={840}
              className="w-full h-auto object-contain scale-[1.16]"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
