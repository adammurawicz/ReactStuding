import './App.css';
import { Menu } from './components/menu/Menu';
import { foodData } from './components/foodData'
import { useState } from 'react';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';

function App() {

const [pizza, setPizza] = useState('')
const [price, setPrice] = useState('')
const [ingredients, setIngredients] = useState('')
const [allergens, setAllergens] = useState('')
const [url, setUrl] = useState('') 

function chooseMenu (pizza, price, ingredients, allergens, url) {
  setPizza(pizza)
  setPrice(price)
  setIngredients(ingredients)
  setAllergens(allergens)
  setUrl(url)
}

  return (
    <div className="App">
      <Menu data={foodData} checkMenu={chooseMenu} pizza={pizza}/>
      <Header/>
      <Main data={foodData} pizza={pizza} price={price} ingredients={ingredients} allergens={allergens} url={url}/>
      <Footer/>
    </div>
  );
}

export default App;
