import { motion } from "framer-motion";
import React from "react";

export default function About({y}) {
  return (
    <motion.div
    style={{
      y: y
    }}
    className="py-36 px-12">
      <h1 className=" text-6xl font-semibold">Why choose us?</h1>
      <div className="flex justify-end">
        <p className="mt-24 text-xl max-w-2xl text-right leading-relaxed">
          Our priority to make a beautiful design that implement best use case
          which have a high quality design and improve it's performance
        </p>
      </div>
    </motion.div>
  );
}
