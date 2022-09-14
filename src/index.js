import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h4>Hello World</h4>
      <input type="text" name="" id="" />
    </div>
  );
};

// const App2 = () => {
//   return React.createElement("h1", {}, React.createElement('h1', {}, "hello world");
// };

ReactDOM.render(<App />, document.getElementById('root'));
