import './App.css';
import foods from './foods.json';
import { useState } from "react";
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';


function App() {

  const [listFoods, setFoods] = useState(foods);
  const addFood = (newFood) => {
  const addNewFood = [...foods, newFood];
    setFoods(addNewFood);
  }

  
  return <div className="App">

  <AddFoodForm foods={foods} addFood={addFood}/>

  <h1>Food List</h1>
  {listFoods.map((food) => {
    return (
    <FoodBox food = {food}/>
    );
  })}

  </div>;
}
export default App;
