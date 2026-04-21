const LINKS: Record<string, string[]> = {
  Company: ["About Us", "Careers", "Press", "Blog", "Events"],
  "For Eaters": ["Browse Cooks", "How it Works", "Pricing", "Reviews", "Refer a Friend"],
  "For Cooks": ["Join as a Cook", "Cook Dashboard", "Payouts", "Growth Tools", "Support"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Refund Policy"],
};

const FOOD_EMOJIS = ["🍲", "👩‍🍳", "🥗", "🍜", "👨‍🍳", "🥘"];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand + image grid */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-9 h-9 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3C9.5 3 7 5 7 8c0 2 1 3.5 2.5 4.5V20h5v-7.5C16 11.5 17 10 17 8c0-3-2.5-5-5-5z"
                  fill="white"
                  opacity="0.9"
                />
                <circle cx="12" cy="8" r="2" fill="#4ade80" />
              </svg>
            </div>
            <span className="font-bold text-xl text-white tracking-tight">
              <span className="text-green-400">G</span>etameal
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
            Taste. Sip. Play.
            <br />
            Connect.
          </h2>

          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto mb-16">
            {FOOD_EMOJIS.map((emoji, i) => (
              <div
                key={i}
                className="h-28 bg-gray-800 rounded-2xl flex items-center justify-center text-4xl hover:bg-gray-700 transition-colors"
              >
                {emoji}
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14 border-t border-gray-800 pt-12 text-sm">
          {Object.entries(LINKS).map(([category, items]) => (
            <div key={category}>
              <p className="font-bold text-white mb-5">{category}</p>
              {items.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="block text-gray-400 hover:text-white mb-2.5 transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Getameal, LTD. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((l) => (
              <a key={l} href="#" className="hover:text-white transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
