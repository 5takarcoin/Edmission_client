import React, { useState } from 'react';

const CheckBoxField = ({field, isChecked, setIsChecked}: {field: string, isChecked: boolean, setIsChecked: React.Dispatch<React.SetStateAction<boolean>>}) => {

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center">
      <div
        className="w-5 h-5 m-1 border border-gray-400 rounded-sm mr-2 cursor-pointer bg-white"
        onClick={handleCheckboxChange}
      >
        {isChecked && (
          <svg
            className="w-full h-full text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <p className="">{field}</p>
      {/* <input
        type="text"
        placeholder="Type something..."
        className="border border-gray-400 rounded-md p-2 focus:outline-none focus:border-blue-500"
      /> */}
    </div>
  );
};

export default CheckBoxField;
