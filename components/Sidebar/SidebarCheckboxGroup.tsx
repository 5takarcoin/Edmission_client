import { useState } from "react";
import SingleCheckBox from "./SingleCheckBox";

type CheckboxState = {
  name: string;
  option: boolean;
};

const SideBarCheckboxGroup: React.FC = () => {
  const [checkboxes, setCheckboxes] = useState<CheckboxState[]>([
    { name: "coolname1", option: false },
    { name: "coolname2", option: false },
    { name: "coolname3", option: false },
  ]);

  const handleCheckboxChange = (i: number) => {
    const temp = [...checkboxes];
    temp[i].option = !temp[i].option;
    setCheckboxes(temp);
  };

  return (
    <div>
      <label className="text-md">Choose options:</label>
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
