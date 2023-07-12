import React from 'react';

const Child2 = ({ selectedOption, onButtonClick }) => {
  const handleClick = () => {
    onButtonClick('Option 2');
  };

  const isActive = 'Option 2' === selectedOption ? 'active' : '';

  return (
    <div>
      <h1>Child Component 2</h1>
      <button className={isActive} onClick={handleClick}>
        Option 2
      </button>
    </div>
  );
};

export default Child2;
