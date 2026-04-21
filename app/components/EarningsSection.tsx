const COOKS = [
  { name: "Bisi Ayo", earnings: "₦180k/wk", color: "bg-amber-200" },
  { name: "Yinka Bello", earnings: "₦220k/wk", color: "bg-green-200" },
  { name: "Chiamaka Agbo", earnings: "₦195k/wk", color: "bg-orange-200" },
  { name: "Funke Ojo", earnings: "₦240k/wk", color: "bg-teal-200" },
];

export default function EarningsSection() {
  return (
    <section className="bg-white py-24" id="for-cooks">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-gray-400 text-lg mb-3 font-medium">You could make</p>
        <h2 className="text-6xl md:text-7xl font-bold text-green-600 mb-3 tracking-tight">
          ₦200,540
        </h2>
        <p className="text-2xl text-gray-900 font-semibold mb-6">every week</p>

        <div className="flex justify-center gap-1.5 mb-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-green-600" />
          ))}
        </div>

        <p className="text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed">
          Join hundreds of home cooks already earning consistently on GetAMeal. Turn
          your passion for cooking into a reliable income stream.
        </p>

        <button className="bg-green-600 text-white px-10 py-4 rounded-full text-base font-semibold hover:bg-green-700 transition-colors shadow-sm mb-16">
          Start Cooking Today →
        </button>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {COOKS.map((cook) => (
            <div key={cook.name} className="text-center">
              <div
                className={`w-20 h-20 ${cook.color} rounded-full mx-auto mb-3 flex items-center justify-center text-3xl`}
              >
                👩‍🍳
              </div>
              <p className="text-sm font-bold text-gray-900">{cook.name}</p>
              <p className="text-xs text-green-600 font-semibold mt-1">{cook.earnings}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
