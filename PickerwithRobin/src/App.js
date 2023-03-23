import { useState } from 'react';
import s from './App.module.css'
import DisplayDifficulty from './components/DisplayDifficulty/DisplayDifficulty';
import MenuList from './components/MenuList/MenuList';
import MenuListItem from './components/MenuList/MenuList';

function App() {

const [currentDifficulty, setCurrentDifficulty] = useState('')

const onMenuListItemClick = (difficulty) => {
  setCurrentDifficulty(difficulty)
}

  return (
    <div>
      <h1>Select your React difficulty:</h1>
      <div className={s.workspace}>
      <MenuList onItemClick={onMenuListItemClick}
                difficulty={currentDifficulty}
      />
      <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}

export default App;
