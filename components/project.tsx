"use client"

import React, { useRef } from 'react'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { useScroll, motion, useTransform } from 'framer-motion'

/* typescript shortcut for

    type ProjectProps = {
    title: string;
    description: string;
    ...
};
*/
type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl, url}:
    ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.30 1"]
    });

    //custom scroll animations to adjust (mainly) the initial scaling
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress
            }}
            className='group mb-3 sm:mb-8'>

            <article className=' relative bg-gray-100 max-w-[42rem] borderBlack overflow-hidden sm:pr-8 rounded-lg hover:bg-gray-200 transition dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20
            dark:text-white'>

                <div className='flex flex-col px-5 pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] sm:h-[20rem] h-full sm:group-even:ml-[20rem]'>
                    <h3 className='text-2xl font-semibold'>{title}</h3>
                    <p className='my-2 text-sm leading-relaxed text-gray-700 dark:text-white dark:text-opacity-70'>{description}</p>
                    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                        {tags.map((tag, index) => (
                            <li className='bg-black bg-opacity-75 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-opacity-75' key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>

                <Image
                    src={imageUrl}
                    alt={title}
                    className='absolute hidden sm:block top-8 -right-40 w-[28rem] rounded-t-2xl shadow-2xl group-even:-right-[initial] group-even:-left-40 
                transition
                group-hover:scale-[1.05]

                group-hover:-translate-x-3 
                group-hover:translate-y-3
                group-hover:-rotate-2
                
                group-even:group-hover:translate-x-3 
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2
                
                hover:cursor-pointer'
                onClick={() => window.open(url, '_blank')}
                />
            </article>
        </motion.div>
    )
}