import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(0)

  useEffect(()=>{
    const timer = ()=>{
      setTimeout(()=>{
        setTime(time + 1)
      }, 1000)
    }

    timer()
  }, [time])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Time:
        </p>
        {time}
      </header>
    </div>
  );
}

export default App;
