//This is the item in the cart - This is referenced by cart.jsx

const CartItem = ({ item, addToCart, reduceCartItemQuantity }) => {
  return (
    <div>
      <h1>{item.image}</h1>
      <h5>{item.name}</h5>
      <p>
        Quantity:{" "}
        <button
          onClick={() => {
            reduceCartItemQuantity(item);
          }}
        >
          -
        </button>{" "}
        {item.quantity}{" "}
        <button
          onClick={() => {
            addToCart(item);
          }}
        >
          +
        </button>
      </p>
      <hr />
    </div>
  );
};

export default CartItem;
