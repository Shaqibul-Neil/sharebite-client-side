import { useState } from "react";
import { useLoaderData } from "react-router";
import FoodCard from "../components/foodCard/FoodCard";
import Container from "../components/container/Container";
import useAxios from "../hooks/useAxios";

const AvailableFoods = () => {
  const allFoods = useLoaderData();
  const [searchedItems, setSearchedItem] = useState(allFoods);
  const [loading, setLoading] = useState(false);
  const axiosInstance = useAxios();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value.trim();
    setLoading(true);
    axiosInstance
      .get(`http://localhost:5000/search?search=${searchText}`)
      .then((data) => {
        console.log(data.data);
        setSearchedItem(data.data);
        setLoading(false);
      });
  };
  if (loading) return <p>Searching</p>;
  return (
    <div>
      <Container>
        <div className="text-2xl text-center font-bold">
          Currently Available Foods
        </div>
        <p className=" text-center mb-10 ">Explore 3d models.</p>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {searchedItems.map((food) => (
            <FoodCard food={food} key={food._id} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AvailableFoods;
