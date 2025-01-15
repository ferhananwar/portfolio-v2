"use client"
import React from 'react'
import SectionHeader from './section-header'
import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion'

const fadeInVariants = {
    initial: {opacity: 0, y: 100},
    animate: {opacity: 1, y: 0},
};

export default function Skills() {
  return (
    <section className='max-w-[53rem] scroll-mt-36 text-center mb-28 sm:mb-[14rem]' id="skills">
        <SectionHeader>My skills</SectionHeader>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
            {
                skillsData.map((skill, index) => (
                    <motion.li 
                    variants={fadeInVariants}
                    initial="initial"
                    whileInView="animate"
                    transition= {{delay: 0.05 * index}}
                    viewport={{once: true}}
                    className='bg-white borderBlack rounded-3xl px-5 py-3 dark:bg-white dark:bg-opacity-10 dark:text-white dark:text-opacity-80'
                    key={index}>{skill}</motion.li>
                ))
            }
        </ul>
    </section>
  )
}
