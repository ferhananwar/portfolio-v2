"use client";

import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [observerEnabled, setObserverEnabled] = useState(true); // State to control observer

  useEffect(() => {
    if (!observerEnabled) return; // Disable observer when flag is false

    const sections = links.map(link => document.querySelector(link.hash));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const activeLink = links.find(link => link.hash === `#${entry.target.id}`);
            if (activeLink) {
              setActiveSection(activeLink.name);
              window.history.pushState(null,"",activeLink.hash);
            }
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.5, // Adjust this value to fine-tune when the link should be marked as active
      }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [links, observerEnabled]); // Add observerEnabled as a dependency

  type LinkType = (typeof links)[number];
  const handleClick = (link: LinkType["name"]) => {
    setActiveSection(link); 
    setObserverEnabled(false); // Disable the observer when link is clicked

    // Re-enable observer after a delay (to handle scroll)
    setTimeout(() => {
      setObserverEnabled(true);
    }, 1500); // Adjust the timeout value as needed
  };


  return (
    <header className="z-[999] relative">
      <motion.div className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-[1.5rem] sm:h-[3.25rem] sm:w-[32rem] sm:rounded-full dark:bg-gray-950 dark:border dark:border-black dark:border-opacity-40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map(link => (
            <motion.li className="h-3/4 flex items-center justify-center relative" key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link className={clsx("flex w-full items-center justify-center p-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300", {
                "text-gray-950 dark:text-gray-200": activeSection === link.name,
              })}

                href={link.hash}
                onClick={() => handleClick(link.name)}  
              >

                {link.name}

                {
                  link.name === activeSection && 
                  (<motion.span className='bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800'
                    layoutId='activeSection'
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>)
                }
              </Link>

            </motion.li>
          ))
          }
        </ul>
      </nav>
    </header>
  );
}
