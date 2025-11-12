import { Link } from "react-router";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { HeartHandshake } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden text-white bg-linear-to-b from-amber-900 to-black">
      {/* Footer Content */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-16 relative z-10 gap-6">
        {/* Logo + Title */}
        <Link to={"/"} className="flex items-center gap-2 justify-center">
          <HeartHandshake className="text-warning" size={36} />

          <span className="text-white/90 lg:text-4xl text-2xl font-extrabold leading-tight">
            Share
            <span className="text-amber-600 top-1 relative">Bite</span>
          </span>
        </Link>

        {/* Subtitle */}
        <p className="text-gray-300 max-w-md text-sm md:text-base">
          Reducing food waste, one bite at a time.
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6">
          <Link
            to={"/"}
            className="hover:text-warning transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to={"/about-us"}
            className="hover:text-warning transition-all duration-300"
          >
            About
          </Link>
          <Link
            to={"/terms-conditions"}
            className="hover:text-warning transition-all duration-300"
          >
            Terms & Conditions
          </Link>
          <Link
            to={"/contact"}
            className="hover:text-warning transition-all duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-1">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warning hover:scale-110 transition-transform"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warning hover:scale-110 transition-transform"
          >
            <TiSocialInstagram size={28} />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warning hover:scale-110 transition-transform"
          >
            <FaXTwitter size={24} />
          </a>
        </div>

        {/* Copyright */}
        <aside className="mt-6 text-gray-400 text-sm">
          © {new Date().getFullYear()} - All rights reserved by Shaqibul Islam
          Neil
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
