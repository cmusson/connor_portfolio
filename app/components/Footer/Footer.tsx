import React from "react";
import { PersonalLinks } from "../PersonalLinks";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0 " />
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="text-neutral-500 dark:text-neutral1-100">
          © 2023 Connor Musson
        </div>
        <PersonalLinks />
      </div>
    </footer>
  );
};

export default Footer;
