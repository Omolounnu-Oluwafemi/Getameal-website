export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Copyright */}
        <p className="text-sm text-gray-600">© 2026 Getameal, LTD.</p>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {/* Facebook */}
          <a href="#" aria-label="Facebook">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="6" fill="#111827" />
              <path
                d="M17.5 10H19V7.1A23.4 23.4 0 0016.7 7c-2.3 0-3.9 1.4-3.9 4v2.3H10V16h2.8v8h3.2v-8H18l.4-2.7h-2.4V11.3c0-.8.2-1.3 1.5-1.3z"
                fill="white"
              />
            </svg>
          </a>

          {/* TikTok */}
          <a href="#" aria-label="TikTok">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="6" fill="#111827" />
              <path
                d="M21 8h-2.7a4.3 4.3 0 01-4.3 4.3v2.7a7 7 0 002.7-.55V21a3.5 3.5 0 11-3.5-3.5v-2.75A6.25 6.25 0 1021 21V13.5a8.95 8.95 0 005 1.5v-2.7A5.3 5.3 0 0121 8z"
                fill="white"
              />
            </svg>
          </a>

          {/* X / Twitter */}
          <a href="#" aria-label="X">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="6" fill="#111827" />
              <path
                d="M17.75 14.94L22.5 9H21.3l-4.12 4.79L13.6 9H9l5 7.07L9 23h1.2l4.37-5.08L18.4 23H23l-5.25-8.06zm-1.55 1.8l-.51-.72-4.02-5.75h1.73l3.24 4.64.5.72 4.22 6.04h-1.73l-3.43-4.93z"
                fill="white"
              />
            </svg>
          </a>

          {/* Instagram */}
          <a href="#" aria-label="Instagram">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="6" fill="#111827" />
              <rect x="9" y="9" width="14" height="14" rx="4" stroke="white" strokeWidth="1.8" fill="none" />
              <circle cx="16" cy="16" r="3.5" stroke="white" strokeWidth="1.8" fill="none" />
              <circle cx="20.5" cy="11.5" r="1" fill="white" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
