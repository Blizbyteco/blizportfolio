import React from 'react'
import { motion } from 'framer-motion'

export default function Teams({ y }) {
    const BASE_URL = window.location.origin;
    const data = [
        {
            name: "Alvin Setya Pranata",
            role: "Backend Developer",
            photo: "alvin.jpg"
        },
        {
            name: "Wahyudi Firmansyah",
            role: "Frontend Developer",
            photo: "wahyudi.jpg"
        },
        {
            name: "Syaiful Miqdar",
            role: "UI/UX Designer",
            photo: "ipul.png" 
        }
    ];
    return (
        <motion.div
            className='px-12 py-36'
            style={{
                y: y
            }}
        >
            <h1 className='text-6xl font-semibold'>Meet our experts</h1>

            <div className='grid grid-cols-3 w-full py-20 px-12 gap-x-12'>
                {/* cards */}
                {data.map((profile, index) => (
                    <div className="relative">
                        <img className='w-full h-full aspect-square object-cover grayscale' src={BASE_URL + "/photos/" + profile.photo} alt="profile" />
                        <div className='opacity-0 hover:opacity-70 bg-black w-full h-full absolute top-0 left-0 text-white flex flex-col justify-center items-center transition-opacity duration-150 ease-in'>
                            <h3 className='text-2xl font-semibold'>{profile.name} </h3>
                            <p>{profile.role}</p>
                        </div>
                    </div>
                ))}
                {/* end cards */}
            </div>
        </motion.div>
    )
}
