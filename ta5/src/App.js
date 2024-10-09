import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(true);

  const changeVisibility = ()=>{
    setVisible(!visible);
  }

  return (
    <div className="App">
      <header className="App-header">
        {visible ? <p>
          Texto magico
        </p> : null}
        <button  onClick={changeVisibility}>
          Desaparecer/Aparecer texto
        </button>
      </header>
    </div>
  );
}

export default App;
