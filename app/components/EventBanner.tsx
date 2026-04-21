export default function EventBanner() {
  return (
    <section className="relative bg-black text-white py-28 px-4 overflow-hidden" id="events">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, #14532d 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, #14532d 0%, transparent 60%)",
        }}
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-green-400 text-base font-semibold mb-5 tracking-wide">
          Taste What&apos;s Coming In Lagos.
        </p>
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-10">
          Taste. Sip. Play. Connect.
        </h2>
        <button className="bg-green-600 text-white px-10 py-4 rounded-full text-base font-semibold hover:bg-green-700 transition-colors shadow-lg">
          Reserve a Spot →
        </button>
      </div>
    </section>
  );
}
