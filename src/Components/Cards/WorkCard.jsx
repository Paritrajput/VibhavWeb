import { FaEye } from "react-icons/fa";
import Link from "next/link"; // Import Link for routing

const WorkCard = ({ work ,type,year}) => {
  return (
    <Link href={`/Work/${year}/${type}/${work.id}`}>
      <div className="group relative w-full h-64 bg-cover bg-center rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${work.images})` }}
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
