import React, { useState } from 'react';

const SidebarDropdown = ({ name, options }: { name:string, options: string[]}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative ">
      <button
        onClick={handleToggleDropdown}
        className="text-start flex items-center justify-between bg-white border w-[100%] border-gray-300 px-4 py-2 rounded focus:outline-none focus:shadow-outline"
      >
        <span className={!selectedOption ? "text-gray-500": ""}>

        {selectedOption || name}
        </span>
        <span>
          <img src="./down_arrow.svg" alt="->" />
        </span>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-2">
          <div className="bg-white border border-gray-300 rounded shadow">
            { options.map((option, i) => {
              return (

                <button
                onClick={() => handleOptionSelect(option)}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                >
              {option}
            </button>
                )
            })}
            
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarDropdown;
