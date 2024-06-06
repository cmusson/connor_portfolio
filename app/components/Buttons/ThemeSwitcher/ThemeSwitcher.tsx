"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client to make sure correct theme is set
  useEffect(() => {
    setMounted(true);
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setTheme(systemTheme);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {theme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="bg-slate-100 p-2 rounded-xl text-black hover:bg-gray-200 transition-colors ease-in-out duration-100"
        >
          <Image
            src="/moon.svg"
            alt="switch to light mode"
            width={30}
            height={30}
          />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="bg-slate-100 p-2 rounded-xl hover:bg-gray-200"
        >
          <Image
            src="/sun.svg"
            alt="switch to dark mode"
            width={30}
            height={30}
          />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
