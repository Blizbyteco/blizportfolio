import { easeIn, motion } from "framer-motion";
import React from "react";

export default function Home() {
  const textAnimations = {
    initial: {
      y: -80,
    },

    animate: {
      y: 0,
      transition: {
        type: "inertia",
        velocity: 100 
      },
    },
  };

  return (
    <>
    <div
      className='min-h-screen
     px-12 py-36 bg-[url("https://img.freepik.com/free-photo/low-angle-view-skyscrapers_1359-1105.jpg?t=st=1725579488~exp=1725583088~hmac=50e6c70b6590ee0ecd674e7d30582c0ce229c7c1ac8a2b6a8d4a6f033f54d349&w=2000")] bg-no-repeat bg-cover relative'
    >
      {/* backdrop */}
      <div className="absolute left-0 top-0 size-full bg-black bg-opacity-75 text-6xl text-white flex items-end"></div>
      {/* end backdrop */}

      <div className="absolute right-8 top-[20%] z-10 text-white">
        <p className="text-sm md:text-base max-w-sm md:max-w-lg text-right">
        Our company creates high-performance web and Android apps, delivering reliable UI/UX designs and tailored solutions using the latest technology.
        </p>
      </div>

      <div className="absolute bottom-[20%] left-8 z-10">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.03, ease: easeIn }}
          className=" font-primary font-medium text-white text-4xl md:text-6xl overflow-hidden flex py-1 items-center"
        >
          {"Turn your dream app".split("").map((word, index) => (
            <motion.h2 variants={textAnimations} key={index}>{word == " " ? "\u00A0" : word}</motion.h2>
          ))}
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.03, ease: easeIn, delayChildren: 0 }}
          className="font-primary font-medium text-white text-4xl md:text-6xl overflow-hidden flex mt-1 md:mt-4 py-1 items-center"
        >
         {"into reality".split("").map((word, index) => (
            <motion.h2 variants={textAnimations} key={index}>{word == " " ? "\u00A0" : word}</motion.h2>
          ))}
        </motion.div>
      </div>
    </div>

    {/* content */}

    <div className="min-h-screen w-full">
        <h2>Jel;</h2>
    </div>
    </>
  );
}
