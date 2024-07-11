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
        booksInCart.push(data);
      });
    };  
  
  //console.log("DATA HERE:" + data);
  //booksInCart.push(data);
 
  console.log("BOOKS IN CART LENGTH:" + booksInCart.length);
  //booksInCart.map((book) => {console.log("BOOK HERE:" + book.book.title)});

  if (booksInCart !== undefined) {
    return (
      <div>
        <ItemGroup divided>
        {booksInCart &&
          booksInCart.map((book) => (
            <Item>
              <ItemImage src='https://react.semantic-ui.com/images/wireframe/image.png' size='tiny'/>

              <ItemContent>
                <ItemHeader as='a'>BOOK STUFF HERE</ItemHeader>
                <ItemDescription>ITEM STUFF</ItemDescription>
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