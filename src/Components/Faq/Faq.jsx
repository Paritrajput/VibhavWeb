"use client";
import React, { useState } from "react";

function Faq() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const faqs = [
    {
      question: "How do I contact support?",
      answer: "You can use the contact form to email us with your query.",
    },
    {
      question: "What is your response time?",
      answer: "We usually respond within 24 hours on business days.",
    },
    {
      question: "Can I schedule a demo?",
      answer:
        "Yes, reach out to us using the contact form or on social media to schedule a demo.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  return (
    <div className="w-[90%] sm:w-[80%]">
      <div className="text-white p-6 m-9 h-fit rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-6 border-b pb-4">
            <button
              className="w-full text-left text-lg font-semibold text-black-600 flex justify-between items-center"
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
              <span className="text-gray-500">
                {openFaqIndex === index ? "-" : "+"}
              </span>
            </button>
            {openFaqIndex === index && (
              <p className=" h-fit-content  mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
