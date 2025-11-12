import { FaHeadset } from "react-icons/fa";
import MyButton from "../button/MyButton";

const InfoBanner = ({ text }) => {
  return (
    <div className="bg-accent border-amber-600 rounded-lg flex flex-col md:flex-row items-center justify-between p-4 md:p-6 gap-3 border-t-4 shadow-[0_-4px_15px_rgba(255,193,7,0.2)] rounded-t-lg">
      <div className="flex items-center flex-col md:flex-row gap-3">
        <FaHeadset className="text-white shrink-0 w-6 h-6" />
        <p className="text-white text-center md:text-left font-medium">
          {text}?{" "}
          <span className="text-white font-semibold">
            Contact our support anytime.
          </span>
        </p>
      </div>
      <MyButton
        to="/contact"
        className={"py-3 px-6 bg-amber-600 hover:bg-amber-600 border-amber-600"}
      >
        {" "}
        Get Support
      </MyButton>
    </div>
  );
};

export default InfoBanner;
