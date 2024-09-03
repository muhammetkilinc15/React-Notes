import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [midterm1, setMidterm1] = useState(0);
  const [midterm2, setMidterm2] = useState(0);

  const findAverage = () => {
    debugger
    const totalResult = sum() / 2.0;
    printScreen(totalResult);
  };

  const sum = () => {
    debugger
    const total = midterm1 + midterm2;
    return total;
  };

  const printScreen = (result) => {
    debugger
    console.log("Average : " + result);
  };

  return (
    <>
      <div>
        <input type="number" value={midterm1} onChange={(e) => setMidterm1(Number(e.target.value))} />
      </div>
      <div>
        <input type="number" value={midterm2} onChange={(e) => setMidterm2(Number(e.target.value))} />
      </div>
      <div>
        <button onClick={findAverage}>Ortalama bul</button>
      </div>
    </>
  );
}

export default App
