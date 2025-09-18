import { Languages } from "lucide-react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type LangSwitcherProps = {
  className?: ComponentProps<typeof Link>["className"];
};

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const locale = useLocale();

  return (
    <Link className={cn(className)} href={locale === "en" ? "/ml" : "/en"}>
      <Languages className={cn("h-5 w-5", className)} />
    </Link>
  );
};
