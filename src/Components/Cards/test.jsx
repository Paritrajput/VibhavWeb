import React from "react";

export function SkeletonProfileCard() {
  return (
    <div className="relative bg-gray-200 rounded-xl shadow-lg w-72 h-96 overflow-hidden animate-pulse">
      {/* Background Image Skeleton */}
      <div className="absolute inset-0 bg-gray-300"></div>

      {/* Rounded Top Center Image Skeleton */}
      <div className="absolute top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-gray-400 border-4 border-gray-200"></div>

      {/* Blurred Text Container Skeleton */}
      <div className="absolute bottom-0 w-full p-4 text-gray-500 backdrop-blur-md">
        <div className="w-3/4 h-4 bg-gray-400 rounded mb-2 mx-auto"></div>
        <div className="w-1/2 h-3 bg-gray-300 rounded mx-auto"></div>
        <div className="flex justify-center space-x-4 mt-4">
          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

function ProfileCard({ name, position, profileImg, backgroundImg, githubLink, linkdinLink }) {
  return (
    <div className="relative bg-white rounded-xl shadow-xl w-72 h-96 overflow-hidden group transition-all duration-500 ease-in-out hover:scale-[1.05] hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 transition-all duration-500 ease-in-out group-hover:blur-sm group-hover:brightness-50 overflow-hidden">
        <img src={backgroundImg} alt={`${name}'s Background`} className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700" />
      </div>

      {/* Rounded Profile Image */}
      <div className="absolute top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out">
        <img src={profileImg} alt={`${name}'s Profile`} className="w-full h-full object-cover" />
      </div>

      {/* Blurred Text Container */}
      <div className="absolute bottom-0 w-full p-4 text-white transition-all duration-500 ease-in-out group-hover:p-10 backdrop-blur-md bg-gradient-to-t from-black/70 to-transparent">
        <h1 className="text-lg font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500">{name}</h1>
        <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{position}</p>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <img src="/github.png" className="w-8 h-8" alt="GitHub" />
            </a>
          )}
          {linkdinLink && (
            <a href={linkdinLink} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <img src="/linkedin-icon.png" className="w-8 h-8" alt="LinkedIn" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
