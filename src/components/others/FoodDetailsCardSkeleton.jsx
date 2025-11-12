const FoodDetailsCardSkeleton = () => {
  return (
    <div className="space-y-16">
      {/* top side */}
      <div className="max-w-6xl mx-auto p-6 animate-pulse">
        {/* Back link */}
        <div className="mb-6 h-4 w-40 bg-gray-300 rounded"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT SIDE - IMAGE */}
          <div>
            <div className="rounded-3xl overflow-hidden shadow-md h-64 bg-gray-300"></div>
          </div>

          {/* RIGHT SIDE - SINGLE TAB SKELETON */}
          <div className="bg-white px-6 py-4 space-y-4">
            {/* Food Name */}
            <div className="h-6 w-48 bg-gray-300 rounded"></div>
            <div className="h-5 w-24 bg-gray-200 rounded-full"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            <div className="h-4 w-32 bg-gray-200 rounded"></div>
            <div className="h-4 w-40 bg-gray-200 rounded"></div>

            {/* Request Button */}
            <div className="h-10 w-48 bg-gray-300 rounded-3xl mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsCardSkeleton;
