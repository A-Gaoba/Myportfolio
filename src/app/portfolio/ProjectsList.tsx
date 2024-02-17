import React from 'react';
import ProjectCard from './ProjectCard';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
};

const projects: Project[] = [
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
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </div>
);

export default ProjectsList;
