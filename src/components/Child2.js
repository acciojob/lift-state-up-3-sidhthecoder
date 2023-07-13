import React from 'react';

const Child2 = ({onButtonClick}) => {
  const handleClick = () => {
    onButtonClick('Option 2');
  };

  // const isActive = 'Option 2' === selectedOption ? 'active' : '';

  return (
    <div>
      <h1>Child Component 2</h1>
      <button onClick={handleClick}>Option 2</button>
    </div>
  );
};

export default Child2;
