import React from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

interface INavItem {
  label: string;
  page: string;
}

const navItems: INavItem[] = [
  { label: "Home", page: "home" },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

const Navbar = () => {
  return (
    <header className="w-full mx-auto px-4 bg-white sm:px-20 fixed top-0 z-50 shadow opacity-95 dark:bg-dark dark:border-b dark:border-stone-600">
      <div className=" justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3">
            <div className=" md:py-5 md:block">
              <h2 className="text-2xl font-bold">Connor Musson</h2>
            </div>
            <div className="md:hidden">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center hidden md:block md:pb-0 md:mt-0 md:block
             
            `}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={`#${item.page}`}
                  className="block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100"
                >
                  {item.label}
                </Link>
              ))}
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
