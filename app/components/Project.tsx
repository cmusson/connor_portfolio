import React from "react";
import SlideUp from "./SlideUp";
import Link from "next/link";
import Image from "next/image";

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
          <Link href={link ? link : github} target="_blank">
            <Image
              src={image}
              alt={`${name} image`}
              width={1000}
              height={1000}
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
          <h4 className="font-semibold text-teal-600 mb-1">{techStack}</h4>
          <div className="flex flex-row align-bottom space-x-4">
            <Link href={github} target="_blank">
              <Image
                src="/github.svg"
                alt={`to ${name} github repository`}
                width={30}
                height={30}
                className="hover:-translate-y-1 transition-transform cursor-pointer dark:invert"
              />
            </Link>
            {link ? (
              <Link href={link} target="_blank">
                <Image
                  src="/arrow_right.svg"
                  alt={`to ${name} github repository`}
                  width={30}
                  height={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer dark:invert"
                />
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </SlideUp>
  );
};

export default Project;
