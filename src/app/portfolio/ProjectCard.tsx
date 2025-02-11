"use client";
import React from 'react';
import { PinContainer } from '@/components/ui/3d-pin';
import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  link,
}) => {
  return (
    <div className="h-[20rem] w-full flex items-center justify-center">
      <PinContainer title={title} href={link}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[18rem]">
          <Image src={imageUrl} alt={title} width={400} height={240} className="rounded-lg mb-4" />
          <h3 className="!pb-2 !m-0 font-bold text-sm dark:text-slate-100 text-slate-800">
            {title}
          </h3>
          {/* <div className="text-sm !m-0 !p-0 font-normal">
            <span className="dark:text-slate-300 text-slate-700">
              {description}
            </span>
          </div> */}
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </PinContainer>
    </div>
  );
};
