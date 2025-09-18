import { IconBrandGithub, IconBrandTwitter } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

import { LangSwitcher } from "./lang-switcher";
import { ThemeSwitcher } from "./theme-switcher";

const Navbar = () => {
  return (
    <div className="flex h-14 w-full items-center justify-between px-4">
      <Link href={"/"} className="font-semibold select-none">
        Green Commit
      </Link>
      <div className="flex h-full items-center gap-2 md:gap-4">
        <ThemeSwitcher className="cursor-pointer" />
        <LangSwitcher />

        <Link target="blank" href={"https://github.com/greencommit"}>
          <IconBrandGithub className="h-5 w-5 cursor-pointer" />
        </Link>
        <Link target="blank" href={"https://x.com/sadikbuilds"}>
          <IconBrandTwitter className="h-5 w-5 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
