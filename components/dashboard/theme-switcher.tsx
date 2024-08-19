"use client";

import { useTheme } from "next-themes";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

const ThemeSwitcher = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const handleClick = () => {
    if (resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="text-xl px-[10px] rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500"
    >
      {resolvedTheme === "light" ? <BiSolidMoon /> : <BiSolidSun />}
    </button>
  );
};

export default ThemeSwitcher;
