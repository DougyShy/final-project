
import BookCard from "../BookCard";

const BookList = ( {books} ) => {
  console.log(books);
  if (!books.length) {
    return <h3>No Books Yet</h3>;
  }

  return (
    <div>
      {books &&
        books.map((book) => (
          <div key={book._id} className="bookCardClassName">
            {book.title} + {book.author}
            <div>
              HELLO
              <BookCard />
            </div>

          </div>
          
        ))}
        
    </div>

  );

};

export default BookList;