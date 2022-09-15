import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
    </section>
  );
};

const author = 'Amelia Hepworth';
const Book = () => {
  const title = 'I love you to the moon and back';

  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
        alt=""
      ></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* <p>{let x = 6}</p> */}
    </article>
  );
};

// const App2 = () => {
//   return React.createElement("h1", {}, React.createElement('h1', {}, "hello world");
// };
// style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}
ReactDOM.render(<BookList />, document.getElementById('root'));
