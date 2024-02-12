import UniSearchCardBadge from "@/components/Universities/UniSearchCardBadge";

import { GoLocation } from "react-icons/go";
import { RxRadiobutton } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
import SponsoredCard from "./SponsoredCard";
import { University } from "@/types/UniversityTypes";
import VR from "../VR";

const tempBadge = {
  header: "Extremely Selective",
  icon: "image",
  desc: "some description",
};

export default function UniSearchCard({
  name,
  location,
  description,
  image,
  genre,
  stars,
  sponsored,
  totalReviews,
}: University) {
  return (
    <div className="flex-col bg-ed-card text-ed-text p-4 rounded-lg">
      {sponsored && <SponsoredCard />}
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-1 py-4  w-full h-64">
          <img
            className="object-cover rounded-md w-full h-full border-[1px] border-gray-400 border-solid"
            src={image}
            alt={`${name} - image`}
          />
        </div>
        <div className="flex-[2] md:px-4 text-black px-2">
          <h2 className="text-3xl font-semibold">{name}</h2>
          <p className="flex flex-col md:items-center gap-2 text-sm py-2">
            <span className="flex items-center gap-2">
              <span>
                <GoLocation />
              </span>
              <span>{location}</span>
            </span>
            <span className="flex items-center gap-2">
              <span>
                <RxRadiobutton />
              </span>
              <span>{genre}</span>
            </span>
            <span className="flex items-center gap-2">
              <span>
                <FaStar />
              </span>
              <span>{`${stars} (${totalReviews})`}</span>
            </span>
          </p>
          <p className="pt-2 text-sm">{description}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row pt-4 gap-2">
        <UniSearchCardBadge badge={tempBadge}>
          <GoLocation />
        </UniSearchCardBadge>
        {/* <VR /> */}
        <UniSearchCardBadge badge={tempBadge}>
          <RxRadiobutton />
        </UniSearchCardBadge>
        <UniSearchCardBadge badge={tempBadge}>
          <FaStar />
        </UniSearchCardBadge>
      </div>
    </div>
  );
}
