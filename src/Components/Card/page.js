import React from "react";

export default function ProfileCard() {
  return (
    <div className="flex gap-5 items-center justify-center h-screen  ">
      <div className="relative bg-white rounded-xl shadow-lg w-72 h-96 overflow-hidden group">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/ParthTailor.webp" // Replace with your image URL
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blurred Text Container */}
        <div className=" group-hover:translate-y-12 absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent backdrop-blur-md p-4 text-white transition-all duration-500 ease-in-out  flex flex-col items-center ">
          <h1 className="text-lg font-semibold">Parth Tailor</h1>
          <p className="text-sm text-gray-300 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
            Member
          </p>
          <div className="flex justify-center space-x-4 mt-4 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <img src="/github.png" className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <img src="/x-icon.svg" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative bg-white rounded-xl shadow-lg w-72 h-96 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/ParthTailor.webp" // Replace with your image URL
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blurred Text Container */}
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent backdrop-blur-md p-4 text-white flex flex-col items-center">
          <h1 className="text-lg font-semibold">Parth Tailor</h1>
          <p className="text-sm text-gray-300">Member</p>
          {/* <p className="mt-2 text-sm">
            "Creating impactful software solutions for the world."
          </p> */}
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <img src="/github.png" size={24} />
            </a>
            <a
              href="https://twitter.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <img src="/x-icon.svg" className="h-7" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative bg-white rounded-xl shadow-lg w-72 h-96 overflow-hidden group">
        {/* Background Image */}
        <div className="absolute inset-0 transition-all duration-500 ease-in-out group-hover:bg-gradient-to-t from-black/70 to-transparent  group-hover:blur-xl">
          <img
            src="/ParthTailor.webp" // Replace with your image URL
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Rounded Top Center Image */}
        <div className="absolute top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out">
          <img
            src="/ParthTailor.webp" // Replace with your image URL
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blurred Text Container */}
        <div className="absolute bottom-0 w-full group-hover:p-12 backdrop-blur-md p-4 text-white transition-all duration-500 ease-in-out group-hover:flex group-hover:flex-col group-hover:items-center ">
          <h1 className="text-lg font-semibold">Parth Tailor</h1>
          <p className="text-sm text-gray-300">Member</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <img src="/github.png" className="w-7 h-7" />
            </a>
            <a
              href="https://twitter.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <img src="/x-icon.svg" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
