import { Custom } from "@/types/CategoryTypes";
import UniCatCard from "./UniCatCard";

import React from "react";
import { GoInfo } from "react-icons/go";

function UniCustomCard({custom, title}: {custom: Custom[], title: string}) {
  return (
    <div className="min-w-[48%]">
      <UniCatCard title={title}>
        <div className="flex flex-col gap-2">
            {custom.map((c, i) => {
                return (

          <div key={"cuscus" + i} className="flex gap-2 items-center">
            <GoInfo />
            <p><span className="font-semibold">{c.title}: </span>
              {c.desc}
              </p>
          </div>
                )
            })}
        </div>
      </UniCatCard>
    </div>
  );
}

export default UniCustomCard;
