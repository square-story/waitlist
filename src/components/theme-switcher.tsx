"use client";

import { IconBrightness } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { ComponentProps, useEffect } from "react";

import { cn } from "@/lib/utils";

type ThemeSwitcherProps = {
  className?: ComponentProps<"button">["className"];
};

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { setTheme } = useTheme();

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme && theme == "light") {
      return;
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeChange = () => {
    setTheme((prev: string) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <IconBrightness
      aria-label="Toggle theme"
      onClick={handleThemeChange}
      className={cn("h-5 w-5", className)}
    />
  );
};
