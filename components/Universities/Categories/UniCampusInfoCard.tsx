import { CampusUni } from "@/types/CategoryTypes";
import UniCatCard from "./UniCatCard";

import React from "react";
import { CiCalendar } from "react-icons/ci";
import { TbChartLine, TbCurrencyTaka } from "react-icons/tb";

function UniCampusInfo({campusInfo}: {campusInfo: CampusUni}) {
  return (
    <div className="min-w-[48%]">
      <UniCatCard title="Campus Info">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <CiCalendar />
            <p><span className="font-semibold">Campus Setting: </span>
              {campusInfo.setting} Credit
              </p>
          </div>
          <div className="flex gap-2 items-center">
            <TbCurrencyTaka />
            <p><span className="font-semibold">Permanent Campus: </span>
              {campusInfo.permanent} BDT
              </p>
          </div>
          <div className="flex gap-2 items-center">
            <TbChartLine />
            <p><span className="font-semibold">Students' Housing Availability: </span>
              {campusInfo.housing}
              </p>
          </div>
        </div>
      </UniCatCard>
    </div>
  );
}

export default UniCampusInfo;
