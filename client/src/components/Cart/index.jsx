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
  console.log("CART:" + cart);
  if (!cart) {
    return <h3>Nothing in cart</h3>
  }
    
  return (
    <div>
      <div>
        <h1>Shopping Cart</h1>        
      </div>
      <ItemGroup relaxed>
      {cart &&
        cart.map((currentItem) => (
          <div key={currentItem._id}>
            Hello World
          </div>
        ))} 
      </ItemGroup>
    </div>

  );

};

export default Cart;