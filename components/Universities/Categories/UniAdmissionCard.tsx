import { AdmissionUni } from "@/types/CategoryTypes";
import UniCatCard from "./UniCatCard";

import React from "react";
import { FaPercent } from "react-icons/fa6";
import { RiSurveyLine } from "react-icons/ri";
import { PiChartPieSliceLight, PiListChecksLight } from "react-icons/pi";
import { IoSchoolOutline } from "react-icons/io5";
import { TbExternalLink } from "react-icons/tb";

function UniAdmissionCard({ admissionUni }: { admissionUni: AdmissionUni }) {
  return (
    <div className="min-w-[48%]">
      <UniCatCard title="Admission">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <FaPercent />
            <p>
              <span className="font-semibold">Acceptance Rate: </span>
              {admissionUni.acceptance}%
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <RiSurveyLine />
            <p><span className="font-semibold">Exam System: </span>
              {admissionUni.examsys}</p>
          </div>
          <div className="flex gap-2 items-center">
            <PiListChecksLight />
            <p>
            <span className="font-semibold">Selection Procedure: </span>
            </p>
              <p>
                {admissionUni.selection}
                </p>
          </div>
          <div className="flex gap-2 items-center">
            <PiChartPieSliceLight />
            <p>
            <span className="font-semibold">Quota: </span>
              {admissionUni.quota}
            </p>
              <span><TbExternalLink /></span>
          </div>
          <div className="flex gap-2 items-center">
            <IoSchoolOutline />
            <p><span className="font-semibold">Scholarships: </span>
              {admissionUni.scholarship} Credit
              </p>
              <span><TbExternalLink /></span>
          </div>
        </div>
      </UniCatCard>
    </div>
  );
}

export default UniAdmissionCard;
