"use client"
import { useParams, useRouter } from 'next/navigation';
import workData from '@/Data/Ourwork.json'; // Import work data

export default function WorkDetails() {
  const router = useRouter();
  const { eventId } = useParams()

  // Find project by ID
  const Events = workData.Current.Events.find((item) => item.id === parseInt(eventId));

  if (!Events) {
    return <div className="text-center pt-20">Project not found</div>;
  }

  return (
    <div className="container mx-auto p-6 text-center text-white">
      <div className='text-4xl font-extrabold py-5'>Current Year Events</div>
      <h1 className="text-3xl font-bold mb-4">{Events.name}</h1>
      <div className="relative w-full h-80 bg-cover bg-center rounded-lg mb-6" style={{ backgroundImage: `url(${Events.images})` }}></div>
      <p className="text-lg">{Events.content}</p>
    </div>
  );
}
