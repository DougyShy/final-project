
import BookCard from "../BookCard";
import { CardGroup, Card } from 'semantic-ui-react'

const BookList = ( {books} ) => {
  console.log(books);
  if (!books.length) {
    return <h3>No Books Yet</h3>;
  }

  return (
    <div>
      <CardGroup itemsPerRow={6}>
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
      </CardGroup>
        
    </div>

  );

};

export default BookList;