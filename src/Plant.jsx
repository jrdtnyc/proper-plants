const Plant = ({ plant, addToCart }) => {
  console.log(plant.image);
  return (
    <li key={plant.id}>
      <p>{plant.image}</p>
      <h4>{plant.name}</h4>
      <button
        onClick={() => {
          addToCart(plant);
        }}
      >
        Add To Cart
      </button>
    </li>
  );
};

export default Plant;
