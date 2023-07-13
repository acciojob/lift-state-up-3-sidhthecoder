import React, { useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

const ParentComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent">
      <Child1
        // selectedOption={selectedOption}
        onButtonClick={handleButtonClick}
      />
      <Child2
        // selectedOption={selectedOption}
        onButtonClick={handleButtonClick}
      />
      <p>Selected Option:{selectedOption}</p>
    </div>
  );
};

export default ParentComponent;
