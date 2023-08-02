"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {theme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="bg-slate-100 p-2 rounded-xl text-black"
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
          className="bg-slate-100 p-2 rounded-xl"
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
