import { Link } from "react-router";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { HeartHandshake, Mail, Phone } from "lucide-react";
import Container from "../container/Container";

const Footer = () => {
  return (
    <>
      {/* 2. Footer Section */}
      <footer className="mt-10 pt-8 lg:pt-16 pb-4 bg-linear-to-b from-amber-900 to-black text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 border-b border-white/20 pb-8">
            {/* Company Info */}
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center mb-4">
                <HeartHandshake className="text-amber-500 mr-2" size={28} />
                <span className="text-white/90 font-extrabold leading-tight text-2xl">
                  Share
                  <span className="text-amber-500 top-1 relative">Bite</span>
                </span>
              </div>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">
                Reducing food waste, one bite at a time. Join us to make a
                difference.
              </p>

              {/* Social Icons */}
              <div className="flex">
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-white/30 text-amber-400 hover:text-white hover:bg-amber-500 transition-all duration-300 mr-3"
                >
                  <FaFacebookF size={14} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-white/30 text-amber-400 hover:text-white hover:bg-amber-500 transition-all duration-300 mr-3"
                >
                  <FaXTwitter size={14} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-white/30 text-amber-400 hover:text-white hover:bg-amber-500 transition-all duration-300 mr-3"
                >
                  <TiSocialInstagram size={14} />
                </a>
              </div>
            </div>
            <div className="md:col-span-3 md:grid md:grid-cols-3 space-y-4 md:space-y-0">
              {/* Company Links */}
              <div className="col-span-1">
                <h3 className="text-lg font-semibold mb-4 text-white/90">
                  Company
                </h3>
                <Link
                  to={"/about-us"}
                  className="text-sm block mb-2 text-white/70 hover:text-amber-400 transition-colors"
                >
                  About Us
                </Link>
                <Link
                  to={"/contact"}
                  className="text-sm block mb-2 text-white/70 hover:text-amber-400 transition-colors"
                >
                  Contact
                </Link>
                <Link
                  href="#"
                  className="text-sm block mb-2 text-white/70 hover:text-amber-400 transition-colors"
                >
                  Terms & Conditions
                </Link>
                <a
                  href="#"
                  className="text-sm block mb-2 text-white/70 hover:text-amber-400 transition-colors"
                >
                  Testimonial
                </a>
              </div>

              {/* Support Links */}
              <div className="col-span-1">
                <h3 className="text-lg font-semibold mb-4 text-white/90">
                  Support
                </h3>
                <a
                  href="#"
                  className="text-sm block mb-2 text-white/70 hover:text-amber-400 transition-colors"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="text-sm block mb-2 text-white/70 hover:text-amber-400 transition-colors"
                >
                  Tweet @ Us
                </a>
                <a
                  href="#"
                  className="text-sm block mb-2 text-white/70 hover:text-amber-400 transition-colors"
                >
                  Feedback
                </a>
              </div>

              {/* Contact Us */}
              <div className="col-span-1">
                <h3 className="text-lg font-semibold mb-4 text-white/90">
                  Contact Us
                </h3>
                <div className="flex items-center mb-2">
                  <Phone size={18} className="mr-3 text-amber-400" />
                  <span className="text-sm text-white/70">98765 4321 54</span>
                </div>
                <div className="flex items-center mb-2">
                  <Mail size={18} className="mr-3 text-amber-400" />
                  <span className="text-sm text-white/70">
                    support@mail.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4">
            <p className="text-xs text-white/50">
              © 2025 - All rights reserved by Shaqibul Islam
            </p>
            <div className="flex space-x-4 mt-2 sm:mt-0">
              <a
                href="#"
                className="text-xs text-white/50 hover:text-amber-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-white/50 hover:text-amber-400 transition-colors"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="text-xs text-white/50 hover:text-amber-400 transition-colors"
              >
                Legal
              </a>
              <a
                href="#"
                className="text-xs text-white/50 hover:text-amber-400 transition-colors"
              >
                Site Map
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
