const SCREENS = [
  { label: "Browse Cooks", color: "bg-green-50", emoji: "🍳" },
  { label: "Order Meal", color: "bg-amber-50", emoji: "🛍️" },
  { label: "Track Delivery", color: "bg-blue-50", emoji: "📍" },
  { label: "Rate & Review", color: "bg-orange-50", emoji: "⭐" },
  { label: "Cook Dashboard", color: "bg-teal-50", emoji: "📊" },
];

export default function AppShowcaseSection() {
  return (
    <section className="bg-gray-900 py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <div className="flex items-center justify-center gap-1.5 mb-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-green-400" />
          ))}
        </div>
        <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Always more for less
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">Cooking in 3 days</h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          From sign-up to your first home-cooked meal in just 3 days. The simplest way
          to eat well in Lagos.
        </p>
      </div>

      <div className="flex gap-5 justify-center px-8 pb-4 flex-wrap md:flex-nowrap overflow-x-auto scrollbar-hide">
        {SCREENS.map((screen, i) => (
          <div
            key={screen.label}
            className="flex-shrink-0 w-44 bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 hover:-translate-y-2 transition-transform"
            style={{ height: i === 2 ? "420px" : "380px", marginTop: i === 2 ? "0" : "20px" }}
          >
            <div className="h-6 bg-gray-900 flex items-center justify-center">
              <div className="w-12 h-1.5 bg-gray-700 rounded-full" />
            </div>
            <div
              className={`${screen.color} mx-3 mt-2 rounded-xl flex items-center justify-center`}
              style={{ height: "200px" }}
            >
              <span className="text-6xl">{screen.emoji}</span>
            </div>
            <div className="p-3">
              <div className="h-2 bg-gray-700 rounded-full mb-2 w-3/4" />
              <div className="h-2 bg-gray-700 rounded-full mb-3 w-1/2" />
              <div className="h-8 bg-green-700 rounded-xl flex items-center justify-center">
                <span className="text-xs font-semibold text-green-100">{screen.label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
