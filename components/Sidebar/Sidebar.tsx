"use client";

import { useState } from "react";
import SideBarCheckboxGroup from "./SidebarCheckboxGroup";
import SidebarDropdown from "./SidebarDropdown";
import SidebarSlider from "./SidebarSlider";
import { CheckboxState } from "@/types/CheckBoxTypes";
import { IoHelpCircle } from "react-icons/io5";

export default function Sidebar() {
  const [selectivityCheckboxes, setSelectivityCheckboxes] = useState<
    CheckboxState[]
  >([
    { name: "Extremely Selective", option: false },
    { name: "Very Selective", option: false },
    { name: "Selective", option: false },
    { name: "Not Selective", option: false },
  ]);

  const [quotaCheckboxes, setQuotaCheckboxes] = useState<CheckboxState[]>([
    { name: "Freedom Fighter", option: false },
    { name: "Minority", option: false },
    { name: "Others", option: false },
  ]);

  const [programsCheckboxes, setProgramsCheckboxes] = useState<CheckboxState[]>(
    [
      { name: "Online Programs", option: false },
      { name: "Evening Degree Programs", option: false },
    ]
  );

  const [scholarshipCheckboxes, setScholarshipCheckboxes] = useState<
    CheckboxState[]
  >([{ name: "Schoralships Availability", option: false }]);

  const [housingCheckboxes, setHousingCheckboxes] = useState<CheckboxState[]>([
    { name: "Student's Housing Availability", option: false },
  ]);

  return (
    <div className="max-w-96 p-6 bg-red-100 rounded-md">
      <div className="space-y-4">
        {/* <SearchAndLocation /> */}

        <div className="relative flex items-center justify-center bg-white border border-gray-300 rounded shadow">
          <input
            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            type="text"
            placeholder="Search"
            id="location"
            name="location"
          />
          <div className="absolute right-4  ">
            <img src="./magni.svg" alt="" />
          </div>
        </div>

        <hr className="w-[60%] m-auto" />

        <div className="bg-white border border-gray-300 rounded shadow">
          <input
            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            type="text"
            placeholder="Location"
            id="location"
            name="location"
          />
        </div>
        {/* ________________________ */}

        <SidebarDropdown
          name={"University Type"}
          options={["Public", "Private", "National"]}
        />
        <SidebarDropdown
          name={"University Genre"}
          options={["Engineering", "Medical", "General"]}
        />

        <hr className="w-[60%] mx-auto" />
        <SidebarDropdown
          name={"Exam System"}
          options={["No Exams", "auto", "gs"]}
        />

        <SideBarCheckboxGroup
          checkboxes={selectivityCheckboxes}
          setCheckboxes={setSelectivityCheckboxes}
        >
          <div className="flex items-center gap-1 pt-4 pb-2">
            <p className="text-md font-semibold">
              Selectivity
            </p>
              <p className="text-xl">
                <IoHelpCircle />
              </p>
          </div>
        </SideBarCheckboxGroup>npm run e
        <SideBarCheckboxGroup
          checkboxes={quotaCheckboxes}
          setCheckboxes={setQuotaCheckboxes}
        >
            <p className="text-md items-center font-semibold">
              Quota
            </p>
        </SideBarCheckboxGroup>
        <div className="w-[7C0%] m-auto py-4"><p className="h-[2px] bg-ed-sec"></p></div>
        <SideBarCheckboxGroup
          checkboxes={programsCheckboxes}
          setCheckboxes={setProgramsCheckboxes}
        />
        <div className="w-[7C0%] m-auto py-4"><p className="h-[2px] bg-ed-sec"></p></div>
        <SidebarSlider min={4} minText="8" max={8} maxText="haha" />

        <SideBarCheckboxGroup
          checkboxes={scholarshipCheckboxes}
          setCheckboxes={setScholarshipCheckboxes}
        />
        <div className="w-[7C0%] m-auto py-4"><p className="h-[2px] bg-ed-sec"></p></div>

        <SideBarCheckboxGroup
          checkboxes={housingCheckboxes}
          setCheckboxes={setHousingCheckboxes}
        />

        <SidebarDropdown
          name={"Campus Setting"}
          options={["urban/rural/sub", "urban", "rural", "sub"]}
        />

        <SidebarSlider min={1} minText="8" max={10} maxText="haha" />
        <SidebarSlider min={4} minText="8" max={8} maxText="haha" />
      </div>
    </div>
  );
}
