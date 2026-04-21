const BENEFITS = [
  {
    tag: "For Eaters",
    title: "Saves You More Time",
    desc: "Stop spending hours in the kitchen or waiting in long restaurant queues. Pre-order your meals from trusted home cooks and get back to what matters most.",
    cta: "Start saving time",
    bg: "bg-white",
    accent: "bg-blue-50",
    emoji: "📱",
    imgLabel: "Meal Ordering App",
    items: [
      { name: "Jollof Rice & Chicken", price: "₦2,500", note: "Ready 1pm" },
      { name: "Egusi Soup & Eba", price: "₦2,200", note: "Ready 12pm" },
      { name: "Fried Rice & Turkey", price: "₦3,000", note: "Ready 2pm" },
    ],
  },
  {
    tag: "For Eaters",
    title: "Saves You More Money",
    desc: "Home-cooked meals cost significantly less than restaurant food. Get authentic, nutritious Nigerian meals without paying the premium restaurant markup.",
    cta: "Save more today",
    bg: "bg-gray-50",
    accent: "bg-orange-50",
    emoji: "🛒",
    imgLabel: "Fresh Groceries",
    items: [
      { name: "Ofe Onugbu Soup", price: "₦1,800", note: "Ready 11am" },
      { name: "Banga Rice", price: "₦2,000", note: "Ready 1pm" },
      { name: "Afang & Fufu", price: "₦2,400", note: "Ready 12pm" },
    ],
  },
  {
    tag: "For Cooks",
    title: "Earn More Predictably",
    desc: "Are you a talented home cook? GetAMeal gives you a steady, predictable stream of pre-orders so you can plan your income and grow your home kitchen business.",
    cta: "Become a cook",
    bg: "bg-white",
    accent: "bg-green-50",
    emoji: "👨‍🍳",
    imgLabel: "Professional Cook",
    items: [
      { name: "Weekly Orders: 42", price: "↑18%", note: "vs last week" },
      { name: "This Week Earnings", price: "₦156k", note: "Trending up" },
      { name: "5-Star Reviews", price: "97%", note: "Satisfaction" },
    ],
  },
];

export default function BenefitsSection() {
  return (
    <section id="for-customers">
      {BENEFITS.map((b, i) => (
        <div key={b.title} className={`${b.bg} py-20`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-16`}
            >
              {/* Text side */}
              <div className="flex-1 max-w-lg">
                <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wide">
                  {b.tag}
                </span>
                <h2 className="text-4xl font-bold text-gray-900 mb-5 leading-tight">
                  {b.title}
                </h2>
                <p className="text-gray-500 text-lg mb-8 leading-relaxed">{b.desc}</p>

                <div className="space-y-3 mb-8">
                  {b.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between p-3.5 bg-white rounded-2xl border border-gray-100 shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 ${b.accent} rounded-xl flex items-center justify-center text-base`}
                        >
                          🍛
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 leading-tight">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-400">{item.note}</p>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-green-600">{item.price}</span>
                    </div>
                  ))}
                </div>

                <button className="bg-green-600 text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors shadow-sm">
                  {b.cta} →
                </button>
              </div>

              {/* Visual side */}
              <div className="flex-1 flex items-center justify-center">
                <div
                  className={`relative w-72 h-72 lg:w-80 lg:h-80 ${b.accent} rounded-3xl flex items-center justify-center shadow-sm overflow-hidden`}
                >
                  <span className="text-[120px]">{b.emoji}</span>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-xl p-3 shadow-sm">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                      {b.imgLabel}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
