"use client";
import Image from "next/image";
import React from "react";

const PersonalLinks = () => {
  const emailAddress = "mussonconnor@gmail.com";

  const sendConnorEmail = () => {
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-row  items-center justify-center space-x-2 mb-1">
      <a
        href="https://github.com/cmusson"
        rel="noreferrer"
        target="_blank"
        className="hover:translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-500"
      >
        <Image
          src="/github.svg"
          alt="link to github"
          width={30}
          height={30}
          className="dark:invert"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/connor-musson/
"
        rel="noreferrer"
        target="_blank"
        className="hover:translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-500"
      >
        <Image
          src="/linkedIn.svg"
          alt="link to linkedIn"
          width={30}
          height={30}
          className="dark:invert"
        />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        className="hover:translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-500"
      >
        <Image
          src="/email.svg"
          alt="send email"
          width={30}
          height={30}
          className="dark:invert"
          onClick={sendConnorEmail}
        />
      </a>
    </div>
  );
};

export default PersonalLinks;
