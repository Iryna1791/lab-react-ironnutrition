import { Divider, Input } from 'antd';

import { useState } from "react";

function AddFoodForm(props) {
const [ name, setName ] = useState('');
const [ image, setImage ] = useState('');
const [ calories, setCalories ] = useState('');
const [ servings, setServings ] = useState('');

const handleNameInput = e => setName(e.target.value);
const handleImageInput = e => setImage(e.target.value);
const handleCaloriesInput = e => setCalories(e.target.value);
const handleServingsInput = e => setServings(e.target.value);

const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {name, image, calories, servings};
    setName(''); setImage(''); setCalories(''); setServings('');
    props.addFood(newFood)
}
  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameInput} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageInput} />

      <label>Calories</label>
      <Input value={calories} type="text" onChange={handleCaloriesInput} />

      <label>Servings</label>
      <Input value={servings} type="text" onChange={handleServingsInput} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;