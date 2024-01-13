import React, { useState } from 'react';

interface SliderProps {
  initialValue?: number;
}

const SidebarSlider: React.FC<SliderProps> = ({ initialValue = 50 }) => {
  const [value, setValue] = useState(initialValue);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <label htmlFor="slider">Slider Value: {value}</label>
      <input
        type="range"
        id="slider"
        name="slider"
        min="0"
        max="100"
        step="1"
        value={value}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default SidebarSlider;
