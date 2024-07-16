import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            We'd love to hear from you! Reach out to us via phone or follow us
            on social media.
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 p-6 bg-gray-100">
            <img
              src="/contact.jpg"
              alt="Communication"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 p-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900">Get in Touch</h3>
              <div className="mt-4 flex items-center justify-center md:justify-start">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-6 h-6 text-green-600"
                />
                <span className="ml-3 text-gray-700">(+254)105348811</span>
              </div>
              <div className="mt-8 flex items-center justify-center md:justify-start space-x-6">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="w-8 h-8 text-gray-700 hover:text-green-600"
                  />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="w-8 h-8 text-gray-700 hover:text-green-600"
                  />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="w-8 h-8 text-gray-700 hover:text-green-600"
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
