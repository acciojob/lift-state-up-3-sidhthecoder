import React from 'react';

const Child1 = ({ onButtonClick }) => {
  const handleClick = () => {
    onButtonClick('Option 1');
  };

  // const isActive = 'Option 1' === selectedOption ? 'active' : '';

  return (
    <div>
      <h1>Child Component 1</h1>
      <button onClick={handleClick}>Option 1</button>
    </div>
  );
};

export default Child1;
