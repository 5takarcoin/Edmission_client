import Features from "@/components/Hero/Features";
import Hero from "@/components/Hero/Hero";
import NotSure from "@/components/NotSure";
import Sidebar from "@/components/Sidebar/Sidebar";
import StillCantFind from "@/components/StillCantFind";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-0 lg:p-24">
      <div className="h-[calc(100vh-5rem)]">
        <Hero />
      </div>
      <div className="relative">
        <div className=" h-36"></div>
        <Features />
        <img className="absolute -top-28 -z-10" src="./wave_up.svg" alt="" />
        <img
          className="absolute -bottom-48 -z-10"
          src="./wave_down.svg"
          alt=""
        />
        <div className="top-0 h-[200px]] bg-ed-prim"></div>
      </div>
      <div className="w-[100vw]">
        <NotSure />
      </div>
    </main>
  );
}
