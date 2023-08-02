import React from "react";
import Project from "./Project";

interface IProject {
  name: string;
  description: string;
  techStack: string;
  image: string;
  github: string;
  link: string;
}

const projects: IProject[] = [
  {
    name: "Fluidity Website",
    description: "Live website showcasing Fluidity and all they have to offer",
    techStack: "Next.js, TypeScript, Storybook, SCSS",
    image: "/fluidity_website.png",
    github:
      "https://github.com/fluidity-money/fluidity-app/tree/develop/web/fluidity.money",
    link: "https://fluidity.money/",
  },
  {
    name: "Fluidity App",
    description:
      "Live app currently in use for swapping and sending Fluid tokens",
    techStack: "Remix, TypeScript, Storybook, SCSS",
    image: "/fluidity_app.png",
    github:
      "https://github.com/fluidity-money/fluidity-app/tree/develop/web/app.fluidity.money",
    link: "https://app.fluidity.money/",
  },
  {
    name: "Eat the World",
    description:
      "A fullstack app from my earlier days of coding in React and JS detailing the different foods of the world. Where users can search and select or randomly generate any country, listing the country's national dishes.",
    techStack: "React, JavaScript, Node.js, Express.js, CSS",
    image: "/eat_the_world.png",
    github: "https://github.com/cmusson/Eat-the-World",
    link: "https://github.com/cmusson/Eat-the-World",
  },
  {
    name: "Connect Four",
    description:
      "Connect 4 tokens to win the game! Two player. Current player and score tally listed either side. Refresh to reset the score",
    techStack: "React, JavaScript, CSS",
    image: "/connect_four_app.png",
    github: "https://github.com/cmusson/Connect-4-Game-Lobby",
    link: "https://github.com/cmusson/Connect-4-Game-Lobby",
  },
  {
    name: "Sticky Notes",
    description:
      "Create, edit, delete, drag and drop personalised notes, add images, draw on and clear the canvas as desired.",
    techStack: "React, JavaScript, Canvas, CSS",
    image: "/sticky_notes_app.png",
    github: "https://github.com/cmusson/StickyNotes-CavasAPI-Project",
    link: "https://github.com/cmusson/StickyNotes-CavasAPI-Project",
  },
  {
    name: "Defi Investment App",
    description:
      "A React Native DeFi investment app to estimate potential earnings in Compound protocol. To calculate the amount one could earn over time based on different distributions to different assets on Compound.",
    techStack: "React Native, JavaScript",
    image: "/defi_investment_mobile_app.png",
    github: "https://github.com/cmusson/DeFi-Investment-Mobile-App",
    link: "https://github.com/cmusson/DeFi-Investment-Mobile-App",
  },
];

const ProjectsSection = () => {
  return (
    <section className="mt-20 pt-20">
      <h2 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h2>

      <div className="flex flex-col space-y-28">
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
