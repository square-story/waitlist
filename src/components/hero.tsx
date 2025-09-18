import React from "react";

import { auth } from "@/lib/auth";

import { AuthControls } from "./auth-controls";
import AvatarCount from "./avatar-count";

const Hero = async () => {
  const session = await auth();
  return (
    <div className="flex h-full w-full flex-col items-center px-8 select-none md:flex-row md:px-4 xl:px-0">
      <div className="mx-auto max-w-4xl text-center">
        <div className="flex flex-col items-center gap-6">
          <AvatarCount />
          <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-balance">GreenCommit</span>
            <br />
            <span className="text-balance text-emerald-600">
              Turn Issues Into Impact
            </span>
          </h1>
        </div>

        {/* Subtext */}
        <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-8 sm:text-xl">
          Find, claim, and solve open-source issues that match your skills.
          Maintainers get AI-tagging, contributor matching, and faster issue
          resolution.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <AuthControls session={session} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
