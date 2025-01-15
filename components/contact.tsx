"use client"

import React from 'react'
import SectionHeader from './section-header'
import { motion } from "framer-motion"
import {sendEmail} from "@/actions/sendEmail"
import SubmitBtn from './submit-btn'
import toast from "react-hot-toast"

export default function Contact() {


  return (
    <motion.section 
      id="contact" 
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-36'
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      viewport={{once:true}}
    >
      <SectionHeader>Contact</SectionHeader>
      <p className='text-gray-700 -mt-5 dark:text-white dark:text-opacity-80'>Please contact me directly at{" "}
        <a className='underline' href='mailto:frn.awr@gmail.com'>frn.awr@gmail.com</a>{" "}
        or through this form.
      </p>

    <form 
      className='mt-10 flex flex-col dark:text-black' 
      action={async formData => {
        const{data, error} = await sendEmail(formData);

        if(error){
          toast.error(error);
          return;
        }

        toast.success("Email sent successfully!");
      }}>
      <input type="email" required maxLength={500} placeholder="Your email" 
      name="senderEmail"
      className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'></input>
      <textarea required maxLength={5000} placeholder="Your message" 
      name="message"
      className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'/>
      <SubmitBtn/>
    </form>
    
    </motion.section>
  )
}
