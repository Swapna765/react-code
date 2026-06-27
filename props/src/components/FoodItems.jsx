import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <>
      <h1>Food Items</h1>
      <ul className="list-group">
        {items.map((item) => (
          <Item key={item} foodItems={item} />
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
