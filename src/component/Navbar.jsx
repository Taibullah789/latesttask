import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLock,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="absolute w-full z-50">
      {/* Top Bar */}
      <div className="bg-transparent text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-2 gap-2 sm:gap-0">
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-6">
            <span className="flex items-center gap-2">
              <FaPhoneAlt /> +92 321 410 6223
            </span>
            <span className="flex items-center gap-2">
              <FaEnvelope /> <span className="hidden md:inline">info@pakistantravelplaces.com</span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <span className="flex items-center gap-2 cursor-pointer">
              <FaLock /> <span className="hidden sm:inline">Login</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="mt-2 sm:mt-4 text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <h1 className="text-lg sm:text-xl font-bold">Pakistan Travel</h1>

          <ul className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base font-medium">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Destinations</li>
            <li className="cursor-pointer">Packages</li>
            <li className="cursor-pointer hidden md:inline">Honeymoon Tours</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer hidden sm:inline">About Us</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
