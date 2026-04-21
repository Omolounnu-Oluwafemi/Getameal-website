const COOKS = [
  { name: "Chef Ada Okonkwo", specialty: "Jollof Rice & Stew", color: "bg-amber-200" },
  { name: "Mama Tola Badmus", specialty: "Egusi Soup & Pounded Yam", color: "bg-orange-200" },
  { name: "Mr. Emeka Nwosu", specialty: "Pepper Soup & Ukwa", color: "bg-green-200" },
  { name: "Aunty Ngozi Eze", specialty: "Afang Soup & Garri", color: "bg-teal-200" },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Find a Cook",
    desc: "Browse verified home cooks in your neighborhood. Filter by cuisine, price, or dietary needs.",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Pre-order Your Meal",
    desc: "Choose your meal, set your delivery time, and pay securely. Your cook prepares everything fresh.",
    icon: "📋",
  },
  {
    step: "03",
    title: "Enjoy Delivery",
    desc: "Your hot, home-cooked meal is delivered right to your door at the time you chose.",
    icon: "🚀",
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-28">
          <div className="flex-1 max-w-lg">
            <div className="flex items-center gap-2 mb-6">
              {["bg-green-600", "bg-amber-400", "bg-orange-400"].map((c, i) => (
                <div key={i} className={`w-5 h-5 rounded-full ${c}`} />
              ))}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Order from the Kitchen you Trust
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Every cook on GetAMeal is personally verified, food-safety certified, and
              passionate about authentic Nigerian home cooking. You know exactly who&apos;s
              making your food.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {COOKS.map((cook) => (
                <div
                  key={cook.name}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div
                    className={`w-11 h-11 rounded-full ${cook.color} flex-shrink-0 flex items-center justify-center text-lg`}
                  >
                    👩‍🍳
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 leading-tight">
                      {cook.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{cook.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-amber-50 rounded-3xl" />
              <div className="absolute inset-4 bg-amber-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-3">🏠</div>
                  <div className="text-2xl">🍳</div>
                  <p className="text-xs text-amber-700 font-semibold mt-2">Home Kitchen</p>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                ✓ Verified
              </div>
              <div className="absolute -bottom-3 -left-3 bg-white text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md border border-gray-100">
                ⭐ 4.9 Rating
              </div>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div>
          <div className="flex items-center justify-center gap-1.5 mb-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-green-600" />
            ))}
          </div>
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {HOW_IT_WORKS.map(({ step, title, desc, icon }) => (
              <div key={step} className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-3xl">
                    {icon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-green-600 text-white text-xs font-bold flex items-center justify-center">
                    {step.slice(1)}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
