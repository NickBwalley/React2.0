import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('Hello World!');
  const handleClick = () => {
    if (text === 'Hello World!') {
      setText('React for life!!!');
    } else {
      setText('Hello World!');
    }
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="buttton" className="btn" onClick={handleClick}>
        Change title!
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
