import { useEffect, useState } from "react";
import FoodCard from "../components/foodCard/FoodCard";
import Container from "../components/container/Container";
import useAxios from "../hooks/useAxios";
import EmptySearch from "../components/others/EmptySearch";
import useAuth from "../hooks/useAuth";
import ErrorPage from "./ErrorPage";
import FoodCardSkeleton from "../components/others/FoodCardSkeleton";
import { FaAppleAlt, FaInfoCircle } from "react-icons/fa";
import { MagnifyingGlass } from "react-loader-spinner";

const AvailableFoods = () => {
  const [availableFoods, setAvailableFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const { foodError } = useAuth();
  const axiosInstance = useAxios();

  // Initial fetch
  useEffect(() => {
    axiosInstance.get("/available-foods").then((data) => {
      setTimeout(() => {
        setAvailableFoods(data.data);
        setLoading(false);
      }, 1500);
    });
  }, [axiosInstance]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value.trim().toLowerCase();
    setIsSearching(true);

    setTimeout(() => {
      const filtered = availableFoods.filter((food) =>
        food.food_name.toLowerCase().includes(searchText)
      );
      setAvailableFoods(filtered);
      setIsSearching(false);
    }, 1000);
  };

  if (foodError) return <ErrorPage />;

  return (
    <div className="my-24">
      <title>ShareBite - Available Foods</title>
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3 mb-8">
          <FaAppleAlt className="text-warning text-3xl" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-accent text-center">
            Currently Available Foods
          </h1>
        </div>

        <p className="text-center mb-10 text-primary">
          Discover a variety of freshly prepared meals shared by our generous
          community members. From wholesome vegetarian dishes to hearty
          non-vegetarian options, there's something for everyone. Browse,
          select, and enjoy nutritious food while supporting local food sharing.
        </p>

        <form className="mb-16 text-center" onSubmit={handleSearchSubmit}>
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
              {isSearching ? "Searching..." : "Search"}
            </button>
          </div>
        </form>

        {loading ? (
          <FoodCardSkeleton count={9} />
        ) : isSearching ? (
          <div className="flex justify-center items-center">
            <MagnifyingGlass
              visible={true}
              height="120"
              width="120"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperClass="magnifying-glass-wrapper"
              glassColor="#fff4e6"
              color="#f57c00"
            />
          </div>
        ) : availableFoods.length === 0 ? (
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
