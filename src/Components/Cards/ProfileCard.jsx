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




function ProfileCard({
  name,
  position,
  profileImg,
  backgroundImg,
  githubLink,
  linkdinLink,
}) {
  return (
    <div className="relative bg-white rounded-xl shadow-lg w-72 h-96 overflow-hidden group">
      {/* Background Image */}
      <div className="absolute inset-0 transition-all duration-500 ease-in-out group-hover:bg-gradient-to-t from-black/70 to-transparent group-hover:blur-xl overflow-hidden">
        <img
          src={backgroundImg}
          alt={`${name}'s Background`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Rounded Top Center Image */}
      <div className="absolute top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:overflow-hidden transition-all duration-500 ease-in-out">
        <img
          src={profileImg}
          alt={`${name}'s Profile`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blurred Text Container */}
      <div className="absolute bottom-0 w-full group-hover:p-10 backdrop-blur-md p-4 text-white transition-all duration-500 ease-in-out group-hover:flex group-hover:flex-col group-hover:items-center overflow-hidden">
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="text-sm text-gray-300">{position}</p>
        <div className="flex justify-center space-x-4 mt-4">
          <div>
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <img src="/github.png" className="w-8 h-8" alt="GitHub" />
              </a>
            )}
          </div>
          <div>
            {linkdinLink && (
              <a
                href={linkdinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <img
                  src="/linkedin-icon.png"
                  className="w-8 h-8 "
                  alt="Twitter"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
