import React from 'react';

const Book = (props) => {
  const { img, title, author } = props;

  const clickHandler = (e) => {
    console.log(e.target);
    alert('Hello World');
  };

  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Buy Me Coffee!
      </button>
      <button
        type="button"
        onClick={() => {
          complexExample(author);
        }}
      >
        Complex
      </button>
    </article>
  );
};

export default Book;
