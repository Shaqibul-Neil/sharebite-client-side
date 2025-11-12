const SecondaryButton = ({
  children,
  className = "",
  type = "button",
  hoverTextColor,
  onClick,
  width = "48",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`relative inline-flex items-center justify-center overflow-hidden font-medium transition-all rounded-3xl group border cursor-pointer text-white px-4 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {/* Hover animated background */}
      <span
        className={`w-${width} h-48 rounded-3xl rotate-[-40deg] bg-white absolute bottom-0 left-0 -translate-x-full translate-y-full mb-9 ml-9 transition-all duration-500 ease-out group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0`}
      ></span>

      {/* Button text */}
      <span
        className={`relative transition-colors duration-300 ease-in-out ${hoverTextColor}`}
      >
        {children}
      </span>
    </button>
  );
};

export default SecondaryButton;
