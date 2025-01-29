"use client";
import React, { useState } from "react";
import Faqs from "@/Data/Faq.json";

function Faq() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-[100%] sm:w-[70%] mx-auto z-30">
      <div className="text-white p-2 sm:p-6 m-9 h-fit rounded-lg shadow-md">
        <h2 className="sm:text-3xl text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        {Faqs.faqs.map((faq, index) => (
          <div key={index} className="mb-6 border-b pb-4">
            <button
              className="w-full text-left text-md sm:text-lg sm:font-semibold font-medium text-black-600 flex justify-between items-center"
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
              <span
                className={`transform transition-transform duration-300 ease-in-out ${
                  openFaqIndex === index ? "rotate-45" : "rotate-0"
                } text-gray-500`}
              >
                <span className="h-20 w-20">+</span>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openFaqIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="mt-2 text-sm sm:text-md font-light text-gray-200">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
