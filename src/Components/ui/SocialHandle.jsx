import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function SocialHandle() {
  return (
    <div>
      <ul className='flex w-full sm:flex-col gap-2 items-center p-1'>
        <li>
        <Link href='#'>
          <Image src={'/Assets/icons/github.png'} width={35} height={35}></Image>
          </Link>
        </li>
        <li>
        <Link href='#'>
          <Image src={'/Assets/icons/facebook.png'} width={35} height={35}></Image>
          </Link>
        </li>
        <li>
          <Link href='#'>
          <Image src={'/Assets/icons/discord.png'} width={35} height={35}></Image>
          </Link>
  
        </li>
        <li>
          <Link href='#'>
          <Image src={'/Assets/icons/instagram.png'} width={35} height={35}></Image>
          </Link>
        </li>
        <li>
          <Link href='#'>
          <Image src={'/Assets/icons/linkedin.png'} width={35} height={35}></Image>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SocialHandle
