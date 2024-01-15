"use client";

import SideBarCheckboxGroup from "./SidebarCheckboxGroup";
import SidebarDropdown from "./SidebarDropdown";
import SidebarSlider from "./SidebarSlider";

export default function Sidebar() {
  return (
    <div className="max-w-96 p-6 bg-red-200 border-2 border-solid border-blue-400 rounded-lg">
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
          <div className="absolute right-4  "><img src="./magni.svg" alt="" /></div>
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
          options={["public", "private", "national"]}
        />
        <SidebarDropdown
          name={"University Genre"}
          options={["eng", "medi", "gen"]}
        />

        <hr className="w-[60%] mx-auto" />
        <SidebarDropdown name={"Exam System"} options={["no", "auto", "gs"]} />

        <SideBarCheckboxGroup />
        <SideBarCheckboxGroup />
        <hr className="w-[60%] m-auto py-4" />
        <SideBarCheckboxGroup />
        <hr className="w-[60%] m-auto py-4" />
        <SidebarSlider min={4} max={8} />

        <SideBarCheckboxGroup />
        <hr className="w-[60%] m-auto py-4" />

        <SideBarCheckboxGroup />

        <SidebarDropdown
          name={"Campus Setting"}
          options={["urban/rural/sub", "urban", "rural", "sub"]}
        />

        <SidebarSlider min={1} max={10}/>
        <SidebarSlider min={4} max={8}/>
      </div>
    </div>
  );
}
