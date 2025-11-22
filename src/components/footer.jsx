import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#FF7A00] to-[#FF4D88] text-white pt-32 pb-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24"
        >
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"
            fill="url(#waveGradient)"
          />
          <defs>
            <linearGradient
              id="waveGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#C084FC" />
              <stop offset="100%" stopColor="#F472B6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-0">
        <div>
          <h2 className="text-2xl font-bold mb-2">Wanderlust</h2>
          <p className="text-sm mb-4">
            Your trusted partner in creating unforgettable travel experiences
            around the globe.
          </p>
          <div className="flex gap-3">
            {["facebook", "instagram", "twitter", "linkedin"].map((icon) => (
              <iconify-icon
                key={icon}
                icon={`mdi:${icon}`}
                className="text-white text-xl hover:text-gray-200 transition"
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>Destinations</li>
            <li>Travel Packages</li>
            <li>Custom Tours</li>
            <li>Special Offers</li>
            <li>Travel Blog</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="../about">About Us</Link>
            </li>
            <li>
              <Link to="../contact">Contact Us</Link>
            </li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Stay Connected</h3>
          <ul className="space-y-2 text-sm">
            <li>123 Travel Street, Adventure City, AC 12345</li>
            <li>+1 (555) 123-4567</li>
            <li>hello@wanderlust.com</li>
          </ul>
          <div className="mt-4 flex items-center border border-white/40 rounded-full px-3 py-1">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent text-white placeholder-white text-sm flex-1 outline-none"
            />
            <iconify-icon icon="mdi:send" className="text-white text-lg" />
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/30 pt-4 px-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4 relative z-0">
        <div className="flex gap-4">
          <span>Sitemap</span>
          <span>Accessibility</span>
          <span>Careers</span>
        </div>
        <div className="text-white/80">
          © 2025 Wanderlust Travel Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
