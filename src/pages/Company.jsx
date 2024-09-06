import React from 'react'
import { useScroll, useTransform } from 'framer-motion'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Comments from '../components/Comments'
import Hero from '../components/Hero'
import Teams from '../components/Teams'

export default function Company() {

  const { scrollYProgress } = useScroll()

  const yPos = useTransform(scrollYProgress, [ 0, 1], [0, 300])


  return (
    < >
      <Hero  />
      <About y={yPos} />
      <Teams y={yPos} />
      <Comments />
    </>
  )
}
