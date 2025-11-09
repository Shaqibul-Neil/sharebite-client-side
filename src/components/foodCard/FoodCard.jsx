import { Link } from "react-router";

const FoodCard = ({ food }) => {
  const {
    _id,
    food_name,
    food_image,
    food_quantity,
    pickup_location,
    expire_date,
    donator,
  } = food;

  const date = new Date(expire_date);
  const formattedDate = date.toLocaleDateString();

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 p-4 flex flex-col gap-4">
      {/* Food Image */}
      <figure className="w-full h-64 overflow-hidden rounded-lg">
        <img
          src={food_image}
          alt={food_name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>

      {/* Food Name */}
      <h2 className="text-xl font-bold text-accent text-center">{food_name}</h2>
      <div className="space-y-2">
        {/* Serving & Expire */}
        <div className="flex justify-between">
          <p>
            <span className="font-bold text-primary">Serving:</span>{" "}
            <span className="text-primary">
              {food_quantity < 10 ? `0${food_quantity}` : food_quantity}
            </span>
          </p>
          <p>
            <span className="font-bold text-primary">Expire:</span>{" "}
            <span className="text-primary">{formattedDate}</span>
          </p>
        </div>

        {/* Pickup & Donated By */}

        <p>
          <span className="font-bold text-primary">Pickup:</span>{" "}
          <span className="text-primary">{pickup_location}</span>
        </p>
        <div className="flex items-center gap-2">
          <span className="font-bold text-primary">Donated By:</span>
          <div className="flex items-center gap-2">
            <img
              src={donator.image}
              alt={donator.name}
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="text-sm text-accent font-semibold">
              {donator.name}
            </span>{" "}
          </div>
        </div>
      </div>
      {/* View Details Button */}
      <div className="mt-4 w-full">
        <Link
          className="myBtn w-full py-2 text-center block"
          to={`/food/${_id}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
