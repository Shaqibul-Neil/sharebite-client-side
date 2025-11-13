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
import Newsletter from "../components/newsletter/Newsletter";

const Home = () => {
  const { foodLoading } = useAuth();
  const foodsData = useLoaderData();
  return (
    <div>
      <title>ShareBite - Home</title>
      <section>
        <Banner />
      </section>
      <section className="pt-16 lg:pt-32 md:pt-20">
        <About />
      </section>
      <section className="py-16 lg:py-20 bg-yellow-50 mt-32">
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
      <section className="lg:pt-24 md:pt-20 pt-16">
        <ShareKindSection />
      </section>
      <section className="pt-16 lg:pt-32 md:pt-20">
        <Container>
          <HowItWorks />
        </Container>
      </section>
      <section className="pt-16 lg:pt-32 md:pt-20">
        <CommunityStats />
      </section>
      <section className="pt-16 lg:pt-32 md:pt-20">
        <Container>
          <Testimonials />
        </Container>
      </section>
      <section className="pt-16 lg:pt-20 pb-8">
        <Newsletter />
      </section>
    </div>
  );
};

export default Home;
