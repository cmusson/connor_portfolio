"use client";

import Link from "next/link";
import React, { ReactNode } from "react";

interface INavLink {
  location: string;
  children: ReactNode;
}

const NavLink = ({ location, children }: INavLink) => {
  return (
    <nav>
      <Link
        href={`#${location}`}
        className="block lg:inline-block group text-neutral-900 hover:text-neutral-500 dark:text-neutral-100 transition duration-300"
      >
        {children}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-teal-600"></span>
      </Link>
    </nav>
  );
};

export default NavLink;
