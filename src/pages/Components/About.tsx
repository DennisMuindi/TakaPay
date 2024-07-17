import { RefObject, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function AboutUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const visionRef: RefObject<HTMLDivElement> = useRef(null);
  const missionRef: RefObject<HTMLDivElement> = useRef(null);
  const principlesRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        visionRef.current?.classList.add("animate-slide-up");
      }, 0);
      setTimeout(() => {
        missionRef.current?.classList.add("animate-slide-up");
      }, 300);
      setTimeout(() => {
        principlesRef.current?.classList.add("animate-slide-up");
      }, 600);
    }
  }, [inView]);

  return (
    <div
      className="h-screen flex flex-col items-center justify-center w-full gap-8 bg-gray-100 mt-20 about"
      ref={ref}
      id="about"
    >
      <h2 className="text-4xl font-semibold text-gray-800 relative overflow-hidden group ">
        About Us
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent origin-center transform scale-x-0 group-hover:bg-green-600 transition-all duration-300 ease-in-out"></span>
      </h2>

      <div className="flex flex-wrap justify-center gap-8 mt-8 w-full lg:flex-row">
        <div
          className="max-w-sm w-full  shadow-lg rounded-xl overflow-hidden transform transition-transform hover:scale-105 animate-slide-up "
          ref={visionRef}
        >
          <div className="p-6 ">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 text-justify">
              Our vision is to create a sustainable and efficient waste
              management system that benefits both the community and the
              environment through innovative technology and dedicated service.
            </p>
          </div>
        </div>
        <div
          className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 animate-slide-up"
          ref={missionRef}
        >
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 text-justify">
              Our mission is to revolutionize waste management by leveraging
              advanced technologies such as GIS and Google Plus Codes to
              optimize routes, enhance performance, and ensure efficient
              resource management.
            </p>
          </div>
        </div>
        <div
          className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 animate-slide-up"
          ref={principlesRef}
        >
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              Core Principles
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Environmental sustainability</li>
              <li>Innovation and technology integration</li>
              <li>Community engagement</li>
              <li>Ethical and transparent practices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
