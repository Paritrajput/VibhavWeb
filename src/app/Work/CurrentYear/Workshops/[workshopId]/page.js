"use client"
import { useParams, useRouter } from 'next/navigation';
import workData from '@/Data/Ourwork.json'; 

export default function WorkDetails() {
  const router = useRouter();
  const { workshopId } = useParams()

  const project = workData.Current.Workshops.find((item) => item.id === parseInt(workshopId));

  if (!project) {
    return <div className="text-center mt-20">Project not found</div>;
  }

  return (
    <div className="container mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
      <div className="relative w-full h-80 bg-cover bg-center rounded-lg mb-6" style={{ backgroundImage: `url(${project.images})` }}></div>
      <p className="text-lg">{project.content}</p>
    </div>
  );
}
