import { useState } from 'react';

import './bookCardStyle.css'

import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from 'semantic-ui-react'

const BookCard = ( {book} ) => {
  console.log(book);
  if (!book) {
    return <h3>No Book Found</h3>;
  }

  const [hovered, setHovered] = useState(false);

  return (
      <Card
        className="hover-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >  
        <div className="image-container">
          <Image src={book.img_URL} wrapped ui={false} />
            {hovered && (
              <div className="overlay">
                <div className="plus-sign">+</div>
              </div>
            )}
        </div>
        <CardContent>
          <CardHeader>{book.title}</CardHeader>
          <CardMeta>Author: {book.author} </CardMeta>
          <CardMeta>Year: {book.year} </CardMeta>
          <CardDescription>
            Rating: {book.rating} / 5 stars
          </CardDescription>
        </CardContent>
        <CardContent extra>
          <a cursor='crosshair'>
            <Icon name='dollar sign'/>
              {book.price}
          </a>
          <div>HELLO</div>
        </CardContent>
      </Card>
  )
  
};

export default BookCard;