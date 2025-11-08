import { Link, useLoaderData } from "react-router";
import Banner from "../components/banner/Banner";
import Container from "../components/container/Container";
import FoodCard from "../components/foodCard/FoodCard";

const Home = () => {
  const foodsData = useLoaderData();
  console.log(foodsData);
  return (
    <div>
      <Banner />
      <Container>
        <div className="text-center text-3xl font-bold mt-10 text-accent">
          Shared with Generosity
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-3 my-10">
          {foodsData.map((food) => (
            <FoodCard food={food} key={food._id} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            to={"/available-foods"}
            className="bg-[#43A047] text-white hover:bg-[#FFE0B2] hover:text-primary px-10 py-2 rounded-lg transition-all duration-300"
          >
            {" "}
            Show All Foods
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Home;
