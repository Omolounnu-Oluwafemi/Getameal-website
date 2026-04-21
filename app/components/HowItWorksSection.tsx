export default function HowItWorksSection() {
  return (
    <section className="bg-gray-50 py-20 text-center">
      <div className="max-w-2xl mx-auto px-4">

        {/* Avatar stack + social proof */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="flex -space-x-3">
            {[
              { bg: "bg-amber-400", initials: "A" },
              { bg: "bg-rose-400", initials: "B" },
              { bg: "bg-blue-400", initials: "C" },
              { bg: "bg-teal-400", initials: "D" },
            ].map((a, i) => (
              <div
                key={i}
                className={`w-11 h-11 rounded-full ${a.bg} border-[3px] border-gray-50 flex items-center justify-center text-sm font-bold text-white`}
              >
                {a.initials}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 font-medium">
            Over 500+ users already joined
          </p>
        </div>

        {/* Heading */}
        <h2 className="text-6xl sm:text-7xl font-black text-gray-900 mb-5">
          How it works
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-base leading-relaxed">
          Getameal helps you order fresh home-cooked meals in bulk from trusted
          cooks near you so you don&apos;t have to cook or order food every day.
        </p>

      </div>
    </section>
  );
}
