import Link from 'next/link'
import React from 'react'
import { UserButton, auth } from "@clerk/nextjs";
 

const Navbar = () => {
  const { userId } = auth();

  return (
    <header className=' w-full mb-5 bg-slate-900 py-4'>
      <div  className="container flex items-center justify-between">
          <h1 className='text-[#EF47BC] font-medium text-xl'>ProManger</h1>
          <div>
            <ul className='flex gap-3 items-center'>
              <li>
                <Link className='text-white opacity-60 font-thin text-lg' href="/">Home</Link>
              </li>
              <li>
                <Link className='text-white opacity-60 font-thin text-lg' href="/newProject">New</Link>
              </li>
            </ul>
          </div>
          <div>
            {
              userId ? 
              <UserButton afterSignOutUrl="/" />
              :
              <div className='flex items-center gap-3'>
                <Link href="sign-up" >
                  <button className='text-white  font-medium border-2 border-[#EF47BC] rounded-lg px-4 py-2  '>
                    Sign Up
                  </button>
                </Link>
                <Link href="sign-in" >
                  <button className='text-white font-medium bg-[#EF47BC] rounded-lg px-4 py-2 btn'>
                    Sign In
                  </button>
                </Link>
              </div>
            }
          </div>
      </div>
    </header>
  )
}

export default Navbar