"use client";

import { Session } from "next-auth";
import { signIn } from "next-auth/react";

import { ConfettiButton } from "./ui/confetti";
import { GithubIcon } from "./ui/github";

type AuthControlsProps = {
  session: Session | null;
};

export const AuthControls = ({ session }: AuthControlsProps) => {
  if (!session)
    return (
      <ConfettiButton
        className="cursor-pointer gap-2 border-blue-300 bg-blue-100 text-blue-800 hover:border-blue-300 hover:bg-blue-100 hover:text-blue-800 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:border-blue-800 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
        onClick={() => signIn("github")}
        size="lg"
      >
        <GithubIcon className="mr-2" />
        Sign in with GitHub
      </ConfettiButton>
    );

  return null;
};
