const FoodCardSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="card bg-gray-100 shadow-md animate-pulse rounded-md border border-gray-300 lg:w-96 mx-auto"
          style={{ width: "24rem" }}
        >
          {/* Image Placeholder */}
          <div className="h-56 bg-gray-300 w-full rounded-t-md"></div>

          {/* Card Body Placeholder */}
          <div className="card-body space-y-4 p-4">
            {/* Title */}
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>

            {/* Details */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center mt-4">
              {/* Donator */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-md bg-gray-200"></div>
                <div className="h-4 bg-gray-300 rounded w-16"></div>
              </div>

              {/* Button */}
              <div className="h-10 bg-gray-300 rounded w-28"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCardSkeleton;
