import { QUERY_BOOK, QUERY_BOOKS_BY_IDS,  } from '../utils/queries';
import { REMOVE_BOOK_FROM_CART, ADD_BOOK_TO_CART } from '../utils/mutations';
import { useMutation } from '@apollo/client';
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

const Cart = ( {cart} ) => {

  if (!cart) {
    return <h3>No Cart Found</h3>;
  }

  const booksInCart = [];
  let cartTotal = 0.00;
  const [removeBookFromCart, { data }] = useMutation(REMOVE_BOOK_FROM_CART);
  let username = '';

  if (Auth.loggedIn()) {
    username = Auth.getProfile().data.username;
  } else {
    return (
      <div>
        <h1>Cart</h1>
        <div ><a href="/login">Log in</a> or <a href="/signup"> Sign Up </a>to view cart</div>
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

  const handleClick = async (event, bookID) => {
    event.preventDefault();
    console.log("TRYING TO REMOVE BOOK HERE");
    try {
      if (Auth.loggedIn) {
        const username = Auth.getProfile().data.username;
      }
      const { data } = await removeBookFromCart({
        variables: { username, bookID },
      });
      window.location.reload();
    } catch (err) {
        console.log(err);
    }
  }
    
  const totalPrice = booksInCart.reduce((total, book) => total + book.book.price, 0)

    if (booksInCart.length) { 
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
                    <Button key={book.book._id}floated='right' color='red' onClick={(event) => handleClick(event, book.book._id)}>
                      Remove Item
                      <Icon name='right chevron' />
                    </Button>
                  </ItemExtra>
                </ItemContent>
                
              </Item>
            ))}
          </ItemGroup>
          <div>Current Cart Total: $ {totalPrice.toFixed(2)}</div>
        </div>

      );
    }
  };

export default Cart;