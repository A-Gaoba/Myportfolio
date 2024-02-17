"use client"
import Image from 'next/image';
import React from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  link,
}) => (
  <div
    className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
    onClick={() => window.open(link, '_blank')}
  >
    <Image
      src={imageUrl}
      alt={title}
      width={500}
      height={300}
      className="mb-4 rounded-lg"
    />
    <h3 className="text-2xl font-semibold mb-2  text-gray-800 dark:text-white">
      <a href={link} className="underline" target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="dark:bg-gray-700 text-gray-800 dark:text-white bg-gray-200 text-sm px-2 py-1 rounded-md"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default ProjectCard;
