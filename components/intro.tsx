"use client";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import portrait from "@/public/portrait.png";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { ImNewTab } from "react-icons/im";
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
    return (
        // dividing single page sections, start of intro section
        <section id='home' className='mb-[7rem] max-w-[50rem] text-center sm:mb-0 scroll-mt-96'>
            <div className='flex flex-col items-center justify-center sm:flex-row'>
                <div className='flex sm:flex-[30%]'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2
                        }}
                    >

                        <Image
                            priority={true}
                            src={portrait}
                            alt="Ferhan Portrait"
                            width="1000"
                            height="1000"
                            className='rounded-full h-36 w-36 border-[0.35rem] border-white shadow-xl sm:h-[15rem] sm:w-[15rem]' />
                    </motion.div>
                </div>
                <div className='flex sm:flex-[60%] pl-2'>
                    {/* !leading overrides line height from text-2xl */}
                <motion.p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:my-14"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="font-bold">Hi, I'm Ferhan.</span> I'm a{" "}
                    <span className="font-bold">Web Developer</span> based in {" "}
                    <span className='italic'>Toronto, ON, Canada. </span> I have a{" "}
                    <span className="font-bold">Bachelor's Degree in Computer Science</span> from {" "}
                    <span className="underline">Toronto Metropolitan University,</span> and I have a passion for building visually pleasing{" "}
                    <span className="italic">sites & apps</span>. My focus is{" "}
                    <span className="underline">React (Next.js)</span>.
                </motion.p>
                </div>

            </div>

            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1
                }}
            >
                {/* First use of group in tailwind css */}
                <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>
                    Contact me here
                    <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
                </Link>

                <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white dark:bg-opacity-10 dark:text-white dark:text-opacity-75' href="/Resume.pdf" target="_blank" rel="nonreferrer">
                    View CV
                    <ImNewTab className='opacity-70 group-hover:scale-110 transition' />
                </a>

                <a className='bg-white p-4 text-gray-800 text-[1.25rem] flex items-center gap-2 rounded-full outline-none focus:scale-125 hover:scale-125 active:scale-105 transition cursor-pointer borderBlack dark:bg-opacity-10 dark:text-white dark:text-opacity-75' href="https://www.linkedin.com/in/ferhan-a-7227a1114" target="_blank" >
                    <BsLinkedin />
                </a>

                <a className='bg-white p-4 text-gray-800 text-[1.45rem] flex items-center gap-2 rounded-full outline-none focus:scale-125 hover:scale-125 active:scale-105 transition cursor-pointer borderBlack dark:bg-opacity-10 dark:text-white dark:text-opacity-75' href="https://www.github.com/ferhananwar" target="_blank" >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    )
}
