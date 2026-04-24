import Image from "next/image";

const STEPS = [
  {
    number: "1",
    title: "Explore home cooks near you",
    desc: "Find verified cook that will cook what you want to eat for the week. It's made fresh for you.",
    thumb: { bg: "bg-amber-100", emoji: "👨‍🍳" },
    align: "items-start",
  },
  {
    number: "2",
    title: "Pre-Order the portion you need",
    desc: "Order 5 Litres of egusi, 8 Litres of Jollof rice with protein or any meal of your choice and enjoy for the week.",
    thumb: { bg: "bg-orange-100", emoji: "🍛" },
    align: "items-center",
  },
  {
    number: "3",
    title: "Pick up your order or get it delivered",
    desc: "Once the cook is done cooking your meal, you either get it delivered to you or you pick it up yourself no stories.",
    thumb: { bg: "bg-red-100", emoji: "🛵" },
    align: "items-end",
  },
];

export default function TrustSection() {
  return (
    <section
      className="py-20 md:py-40 bg-[#FAFAFA] overflow-hidden"
      id="how-it-works"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* ── Left column ── */}
          <div className="lg:w-[50%] w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FAFAFA] border border-gray-200 rounded-full px-6 py-4 mb-14 shadow-sm">
              <Image
                src="/greenLogo.svg"
                alt=""
                width={18}
                height={18}
                className="shrink-0"
              />
              <span className="text-[16px] font-500 text-gray-700">
                For Customers
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Order from the
              <br />
              Kitchen you Trust
            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 leading-relaxed mb-14 text-[16px]">
              Every cook share what they are cooking each day, all you need to
              do is find who is cooking what you want to eat and pre-order to
              save more time and money.
            </p>

            {/* Steps */}
            <div className="flex flex-col">
              {STEPS.map(({ number, title, desc, thumb, align }, idx) => (
                <div key={number}>
                  {/* Step row */}
                  <div className={`flex ${align} gap-6`}>
                    {/* Number fixed-width so connector aligns beneath it */}
                    <span className="text-sm font-bold text-black w-6 text-center">
                      {number}
                    </span>

                    {/* Card */}
                    <div className="flex gap-3 flex-1">
                      <div
                        className={`w-17.25 h-15.75 rounded-xl ${thumb.bg} shrink-0 flex items-center justify-center text-xl overflow-hidden`}
                      >
                        {thumb.emoji}
                      </div>
                      <div className="flex-1">
                        <p className="text-[16px] font-semibold text-black mb-0.5">
                          {title}
                        </p>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {desc}
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
                          height: "50px",
                          background:
                            "repeating-linear-gradient(to bottom, #d1d5db 0px, #d1d5db 5px, transparent 5px, transparent 11px)",
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column — Kitchen GIF ── */}
          {/* overflow-hidden clips the built-in padding in the GIF frame */}
          <div className="order-first lg:order-none lg:w-[60%] w-full flex items-center justify-center bg-[#FAFAFA]">
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
      </div>
    </section>
  );
}
