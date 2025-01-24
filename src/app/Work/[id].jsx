"use client"
import { useRouter } from 'next/router';
import workData from '@/Data/Work.json'; // Import work data

export default function WorkDetails() {
  const router = useRouter();
  const { id } = router.query;

  // Find project by ID
  const project = workData.find((item) => item.id === parseInt(id));

  if (!project) {
    return <div className="text-center mt-20">Project not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
      <div className="relative w-full h-80 bg-cover bg-center rounded-lg mb-6" style={{ backgroundImage: `url(${project.image})` }}></div>
      <p className="text-lg">{project.description}</p>
    </div>
  );
}
