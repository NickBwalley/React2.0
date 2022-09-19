import React from 'react';

function App() {
  let title = 'Random Title';
  const clickHandler = () => {
    title = 'hello people!';
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={clickHandler}>
        Click me!
      </button>
    </React.Fragment>
  );
}

export default App;
