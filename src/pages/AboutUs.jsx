import { PlayCircleIcon } from "lucide-react";
import about from "../assets/about.webp";
import man1 from "../assets/man1.jpg";
import man2 from "../assets/man2.jpg";
import women1 from "../assets/women1.jpg";
import women2 from "../assets/women2.jpg";
import Container from "../components/container/Container";
import { Link } from "react-router";
import { TiSocialInstagram } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const AboutUs = () => {
  // Placeholder images - replace with actual team photos if available
  const teamMembers = [
    {
      name: "Sony Madison",
      title: "Founder & CEO",
      image: women1,
    },
    {
      name: "Harry Anorith",
      title: "Operations Manager",
      image: man1,
    },
    {
      name: "Jenny Hobb",
      title: "Community Lead",
      image: women2,
    },
    {
      name: "Jonny Smith",
      title: "Tech Lead",
      image: man2,
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-600">
      <Container>
        <div className="mx-auto px-4 py-20">
          <div className="grid grid-cols-1 gap-8 items-center">
            <div className="space-y-4">
              <div className="space-y-4">
                <p className="bg-orange-100 text-warning text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider w-36">
                  ABOUT SHAREBITE
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-accent leading-tight">
                  {" "}
                  Connecting Communities <br />
                  <span className="text-warning">Through Food Sharing</span>
                </h2>
              </div>
              <div>
                <p className="text-gray-600">
                  ShareBite is dedicated to reducing food waste and connecting
                  those in need with surplus meals from generous donors.
                </p>
                <p className="text-gray-600">
                  Our platform makes it easy for restaurants, cafes, and
                  individuals to share excess food with local communities,
                  creating a positive impact for everyone.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-6 rounded-md shadow-lg flex lg:flex-row flex-row md:flex-col md:gap-2 lg:gap-0 items-center space-x-4 md:text-center lg:text-left">
                  <div className="shrink-0 p-3 bg-amber-100 text-amber-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.276a11.952 11.952 0 01-1.293-1.293A7.96 7.96 0 0012 3c-4.322 0-7.96 3.638-7.96 7.96s3.638 7.96 7.96 7.96a7.96 7.96 0 005.618-2.324M15 12V6a3 3 0 00-3-3H6a3 3 0 00-3 3v12a3 3 0 003 3h7.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-accent">
                      Trusted Platform
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Verified donors and volunteers ensure safety.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-md shadow-lg flex lg:flex-row flex-row md:flex-col md:gap-2 lg:gap-0 items-center space-x-4 md:text-center lg:text-left">
                  <div className="shrink-0 p-3 bg-amber-100 text-amber-600 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-accent">
                      Community Impact
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Sharing meals to fight hunger locally.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-md shadow-lg flex lg:flex-row flex-row md:flex-col md:gap-2 lg:gap-0 items-center space-x-4 md:text-center lg:text-left">
                  <div className="shrink-0 p-3 bg-amber-100 text-amber-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h2a2 2 0 002-2V8a2 2 0 00-2-2h-2M15 7l-2-2-2 2M15 11l-2 2-2-2m-3 7L4 14m0 0l-3 3-3-3"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-accent">
                      Dedicated Team
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Passionate about reducing waste and helping others.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-12 flex items-center">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
                alt="Community sharing food"
                className="rounded-md shadow-lg w-2/3 h-96 object-cover z-10 lg:block hidden"
              />
              <div
                className="bg-cover bg-center flex items-center justify-center h-96 w-full lg:w-1/3 lg:absolute lg:top-16 lg:z-15 lg:right-20 lg:h-64 rounded-md"
                style={{
                  backgroundImage: `url(${about})`,
                }}
              >
                <Link
                  className="text-warning flex justify-center items-center"
                  to={"https://www.youtube.com/"}
                >
                  <PlayCircleIcon className="md:w-18 md:h-18 w-14 h-14 animate-pulse" />
                </Link>{" "}
              </div>
            </div>
          </div>

          {/* Team Members Section */}
          <div className="text-center mt-20 md:mt-24">
            <div className="space-y-4">
              <p className="bg-orange-100 text-warning text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider w-36 mx-auto">
                OUR TEAM
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-accent leading-tight">
                {" "}
                Meet the ShareBite <span className="text-warning">Team</span>
              </h2>
            </div>

            <p className="mt-4 text-gray-600">
              Our dedicated team works tirelessly to connect surplus food with
              those who need it most.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-md shadow-lg relative z-10 group mb-16"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover rounded-md"
                  />
                  <div className="absolute -bottom-4 left-0 right-0 bg-amber-500 text-white p-4 text-left mx-4 rounded-md z-15 group-hover:-translate-y-2 transition-all duration-300">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-sm opacity-90">{member.title}</p>
                  </div>
                  {/* Social Icons */}
                  <div className="flex justify-center items-center">
                    <div className="flex justify-center gap-6 absolute -bottom-12 z-20">
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-warning hover:scale-110 transition-transform"
                      >
                        <FaFacebookF size={18} />
                      </a>
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-warning hover:scale-110 transition-transform"
                      >
                        <TiSocialInstagram size={20} />
                      </a>

                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-warning hover:scale-110 transition-transform"
                      >
                        <FaXTwitter size={18} />
                      </a>
                    </div>{" "}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
