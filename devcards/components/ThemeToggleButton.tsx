import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return "dark";
    //const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    //return stored ?? "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-4 py-2 m-4 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
    >
      {theme === "dark" ? (
        <div className="flex">
          <SunIcon className="size-6 text-ambar-500 grow-1" />
          <p className="grow-6">Light Mode</p>
        </div>
      ) : (
        <div className="flex">
          <MoonIcon className="size-6 text-blue-500 grow-1" />
          <p className="grow-6">Dark Mode</p>
        </div>
      )}
    </button>
  );
};

export default ThemeToggleButton;
