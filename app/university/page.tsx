import Sidebar from "@/components/Sidebar/Sidebar";
import StillCantFind from "@/components/StillCantFind";
import UniHero from "@/components/Universities/UniHero";
import UniNav from "@/components/Universities/UniNav";
import UniSearchCard from "@/components/Universities/UniSearchCard";
import { University } from "@/types/UniversityTypes";

const uni: University = {
  name: "Name",
  image: "../ezname.jpg",
  logo: "logo.svg",
  location: "Dhaka, Bangladesh",
  description:
    "Bangladesh University of Engineering and Technology, commonly known by the acronym BUET, is a public technological research university in Dhaka, Bangladesh. Founded in 1876 as the Dacca Survey School and gained university status in 1962, it is the oldest institution for the study of engineering, architecture, and urban planning.",
  genre: "Engineering",
  stars: 4.7,
  totalReviews: 52,
  sponsored: true,
  identifier: "buta"
}

export default function page() {
  return (
    <div className="bg-green-200 space-y-8">
      <div className="">
        <UniHero uni={uni}/>
        {/* <UniNav /> */}
      </div>
    </div>
  );
}
