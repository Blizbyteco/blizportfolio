import React from 'react'

export default function Teams() {
  return (
    <div className='px-6 py-36'>
        <h1 className='text-6xl font-semibold'>Meet our teams</h1>
        <div className='grid grid-cols-6 w-full py-12'>
            {/* cards */}
            <div className='w-[300px] h-[300px] bg-[url(`/profile.jpg`)]'></div>
        </div>
    </div>
  )
}
