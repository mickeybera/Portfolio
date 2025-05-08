import React from 'react'

const Navbar = () => {
  return (
  <div>
    <nav className='flex justify-center items-center text-sm relative'>
        <div className='fixed top-5 z-[9999]'>
        <div className='border border-gray-600 rounded-full flex p-[1px] backdrop-blur-lg'>
            <a href="/" className='px-4 py-1 text-neutral-200'>Home</a>
            <a href="/projects" className='px-4 py-1 text-neutral-200'>Projects</a>
            <a href="/about" className='px-4 py-1 text-neutral-200'>About</a>
            <a href="/contact" className='px-4 py-1 bg-gray-200 rounded-full'>Contact</a>
        </div>
        </div>
    </nav>
  </div>
  )
}

export default Navbar