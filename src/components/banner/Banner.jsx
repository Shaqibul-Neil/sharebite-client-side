import Container from "../container/Container";
import MyButton from "../button/MyButton";
import { Slide } from "react-awesome-reveal";
import VideoSlider from "./VideoSlider";

const Banner = () => {
  return (
    <section className="relative w-full h-[95vh] overflow-hidden flex items-center">
      <VideoSlider />
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-[90vh] bg-black/40 bg-opacity-50"></div>
      <Container>
        {/* Content */}
        <div className="relative z-10 max-w-4xl text-left space-y-8 my-16">
          <Slide direction="left" triggerOnce>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Share a Meal, Share a Smile
            </h1>
          </Slide>
          <Slide direction="right" triggerOnce>
            <p className="mt-4 text-lg md:text-2xl text-gray-100 max-w-xl">
              Connect with your community and discover delicious meals waiting
              to be shared. Make a difference one bite at a time.
            </p>
          </Slide>
          <Slide direction="left" triggerOnce>
            <MyButton
              to={"/available-foods"}
              className={"py-3 px-6 bg-warning hover:bg-warning border-warning"}
            >
              {" "}
              Search Foods
            </MyButton>
          </Slide>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
