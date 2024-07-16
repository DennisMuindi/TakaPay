import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Banner() {
  return (
    <div className="absolute inset-0 flex items-center justify-end flex-col w-full gap-6 bg-gray-900 bg-opacity-75 p-6 rounded-lg shadow-lg">
      <h1 className="text-white text-5xl font-semibold">
        Welcome to{" "}
        <span className="font-bold text-green-500 gradient-text">Takapay</span>
      </h1>

      <div className="flex gap-4">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-white text-2xl hover:text-green-500 transition duration-300 ease-in-out"
          />
        </a>
        <a
          href="https://www.instagram.com"
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
            className="text-white text-2xl hover:text-green-500 transition duration-300 ease-in-out"
          />
        </a>
      </div>
      <button className="rounded-lg text-white px-6 py-3 bg-green-600 hover:bg-green-500 transition duration-300 ease-in-out font-medium">
        <a href="#">Contact Us</a>
      </button>
    </div>
  );
}
