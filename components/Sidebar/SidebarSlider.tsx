import React, { useState } from "react";

const SidebarSlider = ({min, max, minText, maxText}: {min: number, max: number, minText: string, maxText: string}) => {
  const [rangeValue, setRangeValue] = useState(50);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Calculate the new value with the desired step behavior
    const step: number = 10; // You can adjust the step value as needed
    const newValue: number = Math.round(Number(e.target.value) / step) * step;
    setRangeValue(newValue);
  }
  
  return (
    <div className="">
      <p className="pb-4">Something</p>
      <div className="relative mx-1 h-8">
        {/* Range Input */}
        <div className="flex items-center">

        <input
          type="range"
          min="0"
          max="100"
          step="10"
          value={rangeValue}
          onChange={handleRangeChange}
          className="absolute w-full h-full opacity-0 z-10 cursor-pointer"
          />
        <div className="flex items-center">
          {/* Styled Range Track */}

          <div className="absolute w-full h-1 bg-gray-300 rounded-full overflow-hidden">
            {/* Colored Fill */}
            <div
              className="h-full bg-red-500"
              style={{ width: `${rangeValue}%` }}
              />
          </div>

          {/* Thumb Handle */}
          <div
            className="absolute transform -translate-x-1/2 bg-white border-2 border-red-500 w-6 h-6 rounded-full cursor-pointer"
            style={{
              left: `${rangeValue}%`,
            }}
            />
        </div>
            </div>
      </div>
      <div className="text-[10px] -mt-4 flex items-center justify-between">
        <p>4</p>
        <p>8</p>
      </div>
    </div>
  );
};

export default SidebarSlider;
