import { useLoaderData } from "react-router";
import Banner from "../components/banner/Banner";
import Container from "../components/container/Container";
import FoodCard from "../components/foodCard/FoodCard";
import MyButton from "../components/button/MyButton";
import About from "../components/about/About";
import HowItWorks from "../components/how steps/HowItWorks";
import Testimonials from "../components/testimonials/Testimonials";
import CommunityStats from "../components/community/CommunityStats";
import useAuth from "../hooks/useAuth";
import FoodCardSkeleton from "../components/others/FoodCardSkeleton";
import { Slide } from "react-awesome-reveal";
import ShareKindSection from "../components/others/ShareKindSection";

const Home = () => {
  const { foodLoading } = useAuth();
  const foodsData = useLoaderData();
  return (
    <div>
      <title>ShareBite - Home</title>
      <Banner />
      <section>
        <About />
      </section>
      <section className="lg:pb-12 md:pb-4 lg:pt-0 md:pt-16 pt-24 pb-16">
        <Container>
          <div className="space-y-4">
            <Slide direction="up" triggerOnce>
              <p className="bg-orange-100 text-warning text-xs font-semibold px-3 py-1 rounded-full text-center uppercase tracking-wider w-32 mx-auto">
                Good Deeds
              </p>
            </Slide>
            <Slide direction="up" triggerOnce>
              <h2 className="text-3xl md:text-5xl font-extrabold text-accent leading-tight text-center">
                Shared with <span className="text-warning">Generosity</span>
              </h2>
            </Slide>
            <Slide direction="down" triggerOnce>
              <p
                className="text-center text-gray-600 mt-3 max-w-2xl mx-auto"
                dat
              >
                Every meal tells a story of kindness. Explore a community where
                generous hearts come together to share food, reduce waste, and
                nourish those in need. Join us in making every bite count.
              </p>
            </Slide>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-10">
            {foodLoading ? (
              <FoodCardSkeleton />
            ) : (
              foodsData.map((food, idx) => (
                <FoodCard food={food} key={food._id} idx={idx} />
              ))
            )}
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
        <ShareKindSection />
      </section>
      <section>
        <Container>
          <HowItWorks />
        </Container>
      </section>
      <section className="mb-16 lg:mb-0">
        <CommunityStats />
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
