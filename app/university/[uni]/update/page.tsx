"use client";

import UpdateUni from "@/components/Organizer/UpdateUni";
import Sidebar from "@/components/Sidebar/Sidebar";
import AlumniCards from "@/components/Universities/AlumniCards";
import UniCatCards from "@/components/Universities/Categories/UniCatCards";
import UniReviews from "@/components/Universities/Categories/UniReviews";
import UniHero from "@/components/Universities/UniHero";
import UniNav from "@/components/Universities/UniNav";
import UniSearchCard from "@/components/Universities/UniSearchCard";
import { Reviews } from "@/types/CategoryTypes";
import { University } from "@/types/UniversityTypes";
import { unique } from "next/dist/build/utils";
import { useEffect, useState } from "react";

// const uni: University = {
//   name: "Name",
//   image: "../ezname.jpg",
//   logo: "logo.svg",
//   location: "Dhaka, Bangladesh",
//   description:
//     "Bangladesh University of Engineering and Technology, commonly known by the acronym BUET, is a public technological research university in Dhaka, Bangladesh. Founded in 1876 as the Dacca Survey School and gained university status in 1962, it is the oldest institution for the study of engineering, architecture, and urban planning.",
//   genre: "Engineering",
//   stars: 4.7,
//   totalReviews: 52,
//   sponsored: true,
//   identifier: "buta"
// }

export default function Page({ params }: { params: { uni: string } }) {
  const [data, setData] = useState<University[]>([] as University[]);
  const [uniId, setUniId] = useState<string>("Fafsa")

//   const reviews: Reviews[] = [
//     {
//       recommended: true,
//       from: "Alumni (CSE)",
//       date: "July 20, 2024",
//       stars: 4,
//       review:
//         "If you do have to complete your undergrad from Bangladesh, this is the best option you have. It's the country's best engineering school. But the standards are still not up to the mark unfortunately.",
//     },
//     {
//       recommended: false,
//       from: "Senior (EEE)",
//       date: "July 20, 2024",
//       stars: 3,
//       review:
//         "BUET is still the top university of Bangladesh only because of the admission exam. If there were no exams, I wouldn’t even consunier BUET a top 10 university in Bangladesh.",
//     },
//   ];

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("HH hah", params.uni);
        const response = await fetch(
          `http://localhost:5050/api/unis/${params.uni}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setUniId(jsonData._id);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="space-y-8">
      <div className="">
        {data[0]?.name ? (
          <div>
            <UpdateUni uni={data[0]} />
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <div className="h-4"></div>
      </div>
    </div>
  );
}

// "use client"
// // import { useRouter } from 'next/router';

// export default function Page({params}: {params: {uni: string}}) {
//   // const router = useRouter();
//   // console.log(router) // Access params object from App Router

//   // if (!params || !params.id) {
//   //   return <div>ID not found</div>; // Handle missing ID
//   // }

//   // const id = params.id;
//   console.log(params.uni)

//   return (
//     <div>
//       <p>{}</p>
//       <h1>ID: {"H"}</h1>
//       {/* Rest of your component content */}
//     </div>
//   );
// }
