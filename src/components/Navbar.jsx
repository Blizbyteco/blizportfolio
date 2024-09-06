import { useMotionValueEvent, useScroll } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (y) => {
    if (y > 50) {
      setIsScrolling(true)
    }else {
      setIsScrolling(false)
    }
  })

  return (
    <div className={`fixed z-50 flex gap-x-12 bg-white ${isScrolling ? "bg-opacity-100 text-black" : "bg-opacity-0 text-white"} w-full items-center p-6 transition-colors duration-200 ease-in`}>
      <div className="flex items-center gap-x-20">
        <img src="/logo.png" alt="logo" className="size-12"/>

        <div className="flex gap-x-12">
          <Link className="relative group" to="/" >
            <p className="mb-1">Home</p>
            <div className="absolute bottom-0 left-0 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-200 ease-in"></div>
          </Link>
          <Link className="relative group" to="/company" >
            <p className="mb-1">Company</p>
            <div className="absolute bottom-0 left-0 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-200 ease-in"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
