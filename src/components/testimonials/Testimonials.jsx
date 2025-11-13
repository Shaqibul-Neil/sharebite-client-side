import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import { Slide, Zoom } from "react-awesome-reveal";

// Dummy testimonials data
const testimonials = [
  {
    name: "John Doe",
    position: "Food Receiver",
    text: "ShareBite made it so easy for me to get meals. Such a wonderful initiative!",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Jane Smith",
    position: "Donor",
    text: "I love donating leftover meals now. ShareBite is simple and efficient.",
    avatar: "https://i.pravatar.cc/150?img=25",
  },
  {
    name: "Ali Rahman",
    position: "Food Receiver",
    text: "Great platform! I found fresh meals in my area without any hassle.",
    avatar: "https://i.pravatar.cc/150?img=36",
  },
];

const Testimonials = () => {
  const slideRefs = useRef([]);

  return (
    <section>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 text-left space-y-4">
          <Slide direction="up" triggerOnce>
            <p className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider w-28">
              Testimonials
            </p>
          </Slide>
          <Slide direction="up" triggerOnce>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-accent">
              What People Say <br />
              <span className="text-orange-500">About Us</span>
            </h2>
          </Slide>
          <Slide direction="down" triggerOnce>
            <p className="text-gray-600">
              See how ShareBite has helped donors and receivers connect
              seamlessly. Our community thrives on sharing and reducing food
              waste.
            </p>
          </Slide>
        </div>

        {/* Right Slider */}

        <div className="lg:w-1/2 w-full relative p-2 shadow-2xl rounded-md">
          <Zoom delay={100} duration={1000} fraction={0.5} triggerOnce cascade>
            <Swiper
              modules={[Autoplay, EffectCreative, Navigation]}
              slidesPerView={1}
              loop={true}
              //autoplay={{ delay: 4000, disableOnInteraction: false }}
              grabCursor={true}
              effect="creative"
              creativeEffect={{
                prev: { shadow: false, translate: [0, 0, -400] },
                next: { shadow: false, translate: [0, 0, 0] },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              onSlideChange={(swiper) => {
                slideRefs.current.forEach((el) =>
                  el?.classList.remove("slide-in")
                );
                slideRefs.current[swiper.realIndex]?.classList.add("slide-in");
              }}
              onSwiper={(swiper) =>
                slideRefs.current[swiper.realIndex]?.classList.add("slide-in")
              }
              className="w-full"
            >
              {testimonials.map((t, index) => (
                <SwiperSlide key={index}>
                  <div
                    ref={(el) => (slideRefs.current[index] = el)}
                    className="flex flex-col items-center justify-center text-center px-8 pb-12 bg-white  space-y-2 max-w-xl mx-auto opacity-0 transform translate-y-10"
                  >
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-orange-500"
                    />
                    <p className="text-gray-600 text-base md:text-lg">
                      {t.text}
                    </p>
                    <h4 className="text-accent font-bold text-lg">{t.name}</h4>
                    <span className="text-sm text-gray-600">{t.position}</span>
                  </div>
                </SwiperSlide>
              ))}

              {/* Navigation Arrows */}
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </Swiper>
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
