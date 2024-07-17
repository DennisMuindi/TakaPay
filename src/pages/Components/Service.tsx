import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faBroom,
  faCut,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";
import { RefObject, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Service() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const garbageRef: RefObject<HTMLDivElement> = useRef(null);
  const cleaningRef: RefObject<HTMLDivElement> = useRef(null);
  const slashingRef: RefObject<HTMLDivElement> = useRef(null);
  const bucketRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        garbageRef.current?.classList.add("animate-slide-up");
      }, 0);
      setTimeout(() => {
        cleaningRef.current?.classList.add("animate-slide-up");
      }, 300);
      setTimeout(() => {
        slashingRef.current?.classList.add("animate-slide-up");
      }, 600);
      setTimeout(() => {
        bucketRef.current?.classList.add("animate-slide-up");
      }, 900);
    }
  }, [inView]);

  return (
    <div
      className="flex flex-col items-center justify-center w-full bg-gray-900"
      ref={ref}
      id="service"
    >
      <h2 className="text-4xl font-semibold pt-5 text-white relative overflow-hidden group">
        Services
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent origin-center transform scale-x-0 group-hover:bg-green-600 transition-all duration-300 ease-in-out"></span>
      </h2>

      <div className="flex flex-col items-center justify-center gap-8 mt-8 w-full px-2 py-20 sm:flex-row sm:flex-wrap sm:gap-4 bg">
        {/* Service Card 1: Garbage Collection */}
        <div
          className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 animate-slide-up"
          ref={garbageRef}
        >
          <div className="p-6 flex items-center">
            <FontAwesomeIcon
              icon={faTrash}
              className="w-12 h-12 text-green-600 mr-4"
            />
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-2">
                Garbage Collection
              </h3>
              <p className="text-gray-700 text-justify">
                Efficient collection of waste using modern technology to ensure
                cleanliness and hygiene.
              </p>
            </div>
          </div>
        </div>

        {/* Service Card 2: Cleaning */}
        <div
          className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 animate-slide-up"
          ref={cleaningRef}
        >
          <div className="p-6 flex items-center">
            <FontAwesomeIcon
              icon={faBroom}
              className="w-12 h-12 text-green-600 mr-4"
            />
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-2">
                Cleaning
              </h3>
              <p className="text-gray-700 text-justify">
                Thorough cleaning services to maintain cleanliness and
                sanitation standards.
              </p>
            </div>
          </div>
        </div>

        {/* Service Card 3: Slashing */}
        <div
          className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 animate-slide-up"
          ref={slashingRef}
        >
          <div className="p-6 flex items-center">
            <FontAwesomeIcon
              icon={faCut}
              className="w-12 h-12 text-green-600 mr-4"
            />
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-2">
                Slashing
              </h3>
              <p className="text-gray-700 text-justify">
                Cutting and clearing overgrown vegetation to maintain neat and
                tidy surroundings.
              </p>
            </div>
          </div>
        </div>

        {/* Service Card 4: Bucket Making */}
        <div
          className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 animate-slide-up"
          ref={bucketRef}
        >
          <div className="p-6 flex items-center">
            <FontAwesomeIcon
              icon={faBoxOpen}
              className="w-12 h-12 text-green-600 mr-4"
            />
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-2">
                Recycling
              </h3>
              <p className="text-gray-700 text-justify">
                Crafting durable buckets suitable for various industrial and
                household uses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
