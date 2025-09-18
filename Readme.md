# GreenCommit Waitlist Page

A simple and modern waitlist page for **GreenCommit**, a platform that connects open-source maintainers and contributors. The page allows users to sign up for early access, view community activity, and validate interest before launch.

## 🚀 Features

- **Hero Section** – Catchy headline explaining GreenCommit's mission.
- **Early Access Form** – Collects user email or allows GitHub OAuth sign-in.
- **Dynamic Avatars** – Shows GitHub avatars of users already on the waitlist.
- **Developer-Friendly Copy** – Clear, concise messaging tailored for developers.
- **Responsive Design** – Works seamlessly on desktop, tablet, and mobile.
- **Social Proof** – (Optional) Showcase tweets or GitHub stars to build trust.
- **Gamification Teaser** – Hint at streaks, heatmaps, and profile showcases.

## 🛠 Tech Stack

- **Frontend:** React + TailwindCSS (or Next.js for SSR)
- **Auth:** GitHub OAuth (using NextAuth.js or Supabase Auth)
- **Database:** Supabase / Firebase (to store waitlist entries)
- **Deployment:** Vercel / Netlify

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

## 📌 Future Improvements

- Add natural language filters for issue suggestions.
- Display live count of maintainers and contributors signed up.
- Embed calendar slots for maintainer-contributor calls.
- Add micro-bounty teaser to attract early adopters.

## 📬 Contribution

Pull requests are welcome! If you have ideas to improve the waitlist page, open an issue or submit a PR.

## 📄 License

MIT License
