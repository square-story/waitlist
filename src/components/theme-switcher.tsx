"use client";

import { IconBrightness } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type ThemeSwitcherProps = {
  className?: ComponentProps<"button">["className"];
};

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { setTheme } = useTheme();
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
