import { useState } from 'react';
import './App.css';

function App() {
  const [str, setStr] = useState("Hi");
  const [color, setColor] = useState("yellow");
  const [btnName, setBtnName] = useState("Change");
  function Uichange() {
    setStr("Awsome");
    setColor("green");
    setBtnName("I am changed after clicking");
  }
  return (
    <div className="App">
      <div style={{height: '300px', width: '300px', border: '2px solid', textAlign: 'center',display: 'flex',alignItems: 'center', justifyContent: 'center',fontSize: '1.75rem', backgroundColor: color}}>
        <span>{str}</span>
      </div>
      <button type='button' onClick={Uichange}>{btnName}</button>
    </div>
  );
}

export default App;