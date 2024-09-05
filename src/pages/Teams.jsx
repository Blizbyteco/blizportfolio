import React from 'react'

export default function Teams() {
  return (
    <div className='h-[150dvh] px-12 py-36'>
        <h1 className='text-6xl font-semibold sticky top-0'>Meet our experts</h1>
        <div className='grid grid-cols-3 w-full py-20 px-12'>
            {/* cards */}
            <div className=' w-[350px] h-[400px] bg-[url("http://localhost:5173/profile.jpg")] bg-center bg-cover grayscale group'>
                <div className='group-hover:opacity-75 opacity-0 bg-black w-full h-full absolute top-0 left-0 text-white flex flex-col justify-center items-center transition-opacity duration-150 ease-in'>
                    <h3 className='text-2xl font-semibold'>Alvin Setya Pranata</h3>
                    <p>Backend Developer</p>
                </div>
            </div>
            {/* end cards */}
            {/* cards */}
            <div className=' w-[350px] h-[400px] bg-[url("http://localhost:5173/firman.webp")] bg-center bg-cover grayscale group'>
                <div className='group-hover:opacity-75 opacity-0 bg-black w-full h-full absolute top-0 left-0 text-white flex flex-col justify-center items-center transition-opacity duration-150 ease-in'>
                    <h3 className='text-2xl font-semibold'>Wahyudi Firmansyah</h3>
                    <p>Frontend Developer</p>
                </div>
            </div>
            {/* end cards */}
            {/* cards */}
            <div className=' w-[350px] h-[400px] bg-[url("http://localhost:5173/ipul.png")] bg-center bg-cover grayscale group'>
                <div className='group-hover:opacity-75 opacity-0 bg-black w-full h-full absolute top-0 left-0 text-white flex flex-col justify-center items-center transition-opacity duration-150 ease-in'>
                    <h3 className='text-2xl font-semibold'>Syaiful Miqdar</h3>
                    <p>UI/UX Designer</p>
                </div>
            </div>
            {/* end cards */}
        </div>
    </div>
  )
}
