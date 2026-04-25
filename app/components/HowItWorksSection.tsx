import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <section className="bg-gray-50 sm:py-20 text-center" id="how-it-works">
      <div className="max-w-3xl mx-auto px-4">
        {/* Avatar stack + social proof */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="flex -space-x-3">
            {[
              "/joined1.png",
              "/joined2.png",
              "/joined3.png",
              "/joined4.png",
            ].map((src, i) => (
              <div
                key={i}
                className="w-11 h-11 rounded-full border-2 border-gray-50 overflow-hidden"
              >
                <Image
                  src={src}
                  alt=""
                  width={40}
                  height={40}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ))}
          </div>
          <p className="text-sm sm:text-[16px] text-black font-medium">
            Over 500+ users already joined
          </p>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-[64px] font-black text-gray-900">
          How it works
        </h2>

        {/* Subtitle */}
        <p className="text-[#797979] text-[14px] sm:text-[18px] font-light leading-relaxed">
          Getameal helps you order fresh home-cooked meals in bulk from trusted
          cooks near you so you don&apos;t have to cook or order food every day.
        </p>
      </div>
    </section>
  );
}
