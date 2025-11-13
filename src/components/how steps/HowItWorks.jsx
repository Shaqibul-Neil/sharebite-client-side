import postFoodImg from "../../assets/post.jpg";
import findFoodImg from "../../assets/search.jpg";
import collectFoodImg from "../../assets/delivery.jpg";
import Reveal, { Slide } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import SvgArrow from "../others/SvgArrow";

// 1. Keyframes define
const bounceSlideLeft = keyframes`
 0% {
    opacity: 0;
    transform: translateX(-300px);
  }
  60% {
    opacity: 1;
    transform: translateX(25px);
  }
  80% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
`;
const bounceSlideRight = keyframes`
 0% {
    opacity: 0;
    transform: translateX(300px);
  }
  60% {
    opacity: 1;
    transform: translateX(-25px);
  }
  80% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
`;
const HowItWorks = () => {
  return (
    <section>
      {/* Section Title */}
      <div className="max-w-6xl mx-auto text-center mb-16 space-y-4">
        <Slide direction="up" triggerOnce>
          <p className="bg-orange-100 text-warning text-xs font-semibold px-3 py-1 rounded-full text-center uppercase tracking-wider w-36 mx-auto">
            Getting Started
          </p>
        </Slide>

        <Slide direction="up" triggerOnce>
          <h2 className="text-3xl md:text-5xl font-extrabold text-accent leading-tight text-center">
            How It <span className="text-warning">Works</span>
          </h2>
        </Slide>
        <Slide direction="down" triggerOnce>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Follow these three simple steps to share or receive food through
            ShareBite.
          </p>
        </Slide>
      </div>

      {/* Steps */}
      <div className="flex flex-col md:gap-y-10 gap-y-12 relative">
        {/* Step 1 */}
        <Reveal keyframes={bounceSlideLeft} triggerOnce delay={200}>
          <div className="flex flex-col md:flex-row items-center md:items-start lg:ml-16 transition-all duration-300 lg:w-1/2 rounded-md relative z-50 bg-amber-50 p-3">
            <div className="absolute hidden lg:block right-6 top-24 -rotate-6">
              {" "}
              <SvgArrow />
            </div>

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
              <h3 className="text-xl lg:text-2xl font-bold mb-2 text-warning">
                Post Food
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Share your leftover meals easily by posting them. Add details,
                pickup location, and expiry date.
              </p>
            </div>
          </div>
        </Reveal>
        {/* Step 2 */}
        <Reveal keyframes={bounceSlideRight} triggerOnce delay={200}>
          <div className="flex flex-col md:flex-row items-center lg:ml-64 transition-all duration-300 lg:w-1/2 rounded-md bg-amber-50 p-3">
            <div className="absolute hidden lg:block right-90 top-24 -rotate-6">
              {" "}
              <SvgArrow />
            </div>
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
              <h3 className="text-xl lg:text-2xl font-bold mb-2 text-warning">
                Find Food
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Browse available food near you and connect with donors. It’s
                quick, transparent, and free.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Step 3 */}
        <Reveal keyframes={bounceSlideLeft} triggerOnce delay={200}>
          <div className="flex flex-col md:flex-row items-center lg:ml-[440px] transition-all duration-300 lg:w-1/2 rounded-md bg-amber-50 p-3">
            <div className="w-24 h-24 shrink-0 relative mb-6 md:mb-0">
              <div className="absolute -top-5 right-20 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md bg-warning">
                3
              </div>
              <img
                src={collectFoodImg}
                alt="Collect Food"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="md:ml-4 text-center md:text-left max-w-md">
              <h3 className="text-xl lg:text-2xl font-bold mb-2 text-warning">
                Collect Food
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Head to the pickup point, collect your food, and enjoy — while
                reducing waste and helping others.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HowItWorks;
