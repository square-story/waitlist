import {
  IconBrandGithub,
  IconBrandTwitter,
  IconStarFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import React from "react";

import { LangSwitcher } from "./lang-switcher";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "./ui/button";

const Navbar = async () => {
  const t = await getTranslations("home");

  return (
    <div className="flex h-14 w-full items-center justify-between px-4">
      <Link href={"/"} className="font-semibold select-none">
        Green Commit
      </Link>
      <div className="flex h-full items-center gap-2 md:gap-4">
        <Link target="blank" href={"https://github.com/green-commit"}>
          <Button size={"sm"} variant={"outline"} className="cursor-pointer">
            <IconStarFilled className="h-3 w-3 text-yellow-300" />
            {t("starOnGithub")}
          </Button>
        </Link>
        <ThemeSwitcher className="cursor-pointer" />
        <LangSwitcher />

        <Link target="blank" href={"https://github.com/TheSoumenMondal"}>
          <IconBrandGithub className="h-5 w-5 cursor-pointer" />
        </Link>
        <Link target="blank" href={"https://x.com/soumendotcom"}>
          <IconBrandTwitter className="h-5 w-5 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
