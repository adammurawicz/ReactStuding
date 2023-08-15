import './App.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';

function App() {
  return (
    <div className="App">
      <Header 
        title='To do list in React'
        text="Don't forget about your duties"/>
      <Main/>
      <Footer></Footer>
    </div>
  );
}

export default App;
