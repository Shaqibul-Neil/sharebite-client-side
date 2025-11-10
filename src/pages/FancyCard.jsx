import React from "react";

const FancyCard = () => {
  return (
    <div className="group relative flex flex-col items-center text-center w-[280px] mx-auto mt-24">
      {/* Floating Image */}
      <div className="absolute -top-12 z-10">
        <img
          src="https://picsum.photos/200?random=1"
          alt="Random"
          className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Card Body */}
      <div className="relative bg-white border border-gray-400 rounded-xl p-6 pt-16 transition-all duration-300 group-hover:border-black group-hover:shadow-xl">
        {/* Hide border behind image area */}
        <div className="absolute -top-1.5px left-1/2 -translate-x-1/2 w-[100px] border-[5px] border-white"></div>

        {/* Dummy Title */}
        <h2 className="text-lg font-semibold text-gray-800 uppercase mt-2 group-hover:text-black transition-colors duration-300">
          Lorem Ipsum
        </h2>

        {/* Divider */}
        <div className="w-1/4 h-px bg-gray-400 my-3 mx-auto"></div>

        {/* Dummy Text */}
        <p className="text-gray-500 text-sm leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
          erat eu felis volutpat elementum.
        </p>

        {/* Dummy Link */}
        <ul className="mt-8 mb-0">
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-800 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3"
            >
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FancyCard;
