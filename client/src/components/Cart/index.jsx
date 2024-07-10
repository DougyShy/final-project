import { QUERY_BOOK } from '../utils/queries';

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
  if (!cart) {
    return <h3>Nothing in cart</h3>
  }

const booksInCart = [];

cart.map((id) => {console.log(id)});

const { loading, data } = useQuery(QUERY_BOOK, {
  variables: {id: cart}
});

  console.log(data);


    
  return (
    <div>
      <div>
        <h1>Shopping Cart</h1>        
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