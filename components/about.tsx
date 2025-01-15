"use client"

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './section-header'

export default function About() {

  return (
    <motion.section 
    className='text-center max-w-[45rem] mb-28 leading-8 scroll-mt-28 sm:scroll-mt-36'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      id="about"
    >
      <SectionHeader>About Me</SectionHeader>
      <p className="mb-3"> After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span> from {" "}
        <span className="font-medium">Toronto Metropolitan University (TMU)</span>, I decided to pursue my passion for web development. While my degree provided me a solid foundation, I took the initiative to self-teach in-demand skills that extended beyond the curriculum, including {" "}
        <span className="font-medium">JavaScript, React, Next.js, TypeScript, and Framer Motion,{" "}</span> to stay ahead of the fast-evolving field of Web Development. Working in the fast food industry for up to two years has shaped my ability to adapt and learn quickly, and improve my problem-solving skills to ensure customer satisfaction. {" "}
        <span className="italic">Balancing a full-time job while learning{" "}</span> the skills needed to stay relevant in this field has been a fruitful experience, to say the least! With the technical skills I've mastered thus far, along with the qualities I continue to develop as a recently promoted restaurant supervisor, I believe I can be a valuable asset to your team. 
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy cooking, playing video games, watching movies, and playing my guitar. I also enjoy{" "}
        <span className="italic">learning new things</span>. I am currently learning to speak in {" "}
        <span className="font-medium">Portugese and Arabic</span> through {" "}
        <span className="font-medium">Duolingo</span>. I am familiar with and can conversate in {" "} 
        <span className="font-medium">Bangla, Hindi and Urdu</span> as well.
      </p>
    </motion.section>
  )
}
