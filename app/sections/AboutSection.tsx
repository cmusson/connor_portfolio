import React from "react";
import Image from "next/image";
import skillsData from "../data/skills.json";
import { Skill } from "../components";

const skills = skillsData;

const AboutSection = () => {
  return (
    <section>
      <div className="my-12 pb-6 md:pt-16">
        <h2 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h2>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2 ">
            <h3 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me
            </h3>
            <p>
              <span className="font-semibold text-teal-700">
                Software Engineer{" "}
              </span>{" "}
              based in the US, working towards creating software that improves
              the world around us.
            </p>
            <br />
            <p>
              {" "}
              I am a dual US/UK citizen, a passionate, dedicated individual,
              experienced in JavaScript technologies with an eye for design. I
              work well independently and also in a team, collaborating and
              communicating effectively. With many years experience working to
              meet company requirements as well as those set by clients or
              vendors.
            </p>
            <br />
            <p>
              I enjoy an active lifestyle, having played many sports throughout
              my life, most recently enjoying rugby, football/soccer, surfing,
              yoga and hiking. I also enjoy reading and art, such as drawing,
              music, playing guitar and watching live performances.
            </p>
            <br />
            <p>
              I love to travel and be social and explore new cultures, having
              traveled solo round SE Asia for a year, lived in a self-built a
              van in Europe for 3 months, travelled Vietnam on a motorbike for 6
              weeks and worked remotely as a Digital Nomad. One of my favorite
              aspects of travel is the food, both eating and cooking new things.{" "}
            </p>
          </div>

          <div className="md:w-1/2 flex flex-col items-center md:items-start gap-2">
            <h3 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Skills
            </h3>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item) => (
                <Skill key={item.skill} skill={item.skill} />
              ))}
            </div>
            <Image
              src={"/cartoon_connor.jpeg"}
              alt="cartoon connor avatar"
              width={325}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
