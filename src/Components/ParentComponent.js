import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [count, setCount] = useState(0);


// with dependency array
  const handleClick = useCallback(() => {
    console.log('Button clicked');
    setCount((prevCount)=> prevCount+1);
  }, [count]);

  console.log('ParentComponent rendering');

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default ParentComponent;
