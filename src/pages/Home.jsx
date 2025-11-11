import { useLoaderData } from "react-router";
import Banner from "../components/banner/Banner";
import Container from "../components/container/Container";
import FoodCard from "../components/foodCard/FoodCard";
import MyButton from "../components/button/MyButton";
import About from "../components/about/About";
import HowItWorks from "../components/how steps/HowItWorks";
import Testimonials from "../components/testimonials/Testimonials";

const Home = () => {
  const foodsData = useLoaderData();
  console.log(foodsData);
  return (
    <div>
      <title>ShareBite - Home</title>
      <Banner />
      <section>
        <About />
      </section>
      <section className="py-20 lg:pb-28 md:py-20 lg:pt-0">
        <Container>
          <div className="space-y-4">
            <p className="bg-orange-100 text-warning text-xs font-semibold px-3 py-1 rounded-full text-center uppercase tracking-wider w-32 mx-auto">
              Good Deeds
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-accent leading-tight text-center">
              Shared with <span className="text-warning">Generosity</span>
            </h2>
            <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
              Every meal tells a story of kindness. Explore a community where
              generous hearts come together to share food, reduce waste, and
              nourish those in need. Join us in making every bite count.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 my-10">
            {foodsData.map((food) => (
              <FoodCard food={food} key={food._id} />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <MyButton
              to={"/available-foods"}
              className={"py-3 px-6 bg-warning hover:bg-warning border-warning"}
            >
              {" "}
              Show All Foods
            </MyButton>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <HowItWorks />
        </Container>
      </section>
      <section>
        <Container>
          <Testimonials />
        </Container>
      </section>
    </div>
  );
};

export default Home;
