"use client";
import { useParams, useRouter } from "next/navigation";
import workData from "@/Data/Ourwork.json";
import { motion } from "framer-motion";

export default function WorkDetails() {
  const router = useRouter();
  const { workshopId } = useParams();

  const workshop = workData.Previous.Workshops.find(
    (item) => item.id === parseInt(workshopId)
  );

  if (!workshop) {
    return <div className="text-center mt-20">Workshop not found</div>;
  }

  return (
    <div className="container mx-auto pt-32 p-6 text-white relative">

    <motion.h1
      className="text-4xl text-center font-extrabold mb-8"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {workshop.name}
    </motion.h1>
    

    <motion.h1
      className="text-center text-xl pt-5"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {workshop.content}
    </motion.h1>
    

    <div className="space-y-16 p-5 md:p-8 my-5 text-justify">
      {workshop.images.map((image, index) => (
        <motion.div
          key={index}
          className={`flex flex-col justify-center md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } gap-10 md:gap-2`}
         
        >
       
          <motion.div
            className="flex-shrink-0 max-md:w-full mx-auto flex items-center"
            whileHover={
              {scale:1.05}
            }
            initial={index % 2 !== 0 ? {x:30} : {x:-30}}
            animate={{ x: 0 }}
            transition={{ duration: .7 }}
          >
            <img
            
              src={image}
              alt={`Project image ${index + 1}`}
              className="rounded-lg  md:h-96  object-cover"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="md:w-[65%] w-full flex md:p-10 flex-col justify-center space-y-4"
            whileInView={
              index % 2 !== 0 ? {x:10} : {x:-10}
            }
            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            {workshop[`round${2 * index + 1}`] && (
              <p className="text-lg">{workshop[`round${2 * index + 1}`]}</p>
            )}
            {workshop[`round${2 * index + 2}`] && (
              <p className="text-lg">{workshop[`round${2 * index + 2}`]}</p>
            )}
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
  );
}
