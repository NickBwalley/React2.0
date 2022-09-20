import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Nick',
    age: 24,
    message: 'I love React coding',
  });

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
