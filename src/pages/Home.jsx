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
        velocity: 100,
      },
    },
  };


  const imageZoomVariant = {
    initial: {
      scale: 2
    },

    animate: {
      scale: 1
    }
  }

  return (
    <>
      <div
        className='min-h-screen
     px-12 py-36 bg-[url("https://img.freepik.com/free-photo/low-angle-view-skyscrapers_1359-1105.jpg?t=st=1725579488~exp=1725583088~hmac=50e6c70b6590ee0ecd674e7d30582c0ce229c7c1ac8a2b6a8d4a6f033f54d349&w=2000")] bg-no-repeat bg-cover relative'
      >
        {/* backdrop */}
        <div className="absolute left-0 top-0 size-full bg-black bg-opacity-75 text-6xl text-white flex items-end"></div>
        {/* end backdrop */}

        <div className="absolute bottom-[20%] left-8 z-10">
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.03, ease: easeIn }}
            className=" font-primary font-medium text-white text-4xl md:text-6xl overflow-hidden flex py-1 items-center"
          >
            {"Turn your dream app".split("").map((word, index) => (
              <motion.h2 className="font-primary" variants={textAnimations} key={index}>
                {word == " " ? "\u00A0" : word}
              </motion.h2>
            ))}
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            transition={{
              staggerChildren: 0.03,
              ease: easeIn,
              delayChildren: 0.4,
            }}
            className="font-primary font-medium text-white text-4xl md:text-6xl overflow-hidden flex mt-1 md:mt-4 py-1 items-center"
          >
            {"into reality".split("").map((word, index) => (
              <motion.h2 variants={textAnimations} key={index}>
                {word == " " ? "\u00A0" : word}
              </motion.h2>
            ))}
          </motion.div>
        </div>
      </div>

      {/* content */}

      <div className="w-full p-12 text-2xl">
        <div className="flex justify-between items-start w-full">
          <h2 className="max-w-sm">
            Blizbyteco is changing local market to make sure they know the
            benefits of using websites
          </h2>
          <h2 className="max-w-2xl text-right">
            Our company creates high-performance web and Android apps,
            delivering reliable UI/UX designs and tailored solutions using the
            latest technology.
          </h2>
        </div>
      </div>

      <div className="mt-32">
        <div className="flex flex-col items-center">
          <div className="sticky top-28 left-1/2 -translate-x-1/2">
        
            
              <h1 className="text-7xl font-normal font-primary z-30">
                Products
              </h1>
          
        
          </div>

          <div className="min-h-screen items-center w-full px-6">
            <div className="flex justify-between items-center shrink-0 flex-1 w-full h-full">
              <h3 className="text-2xl font-primary font-normal max-w-md">
                Tell your products to the world trough our technology
              </h3>
          
              <div className={`bg-[url('https://img.freepik.com/free-photo/senior-investor-buying-startup-handshaking-young-entrepreneur-group-meeting_1163-4888.jpg?t=st=1725703325~exp=1725706925~hmac=5c993359bef8627c5b51982219e91305644282cf7f376f762ae6a4b77e3d8fb4&w=2000')] bg-fixed bg-no-repeat bg-cover bg-center w-1/2 h-screen relative before:absolute before:content-[''] before:bg-opacity-25 before:left-0 before:top-0 before:w-full before:h-full before:bg-black -z-10 before:z-20 bg-slate-500`}
    ></div>
            </div>
            <div className="flex justify-between items-center shrink-0 flex-1 w-full h-full">
              <h3 className="text-2xl font-primary font-normal max-w-md">
                We use latest technology, to make your website is in high
                performance
              </h3>
              <div className={`bg-[url('https://img.freepik.com/free-photo/manager-showing-african-clientannual-financial-report-wearing-face-mask-against-covid19_482257-2041.jpg?t=st=1725703564~exp=1725707164~hmac=cbd4f4fdb5ea083d8228ae0aabfe2e821b371409c1490ea0b8f2fd3f6189f25b&w=2000')] bg-fixed bg-no-repeat bg-cover bg-center w-1/2 h-screen relative before:absolute before:content-[''] before:bg-opacity-25 before:left-0 before:top-0 before:w-full before:h-full before:bg-black -z-10 before:z-20 bg-slate-500`}
    ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen w-full bg-white py-36 px-16">
            <h2 className="font-medium text-6xl">Talk with our experts</h2>
            <div className="flex gap-x-4">
              <input type="text" className="py-6 px-4 w-1/2 border-2 border-black rounded-md outline-none mt-12 text-xl"   />
              <button className="w-[300px] bg-black text-white rounded-md">Send Email</button>
            </div>
      </div>
    </>
  );
}