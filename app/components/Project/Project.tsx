import React from "react";
import { SlideUp } from "../SlideUp";
import Link from "next/link";
import Image from "next/image";
import { ProjectLinks } from "../Links";

interface IProject {
  name: string;
  description: string;
  techStack: string;
  image: string;
  github: string;
  link?: string;
}

const Project = ({ project }: { project: IProject }) => {
  const { name, description, techStack, image, github, link } = project;

  return (
    <SlideUp offset="-300px 0px -300px 0px">
      <div className="flex flex-col animate-slideUpCubiBezier animation-delay-by-2 md:flex-row md:items-center md:space-x-12">
        <div className="mt-8 md:w-1/2">
          <Link
            className="relative"
            href={link ? link : github}
            target="_blank"
          >
            <Image
              src={image}
              alt={`${name} image`}
              width={1000}
              height={1000}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              layout="responsive"
              style={{ objectFit: "contain" }}
              className="rounded-xl shadow-xl hover:opacity-70"
            />
          </Link>
        </div>
        <div className="mt-8 md:w-1/2">
          <h2 className="text-4xl font bold mb-6">{name}</h2>
          <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
          <p className="font-semibold text-teal-700 mb-1">{techStack}</p>
          <ProjectLinks name={name} github={github} link={link} />
        </div>
      </div>
    </SlideUp>
  );
};

export default Project;
