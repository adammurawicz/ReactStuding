import './App.css';
import s from './App.module.css'
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import { mainCities } from './data'


function App() {

const [key, setKey] = useState('')
const [name, setName] = useState('')
const [firstContent, setFirstContent] = useState('')
const [secondContent, setSecondContent] = useState('')
const [thirdContent, setThirdContent] = useState('')
const [imgOne, setImgOne] = useState('')
const [imgTwo, setImgTwo] = useState('')
const [crest, setCrest] = useState('')

const menuClicked = (key, name, firstContent, secondContent, thirdContent, imgOne, imgTwo, crest) => {
  setKey(key)
  setName(name)
  setFirstContent(firstContent)
  setSecondContent(secondContent)
  setThirdContent(thirdContent)
  setImgOne(imgOne)
  setImgTwo(imgTwo)
  setCrest(crest)
}

const data = new Date
const currentYear = data.getFullYear()

  return (
    <div className={s.App}>
      <Nav menuClicked={menuClicked} name={name}/>
      <Header name={name} imgOne={imgOne}/>
      <Main name={name} 
            firstContent={firstContent} 
            secondContent={secondContent}
            thirdContent={thirdContent}
            imgOne={imgOne}
            imgTwo={imgTwo}
            crest={crest}
            />
      <Footer currentYear={currentYear}/>
    </div>
  );
}

export default App;
