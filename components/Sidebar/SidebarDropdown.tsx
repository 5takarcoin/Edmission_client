import React, { useState, ChangeEvent } from 'react';

// interface UniversityTypeSelectProps {
//   options: string[];
//   onChange: (selectedValue: string) => void;
// }

// type DropdownOptions = {
//     name: 
// }


const SidebarDropdown = ({ name, options }: { name:string, options: string[]}) => {

  const [selectedValue, setSelectedValue] = useState(options[0]);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
  };

  return (
    <div>
        <label htmlFor="unitype">{ name }</label>
        <select onChange={handleSelectChange} id="unitype" value={selectedValue}>
          {options.map((option, i) => {
            return(
              <option key={i} value={option}></option>
            )
          })}
        </select>
    </div>
  );
};

export default SidebarDropdown;
