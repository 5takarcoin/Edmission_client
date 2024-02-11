import Features from "@/components/Hero/Features";
import Hero from "@/components/Hero/Hero";
import NotSure from "@/components/NotSure";
import Sidebar from "@/components/Sidebar/Sidebar";
import StillCantFind from "@/components/StillCantFind";
import UniSearchCard from "@/components/Universities/UniSearchCard";

export default function Home() {
  const uni = {
    name: "Name",
    image: "../ezname.jpg",
    logo: "../logo.svg",
    location: "Dhaka, Bangladesh",
    description:
      "Bangladesh University of Engineering and Technology, commonly known by the acronym BUET, is a public technological research university in Dhaka, Bangladesh. Founded in 1876 as the Dacca Survey School and gained university status in 1962, it is the oldest institution for the study of engineering, architecture, and urban planning.",
    genre: "Engineering",
    stars: 4.7,
    totalReviews: 52,
    sponsored: true,
    identifier: "buta",
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-0 lg:p-24">
      <div className="h-[calc(100vh-5rem)]">
        <Hero />
      </div>
      <div className="relative">
        <img className="w-full -mt-32 md:-mt-16 -mb-16 md:-mb-28" src="./wave_up.svg" alt="" />
        <Features />
        <img
          className="-mt-28 md:-mt-48 -mb-28 md:-mb-56 w-full"
          src="./wave_down.svg"
          alt=""
        />
      </div>
      <div className="w-[100vw]">
        <NotSure />
        <UniSearchCard {...uni}/>
      </div>
    </main>
  );
}
