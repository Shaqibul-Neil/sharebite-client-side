import { FaEnvelopeOpenText, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import SecondaryButton from "../components/button/SecondaryButton";
import Container from "../components/container/Container";

const Contact = () => {
  return (
    <Container>
      <title>ShareBite - Contact</title>
      <div className="max-w-6xl mx-auto py-16 space-y-12">
        {/* Heading */}
        <div className="flex items-center flex-col lg:flex-row justify-center gap-3">
          <FaEnvelopeOpenText className="text-warning text-3xl" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-accent text-center">
            Contact Us
          </h1>
        </div>

        {/* Contact Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Form */}
          <div className="lg:w-7/12 bg-white md:p-8 p-4 sm:p-12 rounded-xl shadow-xl space-y-6">
            <h2 className="text-2xl font-bold text-accent mb-2">
              Send us a message
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Have a question, want to donate, or need guidance on requesting
              food? Fill out the form below and our ShareBite team will get back
              to you promptly.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 border border-gray-300 rounded-3xl focus:ring-amber-600 focus:border-amber-600 focus:outline-none focus:ring-1"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 border border-gray-300 rounded-3xl focus:ring-amber-600 focus:border-amber-600 focus:outline-none focus:ring-1"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-3xl focus:ring-amber-600 focus:border-amber-600 focus:outline-none focus:ring-1"
                />

                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full p-3 border border-gray-300 rounded-3xl focus:ring-amber-600 focus:border-amber-600 focus:outline-none focus:ring-1"
                />
              </div>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-3xl focus:ring-amber-600 focus:border-amber-600 focus:outline-none focus:ring-1"
              />
              <div className="text-right">
                <SecondaryButton
                  type="submit"
                  className={
                    "md:w-48 w-full bg-warning hover:bg-warning border-warning py-3"
                  }
                  hoverTextColor="group-hover:text-warning"
                >
                  Send Message
                </SecondaryButton>
              </div>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="lg:w-5/12 bg-accent p-8 sm:p-12 text-white rounded-xl shadow-xl flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">We're here to help!</h3>

              <div className="flex items-center gap-4 bg-warning bg-opacity-20 p-4 rounded-3xl">
                <FiPhone className="text-3xl" />
                <div>
                  <p className="font-semibold text-lg">Hotline</p>
                  <p className="text-sm">+880 1234 567 890</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-warning bg-opacity-20 p-4 rounded-3xl">
                <BsWhatsapp className="text-3xl" />
                <div>
                  <p className="font-semibold text-lg">WhatsApp</p>
                  <p className="text-sm">+880 1987 654 321</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-warning bg-opacity-20 p-4 rounded-3xl">
                <FiMail className="text-3xl" />
                <div>
                  <p className="font-semibold text-lg">Email</p>
                  <p className="text-sm break-all">support@sharebite.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="font-semibold mb-4 text-center lg:text-left">
                Connect with us
              </p>
              <div className="border-t border-gray-300 mb-4"></div>
              <div className="flex space-x-6 justify-center lg:justify-start text-xl">
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-warning transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-warning transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-warning transition"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
