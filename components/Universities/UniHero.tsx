import { University } from "@/types/UniversityTypes";
import { FaStar } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

export default function UniHero({ uni }: { uni: University }) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 px-2 md:px-12">
      <div className="flex-col space-y-8 flex-[2]">
        <div className="flex items-center">
          <div className="h-32 w-32">
            <img className="" src={"/" + uni.logo} alt={`${uni.name} university logo`} />
          </div>
          <div className="space-y-4 p-4">
            <h2 className="text-4xl font-bold">{uni.name}</h2>
            <p className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                <span>
                  <GoLocation />
                </span>
                <span>{uni.location}</span>
              </span>
              <span className="flex items-center gap-2">
                <span>
                  <FaStar />
                </span>
                <span>{`${uni.stars} (${uni.totalReviews})`}</span>
              </span>
            </p>
          </div>
        </div>
        <div className="text-md ">
          <p>{uni.description}</p>
        </div>
      </div>
      <div className="flex-1">
        <div className="h-full pt-4 flex items-center justify-center">
          <img
            className="w-full h-full md:h-80 object-cover rounded-lg"
            src={"/" + uni.image}
            alt=""
          />
        </div>
        <div className="flex -mt-20 items-center justify-center w-full">
          <button className="text-ed-white font-bold bg-ed-prim px-6 py-2  rounded-md">Compare</button>
        </div>
      </div>
      <div className="mt-8"></div>
    </div>
  );
}
