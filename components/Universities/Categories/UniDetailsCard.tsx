import { DetailsUni } from "@/types/CategoryTypes";
import UniCatCard from "./UniCatCard";

import React from "react";
import { CiCalendar, CiGlobe } from "react-icons/ci";
import { TbCurrencyTaka, TbExternalLink } from "react-icons/tb";
import { PiListChecksLight } from "react-icons/pi";

function UniDetailsCard({detailsUni}: {detailsUni: DetailsUni}) {
  return (
    <div className="min-w-[48%]">
      <UniCatCard title="Application Details">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <CiGlobe />
            <p>{detailsUni.website}</p>
            <TbExternalLink />
          </div>
          <div className="flex gap-2 items-center">
            <CiCalendar />
            <p><span className="font-semibold">Application Deadline: </span>
              {detailsUni.deadline}
              </p>
          </div>
          <div className="flex gap-2 items-center">
            <TbCurrencyTaka />
            <p><span className="font-semibold">Application Fee: </span>
              {detailsUni.fee}
              </p>
          </div>
          <div className="flex gap-2 items-center">
            <PiListChecksLight />
            <p><span className="font-semibold">Requirements: </span>
              {detailsUni.requirements}
              </p>
          </div>
        </div>
      </UniCatCard>
    </div>
  );
}

export default UniDetailsCard;
