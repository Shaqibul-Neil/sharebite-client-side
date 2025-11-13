import { FiMail } from "react-icons/fi";
import food from "../../assets/food.png";

const Newsletter = () => {
  return (
    <div className="w-full font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        {/* Newsletter Box */}
        <div className="relative p-6 md:p-16 rounded-xl shadow-2xl bg-amber-600">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-amber-500/20"></div>
          <div>
            <div className="relative z-10 lg:pl-0 text-white mt-16 md:mt-0">
              <h2 className="text-xl md:text-3xl font-bold mb-2 leading-snug">
                Subscribe to our newsletter to get updates to our latest
                collections
              </h2>
              <p className="text-sm text-white/90 mb-6">
                Get <strong>20% off</strong> on your first order by subscribing
              </p>

              {/* Subscription Form */}
              <div className="flex w-full flex-col md:flex-row max-w-sm gap-2 md:gap-0">
                <div className="relative w-full">
                  <FiMail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70"
                    size={18}
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full py-3 pl-10 pr-4 md:rounded-l-3xl md:rounded-none rounded-3xl text-sm text-white focus:ring-amber-900 focus:border-amber-900 border shadow-sm focus:outline-none"
                  />
                </div>
                <button className="bg-white text-amber-600 font-semibold py-3 px-6 md:rounded-r-3xl rounded-3xl md:rounded-none text-sm hover:bg-gray-100 transition-colors shadow-sm">
                  Subscribe
                </button>
              </div>

              {/* Privacy Text */}
              <p className="mt-4 text-xs text-white/80">
                You can unsubscribe anytime.
                <br />
              </p>
            </div>
            <div
              className="absolute w-40 md:w-44 lg:w-48
                -top-16 md:-top-10 lg:-top-20
                right-0 md:-right-10 lg:-right-10"
            >
              <img src={food} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
