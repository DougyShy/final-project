import { QUERY_BOOK, QUERY_BOOKS_BY_IDS } from '../utils/queries';

import { useQuery } from '@apollo/client';

import {
  ItemImage,
  ItemHeader,
  ItemGroup,
  ItemExtra,
  ItemDescription,
  ItemContent,
  Button,
  Image,
  Item,
} from 'semantic-ui-react'

const Cart = ( {cart} ) => {
  if (cart === undefined) {
    return <h3>Login to start a cart</h3>
  } 

const booksInCart = [];

//cart.map((id) => {//console.log(id)});

/*const { cartLoading, cartData } = useQuery(QUERY_BOOKS_BY_IDS, {
  variables: { ids: cart }
});*/

const { loading, data } = useQuery(QUERY_BOOK, {
  variables: { id: cart[0] }
});

  if(data) {
    //console.log("DATA HERE:" + data.book.author);
  } else {
    //console.log("NO DATA PRESENT FOR CART");
  }
    
  return (
    <div>
      <div>
        <h1>Shopping Cart {cart.length==0? '(empty)' : '' }</h1>        
      </div>
      <ItemGroup relaxed>
      {cart &&
        cart.map((currentItem) => (
          <div key={currentItem._id}>
            {currentItem}
          </div>
        ))} 
      </ItemGroup>
    </div>

  );

};

export default Cart;