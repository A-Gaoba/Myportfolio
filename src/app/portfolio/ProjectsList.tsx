import React from 'react';
import { ProjectCard } from './ProjectCard';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Junzi Tech Solutions",
    description:
      "Junzi Tech Solutions specializes in launching mobile and web applications in just 4 weeks, providing robust, functional, and market-ready solutions.",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    imageUrl: "/projectsImages/junzi.png",
    link: "https://www.junzitechsolutions.com/landing",
  },
  {
    title: "Yemeni Cultural Attaché - Moscow",
    description:
      "The official website of the Yemeni Cultural Attaché in Moscow provides cultural and educational services for Yemeni students and visitors in Russia.",
    technologies: ["React", "Express", "MongoDB", "Tailwind"],
    imageUrl: "/projectsImages/yemen.png",
    link: "https://yemculru.com/",
  },
  {
    title: "Sharaf Almahaqeri",
    description:
      "Sharaf Almahaqeri's portfolio website showcases his skills, achievements, and information",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/projectsImages/sharaf.png",
    link: "https://almahaqeri.vercel.app/",
  },
  {
    title: "To Russai",
    description:
      "Assists students applying to Russian universities by providing application guidance, visa help, and university selection",
    technologies: ["React", "Tailwind CSS"],
    imageUrl: "/projectsImages/toru.png",
    link: "https://toru.netlify.app/",
  },
  {
    title: "Ali Alnono",
    description:
      "Showcases the journey of football player Ali Alnono from Yemen, highlighting his career, matches, and contributions.",
    technologies: ["React", "Tailwind CSS", "Multimedia"],
    imageUrl: "/projectsImages/alnono.png",
    link: "https://alialnono.vercel.app/",
  },
  {
    title: "GaobaVid - YouTube Clone",
    description:
      "YouTube clone that replicates the core features of the original platform, allowing users to browse and watch videos",
    technologies: ["React", "Material UI", "YouTube API"],
    imageUrl: "/projectsImages/gaobavide.png",
    link: "https://gaobavid.netlify.app/",
  },
  {
    title: "Protechies compony",
    description:
      "A leading web development company dedicated to transforming your ideas into innovative digital solutions.",
    technologies: ["React", "Tailwind", "TypeScript API"],
    imageUrl: "/projectsImages/protechies.png",
    link: "https://protechies.netlify.app//",
  },
  {
    title: "crystallpool compony",
    description:
      "Crystallpoll is a business work offer a swimming pools and swimming clubs and their needs ",
    technologies: ["React", "Tailwind", "TypeScript"],
    imageUrl: "/projectsImages/crystallpool.png",
    link: "https://crystallpool.vercel.app/",
  },
];

const ProjectsList: React.FC = () => (
  <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10 xl:gap-12 2xl:grid-cols-4">
    {projects.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </div>
);

export default ProjectsList;
