import { Clock, MapPin, UtensilsCrossed } from "lucide-react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router";

const FoodCard = ({ food, idx }) => {
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
  const direction = idx % 2 === 0 ? "up" : "down";

  return (
    <Slide direction={direction} cascade triggerOnce>
      <div className="w-full lg:w-96 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mx-auto group relative z-10 hover:scale-105 transition-transform duration-500">
        {/* Image */}
        <figure className="relative overflow-hidden">
          <img
            src={food_image}
            alt={food_name}
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </figure>

        {/* Card Content */}
        <div className="p-5 space-y-3">
          {/* Title */}
          <h2 className="text-lg font-semibold uppercase text-accent">
            {food_name}
          </h2>

          {/* Small stats section */}
          <div className="flex items-center justify-between text-xs font-medium text-gray-500">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-warning" /> Expire: {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <UtensilsCrossed className="w-4 h-4 text-warning" />
              Serves {food_quantity < 10 ? `0${food_quantity}` : food_quantity}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <MapPin className="text-warning w-4 h-4" />
            <span>{pickup_location}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-500">{additional_notes}</p>

          {/* Donator */}
          <div className="flex items-center gap-3 pt-2">
            <img
              className="w-9 h-9 rounded-md object-cover border border-gray-200"
              src={donator?.image}
              alt={donator?.name}
            />
            <span className="text-sm font-medium">{donator?.name}</span>
          </div>

          {/* Action Button */}
          <div className="pt-3">
            <Link
              to={`/food/${_id}`}
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded-3xl hover:bg-white group border border-warning"
            >
              <span className="w-48 h-48 rounded-3xl rotate-[-40deg] bg-warning absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-warning transition-colors duration-300 ease-in-out group-hover:text-white">
                View Details
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default FoodCard;
