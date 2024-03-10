import UniSearchCardBadge from "@/components/Universities/UniSearchCardBadge";

import { GoLocation } from "react-icons/go";
import { RxRadiobutton } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
import SponsoredCard from "./SponsoredCard";
import { University } from "@/types/UniversityTypes";
import VR from "../Organizer/VR";

const tempBadge = {
  header: "Extremely Selective",
  icon: "image",
  desc: "some description",
};

function truncateDescription(description: string) {
  if (description.length > 200) {
      return description.substring(0, 197) + '...';
  } else {
      return description;
  }
}

export default function UniSearchCard({
  name,
  location,
  desc,
  img,
  about,
  reviews,
}: University) {
  const editedDesc = truncateDescription(desc);
  return (
    <div className="flex-col bg-ed-card text-ed-text p-4 rounded-lg">
      {/* {sponsored && <SponsoredCard />} */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-1 py-4  w-full h-64">
          <img
            className="object-cover rounded-md w-full h-full border-[1px] border-gray-400 border-solid"
            src={img}
            alt={`${name} - image`}
          />
        </div>
        <div className="flex-[2] md:px-4 text-black px-2">
          <h2 className="text-3xl font-semibold">{name}</h2>
          <p className="flex flex-col gap-2 text-sm py-2">
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
              {/* <span>{about.unigenre}</span> */}
              <span>LOLOLOL</span>
            </span>
            <span className="flex items-center gap-2">
              <span>
                <FaStar />
              </span>
              {/* <span>{`${reviews.length} (${reviews.length})`}</span> */}
              <span>LOLOLOL</span>

            </span>
          </p>
          <p className="pt-2 text-sm">{editedDesc}</p>
        </div>
      </div>
      {false &&
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
      </div>}
    </div>
  );
}
