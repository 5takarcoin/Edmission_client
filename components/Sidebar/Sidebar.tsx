"use client";

import { useEffect, useState } from "react";
import SideBarCheckboxGroup from "./SidebarCheckboxGroup";
import SidebarDropdown from "./SidebarDropdown";
import SidebarSlider from "./SidebarSlider";
import { CheckboxState } from "@/types/CheckBoxTypes";
import { IoHelpCircle } from "react-icons/io5";
import { University } from "@/types/UniversityTypes";

export default function Sidebar({
  setter,
}: {
  setter: React.Dispatch<React.SetStateAction<University[]>>;
}) {
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

  const [sidebarType, setSidebarType] = useState("");
  const [sidebarGenre, setSidebarGenre] = useState("");
  const [sidebarExamSys, setSidebarExamSys] = useState("");
  const [sidebarCampusSet, setSidebarCampusSet] = useState("");

  const handleSubmit = async () => {
    let filterAbout = {};
    let campus_info = {};
    let admission_details = {};
    if (sidebarType) filterAbout = { ...filterAbout, unitype: sidebarType };
    if (sidebarGenre) filterAbout = { ...filterAbout, unigenre: sidebarGenre };
    if (sidebarExamSys) campus_info = { examsystem: sidebarExamSys };
    if (sidebarCampusSet) admission_details = { campus: sidebarCampusSet };

    const filter = {
      about: { ...filterAbout },
      campus_info,
      admission_details,
    };

    const url = process.env.NEXT_PUBLIC_API + "api/unis/filter";
    const response = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filter),
    });
    const theUnis = await response.json();
    setter(theUnis);
  };

  const handleReset = async () => {

    setSidebarType("")
    setSidebarGenre("")
    setSidebarExamSys("")
    setSidebarCampusSet("")

    // const filter = {};

    // const url = "http://localhost:5050/api/unis/filter";
    // const response = await fetch(url, {
    //   method: "POST",
    //   credentials: "include",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(filter),
    // });
    // const theUnis = await response.json();
    // setter(theUnis);
  };

  useEffect(() => {
    handleSubmit();
  }, [sidebarType, sidebarGenre, sidebarExamSys, sidebarCampusSet])

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
        <div className="bg-ed-sec text- border border-gray-300 rounded shadow">
          <button
            className="block w-full px-4 py-2 text-left hover:bg-ed-prim hover:text-white"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        <div>
          {/* <button
            className="block w-full px-4 py-2 text-left hover:bg-ed-prim hover:text-white"
            onClick={handleSubmit}
          >
            Filter
          </button> */}
        </div>
        {/* ________________________ */}
        <SidebarDropdown
          name={"University Type"}
          options={["Public", "Private", "National"]}
          selected={sidebarType}
          setSelected={setSidebarType}
        />
        <SidebarDropdown
          name={"University Genre"}
          options={["Engineering", "Medical", "General"]}
          selected={sidebarGenre}
          setSelected={setSidebarGenre}
        />
        <hr className="w-[60%] mx-auto" />
        <SidebarDropdown
          name={"Exam System"}
          options={["No Exams", "Autonomous"]}
          selected={sidebarExamSys}
          setSelected={setSidebarExamSys}
        />
        <SideBarCheckboxGroup
          checkboxes={selectivityCheckboxes}
          setCheckboxes={setSelectivityCheckboxes}
        >
          <div className="flex items-center gap-1 pt-4 pb-2">
            <p className="text-md font-semibold">Selectivity</p>
            <p className="text-xl">
              <IoHelpCircle />
            </p>
          </div>
        </SideBarCheckboxGroup>
        npm run e
        <SideBarCheckboxGroup
          checkboxes={quotaCheckboxes}
          setCheckboxes={setQuotaCheckboxes}
        >
          <p className="text-md items-center font-semibold">Quota</p>
        </SideBarCheckboxGroup>
        <div className="w-[7C0%] m-auto py-4">
          <p className="h-[2px] bg-ed-sec"></p>
        </div>
        <SideBarCheckboxGroup
          checkboxes={programsCheckboxes}
          setCheckboxes={setProgramsCheckboxes}
        />
        <div className="w-[7C0%] m-auto py-4">
          <p className="h-[2px] bg-ed-sec"></p>
        </div>
        <SidebarSlider min={4} minText="8" max={8} maxText="haha" />
        <SideBarCheckboxGroup
          checkboxes={scholarshipCheckboxes}
          setCheckboxes={setScholarshipCheckboxes}
        />
        <div className="w-[7C0%] m-auto py-4">
          <p className="h-[2px] bg-ed-sec"></p>
        </div>
        <SideBarCheckboxGroup
          checkboxes={housingCheckboxes}
          setCheckboxes={setHousingCheckboxes}
        />
        <SidebarDropdown
          name={"Campus Setting"}
          options={["Any", "Urban", "Rural"]}
          selected={sidebarCampusSet}
          setSelected={setSidebarCampusSet}
        />
        {/* <SidebarSlider min={1} minText="8" max={10} maxText="haha" /> */}
        {/* <SidebarSlider min={4} minText="8" max={8} maxText="haha" /> */}
      </div>
    </div>
  );
}
