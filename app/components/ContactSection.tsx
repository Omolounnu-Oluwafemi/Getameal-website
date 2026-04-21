export default function ContactSection() {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Form */}
          <div className="flex-1 max-w-md w-full">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              We&apos;d love to hear from YOU
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Have questions, feedback, or want to partner with us? Drop us a message
              and we&apos;ll get back to you within 24 hours.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="tel"
                placeholder="Phone number (optional)"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-500">
                <option value="">What can we help with?</option>
                <option>I want to order meals</option>
                <option>I want to become a cook</option>
                <option>Partnership inquiry</option>
                <option>Press / Media</option>
                <option>Technical support</option>
              </select>
              <textarea
                placeholder="Your message..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3.5 rounded-xl text-sm font-semibold hover:bg-green-700 transition-colors"
              >
                Send Message →
              </button>
            </form>
          </div>

          {/* Image collage */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 h-52 bg-amber-100 rounded-3xl flex items-center justify-center overflow-hidden relative">
                <span className="text-[100px]">🍲</span>
                <div className="absolute inset-0 bg-gradient-to-t from-amber-200/40 to-transparent" />
              </div>
              <div className="h-44 bg-green-100 rounded-3xl flex items-center justify-center">
                <span className="text-7xl">👨‍🍳</span>
              </div>
              <div className="h-44 bg-orange-100 rounded-3xl flex items-center justify-center">
                <span className="text-7xl">👩‍🍳</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
