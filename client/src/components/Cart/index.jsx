import { QUERY_BOOK, QUERY_BOOKS_BY_IDS } from '../utils/queries';
import Auth from '../utils/auth';

import { useQuery } from '@apollo/client';

import {
  ItemMeta,
  ItemImage,
  ItemHeader,
  ItemGroup,
  ItemExtra,
  ItemDescription,
  ItemContent,
  Button,
  Icon,
  Image,
  Item,
  Label,
} from 'semantic-ui-react'
import BookCard from '../BookCard';

const Cart = ( {cart} ) => {

  const booksInCart = [];
  let username = '';

  if (Auth.loggedIn()) {
    username = Auth.getProfile().data.username;
  } else {
    return (
      <div>
        <h1>Cart</h1>
        <div>Log in to start cart</div>
      </div>
    )
  }

  console.log("CART HERE:" + cart);
  if(cart) {
    cart.map((id) => {
      const { loading, data } = useQuery(QUERY_BOOK, {
        variables: { id }
      });
      if(data) {
        console.log("PRINTING DATA HERE TO PUSH:" + data);
        booksInCart.push(data);
      }
    });
  };    
 
  console.log("BOOKS IN CART LENGTH:" + booksInCart.length);
  console.log("BOOKS IN CART:" + booksInCart.length);
  console.log(booksInCart.length);
    
    if (booksInCart.length) { 
      console.log("BOOKS IN CART RIGHT BEFORE:" + booksInCart); 
      return (
        <div>
          <ItemGroup divided>
          {booksInCart.length > 0 &&
            booksInCart.map((book) => (
              <Item>
                <ItemImage src={book.book.img_URL} size='mini'/>

                <ItemContent>
                  <ItemHeader as='a'>{book.book.title}</ItemHeader>
                  <ItemDescription>{book.book.author}</ItemDescription>
                  <ItemExtra>$ {book.book.price}</ItemExtra>
                  <ItemExtra>
                    <Button floated='right' color='red'>
                      Remove Item
                      <Icon name='right chevron' />
                    </Button>
                  </ItemExtra>
                </ItemContent>
              </Item>
            ))}
          </ItemGroup>
        </div>

      );
    }
  };

export default Cart;