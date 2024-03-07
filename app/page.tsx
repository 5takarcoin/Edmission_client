import Features from "@/components/Hero/Features";
import Hero from "@/components/Hero/Hero";
import NotSure from "@/components/Organizer/NotSure";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-0 ">
      <div className="h-[calc(100vh-5rem)]">
        <Hero />
      </div>
      <div className="">
        <img src="./wave_up.svg" alt="" className="w-full h-48 md:h-72 lg:h-96 -mt-24 -mb-[1px] md:-mt-36" />
        <Features />
      <img src="./wave_down.svg" alt="" className="w-full h-48 md:h-72 lg:h-96 -mt-[1px] -mb-24" />
      </div>
      <div className="w-[100vw]">
        <NotSure />
      </div>
    </main>
  );
}
