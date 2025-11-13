import { Slide } from "react-awesome-reveal";
import aboutDonation from "../../assets/about.webp";
import MyButton from "../button/MyButton";

const About = () => {
  return (
    <div className="lg:pl-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content Area */}
        <div className="space-y-4 lg:px-0 md:px-6 px-3">
          <Slide direction="up" triggerOnce>
            <div className="inline-block bg-orange-100 text-warning text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              About ShareBite
            </div>
          </Slide>
          <Slide direction="up" triggerOnce>
            <h2 className="text-3xl md:text-5xl font-extrabold text-accent leading-tight">
              Building a{" "}
              <span className="text-warning">Hunger-Free Community</span>
            </h2>
          </Slide>
          <Slide direction="down" triggerOnce>
            <p className="text-gray-600 leading-relaxed">
              ShareBite connects generous donors with people who need food the
              most — turning surplus meals into shared smiles. Every donation
              helps reduce food waste while feeding families and individuals in
              your local community. Together, we're building a culture where no
              plate goes empty and no food gets wasted.
            </p>
          </Slide>
          <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-gray-700">
            <Slide direction="right" triggerOnce>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="text-warning text-xl mr-2 font-bold">
                    &raquo;
                  </span>
                  Reduce Food Waste
                </p>

                <p className="flex items-center">
                  <span className="text-warning text-xl mr-2 font-bold">
                    &raquo;
                  </span>
                  Connect Donors & Receivers
                </p>

                <p className="flex items-center">
                  <span className="text-warning text-xl mr-2 font-bold">
                    &raquo;
                  </span>
                  Promote Sustainable Sharing
                </p>
              </div>
            </Slide>
            <Slide direction="left" triggerOnce>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="text-warning text-xl mr-2 font-bold">
                    &raquo;
                  </span>
                  Empower Local Communities
                </p>

                <p className="flex items-center">
                  <span className="text-warning text-xl mr-2 font-bold">
                    &raquo;
                  </span>
                  Encourage Kindness Everyday
                </p>

                <p className="flex items-center">
                  <span className="text-warning text-xl mr-2 font-bold">
                    &raquo;
                  </span>
                  Deliver Hope Through Food
                </p>
              </div>
            </Slide>
          </div>

          <div className="flex items-center space-x-8 pt-4">
            <MyButton
              to={"/about-us"}
              className={"py-3 px-6 bg-warning hover:bg-warning border-warning"}
            >
              Learn More
            </MyButton>
          </div>
        </div>
        {/* Right Image + Stats */}
        <div className="relative w-full h-80 sm:h-96 lg:h-full flex justify-center items-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center lg:rounded-l-3xl overflow-hidden"
            style={{
              backgroundImage: `url(${aboutDonation})`,
            }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Floating Orange Box */}
          <div className="absolute lg:bottom-4 md:-bottom-16 -bottom-24 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-10 w-[90%] sm:w-3/4 max-w-sm bg-warning text-white p-6 shadow-2xl lg:rounded-tl-lg rounded-md">
            <div className="space-y-4">
              <p className="text-5xl font-bold">10K+</p>
              <p className="text-xl font-semibold">
                Active Users Sharing Daily
              </p>

              <div className="pt-2 flex md:items-center justify-between flex-col md:flex-row">
                <div className="flex -space-x-3">
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    src="https://randomuser.me/api/portraits/women/45.jpg"
                    alt="user"
                  />
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="user"
                  />
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="user"
                  />
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-warning text-sm font-semibold border-2 border-white">
                    +99
                  </div>
                </div>
                <p className="text-lg font-semibold border-l-2 border-white md:pl-4">
                  Growing Every Day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
