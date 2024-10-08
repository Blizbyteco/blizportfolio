import React from "react";

export default function Hero() {
  return (
    <div 
    className="text-black min-h-screen w-full py-36"
    >
      <div className="py-6 px-12 bg-white w-full">
        <div className="flex justify-end w-full">
          <h2 className="text-lg text-gray-700">
            The solution for your needs
          </h2>
        </div>

        <h1 className="font-primary font-semibold text-7xl mt-16">
          Suite your need
        </h1>
      </div>

      <div>
        <div className="bg-fixed bg-top bg-banner min-h-[65dvh] min-w-full bg-no-repeat bg-cover -z-10"></div>
      </div>

      <div className="flex px-8 mt-16 justify-between items-center">
        <div className="max-w-lg">
          <h3 className="text-xl">
            We're Softwere developer team that expirienced in Website, Mobile
            fields solutions
          </h3>
        </div>
        <div className="max-w-lg">
          <h3 className="text-xl">With us, we can provide a solution for application that suit for your products and also we implement best practices to build an app that implement UI/UX design theory</h3>
        </div>
      </div>
    </div>
  );
}