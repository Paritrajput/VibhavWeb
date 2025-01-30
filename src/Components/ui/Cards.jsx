import React from 'react'
import Image from 'next/image'

function Cards() {
  return (
    <div className='flex flex-wrap gap-10 mx-auto justify-center'>
      <div className='bg-white rounded-lg relative '>
        <Image src={'/Assets/TeamPhotos/Third/VISHESH chaddha.webp'} width={300} height={300} className='object-contain rounded-lg'></Image>
        <div className="text-center w-full mx-auto bottom-0 text-white font-[60px] absolute z-10 backdrop-blur-md rounded-lg">Vishesh Chadha</div>
      </div>
      <div className='bg-white rounded-lg relative '>
        <Image src={'/Assets/TeamPhotos/Third/Sahil.webp'} width={300} height={300} className='object-contain rounded-lg'></Image>
        <div className="text-center w-full mx-auto bottom-0 text-white font-[60px] absolute z-10 backdrop-blur-md rounded-lg">Sahil Atri</div>
      </div>
    </div>
  )
}

export default Cards

