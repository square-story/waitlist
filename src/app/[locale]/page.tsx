import { FAQ } from "@/components/FAQ";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

const HomePage = async () => {
  return (
    <>
      <header className="relative flex h-full w-full flex-col items-center select-none">
        <div className="absolute flex h-screen w-full flex-col items-center">
          <div className="relative h-full w-full max-w-5xl">
            <div
              className="absolute inset-0 z-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(34, 197, 94, 0.25), transparent 70%)",
              }}
            />
          </div>
        </div>
        <div className="z-10 flex h-full w-full max-w-5xl flex-col">
          <Navbar />
          <Hero />
          <FAQ />
        </div>
      </header>
    </>
  );
};

export default HomePage;
