//This returns cart item(s) it will map cart and return an instance of CartItem for each item in cart

import CartItem from "./CartItem";

const Cart = ({ cart, addToCart, reduceCartItemQuantity }) => {
  return (
    <div>
      <h3>Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => {
            return (
              <CartItem
                item={item}
                key={item.id}
                addToCart={addToCart}
                reduceCartItemQuantity={reduceCartItemQuantity}
              />
            );
          })}
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Cart;
