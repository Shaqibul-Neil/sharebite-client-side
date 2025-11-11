import empty from "../../assets/empty.jpg";

const EmptySearch = () => {
  return (
    <div className="relative w-full h-96 flex items-center justify-center my-16">
      {/* Background Image */}
      <img
        src={empty}
        alt="No Food Found"
        className="absolute inset-0 w-full h-full object-contain"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80 bg-opacity-100"></div>

      {/* Text */}
      <div className="relative text-center text-white px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">Empty Search</h2>
        <p className="text-md md:text-lg">
          No food found matching your search.
        </p>
      </div>
    </div>
  );
};

export default EmptySearch;
