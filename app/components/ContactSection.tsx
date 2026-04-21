import Image from "next/image";

const CONTACT_OPTIONS = [
  {
    label: "Send email",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M22 2L11 13"
          stroke="#16a34a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 2L15 22L11 13L2 9L22 2Z"
          stroke="#16a34a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Whatsapp",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
          fill="#16a34a"
        />
        <path
          d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.95-1.418A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"
          stroke="#16a34a"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
  },
  {
    label: "Call Us",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
          stroke="#16a34a"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const inputClass =
  "w-full px-5 py-4 rounded-2xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white";

export default function ContactSection() {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          {/* Left — form */}
          <div className="flex-1 w-full max-w-lg">
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 leading-tight mb-5">
              We&apos;d love to hear
              <br />
              from YOU
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
              Whether you&apos;re a customer, a cook, a partner, or just curious
              about Getameal — our team is here to help.
            </p>

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your name"
                className={inputClass}
              />
              <input
                type="tel"
                placeholder="Enter phone number"
                className={inputClass}
              />
              <input
                type="email"
                placeholder="Email address"
                className={inputClass}
              />
              <textarea
                placeholder="Enter your message"
                rows={5}
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-full text-base transition-colors"
              >
                Send a message
              </button>
            </form>

            {/* Contact options */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {CONTACT_OPTIONS.map((opt) => (
                <button
                  key={opt.label}
                  className="flex flex-col items-center gap-2 py-5 rounded-2xl border border-gray-200 hover:border-green-200 hover:bg-green-50 transition-colors"
                >
                  {opt.icon}
                  <span className="text-xs font-semibold text-gray-800">
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{ flex: "1.4", minHeight: "500px" }}
          >
            <Image
              src="/people2.png"
              alt="Cook preparing meals"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
