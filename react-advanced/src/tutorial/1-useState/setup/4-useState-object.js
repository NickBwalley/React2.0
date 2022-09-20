import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Nick',
    age: 24,
    message: 'I love React coding',
  });
  // you can also create multiple state values for each name, age and message and setUseState for all as you update them
  // but we dicided to use this spreadoperator method to save on time and be more readable....

  const changeMessage = () => {
    setPerson({ ...person, message: 'Coding for life' });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change message
      </button>
    </>
  );
};

export default UseStateObject;
