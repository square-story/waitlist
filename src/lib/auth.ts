import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import { Adapter } from "next-auth/adapters";
import GitHubProvider from "next-auth/providers/github";

import { env } from "@/env.mjs";
import { db } from "@/lib/schema";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db) as Adapter,
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (!session.user) return session;

      session.user.id = user.id;
      session.user.stripeCustomerId = user.stripeCustomerId;
      session.user.isActive = user.isActive;

      return session;
    },
  },
  events: {
    createUser: async ({ user }) => {
      if (!user.email || !user.name) return;
    },
  },
});
