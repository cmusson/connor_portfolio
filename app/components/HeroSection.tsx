import Image from "next/image";
import Link from "next/link";
import React from "react";
import PersonalLinks from "./PersonalLinks";

const HeroSection = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center my-10 pt-12 ppb-6 md:flex-row md-space-x-4 md:text-left md:pt-32 md:pb-24">
        <div className="md:w-1/2 md:mt-2">
          <Image
            className="rounded-full shadow-2xl h-auto w-auto"
            src="/profile_pic3.jpeg"
            alt="headshot"
            width={300}
            height={300}
            priority={false}
          />
        </div>
        <div className="flex flex-col items-center justify-center md:mt-2 md:w-3/5 md:items-start">
          <h1 className="text-center  text-4xl font-bold mt-6 md:text-start md:mt-0 md:text-4xl">{`Hello there, I'm Connor!`}</h1>
          <p className="text-center text-lg mt-4 mb-6 md:text-2xl md:text-start">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Software Engineer{" "}
            </span>{" "}
            based in the US, working towards creating software that improves the
            world around us.
          </p>
          <div className="flex items-center gap-2">
            <Link
              href={"#projects"}
              className=" text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            >
              Projects
            </Link>
            <PersonalLinks />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <Link href={"#about"}>
          <Image
            src="/down_arrow.svg"
            alt="go to about section"
            className="animate-bounce dark:invert"
            width={35}
            height={35}
          />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
