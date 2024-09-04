
import { useEffect } from 'react';
import './App.css';
import Card from './components/Cards/card';
import Header from './components/Header/header';
import { useTelegram } from './hooks/useTelegram';

  function App() {
    const {onToggleButton, tg} = useTelegram()
    useEffect(()=> {
      tg.ready()
    }, [])
    
  

  return (
    <div className="App">
      <Header/>
      <Card/>
      <button onClick ={onToggleButton}>toggle</button>
    </div>
  );
}


export default App;
