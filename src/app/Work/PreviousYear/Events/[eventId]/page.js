"use client"
import { useParams, useRouter } from 'next/navigation';
import workData from '@/Data/Ourwork.json'; // Import work data

export default function WorkDetails() {
  const router = useRouter();
  const { eventId } = useParams()

  // Find project by ID
  const project = workData.Previous.Events.find((item) => item.id === parseInt(eventId));

  if (!project) {
    return <div className="text-center mt-20">Project not found</div>;
  }

  return (
    <div className="container mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
      <div className="relative w-full h-80 bg-cover bg-center rounded-lg mb-6" style={{ backgroundImage: `url(${project.images})` }}></div>
      <p className="text-lg">{project.content}</p>
      <p className="text-lg">{project.round1}</p>
      <p className="text-lg">{project.round2}</p>
      <p className="text-lg">{project.round3}</p>
    </div>
  );
}
