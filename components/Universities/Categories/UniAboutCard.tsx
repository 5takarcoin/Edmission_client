import { AboutUni } from "@/types/CategoryTypes";
import UniCatCard from "./UniCatCard";

import React from "react";
import { CiGlobe } from "react-icons/ci";
import { GoLocation } from "react-icons/go";
import { IoSchoolOutline } from "react-icons/io5";
import { RiCoinLine, RiSchoolLine } from "react-icons/ri";
import { TbCurrencyTaka, TbExternalLink } from "react-icons/tb";

function UniAboutCard({aboutUni}: {aboutUni: AboutUni}) {
  return (
    <div className="min-w-[48%]">
      <UniCatCard title="About">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <CiGlobe />
            <p>{aboutUni.link}</p>
            <TbExternalLink />
          </div>
          <div className="flex gap-2 items-center">
            <GoLocation />
            <p>{aboutUni.location}</p>
            <TbExternalLink />
          </div>
          <div className="flex gap-2 items-center">
          <RiSchoolLine />
          <p>{aboutUni.type}</p>
          </div>
          <div className="flex gap-2 items-center">
            <IoSchoolOutline />
            <p>{aboutUni.genre}</p>
          </div>
          <div className="flex gap-2 items-center">
            <RiCoinLine />
            <p>{aboutUni.credit} Credit</p>
          </div>
          <div className="flex gap-2 items-center">
            <TbCurrencyTaka />
          <p>{aboutUni.fees} BDT<span>(Per Year)</span></p>
          </div>
        </div>
      </UniCatCard>
    </div>
  );
}

export default UniAboutCard;
