import React from "react";
import vingo from "@/public/vingo.png";
import building from "@/public/building.jpg";
import behance from "@/public/behance.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Logo Design for IEEE Ryerson CIC",
    description:
      "Conceptualized a rebranding initiative for a student-run group by designing the logo and several infographics, which raised brand recognition among industry professionals at IEEE.",
    tags: ["Adobe Illustrator", "Adobe Photoshop"],
    imageUrl: behance,
    url: "https://www.behance.net/gallery/161651955/Logo-Design-for-IEEE-Ryerson-CIC-%282019%29"
  },
  
  {
    title: "VinGO",
    description:
      "A personal project I developed to improve my skills, which is also something that corresponds with my hobbies. The core functionality is the search bar which allows the user to browse through music albums, implemented by fetching Spotify's API.",
    tags: ["HTML", "React", "Bootstrap CSS", "GitHub"],
    imageUrl: vingo,
    url: "https://ferhananwar.github.io/vingo/"
  },

  {
    title: "Upcoming Project",
    description:
      "Currently in process...",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: building,
    url: ""
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Framer Motion",
  "Figma",

] as const;