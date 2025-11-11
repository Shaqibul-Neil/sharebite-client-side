import { Clock, MapPin, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router";

const FoodCard = ({ food }) => {
  const {
    _id,
    food_name,
    food_image,
    food_quantity,
    pickup_location,
    expire_date,
    additional_notes,
    donator,
  } = food;

  const date = new Date(expire_date);
  const formattedDate = date.toLocaleDateString();

  return (
    <div className="card bg-base-100 lg:w-96 shadow-md hover:shadow-xl transition-all duration-300 mx-auto group rounded-md border border-gray-300">
      {/* Image */}
      <figure className="relative overflow-hidden">
        <img
          src={food_image}
          alt={food_name}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body space-y-4">
        {/* Title */}
        <h2 className="card-title text-lg font-semibold uppercase text-accent">
          {food_name}
        </h2>

        {/* Details */}
        <div className="space-y-3 text-gray-600">
          <div className="flex justify-between flex-col md:flex-row md:items-center gap-1">
            {/* Pickup */}
            <div className="flex items-center gap-2">
              <MapPin className="text-warning w-5 h-5 shrink-0" />
              <span>{pickup_location}</span>
            </div>
            {/* Quantity */}
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="text-warning w-5 h-5 shrink-0" />
              <span>
                Serves{" "}
                {food_quantity < 10 ? `0${food_quantity}` : food_quantity}{" "}
                People
              </span>
            </div>
          </div>
          <p>{additional_notes}</p>
          {/* Expire Date */}
          <p className="text-gray-600">
            <span className="font-semibold"> Expiry Date:</span> {formattedDate}
          </p>
        </div>

        {/* Actions */}
        <div className="card-actions flex justify-between items-center">
          {/* Donator */}
          <div className="flex items-center gap-2">
            <img
              className="w-8 h-8 rounded-md object-cover"
              src={donator?.image}
              alt={donator?.name}
            />
            <span>{donator?.name}</span>
          </div>
          <Link
            to={`/food/${_id}`}
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group border border-warning"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-warning absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-warning transition-colors duration-300 ease-in-out group-hover:text-white">
              View Details
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
