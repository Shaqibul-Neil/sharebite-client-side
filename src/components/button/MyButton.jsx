import { Link } from "react-router";

const MyButton = ({ children, to, className }) => {
  return (
    <Link
      className={`relative inline-flex items-center justify-start overflow-hidden font-medium transition-all rounded group border ${className}`}
      to={to}
    >
      <span className="w-48 h-48 rounded rotate-[-40deg] bg-white absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-warning text-sm">
        {children}
      </span>
    </Link>
  );
};

export default MyButton;
