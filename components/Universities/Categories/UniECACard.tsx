import { ECA } from "@/types/CategoryTypes";
import UniCatCard from "./UniCatCard";

import React from "react";
import { MdOutlineGroups } from "react-icons/md";

function UniECACard({ecaopp}: {ecaopp: ECA}) {
  return (
    <div className="min-w-[48%]">
      <UniCatCard title="ECA Opportunities">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <MdOutlineGroups />
            <p><span className="font-semibold">Total Clubs: </span>
              {ecaopp.club} Credit
              </p>
          </div>
          <div className="flex gap-2 items-center">
            <MdOutlineGroups />
            <p><span className="font-semibold">Clubs: </span>
            {ecaopp.clubs.map((c, i) => {
                return <span key={"club"+i}>
                {c}{i !== ecaopp.clubs.length - 1 && ", "}
                </span>
            })}
              
              </p>
          </div>
        </div>
      </UniCatCard>
    </div>
  );
}

export default UniECACard;
