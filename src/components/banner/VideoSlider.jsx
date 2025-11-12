import donate1 from "../../assets/donate.mp4";
import donate2 from "../../assets/donate2.mp4";
import donate3 from "../../assets/donate3.mp4";
import { useEffect, useState } from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const videos = [donate1, donate2, donate3];

// Fade + Zoom keyframes
const fadeZoomIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.02);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const VideoSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play the carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="absolute w-full flex top-0 left-0 justify-center">
        <div className="mx-auto w-full relative overflow-hidden bg-black">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {videos.map((src, i) => (
              <div key={i} className="w-full shrink-0 relative">
                <Reveal keyframes={fadeZoomIn} triggerOnce>
                  <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[90vh] object-cover brightness-90"
                  />
                </Reveal>
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-3 w-4 rounded-lg transition-all ${
                  current === i ? "bg-white w-6" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mb-[500px]"></div>
    </>
  );
};

export default VideoSlider;
