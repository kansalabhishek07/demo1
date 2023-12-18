import React from 'react';

const ChildComponent = React.memo(({ onClick }) => {
  console.log('ChildComponent rendering');
  return <button onClick={onClick}>Click me</button>;
});

export default ChildComponent;
