import { Link } from 'react-router-dom';

const BookList = (books) => {
  console.log(books);
  if (!books.length) {
    return <h3>No Books Yet</h3>;
  }

  return (
    <div>BOOK CARDS HERE?</div>
  )
};

/*const BookList = ({ books, title }) => {
  if (!books.length) {
    return <h3>No Books Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {books &&
        books.map((book) => (
          <div key={book._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {book._id} HELLO
            </h4>
          </div>
        ))}
    </div>
  );
};*/

export default BookList;