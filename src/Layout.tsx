import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import dots from "./assets/dots.svg";
import frame1 from "./assets/frame-1.png";
import frame2 from "./assets/frame-2.png";
import frame3 from "./assets/sl-1.png";
import frame4 from "./assets/sl-2.png";
import { Button } from "./components/ui/button";

export default function Layout() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { left: frame1, right: frame2 },
    { left: frame3, right: frame4 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-[86%] text-white">
      <div className="lg:block hidden">
        <img src={dots} alt="" className="opacity-60" />
      </div>

      <div className="lg:block hidden">
        <img
          src={dots}
          alt=""
          className="opacity-60 absolute bottom-14 left-2/5"
        />
      </div>

      <div className="lg:grid grid-cols-2 flex flex-col gap-8 mt-20 lg:mt-0">
        <div className="flex flex-col justify-center lg:py-0 ">
          <div className="lg:flex items-center text-[#AED2EC] gap-4 hidden">
            <hr className="w-24 border-3 rounded border-[#AED2EC]" />
            <span>SIERRA LEONE</span>
          </div>

          <p className="lg:text-6xl text-3xl font-semibold py-6">
            2025 Microplanning Exercise Platform
          </p>

          <p className="md:text-lg">
            Built for the future of microplanning, this platform combines
            intelligent mapping, data automation, and seamless collaboration. It
            transforms how organizations plan, monitor, and optimize field
            activities across every level.
          </p>

          <div className="mt-3">
            <Button className="rounded bg-transparent hover:bg-white hover:text-gray-500 border border-white transition-colors">
               Login
            </Button>
          </div>
        </div>

        <div className="lg:grid grid-cols-2 gap-6 hidden">
          {/* Left Image Card */}
          <div className="relative min-h-[380px] overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={`left-${index}`}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage: `url(${slide.left})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 right-0 min-h-28 bg-gradient-to-t from-[#333333]/40 to-[#F5F5F5]/30 px-4 py-6" onClick={() => window.open("https://sl-phu.coveragetrackr.com/", "_blank")}>
                  <p className="lg:text-lg">Data Collection</p>
                  <div className="flex justify-between relative mt-1">
                    <p className="text-xs w-[80%]">
                      Gather accurate field data effortlessly through structured
                      digital forms and real-time synchronization.  
                    </p>
                    <div className="h-8 w-8 border border-white bg-transparent flex justify-center items-center rounded self-end">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image Card */}
          <div className="relative min-h-[380px] overflow-hidden lg:block hidden">
            {slides.map((slide, index) => (
              <div
                key={`right-${index}`}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage: `url(${slide.right})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 right-0 min-h-28 bg-gradient-to-t from-[#333333]/40 to-[#F5F5F5]/30 px-4 py-6 z-50 hover:cursor-pointer" onClick={() => window.open("https://sldash.sydani.org/", "_blank")}>
                  <p className="lg:text-lg">Visualization Dashboard</p>
                  <div className="flex justify-between relative mt-1">
                    <p className="text-xs w-[80%]">
                      Explore collected data through dynamic maps, charts, and
                      analytics for instant insight and decision-making.
                    </p>
                    <div className="h-8 w-8 border border-white bg-transparent flex justify-center items-center rounded self-end">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden block md:w-[80%] pb-5">
          <div className="relative min-h-[380px] overflow-hidden">
            {/* First slide - Visualization with frame3 */}
            <div
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === 0 ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${frame3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-0 left-0 right-0 min-h-28 bg-gradient-to-t from-[#333333]/40 to-[#333333]/30 px-4 py-6 z-50" onClick={() => window.open("https://sldash.sydani.org/", "_blank")}>
                <p className="text-lg">Visualization Dashboard</p>
                <div className="flex justify-between relative mt-1">
                  <p className="text-xs w-[80%]">
                    Explore collected data through dynamic maps, charts, and
                    analytics for instant insight and decision-making.
                  </p>
                  <div className="h-8 w-8 border border-white bg-transparent flex justify-center items-center rounded self-end">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </div>

            {/* Second slide - Data Collection with frame4 */}
            <div
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === 1 ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${frame4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-0 left-0 right-0 min-h-28 bg-gradient-to-t from-[#333333]/40 to-[#F5F5F5]/30 px-4 py-6 z-50"  onClick={() => window.open("https://sl-phu.coveragetrackr.com/", "_blank")}>
                <p className="text-lg">Data Collection</p>
                <div className="flex justify-between relative mt-1">
                  <p className="text-xs w-[80%]">
                    Gather accurate field data effortlessly through structured
                    digital forms and real-time synchronization.
                  </p>
                  <div className="h-8 w-8 border border-white bg-transparent flex justify-center items-center rounded self-end">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
