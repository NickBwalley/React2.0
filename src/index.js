import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';
// named export
import { books } from './Books';
//default export
import Book from './Book';

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
};

// const App2 = () => {
//   return React.createElement("h1", {}, React.createElement('h1', {}, "hello world");
// };
// style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}
ReactDOM.render(<BookList />, document.getElementById('root'));
