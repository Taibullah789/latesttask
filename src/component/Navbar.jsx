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
      <div className="bg-transparent text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <FaPhoneAlt /> +92 321 410 6223
            </span>
            <span className="flex items-center gap-2">
              <FaEnvelope /> info@pakistantravelplaces.com
            </span>
          </div>

          <div className="flex items-center gap-4">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <span className="flex items-center gap-2 cursor-pointer">
              <FaLock /> Login
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="mt-4 text-white">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Pakistan Travel</h1>

          <ul className="flex gap-8 font-medium">
            <li>Home</li>
            <li>Destinations</li>
            <li>Packages</li>
            <li>Honeymoon Tours</li>
            <li>Blog</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
