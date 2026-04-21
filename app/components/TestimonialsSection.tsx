const REVIEWS = [
  {
    name: "Rotimi Benson",
    role: "Software Engineer",
    text: "GetAMeal completely transformed how I eat. I get better, fresher home-cooked meals at half the price of restaurants. The cooks are amazing and every meal feels just like home.",
    avatar: "bg-orange-300",
    initials: "RB",
  },
  {
    name: "Adaeze Okafor",
    role: "Marketing Manager",
    text: "I've been using GetAMeal for 3 months. The food is consistently delicious and I love knowing exactly who prepared my meal. Highly recommended for busy Lagos professionals.",
    avatar: "bg-teal-300",
    initials: "AO",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          What People Are Saying
        </h2>
        <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">
          Thousands of Lagosians are already enjoying home-cooked meals every week.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Featured photo card */}
          <div className="bg-orange-400 rounded-3xl overflow-hidden h-96 flex flex-col justify-end p-6 relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="text-[200px] select-none">👤</span>
            </div>
            <div className="absolute top-6 left-6 bg-black text-white text-sm font-bold px-4 py-2 rounded-xl">
              ROBEX
            </div>
            <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl p-4">
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-yellow-300 text-lg">★</span>
                ))}
              </div>
              <p className="text-white text-sm font-medium">Verified GetAMeal Customer</p>
            </div>
          </div>

          {/* Written reviews */}
          <div className="space-y-6">
            {REVIEWS.map((review) => (
              <div
                key={review.name}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-5 leading-relaxed text-sm italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${review.avatar} flex items-center justify-center text-xs font-bold text-white`}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.role}, Lagos</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
