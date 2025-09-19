import { FAQ } from "@/components/FAQ";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

const HomePage = async () => {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with Background */}
      <section className="relative flex-1">
        {/* Background Layer */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(34, 197, 94, 0.25), transparent 70%)",
          }}
        />

        {/* Content Layer */}
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <Navbar />
          <Hero />
          <FAQ />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
