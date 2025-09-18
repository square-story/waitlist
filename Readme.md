# GreenCommit Waitlist Page

<a href="https://greencommit-kappa.vercel.app/en">
<img src="/public/opengraph-image.png" alt="thumbnail">
</a>

A simple and modern waitlist page for **GreenCommit**, a platform that connects open-source maintainers and contributors. The page allows users to sign up for early access, view community activity, and validate interest before launch.

## 🚀 Deployment

Easily deploy your Next.js app with <a href="https://vercel.com/">Vercel</a> by clicking the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/greencommit/waitlist)

## 🚀 Features

- **Hero Section** – Catchy headline explaining GreenCommit's mission.
- **Early Access Form** – Collects user email or allows GitHub OAuth sign-in.
- **Dynamic Avatars** – Shows GitHub avatars of users already on the waitlist.
- **Developer-Friendly Copy** – Clear, concise messaging tailored for developers.
- **Responsive Design** – Works seamlessly on desktop, tablet, and mobile.
- **Social Proof** – (Optional) Showcase tweets or GitHub stars to build trust.
- **Gamification Teaser** – Hint at streaks, heatmaps, and profile showcases.

## 🛠 Tech Stack

- 🚀 Next.js 15 (App router)
- ⚛️ React 19
- 📘 Typescript
- 🎨 Tailwind CSS 4 - Class sorting, merging and linting
- 🛠️ Shadcn/ui - Customizable UI components
- 🔒 Next-auth - Easy authentication library for Next.js (GitHub provider)
- 🛡️ Drizzle - ORM for node.js
- 🔍 Zod - Schema validation library
- 🧪 Jest & React Testing Library - Configured for unit testing
- 🎭 Playwright - Configured for e2e testing
- 📈 Absolute Import & Path Alias - Import components using `@/` prefix
- 💅 Prettier - Code formatter
- 🧹 Eslint - Code linting tool
- 🐶 Husky & Lint Staged - Run scripts on your staged files before they are committed
- 🔹 Icons - From Lucide
- 🌑 Dark mode - With next-themes
- 📝 Commitlint - Lint your git commits
- 🤖 Github actions - Lint your code on PR
- ⚙️ T3-env - Manage your environment variables
- 🗺️ Sitemap & robots.txt
- 💯 Perfect Lighthouse score
- 💾 Neon database
- 🌐 I18n with next-intl

## 📋 Setup Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/greencommit/waitlist.git
   cd waitlist
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables for GitHub OAuth.

4. Run development server:
   ```bash
   npm run dev
   ```

## 📬 Contribution

Pull requests are welcome! If you have ideas to improve the waitlist page, open an issue or submit a PR.

## 📄 License

<a href="/LICENSE.md">MIT License</a>
