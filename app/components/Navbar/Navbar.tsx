import React from "react";
import { ThemeSwitcher } from "../Buttons";
import { NavLink } from "../Links";

interface INavItem {
  label: string;
  location: string;
}

const navItems: INavItem[] = [
  { label: "Home", location: "home" },
  {
    label: "About",
    location: "about",
  },
  {
    label: "Projects",
    location: "projects",
  },
];

const Navbar = () => {
  return (
    <header className="w-full mx-auto px-4 bg-white sm:px-20 fixed top-0 z-30 shadow opacity-95 dark:bg-dark dark:border-b dark:border-stone-600">
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
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <NavLink location={item.location}>{item.label}</NavLink>
                  </li>
                ))}
              </ul>

              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
