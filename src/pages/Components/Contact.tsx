import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div
      id="contact"
      className="bg-cover bg-center bg-no-repeat bg-gray-900 py-20"
      style={{ backgroundImage: "url('/garbage.jpeg')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl font-extrabold">Contact Us</h2>
          <p className="mt-4 text-lg">
            We would love to hear from you! Reach out to us via phone, email, or
            follow us on social media.
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 p-6 bg-gray-800 bg-opacity-75 rounded-lg">
            <img
              src="/contact.jpg"
              alt="Communication"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 p-6">
            <div className="text-center md:text-left">
              <h3 className="text-5xl font-bold text-white hover:text-green-500">
                Get in Touch
              </h3>
              <div className="mt-4 flex items-center justify-center md:justify-start space-x-4 text-gray-300">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-6 h-6 text-green-400"
                />
                <span className="text-gray-300">(254) 1053 48811</span>
              </div>
              <div className="my-3 flex items-center justify-center md:justify-start space-x-4 text-gray-300">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-6 h-6 text-green-400"
                />
                <span className="text-gray-300">info@taka-pay.com</span>
              </div>
              <div className="my-3 flex items-center justify-center md:justify-start space-x-4 text-gray-300 ">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="w-6 h-6 text-green-400"
                />

                <span className="text-gray-300">
                  Hillcrest Court, Westlands-Nairobi, P.O BOX 29460-0100
                </span>
              </div>
              <div className="mt-2 flex items-center justify-center md:justify-start space-x-4 text-gray-300">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="w-6 h-6 text-green-400"
                />

                <span className="text-gray-300">
                  Traders Housing Plaza, Room TH018R, Machakos,
                </span>
              </div>
              <div className="mt-8 flex items-center justify-center md:justify-start space-x-6">
                <a
                  href="https://www.facebook.com/profile.php?id=61562893823364"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="w-8 h-8 text-gray-300 hover:text-green-400"
                  />
                </a>
                <a
                  href="https://www.instagram.com/this_is_takapaymks?igsh=MThoZGo3YzRhbW13dg=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="w-8 h-8 text-gray-300 hover:text-green-400"
                  />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="w-8 h-8 text-gray-300 hover:text-green-400"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
