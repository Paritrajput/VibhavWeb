"use client"
import { useParams, useRouter } from 'next/navigation';
import workData from '@/Data/Ourwork.json'; 

export default function WorkDetails() {
  const router = useRouter();
  const { workshopId } = useParams()

  const project = workData.Previous.Workshops.find((item) => item.id === parseInt(workshopId));

  if (!project) {
    return <div className="text-center mt-20">Project not found</div>;
  }

  return (
    <div className="container mx-auto mt-5 p-6 text-white">
      <h1 className="text-4xl text-center font-extrabold mb-8">{project.name}</h1>
      <h1 className="text-center text-xl  pt-5">{project.content}</h1>
      <div className="space-y-16 p-5 md:p-8 my-5">
        {project.images.map((image, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } gap-10 md:gap-2`}
          >
           
            <div className="flex-shrink-0  max-md:w-full mx-auto">
              <img
                src={image}
                alt={`Project image ${index + 1}`}
                className="rounded-lg w-full md:w-80 h-80 object-cover"
              />
            </div>

            
            <div className="md:w-[65%] w-full flex md:p-10 flex-col justify-center space-y-4">
              {project[`round${2*index + 1}`] && (
                <p className="text-lg">{project[`round${2*index + 1}`]}</p>
              )}
              {project[`round${2*index + 2}`] && (
                <p className="text-lg">{project[`round${2*index + 2}`]}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
