import React from "react";

export default function Pricing() {
  const pricingPlans = [
    {
      title: "Households",
      price: "",
      features: ["Weekly Garbage Collection"],
    },
    {
      title: "Standard",
      price: "$29",
      features: ["Bi-Weekly Garbage Collection", "Monthly Toilet Cleaning"],
    },
    {
      title: "Pro",
      price: "$49",
      features: ["Weekly Garbage Collection", "Bi-Weekly Toilet Cleaning"],
    },
    {
      title: "Premium",
      price: "$69",
      features: ["Daily Garbage Collection", "Weekly Toilet Cleaning"],
    },
    {
      title: "Enterprise",
      price: "$99",
      features: [
        "Daily Garbage Collection",
        "Weekly Toilet Cleaning",
        "24/7 Support",
      ],
    },
    {
      title: "Gold",
      price: "$129",
      features: [
        "Daily Garbage Collection",
        "Daily Toilet Cleaning",
        "24/7 Support",
      ],
    },
    {
      title: "Platinum",
      price: "$159",
      features: [
        "Daily Garbage Collection",
        "Daily Toilet Cleaning",
        "24/7 Priority Support",
      ],
    },
    {
      title: "Diamond",
      price: "$199",
      features: [
        "Daily Garbage Collection",
        "Daily Toilet Cleaning",
        "Dedicated Support",
      ],
    },
    {
      title: "VIP",
      price: "$249",
      features: [
        "Daily Garbage Collection",
        "Daily Toilet Cleaning",
        "Personal Account Manager",
      ],
    },
    {
      title: "Ultimate",
      price: "$299",
      features: [
        "Daily Garbage Collection",
        "Daily Toilet Cleaning",
        "Exclusive Benefits",
      ],
    },
  ];

  return (
    <div id="pricing" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Pricing</h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that best suits your institution's waste management
            needs.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto">
          <div className="whitespace-nowrap flex animate-scroll">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
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
          animation: scroll 20s linear infinite;
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
