import Plant from "./Plant";

const Plants = ({ plants, setSelectedPlant, addToCart }) => {
  const handleClick = (plant) => {
    setSelectedPlant(plant);
  };
  return (
    <div>
      <h2>Plants</h2>
      <ul className="plantName">
        {plants.map((plant) => {
          return (
            <div key={plant.id}>
              <Plant
                plant={plant}
                setSelectedPlant={setSelectedPlant}
                addToCart={addToCart}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Plants;
