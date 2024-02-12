import Features from "@/components/Hero/Features";
import Hero from "@/components/Hero/Hero";
import NotSure from "@/components/NotSure";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-0 lg:p-24">
      <div className="h-[calc(100vh-5rem)]">
        <Hero />
      </div>
      <div className="relative">
        <img className="w-full -mt-32 md:-mt-48 -mb-16 md:-mb-36" src="./wave_up.svg" alt="" />
        <Features />
        <img
          className="-mt-28 md:-mt-48 -mb-28 md:-mb-56 w-full"
          src="./wave_down.svg"
          alt=""
        />
      </div>
      <div className="w-[100vw]">
        <NotSure />
      </div>
    </main>
  );
}
