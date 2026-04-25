import Image from "next/image";

const STEPS = [
  {
    number: "1",
    title: "Explore home cooks near you",
    desc: "Find verified cook that will cook what you want to eat for the week. It's made fresh for you.",
    mobileDesc:
      "Find verified cook that will cook what you want to eat for the week.",
    thumb: { bg: "bg-amber-100", emoji: "👨‍🍳" },
    align: "items-start",
  },
  {
    number: "2",
    title: "Pre-Order the portion you need",
    desc: "Order 5 Litres of egusi, 8 Litres of Jollof rice with protein or any meal of your choice and enjoy for the week.",
    mobileDesc: "Order 5 Litres of egusi or any meal of your choice and enjoy.",
    thumb: { bg: "bg-orange-100", emoji: "🍛" },
    align: "items-center",
  },
  {
    number: "3",
    title: "Pick up your order or get it delivered",
    desc: "Once the cook is done cooking your meal, you either get it delivered to you or you pick it up yourself no stories.",
    mobileDesc:
      "You either get it delivered to you or you pick it up yourself no stories.",
    thumb: { bg: "bg-red-100", emoji: "🛵" },
    align: "items-end",
  },
];

export default function TrustSection() {
  return (
    <section
      className="py-24 md:py-40 bg-[#FAFAFA] overflow-hidden"
      id="how-it-works"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* ── Left column ── */}
          <div className="lg:w-[50%] w-full ">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FAFAFA] border border-gray-200 rounded-full px-6 py-3 md:py-4 mb-4 mt-10 md:mt-0 md:mb-14 shadow-sm">
              <Image
                src="/greenLogo.svg"
                alt=""
                width={18}
                height={18}
                className="shrink-0"
              />
              <span className="text-sm md:text-[16px] font-500 text-gray-700">
                For Customers
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Order from the Kitchen you Trust
            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 md:leading-relaxed mb-8 md:mb-14 text-sm md:text-[16px]">
              Every cook share what they are cooking each day, all you need to
              do is find who is cooking what you want to eat and pre-order to
              save more time and money.
            </p>

            {/* Steps */}
            <div className="flex flex-col ">
              {STEPS.map(
                ({ number, title, desc, mobileDesc, thumb, align }, idx) => (
                  <div key={number}>
                    {/* Step row */}
                    <div className={`flex ${align} gap-6 `}>
                      {/* Number fixed-width so connector aligns beneath it */}
                      <span className="text-sm font-bold text-black w-6 text-center">
                        {number}
                      </span>

                      {/* Card */}
                      <div className="flex gap-3 flex-1 bg-white rounded-[20px] p-4 md:p-6 ">
                        <div
                          className={`w-17.25 h-15.75 rounded-xl ${thumb.bg} shrink-0 flex items-center justify-center text-xl overflow-hidden`}
                        >
                          {thumb.emoji}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm md:text-[16px] font-semibold text-black mb-0.5">
                            {title}
                          </p>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            <span className="md:hidden">{mobileDesc}</span>
                            <span className="hidden md:inline">{desc}</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Dotted connector between cards, centered under number column */}
                    {idx < STEPS.length - 1 && (
                      <div className="ml-2.75">
                        <div
                          className="w-px"
                          style={{
                            background:
                              "repeating-linear-gradient(to bottom, #d1d5db 0px, #d1d5db 5px, transparent 5px, transparent 11px)",
                          }}
                        >
                          <div className="h-5 md:hidden" />
                          <div className="hidden md:block md:h-12.5" />
                        </div>
                      </div>
                    )}
                  </div>
                ),
              )}
            </div>
          </div>

          {/* ── Right column — Kitchen GIF ── */}
          <div className="order-first lg:order-0 lg:w-[60%] w-full flex items-center justify-center bg-[#FAFAFA]">
            <Image
              src="/OrderFromKitchen.gif"
              alt="Home kitchen illustration"
              width={900}
              height={840}
              className="w-full h-auto object-contain scale-[1.6] origin-center"
              style={{ clipPath: "inset(0 0 0 20%)" }}
              unoptimized
            />
          </div>
        </div>

        {/* Download buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-10 sm:mt-20 w-full">
          <button className="flex items-center justify-center gap-3 bg-[#209D01] text-white font-semibold px-6 py-4 rounded-full flex-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.15 1.26-2.13 3.75.03 2.99 2.63 3.99 2.66 4l.04.01c-.03.07-.42 1.44-1.32 2.86M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download for iOS
          </button>
          <button className="flex items-center justify-center gap-3 bg-gray-100 text-black font-semibold px-6 py-4 rounded-full flex-1">
            <Image
              src="/google-play.svg"
              alt="Google Play"
              width={18}
              height={18}
            />
            Download for Android
          </button>
        </div>
      </div>
    </section>
  );
}
