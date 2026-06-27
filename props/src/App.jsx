import FoodItems from "./components/FoodItems";
import "./App.css";
import ErrorMessage from "./components/Errormsg";

function App() {
  // let foodItems = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];
  let foodItems = [];
  return (
    <>
      <FoodItems items={foodItems} />
      <ErrorMessage items={foodItems} />
    </>
  );
}

export default App;
