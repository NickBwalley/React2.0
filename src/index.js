import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
  title: 'I love you to the moon and back',
  author: 'Amelia Hepworth',
};

const secondBook = {
  img: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51e1S2nD9IL._AC_UL320_.jpg',
  title: 'the Road to React',
  author: 'Robin Wieruch',
};

const thirdBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/91HHxxtA1wL._AC_UL116_SR116,116_.jpg',
  title: 'The wonderful Things You Will Be!',
  author: 'Emily Winfield Martin',
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />

      <Book
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
      />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

// const App2 = () => {
//   return React.createElement("h1", {}, React.createElement('h1', {}, "hello world");
// };
// style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}
ReactDOM.render(<BookList />, document.getElementById('root'));
