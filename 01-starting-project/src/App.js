import React from 'react';
import './index.css';
import { Input } from './components/Input/Input';


function App() {

  const users = [{
    name: 'Stefan',
    age: 55},
  {name: 'Wiesław',
    age: 63}
]

  return (
    <div className='app'>
      <Input></Input>
    </div>
  );
}

export default App;
