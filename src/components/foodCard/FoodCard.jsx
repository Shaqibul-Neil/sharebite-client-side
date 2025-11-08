import { Link } from "react-router";

const FoodCard = ({ food }) => {
  const {
    _id,
    food_name,
    food_image,
    food_quantity,
    pickup_location,
    food_status,
  } = food;
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <figure className="h-48 overflow-hidden">
        <img
          src={food_image}
          alt={food_name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-accent">{food_name}</h2>
        <div className="badge text-sm badge-sm badge-success rounded-full text-white">
          {food_status}
        </div>
        <p className="text-primary">
          <span className="font-semibold">Serving : </span> 0{food_quantity}
        </p>
        <p className="text-primary">
          {" "}
          <span className="font-semibold">Pick Up:</span> {pickup_location}
        </p>

        <div className="flex justify-center items-center mt-4">
          <Link
            className="mtBtn w-full py-2 text-center"
            to={`/food-details/${_id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
