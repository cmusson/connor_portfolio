"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ILinkData {
  title: string;
  href?: string;
  rel?: string;
  target?: string;
  onClick?: string;
  src: string;
  alt: string;
}

interface IPersonalLinkProps {
  link: ILinkData;
  handleClick?: () => void;
}

const PersonalLink = ({ link, handleClick }: IPersonalLinkProps) => {
  const { title, href, rel, target, src, alt } = link;

  const image = (
    <Image
      title={title}
      src={src}
      alt={alt}
      width={30}
      height={30}
      className="dark:invert"
    />
  );

  if (href) {
    return (
      <Link
        href={href}
        passHref
        rel={rel}
        target={target}
        className="hover:translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-500"
      >
        {image}
      </Link>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="hover:translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-500 bg-transparent border-none"
      aria-label={title}
    >
      {image}
    </button>
  );
};

export default PersonalLink;
