import React from "react";
import postFoodImg from "../../assets/post.jpg";
import findFoodImg from "../../assets/search.jpg";
import collectFoodImg from "../../assets/delivery.jpg";

const HowItWorks = () => {
  return (
    <section className="pb-24">
      {/* Section Title */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-accent leading-tight text-center">
          How It <span className="text-warning">Works</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Follow these three simple steps to share or receive food through
          ShareBite.
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-col lg:gap-y-10 md:gap-y-20 gap-y-12 relative">
        {/* Step 1 */}
        <div
          className="flex flex-col md:flex-row items-center md:items-start lg:ml-16 transition-all duration-300 lg:w-1/2 rounded-md relative z-50 bg-amber-100 p-3"
          data-aos="fade-up"
        >
          <div className="absolute hidden lg:block -right-36 top-2 w-64 h-96 border-t-[3px] border-dashed border-accent rounded-full opacity-40 z-10 rotate-45"></div>
          <div className="w-24 h-24 shrink-0 relative mb-6 md:mb-0">
            <div className="absolute -top-5 -left-5 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md bg-warning">
              1
            </div>
            <img
              src={postFoodImg}
              alt="Post Food"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="md:ml-4 text-center md:text-left max-w-md">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-warning">
              Post Food
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Share your leftover meals easily by posting them. Add details,
              pickup location, and expiry date.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div
          className="flex flex-col md:flex-row items-center lg:ml-64 md:ml-32 transition-all duration-300 lg:w-1/2 rounded-md bg-amber-100 p-3"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="absolute hidden lg:block -right-36 top-4 w-64 h-96 border-t-[3px] border-dashed border-accent rounded-full opacity-40 z-10 rotate-45"></div>
          <div className="w-24 h-24 shrink-0 relative mb-6 md:mb-0">
            <div className="absolute -top-5 -left-5 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md bg-warning">
              2
            </div>
            <img
              src={findFoodImg}
              alt="Find Food"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="md:ml-4 text-center md:text-left max-w-md">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-warning">
              Find Food
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Browse available food near you and connect with donors. It’s
              quick, transparent, and free.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div
          className="flex flex-col md:flex-row items-center lg:ml-[440px] md:ml-64 transition-all duration-300 lg:w-1/2 rounded-md bg-amber-100 p-3"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="w-24 h-24 shrink-0 relative mb-6 md:mb-0">
            <div className="absolute -top-5 -left-5 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md bg-warning">
              3
            </div>
            <img
              src={collectFoodImg}
              alt="Collect Food"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="md:ml-4 text-center md:text-left max-w-md">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-warning">
              Collect Food
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Head to the pickup point, collect your food, and enjoy — while
              reducing waste and helping others.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
