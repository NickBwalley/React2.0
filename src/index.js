import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
    alt=""
  ></img>
);

const Title = () => <h1>I love you to the moon and back</h1>;
const Author = () => <h4>Amelia Hepworth</h4>;
// const App2 = () => {
//   return React.createElement("h1", {}, React.createElement('h1', {}, "hello world");
// };

ReactDOM.render(<BookList />, document.getElementById('root'));
