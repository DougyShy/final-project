import { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_BOOK_TO_CART } from '../utils/mutations';

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
  if (!book) {
    return <h3>No Book Found</h3>;
  }

  const [hovered, setHovered] = useState(false);

  const [addBookToCart, { data }] = useMutation(ADD_BOOK_TO_CART);
  const bookID = book._id;

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      if (Auth.loggedIn) {
        const username = Auth.getProfile().data.username;
        const { data } = await addBookToCart({
          variables: { username, bookID },
        });
        alert("Book added to cart. *** Page reset currently necessary ***");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
      <Card
        className="hover-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
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
        </CardContent>
      </Card>
  )
  
};

export default BookCard;