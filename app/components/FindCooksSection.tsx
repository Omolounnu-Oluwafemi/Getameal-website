export default function FindCooksSection() {
  return (
    <section className="relative bg-gray-900 py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
        <p className="text-green-400 font-semibold mb-4 tracking-wide">
          Find Cooks near you
        </p>
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
          To Cook For YOU
        </h2>
        <div className="flex justify-center gap-1.5 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-green-400" />
          ))}
        </div>
        <p className="text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed">
          Browse talented home cooks in Lekki, Victoria Island, Ikeja, Surulere, and
          all across Lagos — ready to prepare your favorite meals.
        </p>
        <button className="bg-green-600 text-white px-10 py-4 rounded-full text-base font-semibold hover:bg-green-700 transition-colors shadow-lg">
          Find Cooks Near Me →
        </button>
      </div>
    </section>
  );
}
