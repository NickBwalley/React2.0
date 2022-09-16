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
    img: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51e1S2nD9IL._AC_UL320_.jpg',
    title: 'the Road to React',
    author: 'Robin Wieruch',
  },

  {
    img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/91HHxxtA1wL._AC_UL116_SR116,116_.jpg',
    title: 'The wonderful Things You Will Be!',
    author: 'Emily Winfield Martin',
  },
];

const names = ['John', 'Solo', 'Nick'];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(newNames);
const BookList = () => {
  return <section className="booklist">{newNames}</section>;
};

const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
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
