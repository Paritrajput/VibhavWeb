import { FaEye } from "react-icons/fa";
import Link from "next/link"; 

export const SkeletonWorkCard = () => {
  return (
    <div className="relative bg-gray-300 animate-pulse w-72 h-[22rem] md:w-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
      {/* Skeleton Background Image */}
      <div className="absolute inset-0 bg-gray-400"></div>

      {/* Hover Overlay Placeholder */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Eye Icon Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-gray-500 p-2 rounded-2xl">
          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
        </div>
      </div>

      {/* Name Section Placeholder */}
      <div className="absolute bottom-0 left-0 w-full p-0">
        <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-md p-2">
          <div className="h-5 bg-gray-400 rounded w-3/4 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};


const WorkCard = ({ work ,type,year}) => {
  return (
    <Link href={`/Work/${year}/${type}/${work.id}`}>
      <div className="group relative bg-cover w-72 h-[23rem] md:w-80 md:h-[25rem] bg-center rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
        
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${work.images[0]})` , backgroundSize:"cover"}}
        ></div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-70 transition-opacity duration-300"></div>

        {/* Eye Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black p-2 rounded-2xl">
            <FaEye className="text-white text-3xl" />
          </div>
        </div>

        {/* Name Section with Blurry Background */}
        <div className="absolute bottom-0 left-0 w-full p-0 ">
          <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-md p-2 transition-all duration-300 group-hover:backdrop-blur-md group-hover:bg-opacity-60">
            <h3 className="text-white text-lg font-semibold text-center">
              {work.name}
            </h3>

            {/* <h4 className="text-center">{work.content}</h4> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkCard;
