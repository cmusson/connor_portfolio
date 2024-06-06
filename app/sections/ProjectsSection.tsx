import React from "react";
import { Project } from "../components";
import projectsData from "../data/projects.json";

interface IProject {
  name: string;
  description: string;
  techStack: string;
  image: string;
  github: string;
  link?: string;
}

const projects: IProject[] = projectsData;

const ProjectsSection = () => {
  return (
    <section className="mt-20 pt-20">
      <h2 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h2>

      <div className="flex flex-col space-y-12">
        {projects.map((project, i) => (
          <div key={i}>
            <Project project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
