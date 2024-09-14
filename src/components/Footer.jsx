import React, { useState } from "react";
import { motion } from "framer-motion";


export default function Footer() {

  const [hover, setHover] = useState(null)

  const getButtonStyle = (id) => {
    console.log(hover + " " + id)
    if (hover) {
      if (hover == id) {
        return "text-black"
      } else {
        return "text-red-500"
      }
    }

    return "text-black"
  }


  return (
    <div className="min-h-[50dvh] w-full bg-[#ebebeb] text-black mt-32 p-8">
      <div className="flex flex-col justify-between">
        <div onMouseLeave={() => setHover(null)} className="flex flex-col items-start gap-y-3 font-normal text-lg w-max">
          <motion.button whileHover={() => setHover(0)} className={getButtonStyle(0)}>Home</motion.button>
          <motion.button whileHover={() => setHover(1)} className={getButtonStyle(1)}>Company</motion.button>
         
        </div>
        <h2 className="text-6xl font-medium mt-12">Blizbyteco</h2>
      </div>
    </div>
  );
}
