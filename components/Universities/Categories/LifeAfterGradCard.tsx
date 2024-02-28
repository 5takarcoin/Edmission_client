import { AfterGrad } from "@/types/CategoryTypes";
import UniCatCard from "./UniCatCard";

import React from "react";
import { CiCalendar } from "react-icons/ci";
import { TbChartLine, TbCurrencyTaka } from "react-icons/tb";

function LifeAfterGradCard({afterGrad}: {afterGrad: AfterGrad}) {
  return (
    <div className="min-w-[48%]">
      <UniCatCard title="Life After Graduation">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <CiCalendar />
            <p><span className="font-semibold">Average Graduation Time: </span>
              {afterGrad.time} Credit
              </p>
          </div>
          <div className="flex gap-2 items-center">
            <TbCurrencyTaka />
            <p><span className="font-semibold">Average Graduate Salary: </span>
              {afterGrad.salary} BDT
              </p>
          </div>
          <div className="flex gap-2 items-center">
            <TbChartLine />
            <p><span className="font-semibold">Employed:Unemployed Ratio = </span>
              {afterGrad.ratio}
              </p>
          </div>
        </div>
      </UniCatCard>
    </div>
  );
}

export default LifeAfterGradCard;
