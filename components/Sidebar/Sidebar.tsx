"use client";

import SideBarCheckboxGroup from "./SidebarCheckboxGroup";
import SidebarDropdown from "./SidebarDropdown";
import SidebarSlider from "./SidebarSlider";

export default function Sidebar() {
  return (
    <div>
      <div>

        {/* <SearchAndLocation /> */}
        <input type="text" placeholder="searchbar" />
        <hr />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          placeholder="location"
          id="location"
          name="location"
        />
        {/* ________________________ */}
        
        <SidebarDropdown
          name={"University Type"}
          options={["public/private/national", "public", "private", "national"]}
        />
        <SidebarDropdown
          name={"University Genre"}
          options={["eng/medi/gen", "eng", "medi", "gen"]}
        />

        <hr />
        <SidebarDropdown
          name={"Exam System"}
          options={["no/auto/gs", "no", "auto", "gs"]}
        />

        <SideBarCheckboxGroup />
        <SideBarCheckboxGroup />
        <hr />
        <SideBarCheckboxGroup />
        <hr />
        <SidebarSlider />

        <SideBarCheckboxGroup />
        <hr />

        <SideBarCheckboxGroup />

        <SidebarDropdown
          name={"Campus Setting"}
          options={["urban/rural/sub", "urban", "rural", "sub"]}
        />

        <SidebarSlider />
        <SidebarSlider />
      </div>
    </div>
  );
}
