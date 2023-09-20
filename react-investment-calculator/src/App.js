import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Input } from './components/Input/Input';
import { Output } from './components/Output/Output';



function App() {

  const [payment, setPayment] = useState('')
  const [date, setDate] = useState('')

  const fetchValues = (first, second) => {
    setPayment(current => [...current, first])
    setDate(current => [...current, second])

  }

  return (
    <div className="App">
      <Header></Header>
      <Input onFetchValues={fetchValues}></Input>
      <Output onDates={date} onPayments={payment}></Output>
      <Footer></Footer>
    </div>
  );
}

export default App;
