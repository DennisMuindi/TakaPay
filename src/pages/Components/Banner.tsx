import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Banner() {
  const texts = [
    "Taka Pay",
    "An Automated Waste Management System",
    "An Automated Trader management System",
  ];
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      setTypingSpeed(isDeleting ? 100 : 150);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, typingSpeed, texts]);

  return (
    <div
      className="relative w-full h-screen flex items-center bg-gray-900 bg-opacity-75 p-6 rounded-lg shadow-lg"
      id="home"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/garbage.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 w-full sm:w-3/4 flex flex-col items-start justify-center p-6 text-left">
        <h1 className="text-white text-4xl font-semibold w-full sm:w-auto">
          Welcome To{" "}
          <span className="font-bold text-2xl text-green-500 gradient-text">
            {currentText}
          </span>
        </h1>
        <p className="text-white w-full sm:w-[80%] text-lg text-justify leading-relaxed pt-4">
          <span className=" gradient-text font-bold text-green-600 text-xl">
            Taka Pay
          </span>{" "}
          is an automated waste and trader management system that uses Google
          Plus Codes and Geographic Information Systems (GIS) to control waste
          collection routes, monitor the performance of waste operators, plan
          and map waste collection, and track waste management transport vehicle
          routes. This system optimizes resource management in terms of
          materials and resources for solid waste management.
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="https://www.facebook.com/profile.php?id=61562893823364"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-white text-2xl hover:text-green-500 transition duration-300 ease-in-out"
            />
          </a>
          <a
            href="https://www.instagram.com/this_is_takapaymks?igsh=MThoZGo3YzRhbW13dg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white text-2xl hover:text-green-500 transition duration-300 ease-in-out"
            />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className="icon-hover text-white text-2xl  "
            />
          </a>
        </div>
        <button
          className="button-hover rounded-lg text-white px-6 py-2 bg-green-600 font-semibold mt-4 text-center w-[40%]"
          id="btn-contact"
        >
          <a href="#contact" className="text-center">
            Contact Us
          </a>
        </button>
      </div>
      <div
        className="relative z-10 w-1/2 flex items-center justify-center sm:flex"
        id="dummy"
      >
        <img
          src="/dummy.webp"
          alt="Banner Image"
          className="object-cover w-3/4 h-3/4 rounded-full shadow-lg animate-bounce-slow animate-rotate"
        />
      </div>
    </div>
  );
}
