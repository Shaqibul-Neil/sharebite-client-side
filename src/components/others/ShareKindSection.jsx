import Container from "../container/Container";
import topdonor from "../../assets/topdonor.jpg";
import videofall from "../../assets/videofallback.jpg";
import MyButton from "../button/MyButton";
import { Reveal, Slide } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const zoomIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const ShareKindSection = () => {
  // Metric data for cards
  const metrics = [
    {
      id: "01",
      type: "Country",
      value: "12",
      image: videofall,
      stats: [
        { icon: "🚩", text: "12 countries reached" },
        { icon: "🍽️", text: "230K meals shared" },
      ],
      description:
        "ShareBite has connected donors with communities worldwide, reducing food waste and feeding those in need.",
    },
    {
      id: "02",
      type: "Top Donor",
      value: "This Month",
      image: topdonor,
      stats: [
        { icon: "🏅", text: "John Doe" },
        { icon: "🍲", text: "50 meals shared" },
      ],
      description:
        "Celebrating our top donor of the month — making impact in their community! His generosity inspires others to spread kindness every day.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Headline & Call to Action */}
      <Container>
        <div className="max-w-7xl mx-auto lg:pb-32 md:pb-16 px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <Slide direction="right">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-accent leading-tight">
                Every <span className="text-warning">Meal</span> Matters. Let's{" "}
                <span className="text-warning">Share</span> the Love!
              </h1>
            </Slide>
            <Slide direction="left">
              <p className="text-lg text-gray-600 max-w-xl">
                Join ShareBite to turn extra meals into shared smiles. Together,
                we can feed those in need and reduce food waste across
                communities.
              </p>
            </Slide>
          </div>

          <div className="lg:col-span-1 flex flex-col items-start lg:items-end space-y-4">
            <div className="text-right space-y-1 text-sm font-medium text-gray-600">
              <p>• 2025 Food / Community / Charity</p>
              <p className="pl-6">Local / National / Global Impact</p>
            </div>
            <MyButton
              to={"/add-foods"}
              className={"py-3 px-8 bg-warning hover:bg-warning border-warning"}
            >
              {" "}
              Donate
            </MyButton>
          </div>
        </div>
      </Container>

      {/* IMPACT Section Title and Cards */}
      <div className="relative max-w-7xl mx-auto px-6 pt-16 md:pt-1">
        {/* Large IMPACT Text (Overlay) */}
        <Container>
          <Slide direction="left">
            <h3 className="absolute lg:-top-19 md:text-5xl text-2xl font-extrabold text-gray tracking-tight leading-tight md:-left-3 lg:left-0 md:-top-2 -top-4 -left-7">
              Make An
            </h3>
          </Slide>
        </Container>
        <Reveal keyframes={zoomIn} triggerOnce duration={800}>
          <h2 className="absolute lg:-top-16 md:top-4 left-1/2 transform -translate-x-1/2 text-[64px] lg:text-[250px] md:text-[150px] font-black text-amber-600 opacity-100 pointer-events-none tracking-widest leading-none -ml-1">
            IMPACT
          </h2>
        </Reveal>

        {/* Impact Cards */}
        <div className="relative z-10 flex flex-wrap lg:flex-nowrap gap-8 justify-center lg:mt-24 md:mt-28 mt-12">
          {metrics.map((item, i) => (
            <Slide direction={i % 2 === 0 ? "left" : "right"}>
              <div
                key={item.id}
                className="w-full sm:w-96 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50">
                  <span className="text-lg font-bold text-accent">
                    {item.id}
                  </span>
                  <span className="text-sm font-semibold text-accent">
                    {item.type}{" "}
                    <span className="ml-1 px-2 py-0.5 bg-yellow-400 rounded-full text-xs">
                      {item.value}
                    </span>
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-4 space-y-4">
                  <img
                    src={item.image}
                    alt={item.type}
                    className="w-full h-48 object-cover rounded-2xl shadow-inner"
                  />

                  <div className="flex items-center justify-between text-xs font-medium text-gray-500">
                    <span>Last update</span>
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-black mr-1"></span>
                      2025
                    </span>
                  </div>

                  {item.stats.map((stat, index) => (
                    <p
                      key={index}
                      className="flex items-center text-lg font-semibold text-accent"
                    >
                      <span className="mr-3 text-2xl">{stat.icon}</span>
                      {stat.text}
                    </p>
                  ))}

                  <p className="text-sm text-gray-500 pt-2">
                    {item.description}
                  </p>

                  <a
                    href="#"
                    className="flex items-center text-sm font-semibold text-accent hover:text-amber-600 transition pt-2"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShareKindSection;
