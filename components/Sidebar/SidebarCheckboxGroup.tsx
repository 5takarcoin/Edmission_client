import { useState } from "react";
import SingleCheckBox from "./SingleCheckBox";
import { CheckboxState } from "@/types/CheckBoxTypes";


const SideBarCheckboxGroup = ({checkboxes, setCheckboxes, children}: {checkboxes: CheckboxState[], setCheckboxes: React.Dispatch<React.SetStateAction<CheckboxState[]>>, children?: React.ReactNode }) => {
  
  const handleCheckboxChange = (i: number) => {
    const temp = [...checkboxes];
    temp[i].option = !temp[i].option;
    setCheckboxes(temp);
  };

  return (
    <div>
      <label className="text-md">{children}</label>
      {checkboxes.map((checkbox, i) => {
        return (
          <div key={i} className="py-2">

          <SingleCheckBox item={checkbox.name}/>
          </div>
        );
      })}

      <p>
        {checkboxes.map((box, i) => box.option? <span key={i}>{box.name}</span> : <span key={i}></span>)}
      </p>
    </div>
  );
};

export default SideBarCheckboxGroup;
