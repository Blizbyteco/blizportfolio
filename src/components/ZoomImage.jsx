import { motion, useInView, useScroll, useMotionValue } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

export default function ZoomImage({imageURL}) {
   
    const containerRef = useRef()
    const isInView = useInView(containerRef, { once: true})

    const variant = {
        initial: {
            backgroundSize: "100% 100%"
        },

        animate: {
            backgroundSize: "120% 120%",
        }
    }

  return (
    <motion.div
        ref={containerRef}
        className={`bg-[url('${imageURL}')] bg-fixed bg-no-repeat bg-cover bg-center w-1/2 h-screen relative before:absolute before:content-[''] before:bg-opacity-25 before:left-0 before:top-0 before:w-full before:h-full before:bg-black -z-10 before:z-20`}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ type: "inertia", velocity: 200 }}
        variants={variant}
    ></motion.div>
  )
}
