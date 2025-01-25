"use client";
import React, { useState } from "react";
import Faqs from "@/Data/Faq.json";

function Faq() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-[100%] sm:w-[70%] mx-auto">
      <div className="text-white p-6 m-9 h-fit rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        {Faqs.faqs.map((faq, index) => (
          <div key={index} className="mb-6 border-b pb-4">
            <button
              className="w-full text-left text-lg font-semibold text-black-600 flex justify-between items-center"
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
              <p className="mt-2 text-gray-200">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
