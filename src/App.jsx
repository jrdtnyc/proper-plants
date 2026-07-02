import { PLANTLIST } from "./data";
import { useState } from "react";
import Plants from "./Plants";
import Cart from "./Cart";

export default function App() {
  const [plants, setPlants] = useState(PLANTLIST);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    const itemExists = cart.find((item) => {
      return item.id === plant.id;
    });
    if (itemExists) {
      const mappedCart = cart.map((item) => {
        return item.id === plant.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
      setCart(mappedCart);
    } else {
      const item = { ...plant, quantity: 1 };
      setCart([...cart, item]);
    }
  };

  const reduceCartItemQuantity = (plant) => {
    const mappedCart = cart.map((item) => {
      return item.id === plant.id
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });
    const filteredCart = mappedCart.filter((item) => {
      return item.quantity > 0;
    });
    setCart(filteredCart);
  };

  return (
    <>
      <h1>Proper plants</h1>
      <Plants
        plants={plants}
        setSelectedPlant={setSelectedPlant}
        addToCart={addToCart}
      />
      <Cart
        cart={cart}
        addToCart={addToCart}
        reduceCartItemQuantity={reduceCartItemQuantity}
      />
    </>
  );
}
