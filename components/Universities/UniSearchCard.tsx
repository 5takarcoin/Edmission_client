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

export default function UniSearchCard({name, location, description, image, genre, stars, sponsored, totalReviews}: University) {
  return (
    <div className="flex-col bg-red-100 p-4">
      {sponsored && 
      <SponsoredCard />
      }
      <div className="flex items-center">
        <div className="flex-1 py-4  w-36 h-64">
          <img className="object-cover  rounded-2xl w-full h-full border-[1px] border-gray-400 border-solid" src={image} alt={`${name} - image`} />
        </div>
        <div className="flex-[3] h-52 text-black px-4">
          <h2 className="text-3xl font-semibold">{name}</h2>
          <p className="flex items-center gap-2 text-sm py-2">
            <span>
              <GoLocation />
            </span>
            <span>{location}</span>
            <span>
              <RxRadiobutton />
            </span>
            <span>{genre}</span>
            <span>
              <FaStar />
            </span>
            <span>{`${stars} (${totalReviews})`}</span>
          </p>
          <p className="pt-2">{description}</p>
        </div>
      </div>
      <div className="space-x-4">
        <UniSearchCardBadge badge={tempBadge}><GoLocation /></UniSearchCardBadge>
        <VR />
        <UniSearchCardBadge badge={tempBadge}><RxRadiobutton /></UniSearchCardBadge>
        <UniSearchCardBadge badge={tempBadge}><FaStar /></UniSearchCardBadge>
      </div>
    </div>
  );
}
