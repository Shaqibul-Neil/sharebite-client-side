import { useEffect, useState } from "react";
import FoodCard from "../components/foodCard/FoodCard";
import Container from "../components/container/Container";
import useAxios from "../hooks/useAxios";
import EmptySearch from "../components/others/EmptySearch";

const AvailableFoods = () => {
  const [availableFoods, setAvailableFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance.get("http://localhost:5000/available-foods").then((data) => {
      setAvailableFoods(data.data);
      setLoading(false);
    });
  }, [axiosInstance]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value.trim().toLowerCase();
    if (!searchText) {
      axiosInstance
        .get("http://localhost:5000/available-foods")
        .then((data) => {
          setAvailableFoods(data.data);
          setLoading(false);
        });
    }
    setLoading(true);
    const filteredFoods = availableFoods.filter((food) =>
      food.food_name.toLowerCase().includes(searchText)
    );
    setLoading(false);
    setAvailableFoods(filteredFoods);
  };
  if (loading) return <p>Searching</p>;
  return (
    <div className="my-24">
      <title>ShareBite - Available Foods</title>
      <Container>
        <div className="text-3xl text-center font-bold text-accent mb-4">
          Currently Available Foods
        </div>
        <p className=" text-center mb-10 text-primary">
          Discover a variety of freshly prepared meals shared by our generous
          community members. From wholesome vegetarian dishes to hearty
          non-vegetarian options, there's something for everyone. Browse,
          select, and enjoy nutritious food while supporting local food sharing.
        </p>
        <form className="mb-5 text-center" onSubmit={handleSearchSubmit}>
          <div className="relative md:w-80 w-72 mx-auto">
            <input
              type="search"
              name="search"
              placeholder="Search Foods"
              className="w-full border-l border-t border-b border-amber-500 rounded pl-10 pr-4 py-2 focus:outline-none transition-all duration-200"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F57C00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-4 myBtn"
            >
              {loading ? "Searching" : "Search"}
            </button>
          </div>
        </form>
        {availableFoods.length === 0 ? (
          <EmptySearch />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3">
            {availableFoods.map((food) => (
              <FoodCard food={food} key={food._id} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default AvailableFoods;
