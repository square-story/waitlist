import { env } from "@/env.mjs";

export const siteConfig = {
  title: "waitlist",
  description:
    "waitlist page for GreenCommit, a platform that connects open-source maintainers and contributors. The page allows users to sign up for early access, view community activity, and validate interest before launch.",
  keywords: [
    "waitlist",
    "GreenCommit",
    "open-source",
    "maintainers",
    "contributors",
  ],
  url: env.APP_URL,
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || "",
};
