"use client";

import { IconBrandGithub } from "@tabler/icons-react";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";

type AuthControlsProps = {
  session: Session | null;
};

export const AuthControls = ({ session }: AuthControlsProps) => {
  if (!session)
    return (
      <Button
        onClick={async () => signIn("github")}
        size="lg"
        className="bg-emerald-600 px-8 py-3 text-lg text-white hover:bg-emerald-700"
      >
        <IconBrandGithub className="mr-2 h-5 w-5" />
        Join with GitHub
      </Button>
    );

  return null;
};
