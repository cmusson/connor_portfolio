"use client";
import Image from "next/image";
import React from "react";

const emailAddress = "mussonconnor@gmail.com";
const sendConnorEmail = () => {
  const mailtoLink = `mailto:${emailAddress}`;
  window.location.href = mailtoLink;
};

interface ILinkData {
  title: string;
  href?: string;
  rel?: string;
  target?: string;
  onClick?: () => void;
  src: string;
  alt: string;
}

const PersonalLinks = () => {
  return (
    <div className="flex flex-row  items-center justify-center space-x-2 mb-1">
      {linkData.map((link, i) => (
        <a
          key={`${i}-${link.alt}`}
          href={link.href}
          rel={link.rel}
          target={link.target}
          className="hover:translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-500"
        >
          <Image
            title={link.title}
            src={link.src}
            alt={link.alt}
            onClick={link.onClick}
            width={30}
            height={30}
            className="dark:invert"
          />
        </a>
      ))}
    </div>
  );
};

export default PersonalLinks;

const linkData: ILinkData[] = [
  {
    title: "open github",
    href: "https://github.com/cmusson",
    rel: "noreferrer",
    target: "_blank",
    src: "/github.svg",
    alt: "link to github",
  },
  {
    title: "open linkedin",
    href: "https://www.linkedin.com/in/connor-musson/",
    rel: "noreferrer",
    target: "_blank",
    src: "/LinkedIn.svg",
    alt: "link to LinkedIn",
  },
  {
    title: "send email",
    rel: "noreferrer",
    target: "_blank",
    onClick: sendConnorEmail,
    src: "/email.svg",
    alt: "send  email",
  },
  {
    title: "view cv/resume",
    rel: "noreferrer",
    target: "_blank",
    onClick: () => {},
    src: "/resume.svg",
    alt: "view cv/resume",
  },
];
