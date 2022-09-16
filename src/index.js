import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';

const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'I love you to the moon and back',
    author: 'Amelia Hepworth',
  },

  {
    img: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71aLultW5EL._AC_UY218_.jpg',
    title: 'Our Class is a Family',
    author: 'Shannon Olsen',
  },

  {
    img: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71gGPRRlyTL._AC_UY218_.jpg',
    title: 'The Vanishing Half: A Novel',
    author: 'Emily Winfield MartinBrit Bennett',
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book}></Book>;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props.book;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

// const App2 = () => {
//   return React.createElement("h1", {}, React.createElement('h1', {}, "hello world");
// };
// style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}
ReactDOM.render(<BookList />, document.getElementById('root'));
