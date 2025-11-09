import { MdEmail } from "react-icons/md";
import { MapPin, Phone } from "lucide-react";
import { Link } from "react-router";

const FoodDetailsCard = ({ foodInfo }) => {
  const { food, requestModalRef, user } = foodInfo;
  const filteredDate = new Date(food.expire_date).toLocaleDateString();
  const handleRequestModal = () => {
    requestModalRef.current.showModal();
  };
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN */}
        <div className="flex flex-col md:flex-row lg:flex-col gap-4 md:items-center lg:items-start">
          {/* Food Image */}
          <figure className="rounded-lg overflow-hidden md:w-1/2 lg:w-full">
            <img
              src={food.food_image}
              alt={food.food_name}
              className="rounded-lg w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </figure>

          {/* Food Description */}
          <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
            <h3 className="text-xl font-bold text-accent border-b pb-2">
              Food Description
            </h3>

            <div className="text-sm space-y-2">
              <p>
                <span className="font-semibold text-primary">Quantity:</span>{" "}
                {food.food_quantity}
              </p>
              <p>
                <span className="font-semibold text-primary">Expire:</span>{" "}
                <span className="text-red-500 font-medium">{filteredDate}</span>
              </p>
              <p>
                <span className="font-semibold text-primary">Spice Level:</span>{" "}
                {food.spice_level || "Unknown"}
              </p>
              <p>
                <span className="font-semibold text-primary">Notes:</span>{" "}
                {food.additional_notes || "No notes provided"}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-2 space-y-6">
          {/* Back Button */}
          <div className="mb-6">
            <Link
              to="/available-foods"
              className="text-sm font-medium text-accent hover:text-gray-600 transition"
            >
              &larr; Back to Available Foods
            </Link>
          </div>
          {/* Food Info */}
          <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
            <h2 className="text-3xl font-bold text-accent">
              {food?.food_name}
            </h2>
            <span className="badge badge-outline badge-warning">
              {food?.category || "No Category"}
            </span>
            <p className="text-primary text-sm">
              Donated by:{" "}
              <span className="font-semibold">
                {food.donator.name || "Anonymous"}
              </span>
            </p>
          </div>
          <div className="flex items-center md:gap-2 md:flex-row flex-col">
            <div className="bg-white p-6 rounded-xl shadow-md space-y-4 md:w-1/2">
              <h3 className="text-lg font-bold text-accent">Food Details</h3>
              <div className="space-y-2">
                <p className="text-sm text-primary">
                  <span className="font-semibold">Food ID :</span> {food?._id}
                </p>
                <p className="text-sm text-primary">
                  <span className="font-semibold">Serving Time :</span>{" "}
                  {food?.serving_time}
                </p>
              </div>

              <button className="text-primary hover:underline font-medium flex items-center gap-2">
                <MapPin color="red" size={18} />{" "}
                <span>View Pickup Location</span>
              </button>

              {user?.email !== food.donator.email && (
                <button
                  className="w-full py-2 rounded-lg myBtn text-primary font-medium transition"
                  onClick={handleRequestModal}
                >
                  Request Food
                </button>
              )}
            </div>

            {/* Donor Info */}
            <div className="bg-white p-6 rounded-xl shadow-md space-y-4 md:w-1/2 mt-4 md:mt-0">
              <h3 className="text-lg font-bold text-accent mb-2">
                Donor Information
              </h3>

              <div className="flex gap-4 items-center">
                <div className="h-12 w-12 rounded-lg overflow-hidden">
                  <img
                    src={food.donator.image}
                    alt={food.donator.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-primary">
                    {food.donator.name || "Anonymous"}
                  </p>
                  <p className="text-sm text-gray-600">{food.donator.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-col">
                <button
                  className="w-full border-2 border-accent text-accent py-1 rounded-lg flex items-center gap-2 justify-center cursor-pointer font-semibold  hover:bg-accent hover:text-white transition-all duration-300 text-md"
                  onClick={() =>
                    (window.location.href = `mailto:${food.donator.email}`)
                  }
                >
                  <span>
                    <MdEmail size={18} />
                  </span>{" "}
                  <span>Send Message</span>
                </button>
                <button
                  onClick={() =>
                    (window.location.href = `tel:${food.donator.phone}`)
                  }
                  className="w-full bg-accent text-white py-1 rounded-lg flex items-center gap-2 justify-center cursor-pointer border-2 hover:bg-white border-accent hover:text-accent transition-all duration-300 font-semibold text-md"
                >
                  {" "}
                  <span>
                    <Phone size={16} />
                  </span>{" "}
                  <span>Call Donor</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsCard;
