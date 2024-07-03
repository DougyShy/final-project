
import BookCard from "../BookCard";

const BookList = ( {books} ) => {
  console.log(books);
  if (!books.length) {
    return <h3>No Books Yet</h3>;
  }

  return (
    <div>
      {books &&
        books.map((currentBook) => (
          <div key={currentBook._id}>
            <div>
              <BookCard 
                book={currentBook}
              />
            </div>

          </div>
          
        ))}
        
    </div>

  );

};

export default BookList;