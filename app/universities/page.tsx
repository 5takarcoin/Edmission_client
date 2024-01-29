import Sidebar from "@/components/Sidebar/Sidebar";
import StillCantFind from "@/components/StillCantFind";
import UniSearchCard from "@/components/Universities/UniSearchCard";
import { University } from "@/types/UniversityTypes";
import Link from "next/link";
import { GoChevronDown } from "react-icons/go";

const customUni: University[] = [
  {
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
  },
  {
    name: "Name",
    image: "./ezname.jpg",
    logo: "./logo.svg",
    location: "Dhaka, Bangladesh",
    description:
      "Bangladesh University of Engineering and Technology, commonly known by the acronym BUET, is a public technological research university in Dhaka, Bangladesh. Founded in 1876 as the Dacca Survey School and gained university status in 1962, it is the oldest institution for the study of engineering, architecture, and urban planning.",
    genre: "Engineering",
    stars: 4.7,
    totalReviews: 52,
    sponsored: true,
    identifier: "buta",
  },
  {
    name: "Name",
    image: "./ezname.jpg",
    logo: "./logo.svg",
    location: "Dhaka, Bangladesh",
    description:
      "Bangladesh University of Engineering and Technology, commonly known by the acronym BUET, is a public technological research university in Dhaka, Bangladesh. Founded in 1876 as the Dacca Survey School and gained university status in 1962, it is the oldest institution for the study of engineering, architecture, and urban planning.",
    genre: "Engineering",
    stars: 4.7,
    totalReviews: 52,
    sponsored: true,
    identifier: "buta",
  },
];

export default function page() {
  return (
    // <div className="bg-green-200 space-y-8">
    // <div className="">
    //   <h1 className="text-4xl font-bold">Explore Universities</h1>
    //   <p className="text-lg">
    //     Search Through over 1,250 universities all around the world. Or take
    //     the Edmission Quiz to find the perfect college suited for you.
    //   </p>
    // </div>
    // <div className="flex flex-col">
    //   <div className="md:flex-1">
    //     <Sidebar />
    //   </div>
    //   <div className="md:flex-[3]">
    //     <p>sort relevance bar</p>
    //     {customUni.map((uni, i) => {
    //       return (

    //         <Link href={`university/${uni.identifier}`}>
    //         <UniSearchCard {...uni} />
    //       </Link>
    //         )
    //     })}
    //   </div>
    // </div>
    // </div>

    <div className="">
      <div className="">
        <h1 className="text-3xl font-bold">Explore Universities</h1>
        <p className="text-md py-4">
          Search Through over 1,250 universities all around the world. Or take
          the Edmission Quiz to find the perfect college suited for you.
        </p>
      </div>

      <div className="flex flex-col">
        <div className="hidden md:block md:flex-1">
          <Sidebar />
        </div>
        <div className="w-full p-4 text-md flex justify-between items-center bg-ed-white rounded-md">
          <span>Show filters</span>
          <span className="text-2xl">
            <GoChevronDown />
          </span>
        </div>
        <div className="md:flex-[3] py-4">
          {/* <p>sort relevance bar</p> */}
          {customUni.map((uni, i) => {
            return (
              <div className="py-2">
                <Link href={`university/${uni.identifier}`}>
                  <UniSearchCard {...uni} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
