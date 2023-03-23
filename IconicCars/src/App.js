import { useState } from 'react'
import s from './App.module.css';
import MenuList from './MenuList/MenuList';
import DisplayCar from './DisplayCar/DisplayCar';
import Footer from './Footer/Footer';

function App() {

const [currentCar, setCurrentCar] = useState('')
const [currentYears, setCurrentYears] = useState('')
const [currentUrl, setUrl] = useState('')
const [description, setDescription] = useState('')

const menuClicked = (model, years, description, url) => {
  setCurrentCar(model)
  setCurrentYears(years)
  setDescription(description)
  setUrl(url)
}

const date = new Date
const year = date.getFullYear()


  return (
    <div className={s.app}>
      <h1>Iconic Polish Cars App</h1>
      <div className={s.wrapper}>
          <MenuList action={menuClicked} car={currentCar}></MenuList>
          <DisplayCar car={currentCar} years={currentYears} description={description} url={currentUrl}></DisplayCar>
      </div>
      <Footer year={year}></Footer>
    </div>
  );
}

export default App;
