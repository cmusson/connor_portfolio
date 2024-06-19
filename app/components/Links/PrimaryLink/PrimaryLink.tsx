"use client";
import Link from "next/link";
import React, { ReactNode } from "react";

interface IPrimaryLinkProps {
  linkTo: string;
  children: ReactNode;
}

const PrimaryLink = ({ linkTo, children }: IPrimaryLinkProps) => {
  return (
    <Link
      href={linkTo}
      className="text-neutral-100 font-semibold px-6 py-3 bg-teal-700 rounded shadow hover:bg-teal-800 transition-colors ease-in-out duration-100"
    >
      {children}
    </Link>
  );
};

export default PrimaryLink;
