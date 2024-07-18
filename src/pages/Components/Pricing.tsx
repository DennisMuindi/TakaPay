import React from "react";

export default function Pricing() {
  const pricingPlans = [
    {
      title: "Single Room",
      price: "KES 120",
      features: ["Garbage Collection"],
    },
    {
      title: "Bedsitter",
      price: "KES 200",
      features: ["Bi-Weekly Garbage Collection", "Monthly Toilet Cleaning"],
    },
    {
      title: "One Bedroom +",
      price: "KES 300",
      features: ["Bi-Weekly Garbage Collection", "Monthly Toilet Cleaning"],
    },
    {
      title: "Primary School",
      price: "KES 900",
      features: ["Bi-Weekly Garbage Collection", "Toilet Cleaning"],
    },
    {
      title: "Nursery Schools",
      price: "KES 300",
      features: ["Bi-Weekly Garbage Collection", "Toilet Cleaning"],
    },
    {
      title: "Corporate",
      price: "KES 2500",
      features: ["Bi-Weekly Garbage Collection", "Toilet Cleaning"],
    },
    {
      title: "Clubs",
      price: "KES 1500",
      features: ["Bi-Weekly Garbage Collection", "Toilet Cleaning"],
    },
    {
      title: "Restaurants",
      price: "KES 1200",
      features: ["Bi-Weekly Garbage Collection", "Toilet Cleaning"],
    },
    {
      title: "Churches",
      price: "KES 1000",
      features: ["Bi-Weekly Garbage Collection", "Toilet Cleaning"],
    },
  ];

  return (
    <div id="pricing" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Pricing</h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that best suits your institutions waste management
            needs.
          </p>
        </div>

        <div className="mt-12 overflow-x-hidden relative">
          <div className="whitespace-nowrap flex animate-scroll">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                id="scroll-div"
                className="inline-block w-1/3 mx-4 rounded-lg shadow-lg overflow-hidden bg-white"
                style={{ minWidth: "30%" }}
              >
                <div className="px-6 py-8">
                  <h3 className="text-xl font-bold text-gray-900">
                    {plan.title}
                  </h3>
                  <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                    {plan.price}
                    <span className="ml-1 text-2xl text-gray-600">/mo</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-6 py-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg
                          className="w-6 h-6 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-3 text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
